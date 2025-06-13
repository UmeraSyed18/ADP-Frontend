import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaToolbox,
  FaBell,
  FaUserShield,
  FaHandsHelping,
  FaHome,
  FaFirstAid,
  FaRoute,
  FaTemperatureHigh,
  FaWind,
  FaHeartbeat,
  FaTruck,
  FaCheckDouble,
} from "react-icons/fa";
import "../styles/SafetyHub.css";

const earthquakeTips = {
  title: "Earthquake Safety Tips",
  sections: [
    {
      title: "Before an Earthquake",
      tips: [
        {
          icon: <FaToolbox />,
          title: "Secure Furniture",
          desc: "Anchor shelves and appliances to walls to prevent falling.",
        },
        {
          icon: <FaFirstAid />,
          title: "Emergency Kit",
          desc: "Prepare supplies like water, food, flashlight, and medications.",
        },
        {
          icon: <FaRoute />,
          title: "Exit Plans",
          desc: "Identify safe spots and exit routes in your home or workplace.",
        },
        {
          icon: <FaUserShield />,
          title: "Education",
          desc: "Teach family members about earthquake protocols.",
        },
        {
          icon: <FaHandsHelping />,
          title: "Practice Drills",
          desc: "Run periodic drills for drop, cover, and hold on.",
        },
        {
          icon: <FaCheckDouble />,
          title: "Structure Check",
          desc: "Ensure buildings comply with seismic codes.",
        },
      ],
    },
    {
      title: "During an Earthquake",
      tips: [
        {
          icon: <FaBell />,
          title: "Stay Calm",
          desc: "Avoid panic and assess surroundings quickly.",
        },
        {
          icon: <FaHome />,
          title: "Stay Indoors",
          desc: "Drop, cover, and hold on under sturdy furniture.",
        },
        {
          icon: <FaRoute />,
          title: "Avoid Exits",
          desc: "Don’t rush outside unless you’re in immediate danger.",
        },
        {
          icon: <FaUserShield />,
          title: "Protect Head",
          desc: "Use cushions or arms to protect from falling objects.",
        },
        {
          icon: <FaWind />,
          title: "Stay Away from Windows",
          desc: "Avoid glass that may shatter.",
        },
        {
          icon: <FaTruck />,
          title: "If Driving",
          desc: "Pull over and stop in a clear location.",
        },
      ],
    },
    {
      title: "After an Earthquake",
      tips: [
        {
          icon: <FaHeartbeat />,
          title: "Check Injuries",
          desc: "Provide first aid and check yourself and others.",
        },
        {
          icon: <FaTruck />,
          title: "Inspect Surroundings",
          desc: "Check for gas leaks, water damage, and cracks.",
        },
        {
          icon: <FaHandsHelping />,
          title: "Help Others",
          desc: "Assist neighbors, especially the elderly or injured.",
        },
        {
          icon: <FaRoute />,
          title: "Stay Updated",
          desc: "Listen to local radio and official instructions.",
        },
        {
          icon: <FaToolbox />,
          title: "Document Damage",
          desc: "Take pictures for insurance purposes.",
        },
        {
          icon: <FaUserShield />,
          title: "Prepare for Aftershocks",
          desc: "Stay alert and ready to act again.",
        },
      ],
    },
  ],
};

const wildfireTips = {
  title: "Wildfire Safety Tips",
  sections: [
    {
      title: "Before a Wildfire",
      tips: [
        {
          icon: <FaToolbox />,
          title: "Create Defensible Space",
          desc: "Clear flammable materials at least 30 ft around home.",
        },
        {
          icon: <FaHome />,
          title: "Use Fire-Safe Materials",
          desc: "Install ember-resistant vents and fire-resistant roofing.",
        },
        {
          icon: <FaFirstAid />,
          title: "Emergency Kit",
          desc: "Include N95 masks, water, food, medication, and documents.",
        },
        {
          icon: <FaRoute />,
          title: "Evacuation Plan",
          desc: "Have multiple routes and transportation ready.",
        },
        {
          icon: <FaHandsHelping />,
          title: "Protect Pets & Livestock",
          desc: "Prepare crates, food, and contacts for animal rescue.",
        },
        {
          icon: <FaBell />,
          title: "Stay Alert",
          desc: "Enable emergency alerts on your phone.",
        },
      ],
    },
    {
      title: "During a Wildfire",
      tips: [
        {
          icon: <FaBell />,
          title: "Evacuate Early",
          desc: "Leave as soon as evacuation is advised or ordered.",
        },
        {
          icon: <FaWind />,
          title: "Close Windows",
          desc: "Seal openings to prevent smoke from entering.",
        },
        {
          icon: <FaUserShield />,
          title: "Stay Indoors",
          desc: "If outside evacuation is unsafe, shelter in an interior room.",
        },
        {
          icon: <FaTemperatureHigh />,
          title: "Wear Protective Gear",
          desc: "Use long sleeves, goggles, and masks.",
        },
        {
          icon: <FaRoute />,
          title: "Drive Carefully",
          desc: "Use headlights and be alert for debris and low visibility.",
        },
        {
          icon: <FaCheckDouble />,
          title: "Keep Communication Open",
          desc: "Inform family or authorities of your location.",
        },
      ],
    },
    {
      title: "After a Wildfire",
      tips: [
        {
          icon: <FaUserShield />,
          title: "Wait for All-Clear",
          desc: "Only return home when authorities declare it safe.",
        },
        {
          icon: <FaTruck />,
          title: "Check for Damage",
          desc: "Inspect for structural damage and hazards.",
        },
        {
          icon: <FaFirstAid />,
          title: "Use Protection",
          desc: "Wear gloves and masks while cleaning up ash.",
        },
        {
          icon: <FaHandsHelping />,
          title: "Support Community",
          desc: "Assist those affected and share resources.",
        },
        {
          icon: <FaHeartbeat />,
          title: "Care for Mental Health",
          desc: "Seek help if you or family show trauma symptoms.",
        },
        {
          icon: <FaToolbox />,
          title: "Prepare for Future",
          desc: "Rebuild with fire-safe design and re-stock supplies.",
        },
      ],
    },
  ],
};

export default function SafetyHub() {
  return (
    <div className="safetyhub-container">
      <section className="safetyhub-hero">
        <div className="safetyhub-hero-text">
          <h1>Prepare & Stay Safe</h1>
          <p>
            Natural disasters can strike without warning. Whether it's the
            ground trembling beneath your feet or flames threatening your
            neighborhood, being prepared can make all the difference.
          </p>
          <p>
            This guide provides essential safety tips for both earthquakes and
            wildfires. Learn what to do before, during, and after to protect
            yourself, your family, and your home.
          </p>
        </div>
        <div className="safetyhub-hero-image">
          <img
            src="https://picsum.photos/seed/safetyhero/500/300"
            alt="Safety Guide Hero"
          />
        </div>
      </section>

      {[earthquakeTips].map((disaster, index) => (
        <section className="safetyhub-disaster" key={index}>
          <h2>{disaster.title}</h2>
          {disaster.sections.map((section, idx) => (
            <div className="safetyhub-section" key={idx}>
              <h3>{section.title}</h3>
              <div className="safetyhub-tips-grid">
                {section.tips.map((tip, i) => (
                  <div className="safetyhub-tip-card" key={i}>
                    <div className="icon">{tip.icon}</div>
                    <h4>{tip.title}</h4>
                    <p>{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="safetyhub-quiz-buttons">
        <Link to="/earthquake-quiz" className="safetyhub-btn earthquake">
          Take Earthquake Quiz
        </Link>
      </div>

      {[wildfireTips].map((disaster, index) => (
        <section className="safetyhub-disaster" key={index}>
          <h2>{disaster.title}</h2>
          {disaster.sections.map((section, idx) => (
            <div className="safetyhub-section" key={idx}>
              <h3>{section.title}</h3>
              <div className="safetyhub-tips-grid">
                {section.tips.map((tip, i) => (
                  <div className="safetyhub-tip-card" key={i}>
                    <div className="icon">{tip.icon}</div>
                    <h4>{tip.title}</h4>
                    <p>{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="safetyhub-quiz-buttons">
        <Link to="/wildfire-quiz" className="safetyhub-btn wildfire">
          Take Wildfire Quiz
        </Link>
      </div>
    </div>
  );
}
