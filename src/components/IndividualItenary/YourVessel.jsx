import React from "react";
import styles from "./YourVessel.module.css";

import vesselImage from "../../assets/vessel-main.png";

import guestIcon from "../../assets/people1.png";
import suiteIcon from "../../assets/guest-icon.png";
import shipIcon from "../../assets/ship-icon.png";
import speedIcon from "../../assets/pool1.png";

const vesselStats = [
  {
    icon: guestIcon,
    value: "48",
    label: "GUESTS",
  },
  {
    icon: suiteIcon,
    value: "24",
    label: "SUITES",
  },
  {
    icon: shipIcon,
    value: "68m",
    label: "LENGTH",
  },
  {
    icon: speedIcon,
    value: "12 knots",
    label: "CRUISING SPEED",
  },
];

const StatCard = ({ item }) => {
  return (
    <div className={styles.statCard}>
      <img src={item.icon} alt={item.label} className={styles.statIcon} />
      <h3 className={styles.statValue}>{item.value}</h3>
      <p className={styles.statLabel}>{item.label}</p>
    </div>
  );
};

const YourVessel = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subHeading}>YOUR VESSEL</p>
          <h2 className={styles.heading}>The Adriatic Queen</h2>
          <p className={styles.description}>
            Experience intimate luxury aboard our boutique expedition vessel,
            designed to access hidden harbors while providing the finest comforts
            at sea.
          </p>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <img
            src={vesselImage}
            alt="The Adriatic Queen"
            className={styles.image}
          />

          <div className={styles.overlay}></div>

          {/* Stats */}
          <div className={styles.statsWrapper}>
            {vesselStats.map((item, index) => (
              <StatCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourVessel;