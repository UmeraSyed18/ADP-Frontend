import React from "react";
import { motion } from "framer-motion";
import "../styles/Reports.css";

const reports = [
  {
    location: "Indonesia",
    date: "May 23, 2025",
    title: "Indonesia earthquake off Sumatra damages more than 100 houses",
    link: "https://english.alarabiya.net/News/world/2025/05/23/indonesia-earthquake-off-sumatra-damages-more-than-100-houses",
    img: "https://picsum.photos/seed/indo/400/250",
  },
  {
    location: "Chile",
    date: "June 11, 2025",
    title: "Chile holds seismic drills as chance of a big quake rises",
    link: "https://www.reuters.com/business/environment/chile-holds-seismic-drills-chance-big-quake-rises-2025-06-11/",
    img: "https://picsum.photos/seed/chile/400/250",
  },
  {
    location: "Turkey",
    date: "June 3, 2025",
    title:
      "A quake hits Turkey’s coast. Dozens are injured and a teen dies after being taken to hospital",
    link: "https://apnews.com/article/885c7757e1a1ac705b81562ac7331374",
    img: "https://picsum.photos/seed/turkey/400/250",
  },
  {
    location: "Canada",
    date: "June 12, 2025",
    title: "World leaders may face wildfire smoke at Canada G7 summit",
    link: "https://www.reuters.com/sustainability/climate-energy/world-leaders-may-face-wildfire-smoke-canada-g7-summit-2025-06-12/",
    img: "https://picsum.photos/seed/canada/400/250",
  },
  {
    location: "California",
    date: "June 9, 2025",
    title:
      "Los Angeles wildfires were 10 times bigger than utility’s AI forecast",
    link: "https://www.reuters.com/business/environment/los-angeles-wildfires-were-10-times-bigger-than-utilitys-ai-forecast-2025-06-09/",
    img: "https://picsum.photos/seed/california/400/250",
  },
  {
    location: "Mono Lake, CA",
    date: "May 22, 2025",
    title:
      "Wildfire causes major damage to infrastructure at Mono Lake natural reserve",
    link: "https://www.sfgate.com/california-parks/article/wildfire-major-damage-mono-lake-natural-reserve-20363499.php",
    img: "https://picsum.photos/seed/mono/400/250",
  },
];

export default function Reports() {
  return (
    <section className="reports-container">
      <motion.h1
        className="reports-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Recent Impacts & Damage Reports
      </motion.h1>

      <div className="reports-grid">
        {reports.map((report, index) => (
          <motion.div
            className="report-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={report.img} alt={report.location} />
            <div className="report-info">
              <span className="report-meta">
                {report.location} — {report.date}
              </span>
              <a
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="report-link"
              >
                {report.title}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
