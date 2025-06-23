import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import aboutimg from "../assets/about/about.png";
import visionimg from "../assets/about/vision.png";

export default function About() {
  return (
    <div className="about-container">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="about-text">
          <h1>About Our Mission</h1>
          <p>
            Natural disasters like earthquakes and wildfires are unpredictable —
            but your preparation doesn’t have to be. Our AI-powered platform is
            built to help communities stay ahead of the risk.
          </p>
          <p>
            By combining historical data, intelligent prediction models, and
            user-friendly education tools, we’re making disaster awareness
            simple, accessible, and impactful.
          </p>
        </div>
        <motion.div
          className="about-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={aboutimg} alt="AI Disaster Awareness" />
        </motion.div>
      </motion.section>

      <motion.section
        className="about-features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>What Makes This Platform Unique</h2>
        <div className="about-grid">
          {[
            {
              title: "AI Risk Prediction",
              text: "Get near real-time risk probabilities based on your city and disaster type — trained on years of location-specific data.",
            },
            {
              title: "Localized Insights",
              text: "We break down risks for individual locations, helping you prepare based on where you live, not general assumptions.",
            },
            {
              title: "Preparedness Guides",
              text: "Learn what to do before, during, and after a disaster — clearly explained with visuals and safety checklists.",
            },
            {
              title: "Interactive Quizzes",
              text: "Test your knowledge with quick quizzes and learn how prepared you really are for natural hazards.",
            },
          ].map((item, index) => (
            <motion.div
              className="about-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="about-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={visionimg} alt="AI Disaster Awareness" />
        </motion.div>
        <div className="about-text">
          <h1>Our Vision</h1>
          <p>
            We believe awareness is the first step toward safety. Our goal is to
            make disaster prediction and readiness easy to access,
            scientifically accurate, and empowering for every individual — no
            matter where they are.
          </p>
          <p>
            From real-time AI insights to educational resources, we're building
            a platform that doesn't just inform — it protects.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
