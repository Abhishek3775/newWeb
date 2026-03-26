import bgImage from "../../assets/ind.png";
import calendarIcon from "../../assets/calender.png";
import locationIcon from "../../assets/location.png";
import peopleIcon from "../../assets/people.png";
import React from "react";
import styles from "./IndHero.module.css";


const StatItem = ({ icon, value, label }) => {
  return (
    <div className={styles.statItem}>
      <img src={icon} alt={label} className={styles.statIcon} />
      <div className={styles.statText}>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

const IndHero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background */}
      <img src={bgImage} alt="Adriatic Voyage" className={styles.bgImage} />

      {/* Overlays */}
      <div className={styles.overlayDark}></div>
      <div className={styles.overlayLeft}></div>
      <div className={styles.overlayBottom}></div>

      {/* Content */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.category}>EXPEDITION CRUISES</p>

          <h1 className={styles.title}>Adriatic Voyage</h1>

          <h2 className={styles.subtitle}>
            Croatia, Montenegro &amp; Greece
          </h2>

          <p className={styles.description}>
            Embark on an extraordinary journey through the crystalline waters of
            the Adriatic Sea, exploring ancient walled cities, hidden coves, and
            the timeless beauty of the Mediterranean coast.
          </p>

          <div className={styles.ratingRow}>
            <div className={styles.stars}>★★★★★</div>
            <span className={styles.ratingText}>Exceptional Experience</span>
          </div>

          <div className={styles.statsRow}>
            <StatItem icon={calendarIcon} value="9" label="Days" />
            <StatItem icon={locationIcon} value="8" label="Destinations" />
            <StatItem icon={peopleIcon} value="48" label="Guests Max" />
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className={styles.explore}>
        <span>Explore</span>
        <div className={styles.arrow}>⌄</div>
      </div>
    </section>
  );
};

export default IndHero;