import React from "react";
import styles from "./PrincipleDiscreet.module.css";
import groupImage from "../../assets/Groups1.png";   
import shieldIcon from "../../assets/shield1.png";  
import polygon from "../../assets/Polygon1.png"; 
const PrincipleDiscreet = () => {
  return (
    <section className={styles.principleSection}>
      <div className={styles.principleContainer}>

        {/* LEFT IMAGE SIDE */}
        <div className={styles.principleImageWrapper}>
          <img
            src={groupImage}
            alt="Luxury Private Experience"
            className={styles.principleImage}
          />
          <div className={styles.imageOverlay}></div>
        </div>

        {/* RIGHT CONTENT SIDE */}
        <div className={styles.principleContent}>

      
            <img src={shieldIcon} alt="Shield Icon" style={{height:'60px',width:'60px'}} />
      

          <h6 className={styles.principleLabel}>PRINCIPLE 01</h6>

          <h2 className={styles.principleTitle}>DISCREET</h2>

          <button className={styles.principleBadge}>
            PRIVACY IS SACRED
          </button>

          <p className={styles.principleDescription}>
            In our world, discretion isn’t a feature—it’s the foundation.
            Every interaction, every arrangement, every detail is held in
            the strictest confidence. Your trust is our most valued currency.
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

export default PrincipleDiscreet;