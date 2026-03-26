import React from "react";
import "./FoodDrinksModal.css";
import { FiX } from "react-icons/fi";
import food from "../../assets/food.jpg"

const FoodDrinksModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fdm-overlay" onClick={onClose}>
      <div
        className="fdm-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="fdm-close" onClick={onClose}>
          <FiX />
        </button>

        <div className="fdm-container">
          {/* LEFT IMAGE */}
          <div className="fdm-image">
            <img src={food} alt="Food & Drinks" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="fdm-content">
            <span className="fdm-subtitle">
              CHANKO NABE & BEYOND
            </span>

            <h2>Food & Drinks at the Sumo Table</h2>

            <p className="fdm-description">
              At the heart of sumo culture is chanko nabe, the nourishing hot pot prepared
              to fuel Japan’s rikishi. This intimate dining experience offers rare access
              to traditional sumo cuisine, where time-honored recipes, communal dining,
              and storytelling come together—providing an authentic glimpse into life
              inside the sumo stable.
            </p>

            <h4>At the Table</h4>

            <ul className="fdm-list">
              <li>Chanko Nabe – Seasonal vegetables and premium proteins, served communally</li>
              <li>Yakitori – Charcoal-grilled chicken skewers, a post-training staple</li>
              <li>Donburi – Hearty rice bowls topped with fresh seafood or wagyu</li>
              <li>Beverages – Regional sake, shochu, Japanese beer & traditional teas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDrinksModal;
