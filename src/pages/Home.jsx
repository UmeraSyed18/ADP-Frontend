import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaChartLine, FaClipboardList } from "react-icons/fa";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI Powered Application for Natural Disaster Prediction & Awareness
        </motion.h1>
        <motion.h2
          className="home-tagline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          “Predict. Prepare. Protect.”
        </motion.h2>
        <motion.p
          className="home-subtext"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          AI-powered predictions for earthquakes and wildfires—so you and your
          community can stay one step ahead.
        </motion.p>
        <motion.div
          className="home-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Link to="/prediction" className="home-button">
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="home-howitworks">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How it works
        </motion.h3>
        <div className="home-steps">
          {/* Step 1 */}
          <motion.div
            className="home-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://picsum.photos/300/200?1"
              alt="Enter your location"
            />
            <div>
              <FaMapMarkerAlt className="home-step-icon" />
              <h4>Enter Your Location</h4>
              <p>Select your city</p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="home-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://picsum.photos/300/200?2"
              alt="See your risk score"
            />
            <div>
              <FaChartLine className="home-step-icon" />
              <h4>See Your Risk Score</h4>
              <p>Get probabilities for the next 7, 15, 30 or 60 days.</p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="home-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src="https://picsum.photos/300/200?3" alt="Stay prepared" />
            <div>
              <FaClipboardList className="home-step-icon" />
              <h4>Stay Prepared</h4>
              <p>
                Access guides, checklists and quizzes to sharpen your response.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <footer className="home-disclaimer">
        <p>
          These probabilities are model-based estimates. Always follow guidance
          from local authorities and professional agencies.
        </p>
      </footer>
    </div>
  );
}
