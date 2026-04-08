import React from "react";
import styles from "./WhenToVisit2.module.css";
import heroImg from "../../assets2/South Africa/bg.png";

import { FiStar, FiUsers, FiCalendar, FiMapPin } from "react-icons/fi";

const WhenToVisit = () => {
  return (
    <section className={styles.wrapper}>
      {/* HERO */}
      <div className={styles.hero}>
        <img src={heroImg} alt="South Africa" className={styles.bg} />
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>When to Visit South Africa</h1>

          <p className={styles.desc}>
            South Africa is a year-round destination, but each season offers
            distinct experiences. Your ideal time to visit depends on your
            priorities - whether wildlife, wine, whale watching, or simply
            soaking up the sun.
          </p>

          <span className={styles.link}>YOUR SEASONAL GUIDE</span>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className={styles.infoSection}>
        <div className={styles.card}>
          <FiStar className={styles.icon} />
          <h4>BEST OVERALL</h4>
          <p>
            May to September (Dry Season) & <br />
            March to April (Shoulder Season)
          </p>
        </div>

        <div className={styles.card}>
          <FiUsers className={styles.icon} />
          <h4>PEAK TOURIST SEASON</h4>
          <p>
            December to February (Summer Holidays) <br />
            & July to September (Safari Season)
          </p>
        </div>

        <div className={styles.card}>
          <FiCalendar className={styles.icon} />
          <h4>BUDGET-FRIENDLY</h4>
          <p>May to August (Winter, Lower Travel Demand)</p>
        </div>

        <div className={styles.card}>
          <FiMapPin className={styles.icon} />
          <h4>FEWEST CROWDS</h4>
          <p>
            March to May & September to <br />
            November (Shoulder Seasons)
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhenToVisit;