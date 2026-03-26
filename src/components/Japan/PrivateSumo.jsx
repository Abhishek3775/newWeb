import React, { useState } from "react";
import "./PrivateSumo.css";
import demoImg from "../../assets/privateSumo.png";
import MorningTimelineModal from "./MorningTimelineModal";
import FoodDrinksModal from "./FoodDrinksModal";

import time from "../../assets/time.png";
import people from "../../assets/people.png";
import calender from "../../assets/calender.png";

const PrivateSumoDemo = () => {
  const [openTimeline, setOpenTimeline] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="psd-section">
      <div className="psd-container">
        <div className="psd-card">
          {/* LEFT IMAGE */}
          <div className="psd-image">
            <img src={demoImg} alt="Private Sumo Demonstration" />

            <span className="psd-price">
              FROM <br /> £15,000
            </span>
          </div>

          {/* RIGHT CONTENT */}
          <div className="psd-content">
            <p className="psd-tag">EXCLUSIVE PERFORMANCE</p>

            <h2 className="psd-title">Private Sumo Demonstration</h2>

            <p className="psd-desc">
              Commission a private sumo demonstration at an exclusive venue of
              your choosing. Former professional wrestlers perform traditional
              ring-entering ceremonies, demonstrate techniques, and engage in
              exhibition matches.
            </p>

            <div className="psd-meta">
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <img
                  src={time}
                  alt=""
                  style={{ height: "15px", width: "15px" }}
                />{" "}
                3 hours
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <img
                  src={people}
                  alt=""
                  style={{ height: "15px", width: "15px" }}
                />
                10-30 Guests
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <img
                  src={calender}
                  alt=""
                  style={{ height: "15px", width: "15px" }}
                />
                Year-round, advance booking required
              </span>
            </div>

            <div className="psd-buttons">
              <button
                className="psd-btn-outline"
                onClick={() => setIsModalOpen(true)}
              >
                VIEW MORE
              </button>
              <button
                className="psd-btn-primary"
                onClick={() => setOpenTimeline(true)}
              >
                RESERVE EXPERIENCE →
              </button>
            </div>
          </div>
        </div>
      </div>

      <FoodDrinksModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {openTimeline && (
        <MorningTimelineModal closeModal={() => setOpenTimeline(false)} />
      )}
    </section>
  );
};

export default PrivateSumoDemo;
