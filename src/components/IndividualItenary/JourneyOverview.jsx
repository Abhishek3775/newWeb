import React from "react";
import styles from "./JourneyOverview.module.css";

import shipIcon from "../../assets/ship.png";
import compassIcon from "../../assets/compass.png";
import foodIcon from "../../assets/food.png";
import wavesIcon from "../../assets/waves.png";

const features = [
  {
    icon: shipIcon,
    title: "Intimate Vessel",
    description:
      "Experience the journey aboard a luxury small ship with only 48 guests",
  },
  {
    icon: compassIcon,
    title: "Expert-Led Tours",
    description:
      "Local guides and historians bring each destination to life",
  },
  {
    icon: foodIcon,
    title: "Culinary Excellence",
    description:
      "Savor authentic Mediterranean cuisine with local wine pairings",
  },
  {
    icon: wavesIcon,
    title: "Hidden Gems",
    description:
      "Access secluded coves and ports inaccessible to larger vessels",
  },
];

const FeatureCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={item.icon} alt={item.title} />
      </div>

      <h3 className={styles.cardTitle}>{item.title}</h3>

      <p className={styles.cardDesc}>{item.description}</p>
    </div>
  );
};

const JourneyOverview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <p className={styles.label}>JOURNEY OVERVIEW</p>

          <h2 className={styles.title}>
            A Voyage Through Ancient Waters
          </h2>

          <p className={styles.description}>
            This extraordinary expedition takes you through the heart of the
            Adriatic, where medieval fortresses rise from turquoise waters, and
            ancient coastal villages have remained unchanged for centuries. From
            the dramatic walls of Dubrovnik to the serene fjords of Montenegro
            and the sun-drenched islands of Greece.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyOverview;