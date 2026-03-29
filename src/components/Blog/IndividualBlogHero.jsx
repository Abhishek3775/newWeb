import React from "react";
import styles from "./IndividualBlogHero.module.css";

import bg from "../../assets2/IndividualBlog/1.png"; // replace with your image

export default function IndividualBlogHero() {
  return (
    <section className={styles.hero}>
      <img src={bg} alt="Travel" className={styles.bg} />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.meta}>
          <span className={styles.category}>DESTINATIONS</span>
          <span className={styles.dot}>•</span>
          <span>14 MIN READ</span>
        </p>

        <h1 className={styles.title}>
          The Art of Slow Travel in <br /> the Indian Ocean
        </h1>

        <p className={styles.description}>
          A definitive guide to the Maldives' most private islands, where time
          dissolves and every moment is curated to perfection.
        </p>
      </div>
    </section>
  );
}
