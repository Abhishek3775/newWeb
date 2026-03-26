import React from "react";
import styles from "./ValuesIntro.module.css";

const ValuesIntro = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesContainer}>

        {/* Top Decoration */}
        <div className={styles.topDecoration}>
          <span className={styles.line}></span>
          <span className={styles.diamond}></span>
          <span className={styles.line}></span>
        </div>

        <h5 className={styles.subtitle}>OUR VALUES</h5>

        <h2 className={styles.title}>
          THREE PRINCIPLES GUIDE EVERYTHING <br />
          THAT WE DO
        </h2>

        <p className={styles.description}>
          These keep us on course—whatever we do, wherever in the world we <br />
          find ourselves
        </p>

        {/* Bottom Decoration */}
        <div className={styles.bottomDecoration}>
          <span className={styles.smallLine}></span>
          <span className={styles.square}></span>
          <span className={styles.smallLine}></span>
        </div>

      </div>
    </section>
  );
};

export default ValuesIntro;