import React, { useState } from "react";
import "./ClimateRegion.css";

import hokkaidoImg from "../../assets/Hokaido.jpg";
import tokyoImg from "../../assets/Tokyo&Kanto.jpg";
import kyotoImg from "../../assets/Kyoto&Kansai.jpg";
import alpsImg from "../../assets/JapaneseAlps.jpg";
import okinawaImg from "../../assets/Okinawa.jpg";

import winterIcon from "../../assets/winter.png";
import summerIcon from "../../assets/summer1.png";

const regions = [
  {
    name: "Hokkaido",
    image: hokkaidoImg,
    desc: "Japan's northernmost island offers cold winters with heavy snow and cool, pleasant summers.",
    best: "February (snow), July-August (summer escape)",
    winter: "-8°C to 0°C",
    summer: "18°C to 26°C",
    highlights: ["Powder snow skiing", "Lavender fields (summer)", "Seafood cuisine"],
  },
  {
    name: "Tokyo & Kanto",
    image: tokyoImg,
    desc: "Mild winters and hot, humid summers characterize the capital region.",
    best: "March-May, October-November",
    winter: "2°C to 10°C",
    summer: "25°C to 33°C",
    highlights: ["Cherry blossoms", "Urban exploration", "Day trips to Mt. Fuji"],
  },
  {
    name: "Kyoto & Kansai",
    image: kyotoImg,
    desc: "Similar to Tokyo but slightly warmer with particularly humid summers.",
    best: "March-May, October-November",
    winter: "3°C to 9°C",
    summer: "26°C to 34°C",
    highlights: ["Temple foliage", "Gion Festival", "Traditional culture"],
  },
  {
    name: "Japanese Alps",
    image: alpsImg,
    desc: "Mountain climate with excellent skiing winters and cool hiking summers.",
    best: "January-February, July-September",
    winter: "-10°C to 3°C",
    summer: "15°C to 25°C",
    highlights: ["World-class skiing", "Alpine scenery", "Traditional villages"],
  },
  {
    name: "Okinawa",
    image: okinawaImg,
    desc: "Subtropical climate with warm weather year-round.",
    best: "March-April, November-December",
    winter: "15°C to 20°C",
    summer: "28°C to 32°C",
    highlights: ["Beach paradise", "Unique culture", "Marine activities"],
  },
];

const ClimateRegion = () => {
  const [active, setActive] = useState(0);
  const region = regions[active];

  return (
    <section className="cr-wrapper">
      <div className="cr-container">

        <p className="cr-subtitle">REGIONAL WEATHER</p>
        <h2 className="cr-title">Climate by Region</h2>
        <p className="cr-desc">
          Japan stretches across diverse climate zones. Understanding regional variations helps you plan the perfect itinerary.
        </p>

        {/* Tabs */}
        <div className="cr-tabs">
          {regions.map((item, index) => (
            <button
              key={index}
              className={`cr-tab ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="cr-content">
          <div className="cr-image">
            <img src={region.image} alt={region.name} />
          </div>

          <div className="cr-info">
            <h3>{region.name}</h3>
            <p className="cr-region-desc">{region.desc}</p>

            <div className="cr-box-row">
              <div className="cr-box">
                <span className="cr-box-title">BEST TIME TO VISIT</span>
                <p>{region.best}</p>
              </div>

              <div className="cr-box small">
                <img src={winterIcon} alt="winter" />
                <span>Winter</span>
                <p>{region.winter}</p>
              </div>

              <div className="cr-box small">
                <img src={summerIcon} alt="summer" />
                <span>Summer</span>
                <p>{region.summer}</p>
              </div>
            </div>

            <div className="cr-highlights">
              <span>REGIONAL HIGHLIGHTS</span>
              <div className="cr-tags">
                {region.highlights.map((tag, i) => (
                  <div key={i} className="cr-tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ClimateRegion;
