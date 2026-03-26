import React from "react";
import "./GrandTournamentVIP.css";
import vipImg from "../../assets/tournament.png";

import time from "../../assets/time.png";
import people from "../../assets/people.png";
import calender from "../../assets/calender.png";

const GrandTournamentVIP = () => {
  return (
    <section className="gtv-section">
      <div className="gtv-container">

        <div className="gtv-card">

          {/* LEFT CONTENT */}
          <div className="gtv-content">

            <p className="gtv-tag">HONBASHO PREMIUM</p>

            <h2 className="gtv-title">
              Grand Tournament VIP Experience
            </h2>

            <p className="gtv-desc">
              Experience the electric atmosphere of a Grand Sumo Tournament from the
              most coveted ringside seats. Your day includes private transfers,
              a kaiseki lunch, backstage access, and post-tournament dinner
              with a former yokozuna.
            </p>

            <div className="gtv-meta">
              <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={time} alt="" style={{height:"15px",width:"15px"}} />Full Day</span>
  <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={people} alt="" style={{height:"15px",width:"15px"}} />2-6 Guests</span>
  <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={calender} alt="" style={{height:"15px",width:"15px"}} />January, May, September (Tokyo)</span>

            </div>

            <div className="gtv-buttons">
              <button className="gtv-btn-outline">VIEW MORE</button>
              <button className="gtv-btn-primary">
                RESERVE EXPERIENCE →
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="gtv-image">
            <img src={vipImg} alt="Grand Tournament VIP" />

            <span className="gtv-price">
              FROM <br /> £5,500 per person
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GrandTournamentVIP;
