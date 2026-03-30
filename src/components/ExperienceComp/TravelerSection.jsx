import React from "react";
import styles from "./TravelerSection.module.css";
import { CiLocationOn } from "react-icons/ci";

/* ================= IMAGES ================= */
import img1 from "../../assets2/Experience/PERSONALIZED JOURNEYS/1.png";
import img2 from "../../assets2/Experience/PERSONALIZED JOURNEYS/2.png";
import img3 from "../../assets2/Experience/PERSONALIZED JOURNEYS/4.png";
import img4 from "../../assets2/Experience/PERSONALIZED JOURNEYS/3.png";
import img5 from "../../assets2/Experience/PERSONALIZED JOURNEYS/5.png";
import img6 from "../../assets2/Experience/PERSONALIZED JOURNEYS/6.png";
import img7 from "../../assets2/Experience/PERSONALIZED JOURNEYS/7.png";
import img8 from "../../assets2/Experience/PERSONALIZED JOURNEYS/8.png";

const topCards = [
  {
    id: 1,
    image: img1,
    location: "Tokyo, Japan",
    category: "ANCIENT TRADITIONS",
    title: "Private Sumo Experience",
    desc: "Dive into Japan's rich sporting heritage with exclusive access and private dining.",
    tags: ["Cultural Immersion", "Private Access", "Private Dining"],
    count: "13 experiences available",
    className: "card1",
  },
  {
    id: 2,
    image: img2,
    location: "Burgundy, France",
    category: "OENOPHILE'S DREAM",
    title: "Grand Cru Private Tasting",
    desc: "Sip your way through prestigious vineyards with private cellar access.",
    tags: ["Grand Cru", "Private Dining", "Cellar Tour"],
    count: "15 experiences available",
    className: "card2",
  },
  {
    id: 4,
    image: img4,
    location: "Wahiba Sands, Oman",
    category: "DESERT MYSTIQ",
    title: "Royal Desert Safari",
    desc: "Experience the golden dunes in absolute privacy with falcon shows, sunset luxury camps, and a tailor-made Bedouin-style escape.",
    tags: ["Falconry", "Stargazing", "Glamping"],
    count: "24 experiences available",
    className: "card4",
  },
  {
    id: 3,
    image: img3,
    location: "Tromsø, Norway",
    category: "CELESTIAL WONDERS",
    title: "Aurora Borealis Retreat",
    desc: "Witness the Northern Lights from a luxury glass-domed lodge with private guided excursions.",
    tags: ["Glass Lodge", "Private Guide", "Arctic Spa"],
    count: "9 experiences available",
    className: "card3",
  },
];

const bottomCards = [
  {
    id: 5,
    image: img5,
    location: "Lapland, Finland",
    category: "ARCTIC ADVENTURES",
    title: "Luxury Ice Igloo Escape",
    desc: "Stay beneath the Arctic sky in a private glass igloo surrounded by snow-covered forests, heated interiors, husky sledding, and northern lights above your retreat.",
    tags: ["Glass Igloo", "Husky Safari", "Northern Lights"],
    count: "11 experiences available",
    className: "card5",
  },
  {
    id: 6,
    image: img6,
    location: "Masai Mara, Kenya",
    category: "WILD SAFARI ELITE",
    title: "Private Safari Expedition",
    desc: "Track the Big Five with expert guides and luxury camp exclusivity.",
    tags: ["Private Game Drive", "Luxury Lodges", "Bush Dining"],
    count: "18 experiences available",
    className: "card6",
  },
  {
    id: 7,
    image: img7,
    location: "Santorini, Greece",
    category: "AEGEAN INDULGENCE",
    title: "Private Caldera Sunset",
    desc: "Sail and dine over the caldera in pure Mediterranean elegance.",
    tags: ["Private Yacht", "Gourmet Dinner", "Sunset Cruise"],
    count: "16 experiences available",
    className: "card7",
  },
  {
    id: 8,
    image: img8,
    location: "Kyoto, Japan",
    category: "IMPERIAL HERITAGE",
    title: "Private Geisha Cultural Evening",
    desc: "Step into Kyoto's timeless traditions with an exclusive evening in a historic teahouse, featuring private performances, refined cuisine, and rare access to one of Japan's most elegant cultural worlds.",
    tags: ["Geisha Performance", "Kaiseki Dining", "Cultural Immersion"],
    count: "8 experiences available",
    className: "card8",
  },
];

const Card = ({ item }) => {
  return (
    <div
      className={`${styles.expCard} ${styles[item.className]}`}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className={styles.expOverlay}></div>

      <div className={styles.expContent}>
        <div className={styles.expMeta}>
          <CiLocationOn />
          <span>{item.location}</span>
        </div>

        <p className={styles.expCategory}>{item.category}</p>
        <h3 className={styles.expTitle}>{item.title}</h3>
        {/* <p className={styles.expDesc}>{item.desc}</p> */}

        <div className={styles.expTags}>
          {item.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        <p className={styles.expCount}>{item.count}</p>
      </div>
    </div>
  );
};

const TravelerSection = () => {
  return (
    <section className={styles.curatedExpSection}>
      <div className={styles.curatedExpContainer}>
        <div className={styles.curatedExpHeader}>
          <p className={styles.curatedExpSmallTitle}>CURATED EXPERIENCES</p>
          <h2 className={styles.curatedExpTitle}>Your World. Elevated</h2>
          <p className={styles.curatedExpSubtitle}>
            Every journey is extraordinary. Discover once-in-a-lifetime cultural immersions,
            handcrafted by our elite concierge team for the world's most discerning travellers.
          </p>
        </div>

        {/* TOP GRID */}
        <div className={styles.topGrid}>
          {topCards.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* BOTTOM GRID (ALTERNATE) */}
        <div className={styles.bottomGrid}>
          {bottomCards.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelerSection;