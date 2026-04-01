import React, { useState } from "react";
import styles from "./TopMarchExperiences.module.css";

import japanImg from "../../assets2/Calender/1.png";
import safariImg from "../../assets2/Calender/2.png";
import desertImg from "../../assets2/Calender/3.png";
import badgeIcon from "../../assets/time2.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === experiences.length - 1 ? 0 : prev + 1
    );
  };

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

        {/* Desktop / Tablet Layout */}
        <div className={styles.sliderWrapper}>
          <button className={`${styles.arrowBtn} ${styles.leftArrow}`}>
            &#8249;
          </button>

          <div className={styles.cardsGrid}>
            {experiences.map((item, index) => (
              <div key={index} className={styles.card}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className={styles.cardOverlay}></div>

                  <div className={styles.overlayContent}>
                    <div className={styles.nightsBadge}>
                      <img src={badgeIcon} alt="nights icon" className={styles.badgeIcon} />
                      <span>{item.nights}</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className={styles.mobileInsideFooter}>
                      <p>
                        From <span>{item.price}</span>
                      </p>
                      <button className={styles.exploreBtn}>
                        EXPLORE TRIP <span>&#8594;</span>
                      </button>
                    </div>
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

          <button className={`${styles.arrowBtn} ${styles.rightArrow}`}>
            &#8250;
          </button>
        </div>

        {/* Mobile Slider */}
        <div className={styles.mobileSlider}>
          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${experiences[currentIndex].image})` }}
            >
              <div className={styles.cardOverlay}></div>

              <div className={styles.overlayContent}>
                <div className={styles.nightsBadge}>
                  <img
                    src={badgeIcon}
                    alt="nights icon"
                    className={styles.badgeIcon}
                  />
                  <span>{experiences[currentIndex].nights}</span>
                </div>

                <h3>{experiences[currentIndex].title}</h3>
                <p>{experiences[currentIndex].description}</p>

                <div className={styles.mobileInsideFooter}>
                  <p>
                    From <span>{experiences[currentIndex].price}</span>
                  </p>
                  <button className={styles.exploreBtn}>
                    EXPLORE TRIP <span>&#8594;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mobileArrows}>
            <button className={styles.mobileArrowBtn} onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <button className={styles.mobileArrowBtn} onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMarchExperiences;