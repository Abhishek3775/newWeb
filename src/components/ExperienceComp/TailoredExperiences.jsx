import React, { useState } from "react";
import styles from "./TailoredExperiences.module.css";

import img1 from "../../assets2/Experience/PERSONALIZED JOURNEYS/9.png";
import img2 from "../../assets2/Experience/PERSONALIZED JOURNEYS/10.png";
import img3 from "../../assets2/Experience/PERSONALIZED JOURNEYS/11.png";
import bgimg from "../../assets/linepatter1.png";

const TailoredExperiences = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        className={styles.section}
        style={{
          background: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <p className={styles.smallTitle}>TAILORED EXPERIENCES</p>
            <h2 className={styles.title}>Every Group, Every Occasion</h2>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {/* Card 1 */}
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h3>Milestones & Celebrations</h3>
                <p>
                  Mark life's defining moments – birthdays, anniversaries,
                  graduations – with an extraordinary backdrop and flawless
                  orchestration.
                </p>
                <button className={styles.planBtn} onClick={openPopup}>
                  PLAN YOUR EXPERIENCE →
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h3>Multi-Generational Gatherings</h3>
                <p>
                  From age 5 to 80, we balance every interest and need. Quality
                  time together, with bespoke activities for every generation.
                </p>
                <button className={styles.planBtn} onClick={openPopup}>
                  PLAN YOUR EXPERIENCE →
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`${styles.card} ${styles.fullWidth}`}
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h3>Expedition & Adventure</h3>
                <p>
                  For groups who seek the extraordinary – helicopter transfers,
                  glacier hikes, private wilderness camps in the world’s most
                  dramatic landscapes.
                </p>
                <button className={styles.planBtn} onClick={openPopup}>
                  PLAN YOUR EXPERIENCE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div
            className={styles.popupBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closePopup}>
              ×
            </button>

            <h2 className={styles.popupTitle}>Start Your Journey Today</h2>

            <form className={styles.form}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>FIRST NAME *</label>
                  <input type="text" placeholder="First name" />
                </div>

                <div className={styles.inputGroup}>
                  <label>LAST NAME *</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>PHONE *</label>
                  <div className={styles.phoneWrapper}>
                    <select className={styles.countryCode}>
                      <option>🇺🇸 +1</option>
                      <option>🇮🇳 +91</option>
                      <option>🇬🇧 +44</option>
                    </select>
                    <input type="text" placeholder="Phone number" />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>EMAIL</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>MESSAGE</label>
                <textarea
                  rows="4"
                  placeholder="Tell us your occasions & plan & we will curate it for you..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                SEND ENQUIRY
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TailoredExperiences;