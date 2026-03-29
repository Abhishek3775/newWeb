import React from "react";
import styles from "./JourneySection.module.css";

// import bg from "../../assets/japan-hero.jpg"; // replace with your image

export default function JourneySection() {
  return (
    <section className={styles.hero}>
      <img src={bg} alt="Japan" className={styles.bg} />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.subheading}>YOUR JOURNEY AWAITS</p>

        <h1 className={styles.heading}>Begin Your Journey</h1>

        <p className={styles.description}>
          Every extraordinary journey begins with a conversation. Our Japan
          specialists await to craft your bespoke itinerary, tailored to your
          every desire.
        </p>

        <div className={styles.contactRow}>
          <div className={styles.contactItem}>
            📞 <span>+442074269888</span>
          </div>
          <div className={styles.contactItem}>
            ✉️ <span>southafrica@eliteconcierge.com</span>
          </div>
        </div>

        <button className={styles.cta}>
          BEGIN YOUR JOURNEY →
        </button>
      </div>
    </section>
  );
}
