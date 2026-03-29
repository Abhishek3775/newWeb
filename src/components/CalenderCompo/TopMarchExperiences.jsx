import React from "react";
import styles from "./TopMarchExperiences.module.css";

import japanImg from "../../assets2/Calender/1.png";
import safariImg from "../../assets2/Calender/2.png";
import desertImg from "../../assets2/Calender/3.png";

const experiences = [
  {
    nights: "10 Nights",
    image: japanImg,
    title: "A Journey into Japan",
    description:
      "From Tokyo's neon-lit streets to Kyoto's serene temples, experience the perfect...",
    price: "£16,500 per person",
  },
  {
    nights: "14 Nights",
    image: safariImg,
    title: "Ultimate Safari & Cape",
    description:
      "Combine world-class safari experiences in private reserves with Cape Town's...",
    price: "£12,800 per person",
  },
  {
    nights: "8 Nights",
    image: desertImg,
    title: "Imperial Cities & Desert",
    description:
      "Journey through Fes, Marrakech and into the Sahara for an unforgettable Moroccan...",
    price: "£5,200 per person",
  },
];

const TopMarchExperiences = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Our Top <span>March</span> Experiences
          </h2>
          <p className={styles.subheading}>
            Our hand-picked recommendations for what to do and where to go in March
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className={styles.sliderWrapper}>
          {/* Left Arrow */}
          <button className={`${styles.arrowBtn} ${styles.leftArrow}`}>
            &#8249;
          </button>

          {/* Cards */}
          <div className={styles.cardsGrid}>
            {experiences.map((item, index) => (
              <div key={index} className={styles.card}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className={styles.nightsBadge}>{item.nights}</div>

                  <div className={styles.overlayContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <p>
                    From <span>{item.price}</span>
                  </p>
                  <button className={styles.exploreBtn}>
                    EXPLORE TRIP <span>&#8594;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className={`${styles.arrowBtn} ${styles.rightArrow}`}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopMarchExperiences;