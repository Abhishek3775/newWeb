import React from "react";
import styles from "./BeginningSection.module.css";
import boatImage from "../../assets/about-boat.png"; // apni image path

const BeginningSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT IMAGE */}
        <div className={styles.imageWrapper}>
          <img
            src={boatImage}
            alt="Luxury Boat"
            className={styles.image}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>

          <div className={styles.topRow}>
            <h5 className={styles.subtitle}>THE BEGINNING</h5>
            <div className={styles.line}></div>
          </div>

          <h2 className={styles.title}>
            IT STARTED WITH A SIMPLE QUESTION
          </h2>

          <p className={styles.description}>
            What if luxury wasn't about what you have, but what you experience?
            Founded in 2025 by a collective of hospitality visionaries, Elite
            Global Concierge was born from the belief that true luxury lies in
            the extraordinary — in moments so perfectly crafted, they become
            part of who you are.
          </p>

        </div>

      </div>
    </section>
  );
};

export default BeginningSection;