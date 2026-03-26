// import React from 'react'
import styles from "./HeroWhiteBg.module.css";
import newLogo from "../../assets/eliteLogo.png"

const HeroWhiteBg = () => {
  return (
    <div className={styles.whitebg}>
      <img src={newLogo} alt="logo" />
    </div>
  )
}

export default HeroWhiteBg