import React from "react";
import styles from "./HeroJapan.module.css";
import heroImg from "../../assets/HeroImg.webp";
import { useNavigate } from "react-router-dom";

const HeroJapan = () => {
  const navigate = useNavigate();

  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className={styles.heroOverlay}></div>

      {/* Content */}
      <div className={styles.heroContent}>
        <h1>When to Visit Japan</h1>

        <p className={styles.heroDesc}>
          Discover the Perfect Moment for Your Japanese Odyssey
        </p>

        <span
          className={styles.heroLink}
          onClick={() => {
            navigate("/japan-guide");
          }}
        >
          YOUR SEASONAL GUIDE
        </span>
      </div>
    </section>
  );
};

export default HeroJapan;