import React, { useState } from "react";
import "./GuestStories.css";

const testimonials = [
  {
    quote:
      "Watching the keiko training was utterly mesmerizing. The raw power, the discipline, the silence broken only by the sound of bodies colliding—it was unlike anything I’ve ever experienced.",
    name: "Lord Ashworth",
    country: "United Kingdom",
    experience: "Morning Tracking Experience",
  },
  {
    quote:
      "The rhino trekking was unforgettable. Every step felt purposeful and deeply connected to nature.",
    name: "Sarah Williams",
    country: "United States",
    experience: "Rhino Tracking Walk",
  },
];

const GuestStories = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gs-section">
      <div className="gs-container">

        <p className="gs-subtitle">GUEST STORIES</p>
        <h2 className="gs-title">Words of Wonder</h2>

        <div className="gs-quote-icon">”</div>

        <p className="gs-quote">
          {testimonials[current].quote}
        </p>

        <div className="gs-author">
          <h4>{testimonials[current].name}</h4>
          <p>{testimonials[current].country}</p>
          <span>{testimonials[current].experience}</span>
        </div>

        <div className="gs-controls">
          <button onClick={prevSlide} className="gs-btn">‹</button>

          <div className="gs-indicator"></div>

          <button onClick={nextSlide} className="gs-btn">›</button>
        </div>

      </div>
    </section>
  );
};

export default GuestStories;
