import React, { useState } from "react";
import "./EGCTestimonial.css";

const testimonials = [
  {
    text: `"Watching the keiko training was utterly mesmerizing. The raw power, the discipline, the silence broken only by the sound of bodies colliding—it was unlike anything I've ever experienced."`,
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

const EGCTestimonial = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="egc-testimonial-section">
      <div className="egc-testimonial-container">
        <p className="egc-testimonial-text">
          {testimonials[index].text}
        </p>

        <div className="egc-testimonial-author">
          <p className="egc-testimonial-name">
            {testimonials[index].name}
          </p>
          <p className="egc-testimonial-country">
            {testimonials[index].country}
          </p>
          <p className="egc-testimonial-experience">
            {testimonials[index].experience}
          </p>
        </div>

        {/* INDICATOR */}
        <div className="egc-testimonial-indicator">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EGCTestimonial;