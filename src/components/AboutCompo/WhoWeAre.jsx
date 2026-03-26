import React from "react";
import styles from "./WhoWeAre.module.css";
import aboutImage from "../../assets/who-we.png"; // apni image path

const WhoWeAre = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Content */}
        <div className={styles.content}>
          
          <div className={styles.topRow}>
            <h5 className={styles.subtitle}>WHO WE ARE</h5>
            <div className={styles.topLine}></div>
          </div>

          <h2 className={styles.title}>A LEGACY OF DISTINCTION</h2>

          <p className={styles.description}>
            We are the architects of the extraordinary - a global concierge
            collective dedicated to transforming the exceptional into the
            accessible. Our clientele doesn't simply travel; they experience.
            They don't merely dine; they discover. Every request, no matter how
            ambitious, is an invitation for us to demonstrate that nothing is
            truly impossible.
          </p>

          <div className={styles.estWrapper}>
            <div className={styles.bottomLine}></div>
            <span className={styles.est}>EST.2025</span>
          </div>

        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <img
            src={aboutImage}
            alt="Luxury Experience"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;