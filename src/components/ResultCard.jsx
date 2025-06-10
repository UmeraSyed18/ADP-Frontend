import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaChartLine } from "react-icons/fa";

const ResultCard = ({ data }) => {
  return (
    <motion.div
      className="result-card"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>
        <FaMapMarkerAlt /> Prediction for {data.location}
      </h2>
      <p>
        <strong>Latitude:</strong> {data.lat_bin}
      </p>
      <p>
        <strong>Longitude:</strong> {data.lon_bin}
      </p>
      <ul>
        <li>
          <FaChartLine /> 7 Day Probability: {data["7_day_prob"]}%
        </li>
        <li>
          <FaChartLine /> 15 Day Probability: {data["15_day_prob"]}%
        </li>
        <li>
          <FaChartLine /> 30 Day Probability: {data["30_day_prob"]}%
        </li>
        <li>
          <FaChartLine /> 60 Day Probability: {data["60_day_prob"]}%
        </li>
      </ul>
    </motion.div>
  );
};

export default ResultCard;
