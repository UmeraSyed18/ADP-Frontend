import { Link } from "react-router-dom";
import {
  FaGlobeAsia,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-column">
          <h2 className="footer-logo">
            <FaGlobeAsia className="footer-icon" />
            DisasterPredict
          </h2>
          <p>AI-powered predictions for Earthquakes and Wildfires.</p>
          <div className="footer-contact">
            <p>
              <FaEnvelope className="footer-icon" />
              support@disasterpredict.ai
            </p>
            <p>
              <FaPhoneAlt className="footer-icon" />
              911
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/predict">Prediction</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/awareness">Awareness Tips</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h4>Connect</h4>
          <div className="footer-social">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} DisasterPredict. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
