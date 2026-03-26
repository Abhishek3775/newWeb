import React, { useState } from "react";
import "./VoyageItinerary.css";
import { FaUtensils } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import img1 from "../../assets2/Itinerary/Your Itinerary/img1.png";
import img2 from "../../assets2/Itinerary/Your Itinerary/img2.png";
import img3 from "../../assets2/Itinerary/Your Itinerary/img3.png";
import img4 from "../../assets2/Itinerary/Your Itinerary/img4.png";
import img5 from "../../assets2/Itinerary/Your Itinerary/img5.png";
import img6 from "../../assets2/Itinerary/Your Itinerary/img6.png";
import img7 from "../../assets2/Itinerary/Your Itinerary/img7.png";
import img8 from "../../assets2/Itinerary/Your Itinerary/img8.png";
import img9 from "../../assets2/Itinerary/Your Itinerary/img9.png";

const itineraryData = [
  {
    id: 1,
    location: "Dubrovnik, Croatia",
    title: "Arrival in Dubrovnik",
    description: "Arrive at Dubrovnik Airport where your private transfer awaits. Embark your vessel and settle into your ocean-view suite before a welcome cocktail reception and gala dinner.",
    highlights: ["Private airport transfer", "Welcome champagne reception", "Gala dinner aboard", "Overnight docked in old port"],
    meals: ["Dinner"],
    image: img1,
  },
  {
    id: 2,
    location: "Dubrovnik, Croatia",
    title: "The Pearl of the Adriatic",
    description: "Explore the UNESCO-listed Old Town with a private historian. Walk the ancient walls, visit the Rector's Palace, and enjoy lunch at a cliffside restaurant.",
    highlights: ["Guided Old Town tour", "Lunch with sea view", "Rector's Palace visit"],
    meals: ["Breakfast", "Lunch", "Dinner"],
    image: img2,
  },
  {
    id: 3,
    location: "Kotor, Montenegro",
    title: "Montenegro's Magnificent Bay",
    description: "Cruise into Europe's southernmost fjord. Discover Kotor's medieval old town and ascend to the fortress for panoramic views. Optional visit to Our Lady of the Rocks.",
    highlights: ["Kotor Fortress hike", "Old Town exploration", "Optional boat trip"],
    meals: ["Breakfast", "Lunch", "Dinner"],
    image: img3,
  },
  {
    id: 4,
    location: "Saranda, Albania",
    title: "Albanian Riviera Discovery",
    description: "Visit the ancient ruins of Butrint, a UNESCO World Heritage site. Explore layers of Greek, Roman, Byzantine, and Venetian history before a seafood lunch in Saranda.",
    highlights: ["Butrint ruins", "Coastal scenic drive", "Local seafood lunch"],
    meals: ["Breakfast", "Lunch", "Dinner"],
    image: img4,
  },
  {
    id: 5,
    location: "Corfu, Greece",
    title: "Corfu: Venetian Elegance",
    description: "Dock in the charming Corfu Town. Tour the Old Fortress, wander through the UNESCO-listed old town, and visit the Achilleion Palace, once home to Empress Sisi.",
    highlights: ["Old Fortress visit", "Achilleion Palace tour", "Historic walking tour"],
    meals: ["Breakfast", "Lunch", "Dinner"],
    image: img5,
  },
  {
    id: 6,
    location: "Paxos, Greece",
    title: "Paxos & Antipaxos Islands",
    description: "Discover the secret gems of the Ionian Sea. Swim in the crystal-clear waters of Antipaxos and explore the picturesque village of Gaios on Paxos.",
    highlights: ["Boat to Antipaxos", "Swim in turquoise bays", "Village stroll in Gaios"],
    meals: ["Breakfast", "Lunch", "Dinner"],
    image: img6,
  },
  {
    id: 7,
    location: "Hvar, Croatia",
    title: "Hvar: Queen of the Islands",
    description: "Return to Croatia and the glamorous island of Hvar. Visit the Spanish Fortress, explore lavender fields, and enjoy a private wine tasting at a historic vineyard.",
    highlights: ["Spanish Fortress visit", "Lavender field tour", "Private wine tasting", "Seafood dinner"],
    meals: ["Breakfast", "Lunch", "Dinner"],
    image: img7,
  },
  {
    id: 8,
    location: "Korcula, Croatia",
    title: "Korcula: Birthplace of Marco Polo",
    description: "Explore the medieval town said to be Marco Polo's birthplace. Walk through narrow stone streets, taste local white wine Grk, and enjoy a traditional farewell dinner.",
    highlights: ["Old Town walking tour", "Marco Polo house", "Farewell dinner"],
    meals: ["Breakfast", "Lunch", "Dinner"],
    image: img8,
  },
  {
    id: 9,
    location: "Split, Croatia",
    title: "Departure from Split",
    description: "Disembark after breakfast and enjoy a private tour of Diocletian's Palace before your transfer to Split Airport for your onward journey.",
    highlights: ["Diocletian's Palace tour", "Private airport transfer"],
    meals: ["Breakfast"],
    image: img9,
  },
];

const VoyageItinerary = () => {
  const [view, setView]     = useState("timeline");
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (id) => setOpenDay(openDay === id ? null : id);

  return (
    <section className="vi-section">
      <div className="vi-container">

        <h4 className="vi-subtitle">DAY BY DAY</h4>
        <h2 className="vi-title">Your Itinerary</h2>
        <p className="vi-desc">
          Nine extraordinary days exploring the best of the Adriatic coast,
          from ancient cities to hidden islands.
        </p>

        {/* Toggle */}
        <div className="vi-toggle">
          <button className={view === "timeline" ? "vi-btn-active" : ""} onClick={() => setView("timeline")}>
            Timeline View
          </button>
          <button className={view === "list" ? "vi-btn-active" : ""} onClick={() => setView("list")}>
            List View
          </button>
        </div>

        {/* ===== TIMELINE VIEW ===== */}
        {view === "timeline" && (
          <div className="vi-timeline">
            {itineraryData.map((day, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={day.id} className="vi-tl-item">
                  <div className={`vi-tl-content ${isLeft ? "vi-left" : "vi-right"}`}>
                    <div className="vi-card">
                      <img
                        src={day.image}
                        alt={day.title}
                        className={`vi-card-img ${isLeft ? "vi-img-left" : "vi-img-right"}`}
                      />
                      <div className="vi-card-body">
                        <p className="vi-card-loc">{day.location}</p>
                        <h3 className="vi-card-title">{day.title}</h3>
                        <p className="vi-card-text">{day.description}</p>
                        <div className="vi-card-meals">
                          <FaUtensils className="vi-meal-icon" />
                          {day.meals.join(" • ")}
                        </div>
                      </div>
                    </div>
                    <div className="vi-circle">{day.id}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ===== LIST VIEW ===== */}
        {view === "list" && (
          <div className="vi-list-view">
            {itineraryData.map((day) => (
              <div key={day.id} className={`vi-list-item ${openDay === day.id ? "vi-open" : ""}`}>
                <div className="vi-list-header" onClick={() => toggleDay(day.id)}>
                  <div className="vi-list-num">{day.id}</div>
                  <div className="vi-list-summary">
                    <h3>{day.title}</h3>
                    <p>{day.location}</p>
                  </div>
                  <div className="vi-list-arrow">
                    {openDay === day.id ? <IoChevronUp /> : <IoChevronDown />}
                  </div>
                </div>

                {openDay === day.id && (
                  <div className="vi-list-content">
                    <div className="vi-list-inner">
                      <img src={day.image} alt={day.title} className="vi-list-img" />
                      <div className="vi-list-text">
                        <p className="vi-list-desc">{day.description}</p>
                        {day.highlights && (
                          <div className="vi-highlights">
                            <h4>Highlights</h4>
                            <div className="vi-highlight-grid">
                              {day.highlights.map((h, i) => (
                                <div key={i} className="vi-highlight">› {h}</div>
                              ))}
                            </div>
                          </div>
                        )}
                        <p className="vi-list-meals">
                          <FaUtensils className="vi-meal-icon" /> Meals: {day.meals.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default VoyageItinerary;