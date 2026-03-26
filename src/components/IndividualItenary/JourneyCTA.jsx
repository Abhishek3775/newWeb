import React from "react";
import styles from "./JourneyCTA.module.css";

import ctaBg from "../../assets/journey-cta-bg.jpg";

import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/msg.png";
import calendarIcon from "../../assets/calender.png";

const JourneyCTA = () => {
  return (
    <section className={styles.section}>
      <img src={ctaBg} alt="Adriatic Coast" className={styles.bgImage} />

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subHeading}>BEGIN YOUR JOURNEY</p>

          <h2 className={styles.heading}>
            Ready to Experience the Adriatic’s Finest
          </h2>

          <p className={styles.description}>
            Let our journey specialists craft your perfect expedition through
            Croatia, Montenegro, and Greece. Limited availability ensures an
            intimate, personalized experience.
          </p>

          {/* Contact Info */}
          <div className={styles.contactBar}>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <img src={phoneIcon} alt="Phone" />
              </div>
              <span>+442074269888</span>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <img src={mailIcon} alt="Email" />
              </div>
              <span>southafrica@eliteconcierge.com</span>
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.buttonRow}>
            <button className={`${styles.ctaButton} ${styles.primaryButton}`}>
             <img src={calendarIcon} alt="Calendar" className={styles.whiteIcon} />
              <span>View Available Dates</span>
              <span className={styles.arrow}>→</span>
            </button>

            <button className={`${styles.ctaButton} ${styles.secondaryButton}`}>
             <img src={phoneIcon} alt="Specialist" className={styles.goldIcon} />
              <span>Speak to a Specialist</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyCTA;