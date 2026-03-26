import React from "react";
import styles from "./SeasonsIntro.module.css";

import star from "../../assets/star.png";
import people2 from "../../assets/people2.png";
import location from "../../assets/location.png";
import calendar from "../../assets/calender.png";

const highlights = [
  {
    icon: star,
    title: "BEST OVERALL",
    description: "March to May (Spring) & October to November (Autumn)",
  },
  {
    icon: people2,
    title: "PEAK TOURIST SEASON",
    description: "Late March to Early April (Cherry Blossom) & November (Autumn Foliage)",
  },
  {
    icon: calendar,
    title: "BUDGET-FRIENDLY",
    description: "June to August (Summer, excluding Obon) & January to February (Winter)",
  },
  {
    icon: location,
    title: "FEWEST CROWDS",
    description: "January to February & June (Golden Week)",
  },
];

const SeasonsIntro = () => {
  return (
    <section className={styles.seasonSection}>
      
      {/* TOP HIGHLIGHTS */}
      <div className={styles.highlights}>
        {highlights.map((item, index) => (
          <div key={index} className={styles.highlightCard}>
            <img src={item.icon} alt={item.title}  style={{height:'15px',width:'15px'}} />
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.text}>{item.description}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM CONTENT */}
      <div className={styles.content}>
        <h4 className={styles.subtitle}>UNDERSTANDING JAPAN'S SEASONS</h4>

        <h2 className={styles.mainTitle}>
          A Land of Eternal Seasons
        </h2>

        <p className={styles.description}>
          Japan transforms with breathtaking drama throughout the year, each season unveiling new
          wonders. From the ethereal beauty of cherry blossoms painting the land in soft pink to
          fiery autumn maples framing ancient temples, from snow-draped villages that seem frozen in
          time to vibrant summer festivals that ignite the night—every moment in Japan offers
          something extraordinary. Understanding these seasonal rhythms is the key to crafting your
          perfect journey.
        </p>

        <p className={styles.quote}>
          “The best time to visit Japan depends not on when, but on what moves your soul.”
        </p>
      </div>

    </section>
  );
};

export default SeasonsIntro;