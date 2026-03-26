import React from "react";
import "./MorningTimelineModal.css";

const timelineData = [
  {
    time: "05:00",
    title: "Dawn Awakening",
    desc: "Private transfer to the sumo stable in Ryogoku district",
  },
  {
    time: "05:30",
    title: "Arrival at Heya",
    desc: "Greeted by the stable’s oyakata (master), with traditional welcome",
    highlight: true,
  },
  {
    time: "06:00",
    title: "Keiko Begins",
    desc: "Observe the sacred morning training from a privileged viewing position",
  },
  {
    time: "08:30",
    title: "Training Concludes",
    desc: "Witness the ritual bathing and preparation ceremonies",
  },
  {
    time: "09:00",
    title: "Chanko Nabe Breakfast",
    desc: "Share the traditional sumo breakfast with the wrestlers",
  },
  {
    time: "10:30",
    title: "Cultural Exchange",
    desc: "Private conversation with wrestlers, photo opportunities",
  },
];

const MorningTimelineModal = ({ closeModal }) => {
  return (
    <div className="mtm-overlay" onClick={closeModal}>
      <div
        className="mtm-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="mtm-close" onClick={closeModal}>
          ×
        </span>

        <div className="mtm-left">
          <p className="mtm-tag">THE JOURNEY</p>
          <h2>A Morning at the Stable</h2>
          <p>
            Experience the ancient rhythms of sumo life,
            from the pre-dawn arrival to the communal breakfast
            that bonds wrestlers together.
          </p>
        </div>

        <div className="mtm-right">
          {timelineData.map((item, index) => (
            <div key={index} className="mtm-item">
              <div className={`mtm-time ${item.highlight ? "active" : ""}`}>
                {item.time}
              </div>
              <div className="mtm-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MorningTimelineModal;
