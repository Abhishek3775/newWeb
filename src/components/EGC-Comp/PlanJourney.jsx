import React from "react";
import styles from "./PlanJourney.module.css";
import bgImage from "../../assets/plan-bg.png"; 

const PlanJourney = () => {
  return (
    <section
      className={styles.planSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.subtitle}>START PLANNING</p>

        <h2 className={styles.title}>
          Let’s Create Something Extraordinary
        </h2>

        <p className={styles.description}>
          Tell us about your group, your occasion, and your wildest ideas.
          Our EGC team will craft a bespoke itinerary that exceeds every
          expectation.
        </p>

        <button className={styles.enquiryBtn}>MAKE AN ENQUIRY</button>

        <p className={styles.note}>
          Response guaranteed within 24 hours • No obligation • Completely bespoke
        </p>
      </div>
    </section>
  );
};

export default PlanJourney;