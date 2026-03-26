import React from 'react';
import './EGCDifference.css';
import egcBack from "../../assets/egcBack.jpg";
import egcFront from "../../assets/egcFront.jpg";

const EGCDifference = () => {
  return (
    <section className="egc-difference">
      <div className="egc-container">
        <div className="egc-content">
          <div className="egc-text">
            <p className="egc-label">THE EGC DIFFERENCE</p>
            <h1 className="egc-title">Privileges Reserved for You</h1>
            
            <p className="egc-intro">
              Our presence in South Africa is built on trust earned in the wild—through 
              conservationists, private reserve landowners, and custodians of land few ever walk upon.
            </p>

            <div className="egc-features">
              <div className="egc-feature">
                <h3>Access Beyond the Obvious</h3>
                <p>
                  From protected wildlife encounters to privately guided journeys across vast, untamed 
                  landscapes, our relationships unlock experiences that are never advertised and rarely 
                  granted.
                </p>
              </div>

              <div className="egc-feature">
                <h3 className="italic-heading">Journeys Shaped by the Land</h3>
                <p>
                  Each itinerary is crafted in harmony with nature's rhythm. Mornings unfold with the rising 
                  sun over the savannah, days move at an unforced pace, and moments are defined not by 
                  schedules, but by presence.
                </p>
              </div>

              <div className="egc-feature">
                <h3>Travel with Purpose</h3>
                <p>
                  Here, luxury is not excess—it is meaning. Every experience is curated with respect, 
                  responsibility, and intention, leaving behind not footprints, but lasting impact.
                </p>
                <p>We don't offer safaris.</p>
                <p>We create profound encounters with one of the world's last great wildernesses.</p>
              </div>
            </div>
          </div>

          <div className="egc-images">
            <div className="image-container">
              <img 
                src={egcBack} 
                alt="South African landscape with mountains and river" 
                className="main-image"
              />
              <img 
                src={egcFront} 
                alt="Luxury pool overlooking mountains" 
                className="overlay-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EGCDifference;
