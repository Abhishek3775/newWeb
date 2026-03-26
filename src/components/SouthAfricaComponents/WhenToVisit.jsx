import React from "react";
import wetSeason from "../../assets/wet-season.png";
import summer from "../../assets/dry.png";
import humidity from "../../assets/humidity.png";
import thermo from "../../assets/thermo.png";
import "./WhenToVisit.css";

const WhenToVisit = () => {
  return (
    <section className="visit-section">
      <div className="visit-container">
        {/* Header */}
        <div className="visit-header">
          <h2>When to Visit South Africa</h2>
          <p>
            South Africa is a year-round destination, but each season offers
            distinct experiences. Your ideal time to visit depends on your
            priorities - whether wildlife, wine, whale watching, or simply
            soaking up the sun.
          </p>
        </div>

        {/* Cards */}
        <div className="visit-grid">
          {/* Dry Season */}
          <div className="visit-card">
            <span className="season-label">
               <img src={summer} alt="Wet-season" style={{height:"20px",width:"20px"}}/>
               DRY SEASON (MAY - SEPTEMBER)
            </span>

            <h3>Peak Safari Season</h3>

            <p>
              The South African winter brings dry conditions, making it the
              ideal time for safari. Sparse vegetation means animals gather
              around water sources, offering exceptional wildlife viewing
              opportunities.
            </p>

            <div className="info-row">
              <span>
                 <img src={thermo} alt="Thermo"  style={{height:"20px",width:"20px"}}/>
                8-23°C
              </span>
              <span>
                 <img src={humidity} alt="Humidity"  style={{height:"20px",width:"20px"}}/>
                Low rainfall
              </span>
            </div>

            <ul>
              <li>Best wildlife viewing</li>
              <li>Fewer mosquitoes</li>
              <li>Clear skies</li>
              <li>Comfortable temperatures</li>
            </ul>

            <div className="best-for">
              <span>BEST FOR:</span> Safari, Photography, Hiking
            </div>
          </div>

          {/* Wet Season */}
          <div className="visit-card">
            <span className="season-label">
            <img src={wetSeason} alt="Wet-season" style={{height:"20px",width:"20px"}}/>
            WET SEASON (OCTOBER - APRIL)
            </span>

            <h3>Summer & Wine Season</h3>

            <p>
              The warmer months bring lush landscapes, newborn animals, and
              Cape’s perfect beach weather. This is harvest time in the
              Winelands, and the southern coast comes alive with whale and
              shark activity.
            </p>

            <div className="info-row">
              <span>
                <img src={thermo} alt="Thermo"  style={{height:"20px",width:"20px"}}/>
                15-30°C
              </span>
              <span>
           
                <img src={humidity} alt="Humidity"  style={{height:"20px",width:"20px"}}/>
                 Moderate rainfall
              </span>
            </div>

            <ul>
              <li>Whale watching</li>
              <li>Wine harvest</li>
              <li>Baby animals</li>
              <li>Beach weather</li>
            </ul>

            <div className="best-for">
              <span>BEST FOR:</span> Beach, Wine, Marine life
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenToVisit;
