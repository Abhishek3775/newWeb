import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hanami.css";

const JapanHanamiSection = () => {
  const navigate = useNavigate();

  return (
    <section className="japan-hanami-section">
      <div className="japan-hanami-container">

        {/* LEFT CONTENT */}
        <div className="japan-hanami-left">
          <span className="japan-hanami-subtitle">春 Haru</span>
          <h1 className="japan-hanami-title">Hanami</h1>

          <p className="japan-hanami-description">
            Cherry blossom season transforms Japan into a dreamscape of pink and white.
            Experience hanami—the ancient tradition of flower viewing beneath the sakura.
          </p>

          <div className="japan-hanami-tags">
            <span>Cherry blossom festivals</span>
            <span>Pleasant temperatures</span>
            <span>Garden visits at peak beauty</span>
          </div>
        </div>

        {/* RIGHT DATE CARD */}
        <div className="japan-hanami-right">
          <div className="japan-hanami-date-card">
            <h2>March - May</h2>
            <div className="japan-hanami-divider"></div>
            <p>8°C - 20°C</p>
          </div>
        </div>

      </div>

      {/* BUTTON */}
      <div className="japan-hanami-button-wrapper">
        <button
          className="japan-hanami-button"
          onClick={() => navigate("/japan-guide")}
        >
          VIEW COMPLETE GUIDE →
        </button>
      </div>
    </section>
  );
};

export default JapanHanamiSection;
