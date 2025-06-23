import React from "react";
import { FaBell, FaToolbox, FaHeartbeat } from "react-icons/fa";
import "../styles/Disaster.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Earthquake() {
  return (
    <section className="safetyhub-block">
      <h2 className="earthquake-title">Earthquake Safety</h2>
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
  );
}

export default Earthquake;
