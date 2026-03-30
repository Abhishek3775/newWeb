import React from "react";
import styles from "./DiscoverAsia.module.css";
import asiaBg from "../../assets/discover-asia-bg.png";


const statsData = [
  {
    number: "48",
    label: "COUNTRIES EXPLORED",
  },
  {
    number: "12K+",
    label: "JOURNEYS CURATED",
  },
  {
    number: "24/7",
    label: "EGC ACCESS",
  },
  {
    number: "100%",
    label: "BESPOKE ITINERARIES",
  },
];

const DiscoverHome = () => {
  return (
    <>
    <section
      className={styles.discoverAsia}
      style={{ backgroundImage: `url(${asiaBg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Discover <span>Asia</span>
        </h1>

        <p className={styles.subtitle}>
          Where ancient traditions meet unparalleled luxury. Let us curate <br />
          your journey through the world’s most captivating continent.
        </p>
      </div>
    </section>
        {/* // discover asia  hero stats  */}
            <section className={styles.statsSection}>
          <div className={styles.container}>
            {statsData.map((item, index) => (
              <div key={index} className={styles.statItem}>
                <h3 className={styles.number}>{item.number}</h3>
                <p className={styles.label}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>
        </>
  );
};

export default DiscoverHome;