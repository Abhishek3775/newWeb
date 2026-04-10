import React from "react";
import styles from "./SeasonHeroSection.module.css";
import heroBg from "../../assets/japan-season-hero.png";

const SeasonHeroSection = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {/* Breadcrumb */}
        {/* <div className={styles.breadcrumb}>
          <a href="#">Home</a>
          <span>/</span>
          <a href="#">Destinations</a>
          <span>/</span>
          <a href="#">Japan</a>
          <span>/</span>
          <span className={styles.current}>When to Visit</span>
        </div> */}

        {/* Subtitle */}
        <p className={styles.kicker}>UNDERSTANDING JAPAN&apos;S SEASONS</p>

        {/* Main Heading */}
        <h1 className={styles.title}>A Land of Eternal Seasons</h1>

        {/* Description */}
        <p className={styles.description}>
          Japan transforms beautifully throughout the year, with each season
          revealing something unique. From soft pink cherry blossoms and fiery
          autumn maples to snow-covered villages and lively summer festivals,
          every moment feels extraordinary. Understanding these seasonal changes
          helps you plan the perfect journey.
        </p>

        {/* Quote */}
        <p className={styles.quote}>
          “The best time to visit Japan depends not on when, but on what moves
          your soul.”
        </p>
      </div>
    </section>
  );
};

export default SeasonHeroSection;