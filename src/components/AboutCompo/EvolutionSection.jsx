import React from "react";
import styles from "./EvolutionSection.module.css";
import interiorImage from "../../assets/about-interior.png"; // apni image path yaha lagao

const EvolutionSection = () => {
  return (
    <section className={styles.evoSection}>
      <div className={styles.evoContainer}>

        {/* LEFT CONTENT */}
        <div className={styles.evoContent}>
          
          <div className={styles.evoTopRow}>
            <h5 className={styles.evoSubtitle}>THE EVOLUTION</h5>
            <div className={styles.evoLine}></div>
          </div>

          <h2 className={styles.evoTitle}>
            FROM VISION TO GLOBAL PRESENCE
          </h2>

          <p className={styles.evoDescription}>
            What began as an intimate service for a discerning few has grown
            into a worldwide network of excellence. Today, our team spans four
            continents, united by an unwavering commitment to making the
            impossible feel effortless.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.evoImageWrapper}>
          <img
            src={interiorImage}
            alt="Luxury Interior"
            className={styles.evoImage}
          />
        </div>

      </div>
    </section>
  );
};

export default EvolutionSection;