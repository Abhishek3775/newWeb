import React from "react";
import styles from "./HeroVideo.module.css";
import bgVideo from "../../assets/bg-video.png";

const HeroVideo = () => {
  return (
    <section className={styles.hero}>
      <img src={bgVideo} alt="Hero" className={styles.image} />
    </section>
  );
};

export default HeroVideo;