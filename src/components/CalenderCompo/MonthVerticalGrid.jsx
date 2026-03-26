import React from "react";
import "./MonthVerticalGrid.css";

import jan from "../../assets/jan.jpg";
import feb from "../../assets/feb.jpg";
import march from "../../assets/mar.jpg";
import april from "../../assets/apr.jpg";
import may from "../../assets/may.jpg";
import june from "../../assets/jun.jpg";
import july from "../../assets/jul.jpg";
import august from "../../assets/aug.jpg";
import september from "../../assets/sep.jpg";
import october from "../../assets/oct.jpg";
import november from "../../assets/nov.jpg";
import december from "../../assets/dec.jpg";

const monthImages = [
  { name: "January", image: jan },
  { name: "February", image: feb },
  { name: "March", image: march },
  { name: "April", image: april },
  { name: "May", image: may },
  { name: "June", image: june },
  { name: "July", image: july },
  { name: "August", image: august },
  { name: "September", image: september },
  { name: "October", image: october },
  { name: "November", image: november },
  { name: "December", image: december },
];

const MonthVerticalGrid = () => {
  return (
    <section className="mvg-section-wrapper">
      <div className="mvg-grid-container">
        {monthImages.map((item, index) => (
          <div key={index} className="mvg-card">
            <img
              src={item.image}
              alt={item.name}
              className="mvg-card-img"
              loading="lazy"
            />
            <div className="mvg-overlay"></div>
            <h3 className="mvg-month-name">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MonthVerticalGrid;
