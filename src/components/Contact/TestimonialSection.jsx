import React from "react";
import styles from "./TestimonialSection.module.css";
import bgImage from "../../assets2/Experience/PERSONALIZED JOURNEYS/14.png"; // replace with your image
// import helicopter from "../../assets/helicopter.png"; // optional icon

const TestimonialSection = () => {
  return (
    <section
      className={styles.testimonialSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {/* Helicopter Icon */}
        {/* <img src={helicopter} alt="helicopter" className={styles.helicopter} /> */}

        {/* Heading */}
        <div className={styles.headingWrapper}>
          <span className={styles.line}></span>
          <h4>CLIENT TESTIMONIALS</h4>
          <span className={styles.line}></span>
        </div>

        {/* Quote */}
        <p className={styles.quote}>
          “THEY MADE THE IMPOSSIBLE HAPPEN. A PRIVATE DINNER AT THE LOUVRE? DONE.
          A HELICOPTER TO A GLACIER FOR LUNCH? EFFORTLESS.”
        </p>

        {/* Author */}
        <p className={styles.author}>Jonathan M. | New York</p>

        {/* Bottom Indicator */}
        <div className={styles.sliderDot}></div>
      </div>
    </section>
  );
};

export default TestimonialSection;