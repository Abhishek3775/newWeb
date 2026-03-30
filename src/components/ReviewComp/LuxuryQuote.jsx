import React from "react";
import styles from "./LuxuryQuote.module.css";

const LuxuryQuote = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.quote}>
          “Elite Concierge doesn't just meet expectations—they redefine them.
          Their attention to detail, discretion, and ability to deliver the
          impossible is unmatched in the luxury services industry.”
        </p>

        <div className={styles.authorWrap}>
          <img
            src="https://randomuser.me/api/portraits/men/36.jpg"
            alt="Alexander Chen"
            className={styles.avatar}
          />

          <div className={styles.authorInfo}>
            <h4 className={styles.name}>Alexander Chen</h4>
            <p className={styles.role}>UHNW Private Client, Singapore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryQuote;