import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/SafetyHub.css";

import safetyimg from "../assets/safety-hub/safety.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SafetyHub() {
  return (
    <div className="safetyhub-container">
      <motion.section
        className="safetyhub-hero"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="safetyhub-content">
          <div className="safetyhub-hero-text">
            <h1>Prepare & Stay Safe</h1>
            <p>
              Natural disasters strike without warning. Whether it’s an
              earthquake or wildfire, knowing what to do before, during, and
              after can save lives.
            </p>
            <p>
              These guides help you stay ready, protect your family, and reduce
              risk in crisis situations.
            </p>
          </div>
          <div className="safetyhub-hero-image">
            <img src={safetyimg} alt="Safety Hub" />
          </div>
        </div>

        <div className="safetyhub-guide-buttons">
          <Link to="/earthquake" className="safetyhub-guide-btn earthquake">
            Earthquake
          </Link>
          <Link to="/wildfire" className="safetyhub-guide-btn wildfire">
            Wildfire
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
