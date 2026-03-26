import React from "react";
import styles from "./PrincipleRelentless.module.css";
import leftIcon from "../../assets/aim1.png";   
import groupImage from "../../assets/Groups2.png"; 
import polygon from "../../assets/Polygon1.png"; 

const PrincipleRelentless = () => {
  return (
    <section className={styles.relentlessSection}>
      <div className={styles.relentlessContainer}>

        {/* LEFT CONTENT */}
        <div className={styles.relentlessContent}>

      
            <img src={leftIcon} alt="Principle Icon" style={{height:'60px',width:'60px'}}/>
     

          <div className={styles.topRow}>
            <p className={styles.smallLabel}>PRINCIPLE 02</p>
            <div className={styles.topLine}></div>
          </div>

          <h2 className={styles.mainHeading}>RELENTLESS</h2>

          <div className={styles.badge}>
            EXCELLENCE WITHOUT EXCEPTION
          </div>

          <p className={styles.description}>
            We don't know the word 'impossible.' When others see obstacles,
            we see opportunities. Good enough never is. We pursue perfection
            in every detail, every time.
          </p>

          <div className={styles.bottomDecor}>
            <span></span>
            <img src={polygon} alt="polygon" style={{height:'20px',width:'20px'}}/>
            <span></span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageSide}>
          <img
            src={groupImage}
            alt="Luxury Experience"
            className={styles.mainImage}
          />

   
        </div>

      </div>
    </section>
  );
};

export default PrincipleRelentless;