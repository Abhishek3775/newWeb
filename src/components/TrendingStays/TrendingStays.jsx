import React from "react";
import "./TrendingStays.css";

/* Assets imports */
import maldives from "../../assets/maldives.jpg";
import amanTokyo from "../../assets/aman-tokyo.jpg";
import singita from "../../assets/singita-grumeti.png";
import claridges from "../../assets/claridges.png";
import burj from "../../assets/burj-al-arab.png";
import bora from "../../assets/four-seasons-bora.jpg";

const stays = [
  {
    title: "One&Only Reethi Rah",
    location: "Maldives",
    tag: "TOP SELLER",
    image: maldives,
    large: true,
  },
  {
    title: "Aman Tokyo",
    location: "Japan",
    tag: "EGC PICK",
    image: amanTokyo,
  },
  {
    title: "Singita Grumeti",
    location: "Tanzania",
    tag: "NEW ADDITION",
    image: singita,
  },
  {
    title: "Claridge’s",
    location: "London",
    tag: "CLASSIC",
    image: claridges,
  },
  {
    title: "Burj Al Arab",
    location: "Dubai",
    tag: "ICONIC",
    image: burj,
  },
  {
    title: "Four Seasons Bora Bora",
    location: "French Polynesia",
    tag: "TRENDING",
    image: bora,
  },
];

const TrendingStays = () => {
  return (
    <section className="stays">
      <div className="stays-header">
        <span className="tag">HANDPICKED PROPERTIES</span>
        <h2>EGC Trending Stay Experiences</h2>
        <p>
          Our most sought-after accommodations, from overwater villas to palatial
          suites. Each property is personally vetted by our team.
        </p>
      </div>

      <div className="stays-grid">
        {stays.map((item, index) => (
          <div
            key={index}
            className={`stay-card ${item.large ? "large" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <span className="stay-tag">{item.tag}</span>

            <div className="stay-overlay">
              <span className="location">{item.location}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="stays-btn-wrapper">
        <button className="stays-btn">VIEW ALL ACCOMMODATIONS →</button>
      </div>
    </section>
  );
};

export default TrendingStays;
