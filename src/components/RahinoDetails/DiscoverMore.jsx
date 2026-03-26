import React from "react";
import "./DiscoverMore.css";

import sharkImg from "../../assets/whale.jpg";
import penguinImg from "../../assets/penguin.jpg";
import trainImg from "../../assets/hotel.jpg";

const DiscoverMore = () => {
  return (
    <section className="dm-section">
      <div className="dm-container">

        <h2 className="dm-heading">DISCOVER MORE</h2>

        <div className="dm-grid">

          {/* Card 1 */}
          <div className="dm-card">
            <img src={sharkImg} alt="Shark Diving" />
            <div className="dm-overlay">
              <h3>Great White Shark Cage Diving</h3>
              <p>
                Face-to-face encounters with the ocean's apex predator in the shark capital of the world.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="dm-card">
            <img src={penguinImg} alt="Penguin Colony" />
            <div className="dm-overlay">
              <h3>Private Penguin Colony Visit</h3>
              <p>
                Experience Boulders Beach's African penguin colony with exclusive early morning access.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="dm-card">
            <img src={trainImg} alt="Luxury Blue Train" />
            <div className="dm-overlay">
              <h3>Luxury Blue Train Journey</h3>
              <p>
                Travel in legendary style aboard the Blue Train from Pretoria to Cape Town.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DiscoverMore;
