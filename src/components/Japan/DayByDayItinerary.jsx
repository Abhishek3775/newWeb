import React, { useState } from "react";
import styles from "./DayByDayItinerary.module.css";

import map from "../../assets2/japan/Imperial Odyssey/2-I.png";
import img1 from "../../assets2/japan/Imperial Odyssey/DayByDay/1.png";
import img2 from "../../assets2/japan/Imperial Odyssey/DayByDay/2.png";
import img3 from "../../assets2/japan/Imperial Odyssey/DayByDay/3.png";
import img4 from "../../assets2/japan/Imperial Odyssey/DayByDay/4.png";
import img5 from "../../assets2/japan/Imperial Odyssey/DayByDay/5.png";
import img6 from "../../assets2/japan/Imperial Odyssey/DayByDay/6.png";
import img7 from "../../assets2/japan/Imperial Odyssey/DayByDay/7.png";
import img8 from "../../assets2/japan/Imperial Odyssey/DayByDay/8.png";
import img9 from "../../assets2/japan/Imperial Odyssey/DayByDay/9.png";

import { LuBed } from "react-icons/lu";
import { CiForkAndKnife } from "react-icons/ci";


const GOLD = "#c09551";

const itineraryData = [
  {
    day: 1,
    city: "TOKYO",
    subtitle: "Welcome to Japan",
    title: "Arrive at Tokyo",
    location: "The Peninsula Tokyo",
    meals: ["Dinner"],
    description:
      "Your journey begins as you're met at Haneda or Narita Airport by your private guide and whisked to your luxury hotel in the heart of Tokyo. After settling in, enjoy a welcome dinner at a renowned restaurant where traditional Japanese cuisine meets contemporary innovation.",
    highlights: [
      "VIP airport meet and greet",
      "Welcome dinner at acclaimed restaurant",
      "Private transfer in luxury vehicle",
    ],
    image: img1,
  },
  {
    day: 2,
    city: "TOKYO",
    subtitle: "The Emperor's City",
    title: "Imperial Tokyo",
    location: "The Peninsula Tokyo",
    meals: ["Breakfast", "Lunch", "Dinner"],
    description:
      "Start with an early-morning visit to the Imperial Palace East Gardens before the crowds. Discover the contrast of old Edo and modern Tokyo—from the peaceful Meiji Shrine to the vibrant Shibuya Crossing. End the day with an omakase sushi experience at an intimate 8-seat counter.",
    highlights: [
      "Private Imperial Palace gardens tour",
      "Omakase dinner at exclusive sushi counter",
      "Meiji Shrine with Shinto priest blessing",
    ],
    image: img2,
  },
  {
    day: 3,
    city: "HAKONE",
    subtitle: "Journey to the Mountains",
    title: "Tokyo to Hakone",
    location: "Gora Kadan",
    meals: ["Breakfast", "Lunch", "Dinner"],
    description:
      "Depart Tokyo for the scenic mountain region of Hakone, known for its hot springs and views of Mount Fuji. Cruise across Lake Ashi and ride the Hakone Ropeway for spectacular volcanic landscapes before arriving at your traditional ryokan retreat.",
    highlights: [
      "Scenic transfer from Tokyo to Hakone",
      "Lake Ashi cruise with Fuji views",
      "Hakone Ropeway experience",
    ],
    image: img3,
  },
  {
    day: 4,
    city: "HAKONE",
    subtitle: "Nature's Canvas",
    title: "Hakone Exploration",
    location: "Gora Kadan",
    meals: ["Breakfast", "Lunch", "Dinner"],
    description:
      "Spend the day exploring the natural beauty of Hakone. Visit the Hakone Open-Air Museum, stroll through peaceful gardens, and enjoy panoramic mountain views. Later, relax in the soothing waters of your ryokan's private onsen.",
    highlights: [
      "Visit Hakone Open-Air Museum",
      "Scenic mountain viewpoints",
      "Traditional tea experience",
    ],
    image: img4,
  },
  {
    day: 5,
    city: "KYOTO",
    subtitle: "Bullet Train to Cultural Heart",
    title: "Hakone to Kyoto",
    location: "Sowaka Kyoto",
    meals: ["Breakfast", "Lunch", "Dinner"],
    description:
      "Transfer to Odawara Station and board the iconic Shinkansen bullet train to Kyoto. Upon arrival, check into your boutique hotel and begin discovering Japan's ancient capital with a peaceful walk through historic streets and temples.",
    highlights: [
      "Shinkansen bullet train experience",
      "Arrival in Kyoto's historic district",
      "Traditional Kyoto dinner",
    ],
    image: img5,
  },
  {
    day: 6,
    city: "KYOTO",
    subtitle: "Sacred Spaces",
    title: "Temples of Kyoto",
    location: "Sowaka Kyoto",
    meals: ["Breakfast", "Lunch", "Dinner"],
    description:
      "Explore Kyoto's most sacred temples and shrines, including the dazzling Kinkaku-ji and the contemplative rock garden at Ryoan-ji. Participate in a private tea ceremony in a centuries-old machiya townhouse.",
    highlights: [
      "Private guided temple tours",
      "Exclusive access to restricted areas",
      "Traditional tea ceremony experience",
    ],
    image: img6,
  },
  {
    day: 7,
    city: "KYOTO",
    subtitle: "An Enchanted Evening",
    title: "Geisha Quarter",
    location: "Sowaka Kyoto",
    meals: ["Breakfast", "Lunch", "Dinner"],
    description:
      "Spend the morning at the vermillion torii gates of Fushimi Inari. In the evening, enter the exclusive world of Gion for a private geisha performance and traditional kaiseki dinner in a historic ochaya teahouse.",
    highlights: [
      "Private geisha performance",
      "Exclusive teahouse kaiseki dinner",
      "Gion district walking tour",
    ],
    image: img7,
  },
  {
    day: 8,
    city: "KANAZAWA",
    subtitle: "The City of Gold",
    title: "Kyoto to Kanazawa",
    location: "Hyatt Centric Kanazawa",
    meals: ["Breakfast", "Lunch", "Dinner"],
    description:
      "Travel to Kanazawa, Japan's best-kept secret. Known for its gold leaf artistry and preserved samurai districts, this city rivals Kyoto in cultural depth without the crowds. Explore the stunning Kenroku-en garden.",
    highlights: [
      "Gold leaf artisan workshop visit",
      "Kenroku-en Garden exploration",
      "Samurai district walking tour",
    ],
    image: img8,
  },
  {
    day: 9,
    city: "KANAZAWA",
    subtitle: "Masters of Craft",
    title: "Kanazawa Artisans",
    location: "Hyatt Centric Kanazawa",
    meals: ["Breakfast", "Lunch", "Dinner"],
    description:
      "Immerse yourself in Kanazawa's thriving artisan culture. Visit master craftspeople creating traditional gold leaf, Kutani ceramics, and Kaga lacquerware before a farewell dinner featuring Kanazawa's legendary fresh seafood.",
    highlights: [
      "Private master craftsperson visits",
      "Hands-on gold leaf workshop",
      "Gallery and museum tours",
    ],
    image: img9,
  },
];

const HotelIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
    <path d="M1.2 9.2V4.1H9.8V9.2" stroke={GOLD} strokeWidth="0.8" />
    <path d="M1.2 4.1L5.5 1.2L9.8 4.1" stroke={GOLD} strokeWidth="0.8" />
    <path d="M3.4 5.6H4.8" stroke={GOLD} strokeWidth="0.8" />
    <path d="M6.2 5.6H7.6" stroke={GOLD} strokeWidth="0.8" />
  </svg>
);

const MealIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 1.6V5.2" stroke={GOLD} strokeWidth="0.8" />
    <path d="M3.4 1.6V5.2" stroke={GOLD} strokeWidth="0.8" />
    <path d="M2 3.5H3.4" stroke={GOLD} strokeWidth="0.8" />
    <path d="M6.8 1.6V9.2" stroke={GOLD} strokeWidth="0.8" />
    <path d="M8.6 1.6C8.6 3.2 8.1 4 6.8 4" stroke={GOLD} strokeWidth="0.8" />
  </svg>
);

const BulletIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0, marginTop: 2 }}>
    <path
      d="M6 1.4L7.4 4.3L10.6 4.7L8.3 6.9L8.9 10L6 8.5L3.1 10L3.7 6.9L1.4 4.7L4.6 4.3L6 1.4Z"
      fill="none"
      stroke={GOLD}
      strokeWidth="0.8"
    />
  </svg>
);

const DayByDayItinerary = () => {
  const [viewMode, setViewMode] = useState("quick");

  return (
    <section className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.label}>DAY BY DAY</p>
            <h2 className={styles.title}>Your Itinerary</h2>
          </div>

          <div className={styles.toggleButtons}>
            <button
              className={`${styles.viewBtn} ${viewMode === "quick" ? styles.active : ""}`}
              onClick={() => setViewMode("quick")}
            >
              QUICK VIEW
            </button>
            <button
              className={`${styles.viewBtn} ${viewMode === "detailed" ? styles.active : ""}`}
              onClick={() => setViewMode("detailed")}
            >
              DETAILED
            </button>
          </div>
        </div>

        {viewMode === "quick" && (
          <div className={styles.quickViewContainer}>
            <div className={styles.daysList}>
              {itineraryData.map((item) => (
                <div key={item.day} className={styles.dayItem}>
                  <div className={styles.dayNumber}>Day {item.day}</div>

                  <div className={styles.dayContent}>
                    <div className={styles.dayCity}>{item.city}</div>
                    <div className={styles.dayTitle}>{item.title}</div>
                    <div className={styles.dayLocation}>
                      <LuBed />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.mapContainer}>
              <img src={map} alt="Japan route map" className={styles.mapImage} />
            </div>
          </div>
        )}

        {viewMode === "detailed" && (
          <div className={styles.detailedViewContainer}>
            {itineraryData.map((item, idx) => {
              const textLeft = idx % 2 === 0;

              return (
                <div
                  key={item.day}
                  className={`${styles.detailedDay} ${textLeft ? styles.textLeft : styles.textRight}`}
                >
                  <div className={styles.dayCol}>
                    <span className={styles.bigDay}>Day {item.day}</span>
                  </div>

                  <div className={styles.contentCol}>
                    <div className={styles.textPanel}>
                      <div className={styles.cityBadge}>{item.city}</div>
                      <h3 className={styles.detailedTitle}>{item.title}</h3>
                      <p className={styles.subtitle}>{item.subtitle}</p>
                      <p className={styles.description}>{item.description}</p>

                      <div className={styles.highlightsLabel}>TODAY&apos;S HIGHLIGHTS</div>

                      <ul className={styles.highlightsList}>
                        {item.highlights.map((h, i) => (
                          <li key={i}>
                            <BulletIcon />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={styles.footer}>
                        <div className={styles.footerItem}>
                          <LuBed color="#c09551"/>
                          <span>{item.location}</span>
                        </div>
                        <div className={styles.footerItem}>
                          <CiForkAndKnife color="#c09551"/>
                          <span>{item.meals.join(", ")}</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.imagePanel}>
                      <img src={item.image} alt={item.title} className={styles.detailedImage} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default DayByDayItinerary;