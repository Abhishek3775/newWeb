import React, { useState } from "react";
import "./GuestStories.css";

const testimonials = [
  {
    quote:
      "Watching the keiko training was utterly mesmerizing. The raw power, the discipline, the silence broken only by the sound of bodies colliding-it was unlike anything I've ever experienced.",
    name: "Lord Ashworth",
    country: "United Kingdom",
    experience: "Morning Training Experience",
  },
  {
    quote:
      "The rhino trekking was unforgettable. Every step felt purposeful and deeply connected to nature.",
    name: "Sarah Williams",
    country: "United States",
    experience: "Rhino Tracking Walk",
  },
  {
    quote:
      "An elegant and deeply immersive experience. Every detail felt private, refined, and unforgettable.",
    name: "Daniel Carter",
    country: "Australia",
    experience: "Private Safari Experience",
  },
];

const GuestStories = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="gs-section">
      <div className="gs-container">
        {/* <p className="gs-subtitle">GUEST STORIES</p> */}
        {/* <h2 className="gs-title">Words of Wonder</h2> */}

        <p className="gs-quote">"{testimonials[current].quote}"</p>

        <div className="gs-author">
          <h4>{testimonials[current].name}</h4>
          <p>{testimonials[current].country}</p>
          <span>{testimonials[current].experience}</span>
        </div>

        <div className="gs-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`gs-dot ${current === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestStories;