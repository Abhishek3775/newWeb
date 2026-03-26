import React from "react";
import "./ChooseMonth.css";

import locationIcon from "../../assets/locate.png";
import { useNavigate } from "react-router-dom";

import jan from "../../assets/january.jpg";
import feb from "../../assets/february.jpg";
import march from "../../assets/march.jpg";
import april from "../../assets/april.jpg";
import may from "../../assets/may.jpg";
import june from "../../assets/june.png";
import july from "../../assets/july.png";
import august from "../../assets/august.jpg";
import september from "../../assets/september.jpg";
import october from "../../assets/october.jpg";
import november from "../../assets/novemeber.jpg";
import december from "../../assets/december.jpg";

const monthData = [
  { month: "January", subtitle: "NEW YEAR, NEW ADVENTURES", location: "Maldives", image: jan },
  { month: "February", subtitle: "ROMANCE IN PARADISE", location: "Venice", image: feb },
  { month: "March", subtitle: "SPRING AWAKENING", location: "Japan", image: march },
  { month: "April", subtitle: "BLOOMING DESTINATIONS", location: "Netherlands", image: april },
  { month: "May", subtitle: "PERFECT WEATHER ESCAPES", location: "Greece", image: may },
  { month: "June", subtitle: "SUMMER BEGINNINGS", location: "Santorini", image: june },
  { month: "July", subtitle: "PEAK SEASON SPLENDOR", location: "Amalfi Coast", image: july },
  { month: "August", subtitle: "ISLAND HOPPING", location: "Bali", image: august },
  { month: "September", subtitle: "HARVEST SEASON", location: "Tuscany", image: september },
  { month: "October", subtitle: "AUTUMN COLORS", location: "New England", image: october },
  { month: "November", subtitle: "HIDDEN GEMS", location: "Morocco", image: november },
  { month: "December", subtitle: "WINTER WONDERLAND", location: "Iceland", image: december },
];

const ChooseMonth = () => {
    const navigate = useNavigate();

const handleClick = (month) => {
  if (month.toLowerCase() === "march") {
    navigate("/calender/march");
  }
};
  return (
    <section className="cym-section">
      <div className="cym-container">
        <h2 className="cym-heading">
          Choose Your <span>Month</span>
        </h2>
        <p className="cym-subheading">
          Each month offers unique opportunities for extraordinary travel experiences
        </p>

        <div className="cym-grid">
          {monthData.map((item, index) => (
            <div key={index} className="cym-card"      onClick={() => handleClick(item.month)} style={{ cursor: "pointer" }}>
              <img
                src={item.image}
                alt={item.month}
                className="cym-card-img"
                loading="lazy"
              />
              <div className="cym-card-overlay"></div>

              <div className="cym-card-content">
                <h3>{item.month}</h3>
                <p className="cym-card-sub">{item.subtitle}</p>

                <div className="cym-location">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="cym-location-icon"
                  />
                  <span>Featured: {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseMonth;
