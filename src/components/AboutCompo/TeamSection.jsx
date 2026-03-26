import React from "react";
import "./TeamSection.css";

import img1 from "../../assets/team1.png";
import img2 from "../../assets/team2.png";
import img3 from "../../assets/team3.png";
import img4 from "../../assets/team4.png";

const teamMembers = [
  {
    id: 1,
    name: "Isabelle Moreau",
    role: "DIRECTOR OF CLIENT RELATIONS",
    image: img1,
  },
  {
    id: 2,
    name: "James Whitfield",
    role: "HEAD OF TRAVEL & EXPERIENCES",
    image: img2,
  },
  {
    id: 3,
    name: "Catherine Aldridge",
    role: "CHIEF LIFESTYLE CURATOR",
    image: img3,
  },
  {
    id: 4,
    name: "Alexander Chen",
    role: "HEAD OF TECHNOLOGY & INNOVATION",
    image: img4,
  },
];

const TeamSection = () => {
  return (
    <section className="team-sec-wrapper">
      <div className="team-sec-container">

        <p className="team-sec-subtitle">OUR TEAM</p>

        <h2 className="team-sec-title">
          The People Behind <span>EGC</span>
        </h2>

        <p className="team-sec-description">
          A handpicked collective of industry veterans, each bringing decades
          of expertise in luxury lifestyle management and bespoke concierge services.
        </p>

        <div className="team-sec-grid">
          {teamMembers.map((member) => (
            <div className="team-sec-card" key={member.id}>
              <div className="team-sec-img-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="team-sec-img"
                />

                <div className="team-sec-overlay">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
