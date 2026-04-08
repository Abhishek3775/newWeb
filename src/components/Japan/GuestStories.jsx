import React, { useState } from "react";
import "./GuestStories.css";

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

const GuestStories = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="gs-wrapper">
      <div className="gs-container">
        <p className="gs-text">{testimonials[index].text}</p>

        <div className="gs-author">
          <p className="gs-name">{testimonials[index].name}</p>
          <p className="gs-country">{testimonials[index].country}</p>
          <p className="gs-experience">{testimonials[index].experience}</p>
        </div>

        {/* Pagination Dots */}
        <div className="gs-pagination">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`gs-dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestStories;