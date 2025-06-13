import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
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
        <div className="about-image">
          <img
            src="https://picsum.photos/seed/aboutai/500/400"
            alt="AI Disaster Awareness"
          />
        </div>
      </section>

      <section className="about-features">
        <h2>What Makes This Platform Unique</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>AI Risk Prediction</h3>
            <p>
              Get near real-time risk probabilities based on your city and
              disaster type — trained on years of location-specific data.
            </p>
          </div>
          <div className="about-card">
            <h3>Localized Insights</h3>
            <p>
              We break down risks for individual locations, helping you prepare
              based on where you live, not general assumptions.
            </p>
          </div>
          <div className="about-card">
            <h3>Preparedness Guides</h3>
            <p>
              Learn what to do before, during, and after a disaster — clearly
              explained with visuals and safety checklists.
            </p>
          </div>
          <div className="about-card">
            <h3>Interactive Quizzes</h3>
            <p>
              Test your knowledge with quick quizzes and learn how prepared you
              really are for natural hazards.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          We believe awareness is the first step toward safety. Our goal is to
          make disaster prediction and readiness easy to access, scientifically
          accurate, and empowering for every individual — no matter where they
          are.
        </p>
        <p>
          From real-time AI insights to educational resources, we're building a
          platform that doesn't just inform — it protects.
        </p>
      </section>
    </div>
  );
}
