import React from "react";
import "./EssentialInfo.css";
import rightArrow from "../../assets/arrowright.png";
import compass from "../../assets/compass.png";
import shield from "../../assets/shield.png";

const EssentialInfo = () => {
  return (
    <section className="essential-section">
      <div className="container">

        <p className="sub-heading">BEFORE YOU GO</p>
        <h2 className="main-heading">Essential Information</h2>

        <div className="grid-wrapper">

          {/* LEFT INFO GRID */}
          <div className="info-grid">

            <div className="info-card">
              <h4>CAPITAL</h4>
              <p>Pretoria (administrative), Cape Town (legislative)</p>
            </div>

            <div className="info-card">
              <h4>CURRENCY</h4>
              <p>South African Rand (ZAR)</p>
            </div>

            <div className="info-card">
              <h4>LANGUAGES</h4>
              <p>11 official (English widely spoken)</p>
            </div>

            <div className="info-card">
              <h4>TIME ZONE</h4>
              <p>SAST (GMT +2)</p>
            </div>

            <div className="info-card">
              <h4>FLIGHT FROM LONDON</h4>
              <p>11–12 hours direct</p>
            </div>

            <div className="info-card">
              <h4>VISA</h4>
              <p>Not required for UK/US/EU (up to 90 days)</p>
            </div>

            <div className="info-card">
              <h4>VACCINATIONS</h4>
              <p>Consult travel clinic; Malaria prophylaxis for safari</p>
            </div>

            <div className="info-card">
              <h4>BEST AIRPORTS</h4>
              <p>Cape Town (CPT), Johannesburg (JNB)</p>
            </div>

          </div>

          {/* RIGHT TIPS SECTION */}
          <div className="tips-section">

            {/* Health Tips */}
            <div className="tips-card">
              <h4>

              <img src={shield} alt="Shield" />
                Health Tips</h4>
              <ul>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>Malaria prophylaxis recommended for Kruger and lowveld regions</span>
                </li>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>High-factor sunscreen essential year-round</span>
                </li>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>Bottled water recommended in remote areas</span>
                </li>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>Comprehensive travel insurance essential</span>
                </li>
              </ul>
            </div>

            {/* Packing Essentials */}
            <div className="tips-card">
              <h4>
                <img src={compass} alt="compass" />
                Packing Essentials
              </h4>
              <ul>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>Neutral colours for safari (avoid bright whites/blues)</span>
                </li>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>Layers for cool mornings and warm afternoons</span>
                </li>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>Binoculars and camera with zoom lens</span>
                </li>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>Comfortable walking shoes</span>
                </li>
                <li>
                  <img src={rightArrow} alt="arrow" />
                  <span>Swimwear for lodge pools and beaches</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EssentialInfo;
