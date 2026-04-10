import React from "react";
import styles from "./JourneyTypes.module.css";

import safariImg from "../../assets/safari.png";
import islandImg from "../../assets/island.png";
import cultureImg from "../../assets/culture.png";
import arcticImg from "../../assets/arctic.png";
import coastalImg from "../../assets/coastal.png";
import desertImg from "../../assets/desert.png";
import destinationMap from "../../assets/destinationMap.png";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const journeyData = [
  {
    title: "Wilderness Safari",
    region: "AFRICA & BEYOND",
    description:
      "Track the Big Five across private conservancies with expert naturalists.",
    destinations: "14 DESTINATIONS",
    image: safariImg,
  },
  {
    title: "Island Escape",
    region: "INDIAN & PACIFIC OCEANS",
    description:
      "Private islands, overwater sanctuaries, and pristine lagoons for the discerning.",
    destinations: "11 DESTINATIONS",
    image: islandImg,
  },
  {
    title: "Cultural Immersion",
    region: "ASIA, MIDDLE EAST & EUROPE",
    description:
      "Private museum access, master craftsmen visits, and living-history encounters.",
    destinations: "18 DESTINATIONS",
    image: cultureImg,
  },
  {
    title: "Arctic Adventure",
    region: "NORWAY, ICELAND & GREENLAND",
    description:
      "Aurora chasing, polar expeditions, and slumbers under boreal light.",
    destinations: "6 DESTINATIONS",
    image: arcticImg,
  },
  {
    title: "Coastal & Maritime",
    region: "MEDITERRANEAN & PACIFIC",
    description:
      "Superyacht charters, cliff-top retreats, and exclusive sea-to-table gastronomy.",
    destinations: "16 DESTINATIONS",
    image: coastalImg,
  },
  {
    title: "Desert Journey",
    region: "SAHARA, ARABIA & OUTBACK",
    description:
      "Starlit desert camps, dune expeditions, and encounters with ancient caravan routes.",
    destinations: "8 DESTINATIONS",
    image: desertImg,
  },
];

const JourneyTypes = () => {
  const navigate = useNavigate();
  return (
    <>
    <section className={styles.section}>
      <div className={styles.topBar}>
        <div className={styles.headingBlock}>
          <span className={styles.kicker}>JOURNEY TYPES</span>
          <h2>Curated by Experience</h2>
        </div>

        <div className={styles.descriptionBlock}>
          <p>
            Every journey begins with a conversation. Tell us what moves you,
            and we architect an experience that surpasses your imagination.
          </p>
        </div>
      </div>

      <div className={styles.wrapper}>
        {/* Left Arrow */}
        <button className={`${styles.arrow} ${styles.leftArrow}`}>
          <FiChevronLeft />
        </button>

        {/* Cards */}
        <div className={styles.grid}>
          {journeyData.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.overlay}></div>

              <div className={styles.cardContent}>
                <div className={styles.destinationTag}>{item.destinations}</div>

                <div className={styles.bottomContent}>
                  <h3>{item.title}</h3>
                  <p className={styles.region}>{item.region}</p>
                  <p className={styles.desc}>{item.description}</p>

                  {/* {item.miniTags && (
                    <div className={styles.miniTagBox}>
                      {item.miniTags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className={`${styles.arrow} ${styles.rightArrow}`}>
          <FiChevronRight />
        </button>
      </div>
    </section>
    <section>
      <img src={destinationMap} alt="Destination Map" onClick={()=>{navigate('/discover-asia')}} style={{cursor:'pointer'}}/>
    </section>
    </>
  );
};

export default JourneyTypes;