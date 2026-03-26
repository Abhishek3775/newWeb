import React from "react";
import styles from "./HeroJapan.module.css";

import heroImg from "../../assets/HeroImg.webp";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const HeroJapan = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className={styles.heroOverlay}></div>

      {/* Content */}
      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>
          <span className={styles.line}></span>
          SEASONAL GUIDE
        </p>

        <h1>When to Visit Japan</h1>

        <p className={styles.heroDesc}>
          Discover the Perfect Moment for Your Japanese Odyssey
        </p>
      </div>

      {/* Right Side Icons */}
      <div className={styles.heroIcons}>
        <img src={icon1} alt="icon1" />
        <img src={icon2} alt="icon2" />
        <img src={icon3} alt="icon3" />
        <img src={icon4} alt="icon4" />
      </div>
    </section>
  );
};

export default HeroJapan;