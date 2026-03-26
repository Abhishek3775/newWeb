import React from "react";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <section className="exp-sec-wrapper">
      <div className="exp-sec-container">

        {/* LEFT CONTENT */}
        <div className="exp-sec-left">

          <div className="exp-sec-topline">
            <span className="exp-sec-line"></span>
            <p>WHAT WE’RE ABOUT</p>
          </div>

          <h2 className="exp-sec-heading">
            WE'RE A COLLECTIVE OF VISIONARIES,
            PROBLEM-SOLVERS AND EXPERIENCE ARCHITECTS
          </h2>

          <p className="exp-sec-paragraph">
            At Elite Global Concierge, we believe that true luxury isn't about
            extravagance—it's about precision. It's the art of anticipating desires
            before they're spoken, of transforming the seemingly impossible into an effortless reality.
          </p>

          <p className="exp-sec-paragraph">
            We serve those who value their time above all else. Those who understand
            that life's most precious moments deserve to be crafted with intention,
            care, and an unwavering commitment to excellence.
          </p>

          <p className="exp-sec-paragraph">
            Our clientele doesn't simply travel—they discover. They don't merely dine—they experience.
            And we are the invisible architects behind every extraordinary moment.
          </p>

        </div>

        {/* RIGHT STATS BOX */}
        <div className="exp-sec-right">

          <div className="exp-sec-stats-box">

            <div className="exp-sec-stat">
              <h3>5+</h3>
              <p>YEARS OF EXCELLENCE</p>
            </div>

            <div className="exp-sec-divider"></div>

            <div className="exp-sec-stat">
              <h3>60+</h3>
              <p>COUNTRIES</p>
            </div>

            <div className="exp-sec-divider"></div>

            <div className="exp-sec-stat">
              <h3>24/7</h3>
              <p>AVAILABILITY</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
