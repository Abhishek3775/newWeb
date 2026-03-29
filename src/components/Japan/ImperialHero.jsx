import React from "react";
import img from "../../assets2/japan/Imperial Odyssey/1.png";
import styles from "./ImperialHero.module.css";
import { GrLocation } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";

const ImperialHero = () => {
  return (
    <section className={styles.impHero} style={{ backgroundImage: `url(${img})` }}>
            <div className={styles.impOverlay}>
              <div className={styles.impContent}>
                <p className={styles.impSubtitle}>SIGNATURE JOURNEY</p>
                <h1 className={styles.impTitle}>Imperial Odyssey</h1>
                <p className={styles.impLocations}>Tokyo · Hakone · Kyoto · Nara · Kanazawa</p>
                <div className={styles.impDetails}>
                  <span><MdOutlineDateRange color="#d1a650" /> 14 Days</span>
                  <span><GrLocation color="#d1a650" /> 5 Cities</span>
                  <span><FiUsers color="#d1a650" /> 8 Guests</span>
                </div>
                <div className={styles.impPricing}>
                  FROM <span>£28,500</span> per person, based on double occupancy
                </div>
              </div>
              {/* <button className={styles.impBtn}>VIEW DATES & PRICES →</button> */}
            </div>
          </section>
  );
};

export default ImperialHero;