import React from "react";
import { motion } from "framer-motion";
import "../styles/Reports.css";

const reports = [
  {
    location: "Canada",
    date: "June 12, 2025",
    title: "World leaders may face wildfire smoke at Canada G7 summit",
    link: "https://www.reuters.com/sustainability/climate-energy/world-leaders-may-face-wildfire-smoke-canada-g7-summit-2025-06-12/",
    img: "https://www.reuters.com/resizer/v2/CC5VZXEWQRLHJLLXYOXFXKBKNU.jpg?auth=9a2c4f00fcb695be8af85ee0dad516336b54ac8036094699032d60c2fe76ff1e&width=640&quality=80",
  },
  {
    location: "Chile",
    date: "June 11, 2025",
    title: "Chile holds seismic drills as chance of a big quake rises",
    link: "https://www.reuters.com/business/environment/chile-holds-seismic-drills-chance-big-quake-rises-2025-06-11/",
    img: "https://www.reuters.com/resizer/v2/EBIDB4JERNKXPJHRGMWQDIV5DI.jpg?auth=c6439b8e680b79321789ef35109c7a53e64d22c9bce4b137402e93dcba1aef67&width=1080&quality=80",
  },
  {
    location: "California",
    date: "June 9, 2025",
    title:
      "Los Angeles wildfires were 10 times bigger than utility’s AI forecast",
    link: "https://www.reuters.com/business/environment/los-angeles-wildfires-were-10-times-bigger-than-utilitys-ai-forecast-2025-06-09/",
    img: "https://www.reuters.com/resizer/v2/S2HDRU6NIVKVRPTUJXBGY4AIHY.jpg?auth=6f3912805348d12d5f7882101a8ab1105bc0b6267f0916406486190a212ad869&width=1080&quality=80",
  },
  {
    location: "Turkey",
    date: "June 3, 2025",
    title:
      "A quake hits Turkey’s coast. Dozens are injured and a teen dies after being taken to hospital",
    link: "https://apnews.com/article/885c7757e1a1ac705b81562ac7331374",
    img: "https://static.independent.co.uk/2025/06/03/4/20/GettyImages-1578193072.jpg?trim=0%2C2%2C0%2C2&width=1200&height=800&crop=1200%3A800&quality=75&width=640&auto=webp",
  },
  {
    location: "Indonesia",
    date: "May 23, 2025",
    title: "Indonesia earthquake off Sumatra damages more than 100 houses",
    link: "https://english.alarabiya.net/News/world/2025/05/23/indonesia-earthquake-off-sumatra-damages-more-than-100-houses",
    img: "https://vid.alarabiya.net/images/2022/11/22/a84d7dc1-728d-4f5a-9e25-c8af6c4c9493/a84d7dc1-728d-4f5a-9e25-c8af6c4c9493_16x9_1200x676.JPG?width=801&format=jpg",
  },
  {
    location: "Mono Lake, CA",
    date: "May 22, 2025",
    title:
      "Wildfire causes major damage to infrastructure at Mono Lake natural reserve",
    link: "https://www.sfgate.com/california-parks/article/wildfire-major-damage-mono-lake-natural-reserve-20363499.php",
    img: "https://s.hdnux.com/photos/01/50/46/11/27419230/6/ratio3x2_960.webp",
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
