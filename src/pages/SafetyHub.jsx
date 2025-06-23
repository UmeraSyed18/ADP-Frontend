import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBell,
  FaToolbox,
  FaRoute,
  FaHandsHelping,
  FaUserShield,
  FaCheckDouble,
  FaTemperatureHigh,
  FaFirstAid,
  FaHeartbeat,
  FaTruck,
  FaWind,
} from "react-icons/fa";
import "../styles/SafetyHub.css";

const earthquakeSections = [
  {
    icon: <FaToolbox />,
    title: "Before an Earthquake (Preparation Phase)",
    points: [
      "Fasten shelves, anchor heavy furniture, and secure gas cylinders and water heaters.",
      "Prepare an emergency kit with food, water, flashlight, batteries, medication, charger, and cash.",
      "Set a family emergency plan — safe spot, responsibilities, emergency numbers, utility shutoffs.",
      "Teach 'Drop, Cover, and Hold On'. Conduct drills. Learn basic first aid and CPR.",
      "Retrofit old buildings. Hire a professional to assess seismic safety.",
    ],
  },
  {
    icon: <FaBell />,
    title: "During an Earthquake (Immediate Response)",
    points: [
      "If indoors: Drop, Cover, and Hold On under sturdy furniture. Stay away from windows.",
      "If in bed: Stay in bed and protect your head with a pillow.",
      "If outdoors: Move to an open area away from buildings and power lines. Drop to the ground.",
      "If in a vehicle: Pull over to a safe spot. Stay inside until the shaking stops.",
    ],
  },
  {
    icon: <FaHeartbeat />,
    title: "After an Earthquake (Recovery Phase)",
    points: [
      "Check yourself and others for injuries. Give first aid if needed.",
      "Inspect gas, water, and electric lines. Evacuate if gas is leaking.",
      "Listen to emergency broadcasts and follow official instructions.",
      "Be prepared for aftershocks. Drop, Cover, and Hold On again.",
      "Use text or social media to contact loved ones. Avoid phone calls.",
      "Stay away from damaged buildings. Do not use elevators.",
      "Take photos for insurance. Report hazards to authorities.",
    ],
  },
];

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

export default function SafetyHub() {
  return (
    <div className="safetyhub-container">
      <section className="safetyhub-hero">
        <div className="safetyhub-hero-text">
          <h1>Prepare & Stay Safe</h1>
          <p>
            Natural disasters strike without warning. Whether it’s an earthquake
            or wildfire, knowing what to do before, during, and after can save
            lives.
          </p>
          <p>
            These guides help you stay ready, protect your family, and reduce
            risk in crisis situations.
          </p>
        </div>
        <div className="safetyhub-hero-image">
          <img
            src="https://picsum.photos/seed/safetyhub/500/300"
            alt="Safety Guide"
          />
        </div>
      </section>

      <section className="safetyhub-block">
        <h2>Earthquake Safety</h2>
        {earthquakeSections.map((section, index) => (
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
          <Link to="/earthquake-quiz" className="safetyhub-btn earthquake">
            Take Earthquake Quiz
          </Link>
        </div>
      </section>

      <section className="safetyhub-block">
        <h2>Wildfire Safety</h2>
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
    </div>
  );
}
