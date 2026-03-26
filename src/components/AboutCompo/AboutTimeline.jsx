import React from "react";
import "./AboutTimeline.css";

const AboutTimeline = () => {
  return (
    <section className="abt-section">
      <div className="abt-container">
        
        {/* LEFT */}
        <div className="abt-left">
          <div className="abt-top">
            <div className="topLine"></div>
          <p className="abt-small-heading">HOW IT BEGAN</p>
          </div>
          <h1 className="abt-big-year">2025</h1>

          <ul className="abt-timeline-list">
            <li>
              <span className="abt-year">2025</span>
              <p>Founded in United States</p>
            </li>
            <li>
              <span className="abt-year">2026</span>
              <p>Expanded to New York</p>
            </li>
            <li>
              <span className="abt-year">2027</span>
              <p>Dubai office opens</p>
            </li>
            <li>
              <span className="abt-year">2028</span>
              <p>Singapore headquarters</p>
            </li>
            <li>
              <span className="abt-year">2029</span>
              <p>Global network complete</p>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="abt-right">
          <h2 className="abt-main-heading">
            IT STARTED WITH A SIMPLE BELIEF
          </h2>

          <p className="abt-highlight">
            That exceptional service should feel effortless
          </p>

          <p className="abt-paragraph">
            Elite Global Concierge was born in the private suites of London's
            most prestigious establishments, where our founders witnessed a
            gap between what clients truly desired and what traditional
            services could deliver.
          </p>

          <p className="abt-paragraph">
            They envisioned something different-a service without boundaries, without the word
            'impossible' in its vocabulary. A team that would move mountains, cross oceans, and bend time
            itself to fulfill every request.
          </p>

          <p className="abt-paragraph">
            What began as a bespoke service for a handful of discerning clients has evolved into a global
            network of excellence, yet our founding principle remains unchanged: every client deserves a
            world tailored precisely to their desires.
          </p>

          <div className="abt-quote">
            <div className="abt-quote-line"></div>
            <p>"Every client deserves a world tailored precisely to their desires."</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTimeline;
