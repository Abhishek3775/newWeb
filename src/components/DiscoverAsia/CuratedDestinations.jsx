import React from "react";
import styles from "./CuratedDestinations.module.css";

// ===== Import images =====
import japanImg from "../../assets/japan.png";
import indiaImg from "../../assets/india.png";
import myanmarImg from "../../assets/myanmar.png";
import vietnamImg from "../../assets/vietnam.png";
import srilankaImg from "../../assets/srilanka.png";
import baliImg from "../../assets/bali.png";

const destinations = [
  { id: 1, title: "JAPAN", image: japanImg },
  { id: 2, title: "INDIA", image: indiaImg },
  { id: 3, title: "MYANMAR", image: myanmarImg },
  { id: 4, title: "VIETNAM", image: vietnamImg },
  { id: 5, title: "SRI LANKA", image: srilankaImg },
  { id: 6, title: "BALI", image: baliImg },
];

const CuratedDestinations = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top Header */}
        <div className={styles.topRow}>
          <div className={styles.leftContent}>
            <p className={styles.subTitle}>CURATED DESTINATIONS</p>
            <h2 className={styles.heading}>Asia Awaits</h2>
          </div>

          <div className={styles.rightContent}>
            <p>
              Six extraordinary destinations, each offering a unique window
              into Asia's soul. Hand-selected for the discerning traveller.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {destinations.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.overlay}></div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className={styles.buttonWrap}>
          <button className={styles.viewMoreBtn}>VIEW MORE</button>
        </div>
      </div>
    </section>
  );
};

export default CuratedDestinations;