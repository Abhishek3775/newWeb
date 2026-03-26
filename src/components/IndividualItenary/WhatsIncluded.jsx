import React from "react";
import styles from "./WhatsIncluded.module.css";

import dubrovnikImage from "../../assets/dubrovnik-night.png";
import checkIcon from "../../assets/check.png";

const inclusions = [
  "All accommodations in ocean-view suites",
  "All meals and premium beverages",
  "Daily shore excursions",
  "Onboard enrichment programs",
  "Airport transfers",
  "Gratuities throughout",
];

const WhatsIncluded = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image Side */}
          <div className={styles.imageWrapper}>
            <img
              src={dubrovnikImage}
              alt="Dubrovnik, Croatia"
              className={styles.image}
            />

            <div className={styles.imageOverlay}></div>

            <div className={styles.imageContent}>
              <p className={styles.imageLabel}>FEATURED DESTINATION</p>
              <h3 className={styles.imageTitle}>Dubrovnik, Croatia</h3>
            </div>
          </div>

          {/* Content Side */}
          <div className={styles.content}>
            <h2 className={styles.heading}>What&apos;s Included</h2>

            <p className={styles.description}>
              Every aspect of your journey has been thoughtfully curated to ensure
              an exceptional experience. From the moment you arrive until your
              departure, every detail is taken care of.
            </p>

            <ul className={styles.list}>
              {inclusions.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <img src={checkIcon} alt="Check" className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;