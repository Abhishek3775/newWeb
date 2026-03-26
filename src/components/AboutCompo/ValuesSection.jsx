import React from "react";
import "./ValuesSection.css";
import valuesBg from "../../assets/bg-1.jpg";

const ValuesSection = () => {
  return (
    <section
      className="val-sec-wrapper"
      style={{ backgroundImage: `url(${valuesBg})` }}
    >
      <div className="val-sec-overlay"></div>

      <div className="val-sec-container">

        {/* Header */}
        <div className="val-sec-header">
          <p className="val-sec-subtitle">OUR VALUES</p>

          <h2 className="val-sec-title">
            THREE PRINCIPLES GUIDE EVERYTHING THAT WE DO
          </h2>

          <p className="val-sec-description">
            These keep us on course—whatever we do, wherever in the world we find ourselves
          </p>
        </div>

        {/* Cards */}
        <div className="val-sec-grid">

          <div className="val-sec-card">
            <p className="val-sec-card-small">PRINCIPLE 01</p>
            <h3>DISCREET</h3>
            <p>
              In our world, discretion isn't a feature—it's the foundation.
              Every interaction, every arrangement, every detail is held in the strictest confidence.
            </p>
            <button className="val-sec-btn">PRIVACY IS SACRED</button>
          </div>

          <div className="val-sec-card">
            <p className="val-sec-card-small">PRINCIPLE 02</p>
            <h3>RELENTLESS</h3>
            <p>
              We don't know the word 'impossible.' When others see obstacles,
              we see opportunities. We pursue perfection in every detail.
            </p>
            <button className="val-sec-btn">EXCELLENCE WITHOUT EXCEPTION</button>
          </div>

          <div className="val-sec-card">
            <p className="val-sec-card-small">PRINCIPLE 03</p>
            <h3>INTUITIVE</h3>
            <p>
              We don't wait for requests—we anticipate them.
              Understanding our clients' unspoken desires is our expertise.
            </p>
            <button className="val-sec-btn">ANTICIPATION IS OUR ART</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
