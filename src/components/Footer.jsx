import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  return (
    <footer className="main-footer">
      {/* Main Grid */}
      <div className="footer-content">
        <div className="footer-container">

          {/* Column 1 — Logo + Description + Social */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-circle">
                <span className="logo-icon">E</span>
              </div>
              <span className="logo-name">ELITE GLOBAL</span>
            </div>
            <p className="footer-description">
              Crafting extraordinary journeys for<br />
              discerning travellers since 2005.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Column 2 — Destinations */}
          <div className="footer-column">
            <h3>Destinations</h3>
            <ul className="footer-links">
              <li><Link to="/destinations/south-africa">South Africa</Link></li>
              <li><Link to="/destinations/tanzania">Tanzania</Link></li>
              <li><Link to="/destinations/kenya">Kenya</Link></li>
              <li><Link to="/destinations/botswana">Botswana</Link></li>
              <li><Link to="/destinations/morocco">Morocco</Link></li>
              <li><Link to="/destinations/namibia">Namibia</Link></li>
            </ul>
          </div>

          {/* Column 3 — Experiences */}
          <div className="footer-column">
            <h3>Experiences</h3>
            <ul className="footer-links">
              <li><Link to="/experiences/safari">Safari &amp; Wildlife</Link></li>
              <li><Link to="/experiences/wine">Wine &amp; Culinary</Link></li>
              <li><Link to="/experiences/adventure">Adventure</Link></li>
              <li><Link to="/experiences/beach">Beach &amp; Coast</Link></li>
              <li><Link to="/experiences/cultural">Cultural</Link></li>
              <li><Link to="/experiences/honeymoon">Honeymoon</Link></li>
            </ul>
          </div>

          {/* Column 4 — Contact + Stay Inspired */}
          <div className="footer-column">
            <h3>Contact</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <a href="tel:+442012345678">+44 (0) 20 1234 5678</a>
              </div>
              <div className="contact-item">
                <a href="mailto:info@eliteconcierge.com">info@eliteconcierge.com</a>
              </div>
              <div className="contact-locations">
                <p>South Africa · Japan</p>
              </div>
            </div>

            {/* Stay Inspired Newsletter */}
            <div className="footer-newsletter">
              <h3>Stay Inspired</h3>
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

      {/* Bottom — CTA + Legal */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-cta">
            <h2>Get in Touch Now</h2>
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