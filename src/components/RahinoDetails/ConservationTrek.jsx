import React from "react";
import "./ConservationTrek.css";
import trekImage from "../../assets/rahinoSide.jpg"; // 👈 apni image ka naam yaha daalo
import time from "../../assets/time.png";
import people from "../../assets/people.png";
import calender from "../../assets/calender.png";
const ConservationTrek = () => {
  return (
    <section className="trek-section">
      <div className="trek-container">
        {/* LEFT CONTENT */}
        <div className="trek-content">
          <p className="trek-label">CONSERVATION SIGNATURE</p>

          <h2>Rhino Conservation VIP Trek</h2>

          <p className="trek-description">
            Experience an extraordinary day at the forefront of rhino
            conservation. Enjoy private transfers to an exclusive reserve,
            followed by a guided walking safari with conservation specialists
            and trackers. Witness real-time anti-poaching efforts, learn about
            rhino protection programmes, and enjoy a gourmet bush lunch
            overlooking the savannah. Your journey concludes with a private
            discussion with conservation leaders shaping the future of Africa’s
            wildlife.
          </p>

          <div className="trek-info">
            <span
              style={{ display: "flex", justifyContent: "center", gap: "4px" }}
            >
              <img
                src={time}
                alt=""
                style={{ height: "15px", width: "15px" }}
              />{" "}
              Full Day
            </span>
            <span
              style={{ display: "flex", justifyContent: "center", gap: "4px" }}
            >
              <img
                src={people}
                alt=""
                style={{ height: "15px", width: "15px" }}
              />
              2-6 Guests
            </span>
            <span
              style={{ display: "flex", justifyContent: "center", gap: "4px" }}
            >
              <img
                src={calender}
                alt=""
                style={{ height: "15px", width: "15px" }}
              />
              Year-round (subject to weather conditions)
            </span>
          </div>

          <div className="trek-buttons">
            <button className="btn-outline">VIEW MORE</button>
            <button className="btn-filled">RESERVE EXPERIENCE →</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="trek-image-wrapper">
          <img src={trekImage} alt="Rhino Trek" />

          <div className="price-badge">
            <span className="from-text">FROM</span>
            <span className="price">£5,500 per person</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConservationTrek;
