import React from "react";
import styles from "./PrincipleIntuitive.module.css";
import leftImage from "../../assets/Groups3.png";   
import iconImage from "../../assets/about-start.png";     
import polygon from "../../assets/Polygon1.png"; 


const PrincipleIntuitive = () => {
  return (
    <section className={styles.intuitiveSection}>
      <div className={styles.intuitiveContainer}>

        {/* LEFT IMAGE SIDE */}
        <div className={styles.imageSide}>
          <img
            src={leftImage}
            alt="Luxury Experience"
            className={styles.mainImage}
          />
      
        </div>

        {/* RIGHT CONTENT SIDE */}
        <div className={styles.contentSide}>


            <img src={iconImage} alt="Principle Icon" style={{height:'60px',width:'60px'}} />

          <div className={styles.topRow}>
            <p className={styles.smallLabel}>PRINCIPLE 03</p>
            <div className={styles.topLine}></div>
          </div>

          <h2 className={styles.mainHeading}>INTUITIVE</h2>

          <div className={styles.badge}>
            ANTICIPATION IS OUR ART
          </div>

          <p className={styles.description}>
            We don't wait for requests—we anticipate them.
            Understanding our clients' unspoken desires is our advantage.
            We know what you need before you do.
          </p>

          <div className={styles.bottomDecor}>
            <span></span>
            <img src={polygon} alt="polygon" style={{height:'20px',width:'20px'}}/>
            <span></span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PrincipleIntuitive;