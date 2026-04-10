import React from "react";
import styles from "./PlanJourney.module.css";
import bgImage from "../../assets/guide-journey.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/msg.png";

const PlanJourney = () => {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <p className={styles.subtitle}>YOUR JOURNEY AWAITS</p>

        <h2 className={styles.title}>Begin Your Journey</h2>

        <p className={styles.description}>
          Every extraordinary journey begins with a conversation. Our Japan
          specialists await to craft your bespoke itinerary, tailored to your
          every desire.
        </p>

        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <img src={phone} alt="Phone" className={styles.icon1} />
            </div>
            <span>+442074269888</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <img src={mail} alt="Mail" className={styles.icon2} />
            </div>
            <span>southafrica@eliteconcierge.com</span>
          </div>
        </div>

        <button className={styles.btn}>
          BEGIN YOUR JOURNEY <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
  );
};

export default PlanJourney;