import React from "react";
import styles from "./WhyChooseEGC.module.css";

import health from "../../assets/shield.png";
import globe from "../../assets/globe1.png";
import people from "../../assets/people1.png";
import clock from "../../assets/clock1.png";
import headphone from "../../assets/audio.png";
import star from "../../assets/star1.png";

const features = [
  {
    id: 1,
    icon: health,
    title: "Effortless Hosting",
    desc: "We don't just plan - we're on the ground to orchestrate every moment with precision.",
  },
  {
    id: 2,
    icon: globe,
    title: "Global Reach",
    desc: "Access to the world's most exclusive properties, private experiences, and hidden gems.",
  },
  {
    id: 3,
    icon: people,
    title: "Any Scale",
    desc: "From intimate groups of 8 to grand gatherings of 100+, flawlessly executed.",
  },
  {
    id: 4,
    icon: clock,
    title: "24/7 Concierge",
    desc: "Round-the-clock dedicated support before, during, and after your journey.",
  },
  {
    id: 5,
    icon: headphone,
    title: "Personal Touch",
    desc: "A dedicated travel director who knows your preferences, tastes, and expectations.",
  },
  {
    id: 6,
    icon: star,
    title: "Exclusive Access",
    desc: "Private viewings, after-hours museum tours, chef's tables, and experiences money can't usually buy.",
  },
];

const WhyChooseEGC = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <p className={styles.topLabel}>WHY CHOOSE EGC</p>
        <h2 className={styles.heading}>Big Ideas demand effortless execution</h2>

        <div className={styles.grid}>
          {features.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* <div className={styles.iconWrap}>{item.icon}</div> */}
              <img src={item.icon} alt={item.title} className={styles.iconWrap}/>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEGC;