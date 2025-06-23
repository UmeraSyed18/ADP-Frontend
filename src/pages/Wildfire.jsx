import React from "react";
import { FaToolbox, FaTemperatureHigh, FaFirstAid } from "react-icons/fa";
import "../styles/Disaster.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const wildfireSections = [
  {
    icon: <FaToolbox />,
    title: "Before a Wildfire (Preparation Phase)",
    points: [
      "Clear dry leaves and flammable debris at least 30 feet from home.",
      "Trim tree branches and install ember-blocking mesh over vents.",
      "Create defensible zones — no flammable items in Zone 1 (0–5 ft).",
      "Pack emergency kit: food, water, N95 mask, clothes, documents, charger.",
      "Make an evacuation plan with routes, meeting spots, and pet prep.",
      "Sign up for local wildfire alerts and download emergency apps.",
    ],
  },
  {
    icon: <FaTemperatureHigh />,
    title: "During a Wildfire (Immediate Response)",
    points: [
      "Evacuate immediately if ordered. Wear protective gear and take your kit.",
      "If not ordered, stay alert. Prepare your car and keep smoke out.",
      "If trapped indoors: stay in windowless room, keep doors closed.",
      "If caught outdoors: find a clearing, lie down, and cover with wet cloth.",
    ],
  },
  {
    icon: <FaFirstAid />,
    title: "After a Wildfire (Recovery Phase)",
    points: [
      "Return home only when authorities declare it safe.",
      "Wear protective gear. Watch for ash pits, hotspots, and structural damage.",
      "Discard food exposed to smoke. Boil water if unsure.",
      "Clean ash with damp cloths. Avoid direct contact or dry sweeping.",
      "Take care of mental health. Reach out to family or counselors.",
      "Take photos for insurance. Report any hazards to authorities.",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Wildfire() {
  return (
    <section className="safetyhub-block">
      <h2 className="wildfire-title">Wildfire Safety</h2>
      {wildfireSections.map((section, index) => (
        <motion.div
          className="safetyhub-section"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={index}
        >
          <h3>
            <span className="icon">{section.icon}</span>
            {section.title}
          </h3>
          <ul>
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
      <div className="safetyhub-buttons">
        <Link to="/wildfire-quiz" className="safetyhub-btn wildfire">
          Take Wildfire Quiz
        </Link>
      </div>
    </section>
  );
}

export default Wildfire;
