import React, { useState } from "react";
import styles from "./JourneyItinerary.module.css";

import mapImage from "../../assets/journey-map.png";
import locationIcon from "../../assets/location.png";
import mealIcon from "../../assets/meal.png";

import dubrovnikArrival from "../../assets/dubrovnik-arrival.png";
import kotorImage from "../../assets/kotor.png";
import sarandaImage from "../../assets/saranda.jpg";
import corfuImage from "../../assets/corfu.jpg";
import paxosImage from "../../assets/corfu.jpg";
import hvarImage from "../../assets/saranda.jpg";
import korculaImage from "../../assets/kotor.png";
import splitImage from "../../assets/corfu.jpg";

import ItineraryModal from "./ItineraryModal";

const itineraryData = [
  {
    day: 1,
    title: "Arrival in Dubrovnik",
    location: "Dubrovnik, Croatia",
    image: dubrovnikArrival,
    description:
      "Arrive at Dubrovnik Airport where your private transfer awaits. Embark your vessel and settle into your ocean-view suite before a welcome cocktail reception and gala dinner.",
    highlights: [
      "Private airport transfer",
      "Welcome champagne reception",
      "Gala dinner aboard",
      "Overnight docked in old port",
    ],
    meals: "Dinner",
  },
  {
    day: 2,
    title: "The Pearl of the Adriatic",
    location: "Dubrovnik, Croatia",
    image: dubrovnikArrival,
    description:
      "Explore Dubrovnik’s UNESCO-listed Old Town, dramatic stone walls, and rich maritime history.",
  },
  {
    day: 3,
    title: "Montenegro's Magnificent Bay",
    location: "Kotor, Montenegro",
    image: kotorImage,
    description:
      "Sail into the breathtaking Bay of Kotor and discover medieval architecture, mountain-backed scenery, and a timeless old town.",
  },
  {
    day: 4,
    title: "Albanian Riviera Discovery",
    location: "Saranda, Albania",
    image: sarandaImage,
    description:
      "Experience Albania’s stunning coastline, crystal waters, and hidden cultural treasures along the Riviera.",
  },
  {
    day: 5,
    title: "Corfu: Venetian Elegance",
    location: "Corfu, Greece",
    image: corfuImage,
    description:
      "Wander Corfu’s elegant old town, filled with Venetian architecture, charming alleys, and Mediterranean atmosphere.",
  },
  {
    day: 6,
    title: "Paxos & Antipaxos Islands",
    location: "Paxos, Greece",
    image: paxosImage,
    description:
      "Cruise through turquoise waters and secluded coves around the idyllic islands of Paxos and Antipaxos.",
  },
  {
    day: 7,
    title: "Hvar: Queen of the Islands",
    location: "Hvar, Croatia",
    image: hvarImage,
    description:
      "Discover glamorous harbors, lavender hills, and historic streets in one of Croatia’s most beloved islands.",
  },
  {
    day: 8,
    title: "Korčula: Birthplace of Marco Polo",
    location: "Korčula, Croatia",
    image: korculaImage,
    description:
      "Step into the timeless charm of Korčula, a fortified medieval town often associated with the legendary explorer Marco Polo.",
  },
  {
    day: 9,
    title: "Departure from Split",
    location: "Split, Croatia",
    image: splitImage,
    description:
      "Conclude your journey in Split, where Roman history, vibrant waterfront life, and coastal beauty come together.",
  },
];

const JourneyItinerary = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          {/* TOP HEADING */}
          <div className={styles.topContent}>
            <span className={styles.smallLabel}>DAY BY DAY</span>
            <h2 className={styles.mainTitle}>Your Itinerary</h2>
            <p className={styles.subText}>
              Nine extraordinary days exploring the best of the Adriatic coast,
              from ancient cities to hidden islands.
            </p>
          </div>

          <div className={styles.grid}>
            {/* LEFT MAP */}
            <div className={styles.mapWrapper}>
              <img
                src={mapImage}
                alt="Journey Route Map"
                className={styles.mapImage}
              />
            </div>

            {/* RIGHT ACCORDION */}
            <div className={styles.rightPanel}>
              {itineraryData.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    className={`${styles.accordionItem} ${
                      isActive ? styles.activeItem : ""
                    }`}
                  >
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className={styles.headerLeft}>
                        <div className={styles.dayBadge}>{item.day}</div>

                        <div className={styles.headerText}>
                          <h3>{item.title}</h3>

                          <div className={styles.locationRow}>
                            <img
                              src={locationIcon}
                              alt="Location"
                              className={styles.locationIcon}
                            />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <span className={styles.arrow}>
                        {isActive ? "⌃" : "⌄"}
                      </span>
                    </button>

                    {isActive && item.description && (
                      <div className={styles.accordionContent}>
                        <div
                          className={styles.contentImageWrapper}
                          onClick={() => openModal(index)}
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className={styles.contentImage}
                          />
                        </div>

                        <p className={styles.contentDescription}>
                          {item.description}
                        </p>

                        {item.highlights?.length > 0 && (
                          <div className={styles.highlightsBlock}>
                            <h1 className={styles.highlightsBlocktitle}>Highlights</h1>
                            <div className={styles.highlightsGrid}>
                              {item.highlights.map((highlight, i) => (
                                <div key={i} className={styles.highlightItem}>
                                  <span className={styles.chevron}>›</span>
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.meals && (
                          <div className={styles.mealRow}>
                            <img
                              src={mealIcon}
                              alt="Meal"
                              className={styles.mealIcon}
                            />
                            <span>Meals: {item.meals}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ItineraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        slides={itineraryData.filter((item) => item.image)}
        initialSlide={modalIndex}
      />
    </>
  );
};

export default JourneyItinerary;