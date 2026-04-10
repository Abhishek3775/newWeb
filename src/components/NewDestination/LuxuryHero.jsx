import React from "react";
import styles from "./LuxuryHero.module.css";
import heroBg from "../../assets2/Destination/1.png";
import { FiSearch } from "react-icons/fi";

const statsData = [
  {
    number: "70+",
    label: "COUNTRIES",
  },
  {
    number: "500+",
    label: "CURATED PROPERTIES",
  },
  {
    number: "25",
    label: "YEARS OF EXPERTISE",
  },
  {
    number: "100%",
    label: "BESPOKE ITINERARIES",
  },
];

const LuxuryHero = () => {
  return (
    <>
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          The World&apos;s <br />
          Most Coveted <br />
          Destinations
        </h1>

        <p className={styles.subText}>
          Handpicked sanctuaries, untouched wilderness, and
          <br className={styles.desktopBreak} />
          storied cities curated exclusively for the discerning few.
        </p>

        <div className={styles.searchBox}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search destinations, experiences..."
            className={styles.input}
          />
        </div>
      </div>
    </section>

    {/* // luxury hero stats  */}
        <section className={styles.statsSection}>
      <div className={styles.container}>
        {statsData.map((item, index) => (
          <div key={index} className={styles.statItem}>
            <h3 className={styles.number}>{item.number}</h3>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default LuxuryHero;