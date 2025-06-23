import { Link } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";
import "../styles/footer.css";
import { IoMdArrowDropright } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-new-inner">
        <div className="footer-brand-block">
          <FaGlobeAsia className="footer-brand-icon" />
          <div>
            <h2 className="footer-brand-name">DisasterPredict</h2>
            <p className="footer-brand-desc">
              Accurate AI predictions for Earthquakes and Wildfires to help
              communities stay safe.
            </p>
          </div>
        </div>

        <div className="footer-links-block">
          <h4 className="footer-links-title">Explore</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/">
                <IoMdArrowDropright /> Home
              </Link>
            </li>
            <li>
              <Link to="/predict">
                <IoMdArrowDropright />
                Prediction
              </Link>
            </li>
            <li>
              <Link to="/impact-reports">
                <IoMdArrowDropright />
                Impact Reports
              </Link>
            </li>
            <li>
              <Link to="/safety-hubs">
                <IoMdArrowDropright />
                Safety Hubs
              </Link>
            </li>
            <li>
              <Link to="/about">
                <IoMdArrowDropright />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-new-bottom">
        <p>
          © {new Date().getFullYear()} DisasterPredict. Built for awareness and
          preparedness.
        </p>
      </div>
    </footer>
  );
}
