import React from "react";
import styles from "./TopExperiences.module.css";

// ===== Import images =====
import balloonImg from "../../assets/balloon.png";
import onsenImg from "../../assets/onsen.png";
import villaImg from "../../assets/villa.png";
import diningImg from "../../assets/dining1.png";
import yachtImg from "../../assets/yacht.png";
import spaImg from "../../assets/spa.png";

const experiences = [
  {
    id: 1,
    badge: "ADVENTURE",
    location: "MYANMAR",
    title: "Balloon Over Bagan",
    desc: "Float above 2,000 ancient temples as dawn paints the plains in gold. A once-in-a-lifetime aerial meditation.",
    image: balloonImg,
  },
  {
    id: 2,
    badge: "WELLNESS",
    location: "JAPAN",
    title: "Private Onsen Retreat",
    desc: "Secluded hot spring sanctuaries in bamboo forests. Traditional ryokan luxury and healing mineral soaking.",
    image: onsenImg,
  },
  {
    id: 3,
    badge: "LUXURY STAY",
    location: "MALDIVES & ASIA",
    title: "Overwater Villa Escape",
    desc: "Wake to turquoise infinity. Private butlers, underwater dining, and the world's most exclusive island retreats.",
    image: villaImg,
  },
  {
    id: 4,
    badge: "CULINARY",
    location: "BANGKOK",
    title: "Royal Thai Dining",
    desc: "A private terrace under the City of Angels. Royal Thai cuisine reimagined by Asia’s most celebrated chefs.",
    image: diningImg,
  },
  {
    id: 5,
    badge: "EXPEDITION",
    location: "HALONG BAY, VIETNAM",
    title: "Private Yacht Charter",
    desc: "Navigate limestone karsts aboard your private vessel. Kayak hidden lagoons and dine under a canopy of stars.",
    image: yachtImg,
  },
  {
    id: 6,
    badge: "WELLNESS",
    location: "UBUD, BALI",
    title: "Balinese Spa Ritual",
    desc: "Ancient Balinese healing traditions in open-air bamboo pavilions surrounded by tropical gardens and birdsong.",
    image: spaImg,
  },
];

const TopExperiences = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.headingWrap}>
          <p className={styles.subTitle}>HANDPICKED FOR YOU</p>
          <h2 className={styles.heading}>Top Experiences</h2>
          <p className={styles.description}>
            Asia’s most extraordinary moments — each one curated, private, and
            utterly unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {experiences.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.image} />

              <div className={styles.overlay}></div>

              <div className={styles.badge}>{item.badge}</div>

              <div className={styles.cardContent}>
                <p className={styles.location}>{item.location}</p>
                <h3>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
                <button className={styles.learnBtn}>LEARN MORE →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className={styles.buttonWrap}>
          <button className={styles.viewMoreBtn}>VIEW MORE</button>
        </div>
      </div>
    </section>
  );
};

export default TopExperiences;