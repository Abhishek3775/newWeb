import React from 'react';
import styles from './FinestAccommodations.module.css';

const FinestAccommodations = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The World’s Finest <br /><span>Accommodations</span></h1>
          <p className={styles.heroSubtitle}>
            Access to 500+ hand-selected properties worldwide, each offering exclusive privileges reserved for our distinguished members.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>Explore Collection</button>
            <button className={styles.secondaryBtn}>Speak to a Curator</button>
          </div>
        </div>
      </div>

      <div className={styles.statsSection}>
        <div className={styles.statBox}>
          <h2>500+</h2>
          <p>CURATED HOTELS</p>
        </div>
        <div className={styles.statBox}>
          <h2>85+</h2>
          <p>COUNTRIES</p>
        </div>
        <div className={styles.statBox}>
          <h2>15 +</h2>
          <p>YEARS EXPERIENCE</p>
        </div>
        <div className={styles.statBox}>
          <h2>24/7</h2>
          <p>CONCIERGE SUPPORT</p>
        </div>
      </div>
    </section>
  );
};

export default FinestAccommodations;
