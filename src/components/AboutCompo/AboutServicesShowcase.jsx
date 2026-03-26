import React from "react";
import styles from "./AboutServicesShowcase.module.css";

import aviationImg from "../../assets/aviation.png";
import yachtImg from "../../assets/yatch.png";
import culinary from "../../assets/alcohol.png";
import exclusive from "../../assets/alcohol1.png";

const servicesData = [
  {
    image: aviationImg,
    title: "Private Aviation"
  },
  {
    image: yachtImg,
    title: "Yacht & Charters"
  },
  {
    image:culinary,
    title:"Culinary Journeys"
  },
  {
    image:exclusive,
    title:"Exclusive Access"
  }
];

const AboutServicesShowcase = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>

        {/* Top Row */}
        <div className={styles.topBar}>
          <h2 className={styles.mainHeading}>
            ORCHESTRATING THE EXTRAORDINARY
          </h2>

          <button className={styles.viewAll}>
            VIEW ALL SERVICES →
          </button>
        </div>

        {/* Image Grid */}
        <div className={styles.gridWrapper}>
          {servicesData.map((service, index) => (
            <div className={styles.card} key={index}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.cardImage}
              />
              <div className={styles.overlay}></div>
              <h3 className={styles.cardTitle}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutServicesShowcase;