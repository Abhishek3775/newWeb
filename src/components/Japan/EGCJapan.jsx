import React from "react";
import "./EGCJapan.css";
import egcBack from "../../assets/cherryBack.jpg";
import egcFront from "../../assets/cherryFron.jpg";

const EGCJapan = () => {
  return (
    <section className="egc-difference">
      <div className="egc-container">
        <div className="egc-content">
          <div className="egc-text">
            <p className="egc-label">THE EGC DIFFERENCE</p>
            <h1 className="egc-title">Privileges Reserved for You</h1>

            <p className="egc-intro">
              Our relationships, cultivated over decades, open doors to
              experiences that exist beyond the reach of ordinary travel.
            </p>

            <div className="egc-features">
              <div className="egc-feature">
                <h3>Bespoke Journeys, Perfectly Curated</h3>
                <p>
                 Every experience we design
                is shaped around your personal rhythm,
                <br /> tastes, and sense of
                wonder. From tranquil retreats to iconic landmarks,
                <br /> each moment
                flows seamlessly - unhurried, effortless, unforgettable.
                <br />
                <br />
                 We
                don’t sell trips.
                <br />We craft memories that stay with you long after
                you return.
                </p>
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

export default EGCJapan;
