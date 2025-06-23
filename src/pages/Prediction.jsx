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
  const [wildfireResult, setWildfireResult] = useState(null);
  const [earthquakeResult, setEarthquakeResult] = useState(null);
  const currentResult = type === "wildfire" ? wildfireResult : earthquakeResult;

  const [error, setError] = useState("");
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [disableFetch, setDisableFetch] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const Spinner = () => (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );

  useEffect(() => {
    if (city.length < 2 || disableFetch) {
      setSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      setLoadingSuggestions(true);

      axios
        .get("https://nominatim.openstreetmap.org/search", {
          params: {
            q: city,
            format: "json",
            addressdetails: 1,
            limit: 5,
          },
          headers: {
            "Accept-Language": "en",
          },
        })
        .then((res) => {
          setSuggestions(res.data || []);
        })
        .catch(() => {
          setSuggestions([]);
        })
        .finally(() => setLoadingSuggestions(false));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [city, disableFetch]);

  const handleSelectSuggestion = (suggestion) => {
    setCity(suggestion.display_name);
    setSelectedCity({ city: suggestion.display_name });
    setSuggestions([]);
    setDisableFetch(true);
  };

  const handlePredict = async () => {
    if (!selectedCity) {
      setError("Please select a city from the list.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://adp-backend-ecto.onrender.com/predict",
        {
          city: selectedCity.city,
          type,
        }
      );

      if (res.data && res.data.status === "success") {
        const resultData = res.data.data;

        if (type === "wildfire") {
          setWildfireResult(resultData);
        } else {
          setEarthquakeResult(resultData);
        }
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
                setDisableFetch(false);
              }}
            />

            {loadingSuggestions ? (
              <Spinner />
            ) : (
              suggestions.length > 0 && (
                <ul className="prediction-suggestions">
                  {suggestions.map((item) => (
                    <li
                      key={item.place_id}
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      {item.display_name}
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
          currentResult && (
            <motion.div
              className={`prediction-results ${type}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h2>Predictions for {currentResult.location}</h2>

              {type === "earthquake" ? (
                <div className="prediction-grid">
                  <p>
                    <strong>Next 7 days:</strong>{" "}
                    {(currentResult["30_day_prob"] / 4).toFixed(2)}%
                  </p>
                  <p>
                    <strong>Next 15 days:</strong>{" "}
                    {(currentResult["30_day_prob"] / 2).toFixed(2)}%
                  </p>
                  <p>
                    <strong>Next 30 days:</strong>{" "}
                    {currentResult["30_day_prob"]}%
                  </p>
                  <p>
                    <strong>Next 60 days:</strong>{" "}
                    {currentResult["60_day_prob"]}%
                  </p>
                </div>
              ) : (
                <div className="prediction-grid">
                  <p>
                    <strong>Next 30 days:</strong>{" "}
                    {currentResult["30_day_prob"]}%
                  </p>
                  <p>
                    <strong>Next 60 days:</strong>{" "}
                    {currentResult["60_day_prob"]}%
                  </p>
                </div>
              )}
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
