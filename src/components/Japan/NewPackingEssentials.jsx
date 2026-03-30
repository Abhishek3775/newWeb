import React from "react";
import styles from "./NewPackingEssentials.module.css";

import springImg from "../../assets/japan-spring.png";
import summerImg from "../../assets/japan-summer.png";
import autumnImg from "../../assets/japan-autumn.png";
import winterImg from "../../assets/japan-winter.png";
import tickIcon from "../../assets/correct.png";

const packingData = [
  {
    season: "SPRING PACKING LIST",
    image: springImg,
    items: [
      "Light layers for variable temperatures",
      "Waterproof jacket for spring showers",
      "Comfortable walking shoes",
      "Light scarf for cool evenings",
      "Sunglasses and sunscreen",
    ],
  },
  {
    season: "SUMMER PACKING LIST",
    image: summerImg,
    items: [
      "Lightweight, breathable clothing",
      "Umbrella (both rain and sun)",
      "Portable fan or cooling towel",
      "Yukata for festival evenings",
      "Insect repellent",
    ],
  },
  {
    season: "AUTUMN PACKING LIST",
    image: autumnImg,
    items: [
      "Medium layers for cool days",
      "Light jacket or cardigan",
      "Comfortable hiking shoes",
      "Camera for foliage photos",
      "Warm accessories for late November",
    ],
  },
  {
    season: "WINTER PACKING LIST",
    image: winterImg,
    items: [
      "Heavy winter coat",
      "Thermal underwear",
      "Waterproof boots",
      "Hat, gloves, and scarf",
      "Hand warmers (kairo)",
    ],
  },
];

const NewPackingEssentials = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <p className={styles.subtitle}>BE PREPARED</p>
        <h2 className={styles.title}>Packing Essentials</h2>
      </div>

      <div className={styles.grid}>
        {packingData.map((season, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${season.image})` }}
          >
            <div className={styles.overlay}></div>

            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{season.season}</h3>

              <div className={styles.list}>
                {season.items.map((item, i) => (
                  <div key={i} className={styles.listItem}>
                    <img src={tickIcon} alt="tick" className={styles.icon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPackingEssentials;