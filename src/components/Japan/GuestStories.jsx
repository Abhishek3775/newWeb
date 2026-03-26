import React, { useState } from "react";
import "./GuestStories.css";

import quoteIcon from "../../assets/quotes.png"; // your png icon

const testimonials = [
  {
    text: `"Watching the keiko training was utterly mesmerizing. The raw power, the discipline, the silence broken only by the sound of bodies colliding—it was unlike anything I’ve ever experienced."`,
    name: "Lord Ashworth",
    country: "United Kingdom",
    experience: "Morning Training Experience",
  },
  {
    text: `"An unforgettable encounter with Japan’s ancient traditions. The atmosphere inside the sumo stable was both powerful and deeply moving."`,
    name: "Isabella Hart",
    country: "Australia",
    experience: "Grand Tournament VIP",
  },
];

const GuestStories = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gs-wrapper">
      <div className="gs-container">
        <p className="gs-subtitle">GUEST STORIES</p>
        <h2 className="gs-title">Words of Wonder</h2>

        <div className="gs-quote-icon">
          <img src={quoteIcon} alt="quotes" />
        </div>

        <p className="gs-text">{testimonials[index].text}</p>

        <div className="gs-author">
          <p className="gs-name">{testimonials[index].name}</p>
          <p className="gs-country">{testimonials[index].country}</p>
          <p
            style={{
              fontSize: "14px",
              color: "#C09551",
            }}
          >
            {testimonials[index].experience}
          </p>
        </div>

        <div className="gs-navigation">
          <button onClick={prevSlide} className="gs-btn">
            ‹
          </button>
          <div className="gs-indicator">
            <span></span>
          </div>
          <button onClick={nextSlide} className="gs-btn">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuestStories;
