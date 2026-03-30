import React from "react";
import styles from "./EGCDifferenceSection.module.css";

import linePattern from "../../assets/linePattern2.png";

// PNG icons
import icon1 from "../../assets/compass.png";
import icon2 from "../../assets/bar1.png";
import icon3 from "../../assets/wellness-retreats.png";
import icon4 from "../../assets/exclusive-access.png";

const differenceItems = [
  {
    number: "01",
    icon: icon1,
    title: "Private Expeditions",
    desc: "Bespoke journeys led by local experts through hidden trails, sacred temples, and untouched landscapes far from the ordinary.",
  },
  {
    number: "02",
    icon: icon2,
    title: "Culinary Journeys",
    desc: "From Michelin-starred omakase in Tokyo to street-side pho in Hanoi - every meal becomes an unforgettable story.",
  },
  {
    number: "03",
    icon: icon3,
    title: "Wellness Retreats",
    desc: "Ancient healing traditions meet modern luxury. Ayurvedic sanctuaries, Balinese spa rituals, and Himalayan meditation.",
  },
  {
    number: "04",
    icon: icon4,
    title: "Exclusive Access",
    desc: "Private temple ceremonies, after-hours museum tours, and invitation-only cultural events reserved for our clients.",
  },
];

const EGCDifferenceSection = () => {
  return (
    <>

    {/* this is the first component*/}
    <section
      className={styles.section}
      style={{ "--difference-pattern": `url(${linePattern})` }}
    >
      <div className={styles.container}>
        <p className={styles.kicker}>BEYOND ORDINARY</p>
        <h2 className={styles.heading}>EGC Difference</h2>

        <div className={styles.listWrapper}>
          {differenceItems.map((item, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.left}>
                <span className={styles.number}>{item.number}</span>

                <div className={styles.iconWrap}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.icon}
                  />
                </div>

                <h3 className={styles.title}>{item.title}</h3>
              </div>

              <div className={styles.right}>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* this is the second component  */}
        <section className={styles.section1}>
      <div className={styles.container1}>
        <p className={styles.quote1}>
          The real voyage of discovery consists not in seeking new landscapes,
          but in having new eyes.
        </p>

        <div className={styles.divider1}></div>

        <p className={styles.author1}>MARCEL PROUST</p>
      </div>
    </section>

    </>
  );
};

export default EGCDifferenceSection;