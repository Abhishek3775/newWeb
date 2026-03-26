import React from "react";
import "./TraditionPower.css";

const stats = [
  {
    number: "1,500+",
    title: "YEARS OF TRADITION",
    desc: "Sumo’s origins trace back to Shinto rituals of ancient Japan",
  },
  {
    number: "6",
    title: "GRAND TOURNAMENTS",
    desc: "Honbasho held annually in Tokyo, Osaka, Nagoya, and Fukuoka",
  },
  {
    number: "45",
    title: "SUMO STABLES",
    desc: "Active heya training the next generation of rikishi",
  },
  {
    number: "70",
    title: "YOKOZUNA IN HISTORY",
    desc: "The highest rank achieved by only the greatest champions",
  },
];

const TraditionPower = () => {
  return (
    <section className="tp-section">
      <div className="tp-container">

        {/* TOP CONTENT */}
        <div className="tp-top">

          <div className="tp-left">
            <p className="tp-subtitle">
              A LIVING TESTAMENT TO JAPANESE HERITAGE
            </p>

            <h2 className="tp-title">
              Where Tradition Meets Power
            </h2>

            <div className="tp-line"></div>
          </div>

          <div className="tp-right">
            <p className="tp-description">
              For over 1,500 years, sumo has embodied the soul of Japan —
              a sacred sport where ritual, discipline, and raw power converge
              in moments of breathtaking intensity. Our exclusive sumo experiences
              offer you privileged access to this closed world, from private morning
              training sessions at prestigious heya to ringside seats at the Grand
              Tournament, accompanied by insights from former champions.
            </p>

            <div className="tp-quote">
              <p>
                To witness sumo is to witness Japan itself—ancient,
                powerful, and profoundly beautiful.
              </p>
              <span>— Takanohana Koji, Former Yokozuna</span>
            </div>
          </div>

        </div>

        {/* BOTTOM STATS */}
        <div className="tp-stats">
          {stats.map((item, index) => (
            <div key={index} className="tp-stat-item">
              <h3>{item.number}</h3>
              <p className="tp-stat-title">{item.title}</p>
              <p className="tp-stat-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TraditionPower;
