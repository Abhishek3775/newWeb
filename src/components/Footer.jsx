import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPlus } from "react-icons/fa";
import "./Footer.css";
import footerLogo from "../assets/elite-logo.png"; // <-- apna correct path laga do

const Footer = () => {
  const [email, setEmail] = useState("");
  const [openSection, setOpenSection] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed:", email);
      setEmail("");
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="main-footer">
      {/* ================= DESKTOP / TABLET ================= */}
      <div className="footer-content">
        <div className="footer-container">
          {/* LEFT BRAND */}
          <div className="footer-column footer-brand-column">
            <div className="footer-logo">
              <img
                src={footerLogo}
                className="logo-icon"
                alt="Elite Global Logo"
              />
              <span className="logo-name">ELITE GLOBAL</span>
            </div>

            <p className="footer-description">
              Crafting extraordinary journeys for discerning travellers since
              2005.
            </p>

            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* DESTINATIONS */}
          <div className="footer-column footer-desktop-only">
            <h3>DESTINATIONS</h3>
            <ul className="footer-links">
              <li><Link to="/destinations/south-africa">South Africa</Link></li>
              <li><Link to="/destinations/tanzania">Tanzania</Link></li>
              <li><Link to="/destinations/kenya">Kenya</Link></li>
              <li><Link to="/destinations/botswana">Botswana</Link></li>
              <li><Link to="/destinations/morocco">Morocco</Link></li>
              <li><Link to="/destinations/namibia">Namibia</Link></li>
            </ul>
          </div>

          {/* EXPERIENCES */}
          <div className="footer-column footer-desktop-only">
            <h3>EXPERIENCES</h3>
            <ul className="footer-links">
              <li><Link to="/experiences/safari">Safari & Wildlife</Link></li>
              <li><Link to="/experiences/wine">Wine & Culinary</Link></li>
              <li><Link to="/experiences/adventure">Adventure</Link></li>
              <li><Link to="/experiences/beach">Beach & Coast</Link></li>
              <li><Link to="/experiences/cultural">Cultural</Link></li>
              <li><Link to="/experiences/honeymoon">Honeymoon</Link></li>
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div className="footer-column footer-desktop-only footer-contact-column">
            <h3>CONTACT</h3>

            <div className="footer-contact">
              <div className="contact-item">
                <a href="tel:+442012345678">+44 (0) 20 1234 5678</a>
              </div>
              <div className="contact-item">
                <a href="mailto:info@eliteconcierge.com">
                  info@eliteconcierge.com
                </a>
              </div>
              <div className="contact-locations">
                <p>South Africa · Japan</p>
              </div>
            </div>

            <div className="footer-newsletter">
              <h3>STAY INSPIRED</h3>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="newsletter-input-wrap">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ================= MOBILE ACCORDION ================= */}
          <div className="footer-mobile-accordion">
            {/* Destinations */}
            <div className="footer-accordion-item">
              <button
                className={`footer-accordion-header ${
                  openSection === "destinations" ? "active" : ""
                }`}
                onClick={() => toggleSection("destinations")}
              >
                <span>DESTINATIONS</span>
                <FaPlus className="footer-plus-icon" />
              </button>

              <div
                className={`footer-accordion-content ${
                  openSection === "destinations" ? "open" : ""
                }`}
              >
                <ul className="footer-links">
                  <li><Link to="/destinations/south-africa">South Africa</Link></li>
                  <li><Link to="/destinations/tanzania">Tanzania</Link></li>
                  <li><Link to="/destinations/kenya">Kenya</Link></li>
                  <li><Link to="/destinations/botswana">Botswana</Link></li>
                  <li><Link to="/destinations/morocco">Morocco</Link></li>
                  <li><Link to="/destinations/namibia">Namibia</Link></li>
                </ul>
              </div>
            </div>

            {/* Experiences */}
            <div className="footer-accordion-item">
              <button
                className={`footer-accordion-header ${
                  openSection === "experiences" ? "active" : ""
                }`}
                onClick={() => toggleSection("experiences")}
              >
                <span>EXPERIENCES</span>
                <FaPlus className="footer-plus-icon" />
              </button>

              <div
                className={`footer-accordion-content ${
                  openSection === "experiences" ? "open" : ""
                }`}
              >
                <ul className="footer-links">
                  <li><Link to="/experiences/safari">Safari & Wildlife</Link></li>
                  <li><Link to="/experiences/wine">Wine & Culinary</Link></li>
                  <li><Link to="/experiences/adventure">Adventure</Link></li>
                  <li><Link to="/experiences/beach">Beach & Coast</Link></li>
                  <li><Link to="/experiences/cultural">Cultural</Link></li>
                  <li><Link to="/experiences/honeymoon">Honeymoon</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-accordion-item">
              <button
                className={`footer-accordion-header ${
                  openSection === "contact" ? "active" : ""
                }`}
                onClick={() => toggleSection("contact")}
              >
                <span>CONTACT</span>
                <FaPlus className="footer-plus-icon" />
              </button>

              <div
                className={`footer-accordion-content ${
                  openSection === "contact" ? "open" : ""
                }`}
              >
                <div className="footer-contact">
                  <div className="contact-item">
                    <a href="tel:+442012345678">+44 (0) 20 1234 5678</a>
                  </div>
                  <div className="contact-item">
                    <a href="mailto:info@eliteconcierge.com">
                      info@eliteconcierge.com
                    </a>
                  </div>
                  <div className="contact-locations">
                    <p>South Africa · Japan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stay Inspired */}
            <div className="footer-newsletter footer-mobile-newsletter">
              <h3>STAY INSPIRED</h3>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="newsletter-input-wrap">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-cta">
            <h2>GET IN TOUCH NOW</h2>
          </div>

          <hr className="footer-divider" />

          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;