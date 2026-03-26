import React from "react";
import styles from "./GuideSection.module.css";
import bgImage from "../../assets/linepatter1.png";

const GuideSection = () => {
  return (
    <section
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.content}>
        <span className={styles.smallTitle}>LET US GUIDE YOU</span>

        <h2 className={styles.heading}>
          Can't Decide? Let Our Curators
          <br />
          <span>Create Your Perfect Journey</span>
        </h2>

        <p className={styles.subText}>
          Share your travel dreams with our expert curators and receive a
          bespoke itinerary tailored to your every desire.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            Request a Consultation
          </button>

          <button className={styles.secondaryBtn}>
            Call +1(800) 555-0199
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;