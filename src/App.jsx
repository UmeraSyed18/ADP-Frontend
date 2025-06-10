import React, { useEffect, useState } from "react";
import PredictionForm from "./components/PredictionForm";
import ResultCard from "./components/ResultCard";
import "./styles/Home.css";
import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";

const App = () => {
  const [apiStatus, setApiStatus] = useState("Checking...");
  const [result, setResult] = useState(null);
  // const baseURL = "http://127.0.0.1:5000";
  const baseURL = "https://adp-backend-ecto.onrender.com";

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.text())
      .then((text) => setApiStatus(text))
      .catch(() => setApiStatus("API not reachable"));
  }, []);

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="home-title">🌍 AI Disaster Prediction</h1>
      <p className="api-status">
        <FaServer style={{ marginRight: "8px" }} />
        {apiStatus}
      </p>
      <PredictionForm setResult={setResult} />
      {result && <ResultCard data={result} />}
    </motion.div>
  );
};

export default App;
