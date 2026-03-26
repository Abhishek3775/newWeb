import React from "react";
import styles from "./AboutJourneySection.module.css";

import icon1 from "../../assets/about-globe.png";
import icon2 from "../../assets/about-clock.png";
import icon3 from "../../assets/about-shield1.png";
import icon4 from "../../assets/about-st.png";

const features = [
  {
    icon: icon1,
    title: "Global Network",
    text: "Connections in over 60 countries, with local experts who know every hidden gem."
  },
  {
    icon: icon2,
    title: "Always Available",
    text: "24/7/365 support. Because extraordinary doesn't keep business hours."
  },
  {
    icon: icon3,
    title: "Absolute Discretion",
    text: "Your privacy is paramount. Every interaction is completely confidential."
  },
  {
    icon: icon4,
    title: "Uncompromising Quality",
    text: "We accept nothing less than perfection. Neither should you."
  }
];

const AboutJourneySection = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyContainer}>

        {/* LEFT CONTENT */}
        <div className={styles.leftContent}>
          <div className={styles.top}>
            <div className="topLine"></div>
          <p className={styles.smallLabel}>OUR JOURNEY</p>
          </div>
          <h2 className={styles.mainHeading}>
            WHY ELITE GLOBAL CONCIERGE?
          </h2>

          <p className={styles.subHeading}>Rare & Remarkable</p>

          <p className={styles.description}>
            The name reflects our philosophy: we exist to provide what others
            cannot. In a world of ordinary, we deliver the extraordinary. In a
            sea of options, we offer the singular. Every experience we craft is
            as unique as the individual it's designed for.
          </p>

          <div className={styles.highlightText}>
            Your world. Your way. Without limits.
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className={styles.gridWrapper}>
          {features.map((item, index) => (
            <div className={styles.card} key={index}>
          
                <img src={item.icon} alt={item.title} style={{height:'40px',width:'40px'}}/>
          
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutJourneySection;