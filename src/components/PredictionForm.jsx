import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import { FaGlobeAsia, FaSearch } from "react-icons/fa";
import { Country } from "country-state-city";

const PredictionForm = ({ setResult }) => {
  const [country, setCountry] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);
  const [disasterType, setDisasterType] = useState("earthquake");
  const [loading, setLoading] = useState(false);
  //   const baseURL = "http://127.0.0.1:5000";
  const baseURL = "https://adp-backend-ecto.onrender.com";

  // Populate all countries on mount
  useEffect(() => {
    const countriesList = Country.getAllCountries();
    const formatted = countriesList.map((c) => ({
      value: c.name,
      label: `${c.name} (${c.isoCode})`,
    }));
    setCountryOptions(formatted);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!country) return alert("Please select a country");

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`${baseURL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: country.value, disasterType }),
      });

      const data = await res.json();
      if (data.status === "success") {
        setResult(data.data);
      } else {
        alert("Prediction failed.");
      }
    } catch (error) {
      alert("Error contacting API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      className="prediction-form"
      onSubmit={handleSubmit}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <label>
        <FaGlobeAsia /> Country:
        <Select
          options={countryOptions}
          value={country}
          onChange={(selected) => setCountry(selected)}
          placeholder="Select a country..."
          classNamePrefix="select"
        />
      </label>

      <label>
        <FaSearch /> Disaster Type:
        <select
          value={disasterType}
          onChange={(e) => setDisasterType(e.target.value)}
        >
          <option value="earthquake">Earthquake</option>
          <option value="wildfire">Wildfire</option>
        </select>
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>
    </motion.form>
  );
};

export default PredictionForm;
