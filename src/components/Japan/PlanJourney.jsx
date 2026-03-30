import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styles from "./PlanJourney.module.css";
import bgImage from "../../assets/guide-journey.png";

const PlanJourney = () => {
  return (
    <section className={styles.section} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.container}>
        <p className={styles.subtitle}>READY TO PLAN?</p>

        <h2 className={styles.title}>Let Us Craft Your Perfect Journey</h2>

        <p className={styles.description}>
          Our Japan specialists will help you choose the ideal season
          and create a bespoke itinerary tailored to your dreams.
        </p>

        <p className={styles.note}>
          Minimum 4 weeks advance booking required
        </p>

        <div className={styles.contact}>

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaPhoneAlt color="#fff"/>
            </div>

            <span>+442074269888</span>
          </div>


          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaEnvelope color="#fff"/>
            </div>
            <span>japan@eliteconcierge.com</span>
          </div>
        </div>


        <button className={styles.btn}>
          START PLANNING <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
      
  );
};

export default PlanJourney;