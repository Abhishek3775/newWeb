import React from "react";
import "./StayInspired.css";

const StayInspired = () => {
  return (
    <section className="siw-section-wrapper">
      <div className="siw-container">

        <div className="siw-left">
          <h2 className="siw-title">Stay Inspired</h2>
          <p className="siw-description">
            Receive curated travel inspiration and exclusive offers directly to your inbox.
          </p>
        </div>

        <div className="siw-right">
          <input
            type="email"
            placeholder="Enter your email"
            className="siw-input"
          />
          <button className="siw-button">
            SUBSCRIBE
          </button>
        </div>

      </div>
    </section>
  );
};

export default StayInspired;
