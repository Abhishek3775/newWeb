import React from "react";
import "./FounderSection.css";
import founderImg from "../../assets/founder.png"; 

const FounderSection = () => {
  return (
    <section className="founder-section">
      <div className="founder-container">
        
        {/* LEFT IMAGE */}
        <div className="founder-image">
          <img
            src={founderImg}
            alt="Founder"
            loading="lazy"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="founder-content">
          <h2 className="founder-heading">
            Meet the <span>Founder</span>
          </h2>

          <h3 className="founder-name">Rajiv Kapoor</h3>
          <p className="founder-role">FOUNDER & CHAIRMAN</p>

          <p className="founder-quote">
            "True luxury is not about possessions - it's about the freedom to
            live without limitations. We exist to make the impossible feel effortless."
          </p>

          <p className="founder-description">
            With over 25 years of experience in luxury hospitality and private
            client management, Rajiv Kapoor founded Elite Global Concierge with
            a singular vision, to redefine what it means to live exceptionally.
          </p>

          <p className="founder-description">
            His journey began in the grand hotels of London and Dubai, where he
            cultivated an extraordinary network of relationships across
            industries - from private aviation and superyacht charters to
            exclusive real estate and haute couture.
          </p>

          <p className="founder-description">
            Today, under his leadership, Elite Global Concierge serves a
            distinguished clientele of ultra-high-net-worth individuals, royal
            families, and Fortune 500 executives across six continents.
          </p>

          {/* STATS */}
          <div className="founder-stats">
            <div className="stat">
              <h4>25+</h4>
              <span>Years Experience</span>
            </div>

            <div className="stat">
              <h4>40+</h4>
              <span>Countries</span>
            </div>

            <div className="stat">
              <h4>500+</h4>
              <span>Elite Clients</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
