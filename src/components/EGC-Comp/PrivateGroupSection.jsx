import React from "react";
import styles from "./PrivateGroupSection.module.css";
import bgPattern from "../../assets/linepatter1.png"; // your background pattern image

export default function PrivateGroupSection() {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>
          PRIVATE HOLIDAYS FOR YOUR GROUP
        </p>

        <h2 className={styles.heading}>
          Going away together is one of life's purest <br /> pleasures.
        </h2>

        <p className={styles.description}>
          Pulling off the planning - with so many people to please and factors
          to consider - is where you need a helping hand. Our elite concierge
          team has spent decades perfecting the art of orchestrating
          extraordinary group experiences across the globe.
        </p>

        <p className={styles.description}>
          With personalised service orchestrated by a dedicated team, we handle
          every detail - so you can savour every moment together.
        </p>

        <button className={styles.cta}>
          BEGIN YOUR JOURNEY
        </button>
      </div>
    </section>
  );
}