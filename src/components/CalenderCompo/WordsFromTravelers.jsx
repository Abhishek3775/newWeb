import React from "react";
import "./WordsFromTravelers.css";

const testimonialData = [
  {
    rating: 5,
    review:
      "Our Japan trip during cherry blossom season was absolutely magical. Every detail was perfectly orchestrated.",
    name: "James & Victoria H.",
    location: "London",
  },
  {
    rating: 5,
    review:
      "The South African safari exceeded all expectations. The private lodges were exceptional.",
    name: "Michael T.",
    location: "New York",
  },
  {
    rating: 5,
    review:
      "Morocco was a dream. The desert camp experience was unlike anything we've ever done.",
    name: "Sarah & David L.",
    location: "Dubai",
  },
];

const WordsFromTravelers = () => {
  return (
    <section className="wft-section">
      <div className="wft-container">
        <h2 className="wft-heading">
          Words from Our <span>Travelers</span>
        </h2>

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
      </div>
    </section>
  );
};

export default WordsFromTravelers;
