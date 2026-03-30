import React from "react";
import "./WordsFromTravelers.css";

const WordsFromTravelers = () => {
  return (
    <section className="wft-section">
      <div className="wft-container">
        <h2 className="wft-heading">
          Words from Our <span>Travelers</span>
        </h2>

        {/* OLD TESTIMONIAL CARDS REMOVED */}
        {/*
        <div className="wft-grid">
          {testimonialData.map((item, index) => (
            <div key={index} className="wft-card">
              <div className="wft-stars">
                {"★".repeat(item.rating)}
              </div>

              <p className="wft-review">"{item.review}"</p>

              <div className="wft-author">
                <p className="wft-name">{item.name}</p>
                <p className="wft-location">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
        */}

        {/* VIDEO PLACEHOLDER SECTION */}
        <div className="wft-video-box">
          <p>Placeholder for the testimonial Video</p>
        </div>
      </div>
    </section>
  );
};

export default WordsFromTravelers;