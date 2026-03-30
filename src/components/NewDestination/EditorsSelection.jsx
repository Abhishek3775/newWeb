import React from "react";
import styles from "./EditorsSelection.module.css";
import destinationImg from "../../assets/maldives.jpg";
import starts from "../../assets/stars.png";

const features = [
  {
    title: "PRIVATE ISLAND ACCESS",
    desc: "Exclusive chartered seaplane transfers to islands accessible only to our clients with no shared spaces or shared moments.",
  },
  {
    title: "BESPOKE MARINE EXPERIENCES",
    desc: "Private whale shark expeditions, twilight bioluminescence swims, and underwater dining engineered to perfection.",
  },
  {
    title: "CURATED ACCOMMODATIONS",
    desc: "Six ultra-luxury properties hand-inspected by our team - from barefoot luxe to architectural marvels over the lagoon.",
  },
  {
    title: "24/7 ON-GROUND CONCIERGE",
    desc: "A dedicated Aurum liaison accompanies your journey from arrival to departure, anticipating every need.",
  },
];

const EditorsSelection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.topLabel}>EDITOR&apos;S SELECTION</p>

        <div className={styles.cardGrid}>
          {/* Left Image Card */}
          <div
            className={styles.imageCard}
            style={{ backgroundImage: `url(${destinationImg})` }}
          >
            <div className={styles.imageOverlay}></div>

            <div className={styles.badge}>FEATURED DESTINATION</div>

            <div className={styles.imageContent}>
              <p className={styles.region}>INDIAN OCEAN</p>

              <h2 className={styles.destinationTitle}>
                The Maldives <br />
                Private Atoll
              </h2>

              <p className={styles.destinationDesc}>
                Where the Indian Ocean meets the sky in a seamless horizon of
                turquoise. Aurum has mapped out what remains often assumed as
                unattainable.
              </p>

              <div className={styles.tags}>
                <span>Best Nov - Apr</span>
                <span><img src={starts} alt="Rating" /></span>
                <span>Private Seaplane</span>
                <span>Ultra Luxury</span>
              </div>

              <button className={styles.exploreBtn}>EXPLORE DESTINATION</button>
            </div>
          </div>

          {/* Right Content Panel */}
          <div className={styles.contentCard}>
            <h2 className={styles.heading}>What Makes it Extraordinary</h2>

            <div className={styles.featuresList}>
              {features.map((item, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.goldLine}></div>
                  <div>
                    <h4 className={styles.featureTitle}>{item.title}</h4>
                    <p className={styles.featureDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.bottomBar}>
              <div className={styles.priceBox}>
                <p className={styles.startingText}>Starting from</p>
                <h3 className={styles.price}>$18,500</h3>
                <p className={styles.tripInfo}>per couple · 7 nights</p>
              </div>

              <button className={styles.enquireBtn}>ENQUIRE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsSelection;