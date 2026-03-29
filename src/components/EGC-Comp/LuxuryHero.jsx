import React from "react";
import styles from "./LuxuryHero.module.css";
import bgImage from "../../assets2/EGC Signature/luxary hotel/1.png"; // replace with your image

export default function LuxuryHero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Luxury Group <br /> Holidays
        </h1>

        <p className={styles.subtitle}>
          Where extraordinary journeys meet impeccable orchestration. <br />
          Crafted for those who expect nothing less than perfection.
        </p>

        
      </div>
      <div className={styles.LDiscover}>
                    DISCOVER
                    <div className={styles.LArrow}>⌄</div>
                  </div>
    </section>
  );
}