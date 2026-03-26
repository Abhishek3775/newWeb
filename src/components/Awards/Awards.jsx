import React from "react";
import "./Awards.css";
import awardImg from "../../assets/award.png";
const awards = [
  {
    year: "2025",
    title: "World’s Best Concierge Service",
    source: "Travel + Leisure",
  },
  {
    year: "2025",
    title: "Excellence in Luxury Travel",
    source: "Condé Nast Traveller",
  },
  {
    year: "2024",
    title: "Best Private Travel Company",
    source: "Robb Report",
  },
  {
    year: "2024",
    title: "Virtuoso Best Specialist",
    source: "Virtuoso Awards",
  },
  {
    year: "2024",
    title: "Ultra Luxury Recognition",
    source: "Forbes Travel Guide",
  },
  {
    year: "2023",
    title: "Service Excellence Award",
    source: "ILTM",
  },
];

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards-header">
        <h2>Our Awards</h2>
        <p>
          Recognition from the world’s most prestigious travel institutions
          speaks to our unwavering commitment to excellence.
        </p>
      </div>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <div className="award-icon"> <img src={awardImg} alt="" style={{height:"20px",width:"15px"}}  /> </div>
            <span className="award-year">{award.year}</span>
            <h3>{award.title}</h3>
            <p>{award.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
