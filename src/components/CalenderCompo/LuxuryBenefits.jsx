import React from "react";
import "./LuxuryBenefits.css";

import globeIcon from "../../assets/globe.png";
import serviceIcon from "../../assets/people1.png";
import accessIcon from "../../assets/reward.png";

const benefitsData = [
  {
    icon: globeIcon,
    title: "Global Expertise",
    description:
      "Our travel experts have personally explored every destination we recommend, ensuring authentic and informed guidance.",
  },
  {
    icon: serviceIcon,
    title: "Personalized Service",
    description:
      "Every journey is uniquely crafted to match your preferences, pace, and passions—no templates, only tailored experiences.",
  },
  {
    icon: accessIcon,
    title: "Exclusive Access",
    description:
      "Unlock doors that remain closed to ordinary travelers—private viewings, chef’s tables, and VIP experiences await.",
  },
];

const LuxuryBenefits = () => {
  return (
    <section className="lux-section-wrapper">
      <div className="lux-container">
        <div className="lux-grid">
          {benefitsData.map((item, index) => (
            <div key={index} className="lux-card">
              <div className="lux-icon-wrapper">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="lux-icon-img"
                  loading="lazy"
                />
              </div>

              <h3 className="lux-card-title">{item.title}</h3>

              <p className="lux-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryBenefits;
