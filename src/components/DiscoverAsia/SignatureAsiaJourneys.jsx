import React from "react";
import styles from "./SignatureAsiaJourneys.module.css";

// ===== Import images =====
import japanImg from "../../assets/japan-journey.png";
import maldivesImg from "../../assets/maldives.png";
import nepalImg from "../../assets/nepal-bhutan.png";
import vietnamImg from "../../assets/vietnam-cambodia.png";
import baliImg from "../../assets/bali-lombok.png";
import sriLankaImg from "../../assets/srilanka-road.png";

const journeys = [
  {
    id: 1,
    nights: "12 NIGHTS",
    title: "Japan",
    subtitle: "Tokyo, Kyoto & Naoshima",
    price: "From $6,500 per person",
    image: japanImg,
  },
  {
    id: 2,
    nights: "8 NIGHTS",
    title: "Maldives",
    subtitle: "Luxury Atoll Hopping",
    price: "From $15,385 per person",
    image: maldivesImg,
  },
  {
    id: 3,
    nights: "9 NIGHTS",
    title: "Nepal & Bhutan",
    subtitle: "Spiritual Discovery",
    price: "From $9,615 per person",
    image: nepalImg,
  },
  {
    id: 4,
    nights: "14 NIGHTS",
    title: "Vietnam & Cambodia",
    subtitle: "Timeless Indochine",
    price: "From $2,800 per person",
    image: vietnamImg,
  },
  {
    id: 5,
    nights: "12 NIGHTS",
    title: "Bali & Lombok",
    subtitle: "Temples & Rice Terraces",
    price: "From $11,200 per person",
    image: baliImg,
  },
  {
    id: 6,
    nights: "14 NIGHTS",
    title: "Sri Lanka",
    subtitle: "Tea Highlands to Coast",
    price: "From $10,500 per person",
    image: sriLankaImg,
  },
];

const SignatureAsiaJourneys = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.headingWrap}>
          <p className={styles.subTitle}>ELITE GLOBAL CONCIERGE</p>
          <h2 className={styles.heading}>EGC Signature Asia Journeys</h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {journeys.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.image} />

              <div className={styles.overlay}></div>

              <div className={styles.badge}>{item.nights}</div>

              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p className={styles.subText}>{item.subtitle}</p>
                <p className={styles.price}>{item.price}</p>
                <button className={styles.learnBtn}>LEARN MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureAsiaJourneys;