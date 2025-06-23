import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGlobeAsia } from "react-icons/fa";
import "../styles/Prediction.css";
import predictimg from "../assets/predict/predict.png";

export default function Prediction() {
  const [city, setCity] = useState("");
  const [type, setType] = useState("wildfire");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const Spinner = () => (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );

  useEffect(() => {
    if (city.length < 2) {
      setSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      setLoadingSuggestions(true);

      axios
        .get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
          params: { namePrefix: city, limit: 5, sort: "-population" },
          headers: {
            "X-RapidAPI-Key":
              "dba9be0d4amsh70d39561afb2c4cp11cc2fjsna8c69d899882",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        })
        .then((res) => {
          setSuggestions(res.data.data || []);
        })
        .catch(() => {
          setSuggestions([]);
        })
        .finally(() => setLoadingSuggestions(false));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [city]);

  const handleSelectSuggestion = (suggestion) => {
    setCity(`${suggestion.city}, ${suggestion.region}, ${suggestion.country}`);
    setSelectedCity(suggestion);
    setSuggestions([]);
  };

  const handlePredict = async () => {
    if (!selectedCity) {
      setError("Please select a city from the list.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await axios.post(
        "https://adp-backend-ecto.onrender.com/predict",
        {
          city: selectedCity.city,
          type,
        }
      );

      if (res.data && res.data.status === "success") {
        setResult(res.data.data);
      } else {
        setError("Prediction failed. Try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="prediction-section">
      <motion.div
        className="prediction-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="prediction-hero">
          <div className="prediction-hero-text">
            <h2>Predict. Prepare. Prevent.</h2>
            <p>
              Our AI-powered model uses real-world disaster data to help assess
              your risk in real time. Whether you're in a wildfire-prone forest
              or a seismically active city, knowing your probability can help
              you take smarter precautions.
            </p>
          </div>
          <div className="prediction-hero-image">
            <img src={predictimg} alt="World Risk Map Placeholder" />
          </div>
        </div>

        <div className="prediction-header">
          <FaGlobeAsia className="prediction-header-icon" />
          <h1>Disaster Predictions</h1>
        </div>

        <p className="prediction-intro">
          Every area has its own seismic signature and wildfire seasonality.
          Enter any city below and our AI will calculate your probability of a
          major earthquake or wildfire over the coming days.
        </p>

        <div className="prediction-form">
          <div className="prediction-autocomplete">
            <input
              type="text"
              placeholder="Enter city (e.g. Los Angeles)"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setSelectedCity(null);
              }}
            />
            {loadingSuggestions ? (
              <Spinner />
            ) : (
              suggestions.length > 0 && (
                <ul className="prediction-suggestions">
                  {suggestions.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      {item.city}, {item.region}, {item.country}
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="wildfire">Wildfire</option>
            <option value="earthquake">Earthquake</option>
          </select>

          <button onClick={handlePredict} disabled={loading || !selectedCity}>
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>

        {error && <div className="prediction-error">{error}</div>}

        {loading ? (
          <div className="prediction-loading-box">
            <Spinner />
          </div>
        ) : (
          result && (
            <motion.div
              className="prediction-results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h2>Predictions for {result.location}</h2>

              {type === "earthquake" ? (
                <div className="prediction-grid">
                  <p>
                    <strong>Next 7 days:</strong>{" "}
                    {(result["30_day_prob"] / 4).toFixed(2)}%
                  </p>
                  <p>
                    <strong>Next 15 days:</strong>{" "}
                    {(result["30_day_prob"] / 2).toFixed(2)}%
                  </p>
                  <p>
                    <strong>Next 30 days:</strong> {result["30_day_prob"]}%
                  </p>
                  <p>
                    <strong>Next 60 days:</strong> {result["60_day_prob"]}%
                  </p>
                </div>
              ) : (
                <div className="prediction-grid">
                  <p>
                    <strong>Next 30 days:</strong> {result["30_day_prob"]}%
                  </p>
                  <p>
                    <strong>Next 60 days:</strong> {result["60_day_prob"]}%
                  </p>
                </div>
              )}

              <div className="prediction-location">
                <p>
                  <strong>Latitude:</strong> {result.lat_bin}
                </p>
                <p>
                  <strong>Longitude:</strong> {result.lon_bin}
                </p>
              </div>
            </motion.div>
          )
        )}

        <footer className="prediction-footer">
          <p>
            Disclaimer: These probabilities are model-based estimates. Always
            follow guidance from local authorities and professional agencies.
          </p>
        </footer>
      </motion.div>
    </section>
  );
}
