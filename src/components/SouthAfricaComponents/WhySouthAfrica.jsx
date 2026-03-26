import React from "react";
import "./WhySouthAfrica.css";
import africaImage from "../../assets/whySouthAfrica.jpg";

const WhySouthAfrica = () => {
  return (
    <section className="why-section">
      {/* Left Content */}
      <div className="why-content">
    
        <h5 className="why-label">WHY SOUTH AFRICA?</h5>

        <h2 className="why-title">
          “Ever shared a private moment with an endangered black rhino?”
        </h2>

        <p className="why-description">
          In the wake of Apartheid (which ended only in 1994), South Africa
          has emerged as a bright, diverse and incredibly modern country –
          as well as one of the best safari destinations in the entire
          continent. Our trips to this spectacular country are designed to
          show off its often jaw-dropping diversity and to look after you
          and your needs at every turn.
        </p>

        <ul className="why-list">
          <li>The bars and restaurants of vibrant Cape Town</li>
          <li>Horse-riding through the forests of Mpumalanga</li>
          <li>Photo tours of the Blyde River Canyon</li>
          <li>Whale-watching in cliffside Hermanus</li>
          <li>Guided treks for black rhino in Thanda game reserve</li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="why-image-wrapper">
        <img src={africaImage} alt="South Africa Beach" />
        <div className="experience-box">
          <h3>20+</h3>
          <p>Years says crafting<br />African journeys</p>
        </div>
      </div>
    </section>
  );
};

export default WhySouthAfrica;
