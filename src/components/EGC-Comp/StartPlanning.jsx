import React from "react";
import styles from "./StartPlanning.module.css";
import bgImage from "../../assets2/EGC Signature/12.png"; // replace with your image

export default function StartPlanning() {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>START PLANNING</p>

        <h2 className={styles.heading}>
          Let’s Design Your Perfect Journey
        </h2>

        <p className={styles.subtext}>
          Share your travel dreams, preferred destinations, and special interests.
          Our experts will craft a personalized itinerary designed around your
          style, pace, and passions.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            MAKE AN ENQUIRY
          </button>

          <button className={styles.secondaryBtn}>
            CALL US
          </button>
        </div>

        <p className={styles.note}>
          Response guaranteed within 24 hours · No obligation · Completely bespoke
        </p>
      </div>
    </section>
  );
}