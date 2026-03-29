import React, { useState } from "react";
import styles from "./Accommodation.module.css";

import imgI1 from "../../assets2/japan/Imperial Odyssey/Accommodations/city1/1.png"
import imgI2 from "../../assets2/japan/Imperial Odyssey/Accommodations/city1/2.png"
import imgI3 from "../../assets2/japan/Imperial Odyssey/Accommodations/city1/3.png"
import imgI4 from "../../assets2/japan/Imperial Odyssey/Accommodations/city1/4.png"
import imgI5 from "../../assets2/japan/Imperial Odyssey/Accommodations/city1/5.png"
import imgI6 from "../../assets2/japan/Imperial Odyssey/Accommodations/city1/6.png"

import imgII1 from "../../assets2/japan/Imperial Odyssey/Accommodations/city2/1.png"
import imgII2 from "../../assets2/japan/Imperial Odyssey/Accommodations/city2/2.png"
import imgII3 from "../../assets2/japan/Imperial Odyssey/Accommodations/city2/3.png"
import imgII4 from "../../assets2/japan/Imperial Odyssey/Accommodations/city2/4.png"
import imgII5 from "../../assets2/japan/Imperial Odyssey/Accommodations/city2/5.png"
import imgII6 from "../../assets2/japan/Imperial Odyssey/Accommodations/city2/6.png"

import imgIII1 from "../../assets2/japan/Imperial Odyssey/Accommodations/city3/1.png"
import imgIII2 from "../../assets2/japan/Imperial Odyssey/Accommodations/city3/2.png"
import imgIII3 from "../../assets2/japan/Imperial Odyssey/Accommodations/city3/3.png"
import imgIII4 from "../../assets2/japan/Imperial Odyssey/Accommodations/city3/4.png"
import imgIII5 from "../../assets2/japan/Imperial Odyssey/Accommodations/city3/5.png"
import imgIII6 from "../../assets2/japan/Imperial Odyssey/Accommodations/city3/6.png"

import imgIV1 from "../../assets2/japan/Imperial Odyssey/Accommodations/city4/1.png"
import imgIV2 from "../../assets2/japan/Imperial Odyssey/Accommodations/city4/2.png"
import imgIV3 from "../../assets2/japan/Imperial Odyssey/Accommodations/city4/3.png"
import imgIV4 from "../../assets2/japan/Imperial Odyssey/Accommodations/city4/4.png"
import imgIV5 from "../../assets2/japan/Imperial Odyssey/Accommodations/city4/5.png"
import imgIV6 from "../../assets2/japan/Imperial Odyssey/Accommodations/city4/6.png"

import imgV1 from "../../assets2/japan/Imperial Odyssey/Accommodations/city5/1.png"
import imgV2 from "../../assets2/japan/Imperial Odyssey/Accommodations/city5/2.png"
import imgV3 from "../../assets2/japan/Imperial Odyssey/Accommodations/city5/3.png"
import imgV4 from "../../assets2/japan/Imperial Odyssey/Accommodations/city5/4.png"
import imgV5 from "../../assets2/japan/Imperial Odyssey/Accommodations/city5/5.png"
import imgV6 from "../../assets2/japan/Imperial Odyssey/Accommodations/city5/6.png"

// 👉 Replace image paths with your actual assets (import or public folder)
const data = {
  TOKYO: {
    main: {
      title: "The Peninsula Tokyo",
      nights: "3 nights",
      image: imgI1,
      description:
        "Rising above the historic Imperial Palace gardens, The Peninsula Tokyo epitomizes Japanese hospitality fused with contemporary luxury.",
      tags: [
        "Imperial Palace views",
        "Rooftop terrace dining",
        "Award-winning spa",
      ],
    },
    hotels: [
      { title: "Bvlgari Hotel", nights: "3 nights", img: imgI2 },
      { title: "The Prince Gallery", nights: "2 nights", img: imgI3},
      { title: "The Prince Sakura Tower", nights: "4 nights", img: imgI4},
      { title: "The Ritz-Carlton", nights: "2 nights", img: imgI5 },
      { title: "Palace Hotel", nights: "2 nights", img: imgI6 },
    ],
  },

  HAKONE: {
    main: {
      title: "Gora Kadan",
      nights: "2 nights",
      image: imgII1,
      description:
        "Once the summer retreat of Japan’s imperial family, Gora Kadan is a renowned ryokan offering private hot springs and refined kaiseki cuisine.",
      tags: [
        "Private onsen suites",
        "Imperial heritage",
        "Multi-course kaiseki",
      ],
    },
    hotels: [
      { title: "Hyatt Regency", nights: "3 nights", img: imgII2 },
      { title: "Hakone Kyuan", nights: "2 nights", img: imgII3 },
      { title: "Yumoto Fujiya Hotel", nights: "4 nights", img: imgII4 },
      { title: "Prince Hakone Lake", nights: "2 nights", img: imgII5 },
      { title: "Hakone Ashinoko", nights: "2 nights", img: imgII6 },
    ],
  },

  KYOTO: {
    main: {
      title: "Sowaka Kyoto",
      nights: "4 nights",
      image: imgIII1,
      description:
        "Hidden in Kyoto’s Gion district, Sowaka blends traditional machiya architecture with refined modern comfort.",
      tags: [
        "Historic machiya setting",
        "Gion location",
        "Michelin-starred restaurant",
      ],
    },
    hotels: [
      { title: "Six Senses", nights: "3 nights", img: imgIII2 },
      { title: "Ritz Kyoto", nights: "2 nights", img: imgIII3 },
      { title: "Park Hyatt", nights: "4 nights", img: imgIII4 },
      { title: "Chapter Kyoto", nights: "2 nights", imgIII5 },
      { title: "Mitsui Garden", nights: "2 nights", img: imgIII5 },
    ],
  },

  KANAZAWA: {
    main: {
      title: "Hyatt Centric Kanazawa",
      nights: "2 nights",
      image: imgIV1,
      description:
        "A contemporary reflection of Kanazawa’s artisan heritage, blending traditional craftsmanship with modern design.",
      tags: [
        "Local artisan design",
        "Central location",
        "Kanazawa cuisine",
      ],
    },
    hotels: [
      { title: "Hyatt House", nights: "3 nights", img: imgIV2 },
      { title: "Utaimachi", nights: "2 nights", img: imgIV3 },
      { title: "Kinjohro", nights: "4 nights", img: imgIV4 },
      { title: "Motoyu Ishiya", nights: "2 nights", img: imgIV5 },
      { title: "UAN Kanazawa", nights: "2 nights", img: imgIV6 },
    ],
  },

  OSAKA: {
    main: {
      title: "W Osaka",
      nights: "2 nights",
      image: imgV1,
      description:
        "Set on Osaka’s iconic boulevard, W Osaka offers bold luxury, vibrant energy, and panoramic city views.",
      tags: [
        "Luxury lifestyle",
        "City views",
        "Fine dining",
      ],
    },
    hotels: [
      { title: "Ritz-Carlton", nights: "3 nights", img: imgV2 },
      { title: "Four Seasons", nights: "2 nights", img: imgV3 },
      { title: "Waldorf Astoria", nights: "4 nights", img: imgV4 },
      { title: "Conrad Osaka", nights: "2 nights", img: imgV5 },
      { title: "InterContinental", nights: "2 nights", img: imgV6 },
    ],
  },
};

const tabs = Object.keys(data);

export default function Accommodation() {
  const [activeTab, setActiveTab] = useState("TOKYO");
  const current = data[activeTab];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header2}>
            <p className={styles.subheading}>WHERE YOU'LL STAY</p>
            <h1 className={styles.heading}>Exceptional Accommodations</h1>
        </div>
        <p className={styles.description}>
          Each property has been hand-selected for its exceptional service,
          prime location, and authentic character.
        </p>
      </div>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.mainCard}>
        <div className={styles.imageSection}>
          <img src={current.main.image} alt={current.main.title} />
        </div>

        <div className={styles.contentSection}>
          <p className={styles.location}>
            {activeTab} | {current.main.nights}
          </p>
          <h2 className={styles.title}>{current.main.title}</h2>
          <p className={styles.text}>{current.main.description}</p>

          <div className={styles.tags}>
            {current.main.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {current.hotels.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.img} alt={card.title} />
            <div className={styles.cardOverlay}>
              <p>{card.title}</p>
              <span>{card.nights}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* CSS unchanged */