import React from "react";
import styles from "./LastMinuteEscape.module.css";
import escapeBg from "../../assets2/Calender/4.png";

const LastMinuteEscape = () => {
  return (
    <section
      className={styles.escapeSection}
      style={{ backgroundImage: `url(${escapeBg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.heading}>Looking for a Last-Minute Escape?</h2>

        <p className={styles.description}>
          There's still some availability - if you know where to look. Just hit
          the enquiry button and one of our travel team will be in touch.
          Psst... they know where to look.
        </p>

        <button className={styles.enquireBtn}>ENQUIRE NOW</button>
      </div>
    </section>
  );
};

export default LastMinuteEscape;