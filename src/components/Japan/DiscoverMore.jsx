import React from "react";
import "./DiscoverMore.css";

import img1 from "../../assets/d1.png";
import img2 from "../../assets/d2.png";
import img3 from "../../assets/d3.png";

const discoverData = [
  {
    tag: "HANAMI",
    title: "Cherry Blossom Viewing",
    image: img1,
  },
  {
    tag: "TRADITIONAL DRESS",
    title: "Kimono Experience",
    image: img2,
  },
  {
    tag: "CHADO",
    title: "Tea Ceremony",
    image: img3,
  },
];

const DiscoverMore = () => {
  return (
    <section className="dm-wrapper">
      <div className="dm-container">

        <h2 className="dm-heading">DISCOVER MORE</h2>

        <div className="dm-grid">
          {discoverData.map((item, index) => (
            <div className="dm-card" key={index}>
              
              <img src={item.image} alt={item.title} />

              <div className="dm-overlay">
                <span className="dm-tag">{item.tag}</span>
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiscoverMore;
