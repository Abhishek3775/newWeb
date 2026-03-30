import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styles from "./DiscoverJourney.module.css";
import bg from "../../assets/asia-journey.png";

const DiscoverJourneySection = () => {
  return (
    <section
      className={styles.journeySection}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.journeyContainer}>
        <p className={styles.journeySubtitle}>Your Journey Begins Here</p>

        <h2 className={styles.journeyTitle}>Ready to Begin?</h2>

        <p className={styles.journeyDescription}>
          Our dedicated concierge team crafts every detail of your Asian odyssey. From the first conversation to your final farewell, expect nothing less than extraordinary.
        </p>

        <button className={styles.journeyBtn}>START PLANNING →</button>
      </div>
    </section>
  );
};

export default DiscoverJourneySection;