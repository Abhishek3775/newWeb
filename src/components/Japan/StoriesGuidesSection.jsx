import React from "react";
import styles from "./StoriesGuidesSection.module.css";

import img1 from "../../assets/story1.png";
import img2 from "../../assets/story2.png";
import img3 from "../../assets/story3.png";
import img4 from "../../assets/story4.png";
import img5 from "../../assets/story5.png";
import img6 from "../../assets/story6.png";

const cards = [
  {
    id: 1,
    category: "Guides",
    time: "12 min read",
    title: "Our Complete Guide to Japan",
    desc: "Everything you need to know to plan an unforgettable journey through Japan.",
    image: img1,
  },
  {
    id: 2,
    category: "Stories",
    time: "8 min read",
    title: "Field Notes from Kyoto",
    desc: "Our travel specialist shares moments from Kyoto's quiet temples, tea houses, and lantern-lit streets.",
    image: img2,
  },
  {
    id: 3,
    category: "Guides",
    time: "10 min read",
    title: "Luxury Honeymoons in Japan",
    desc: "Romantic ryokans, cherry blossoms, and unforgettable experiences for newlyweds.",
    image: img3,
  },
  {
    id: 4,
    category: "Guides",
    time: "6 min read",
    title: "24 Hours in Tokyo",
    desc: "From peaceful shrines to neon-lit streets, explore the highlights of Tokyo in just one exciting day.",
    image: img4,
  },
  {
    id: 5,
    category: "Stories",
    time: "15 min read",
    title: "The Ultimate Japan Cultural Journey",
    desc: "Experience Japan's traditions through historic cities, Zen gardens, and timeless cultural experiences.",
    image: img5,
  },
  {
    id: 6,
    category: "Videos",
    time: "Watch",
    title: "Japan - Live",
    desc: "Discover the beauty of Japan through its vibrant cities, serene temples, and breathtaking landscapes.",
    image: img6,
  },
];

const StoriesGuidesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <p className={styles.subheading}>LOOKING FOR INSPIRATION?</p>
          <h2 className={styles.heading}>Stories & Guides</h2>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles.image}
                />

                <div className={styles.badges}>
                  <span className={styles.badgePrimary}>{card.category}</span>
                  <span className={styles.badgeSecondary}>{card.time}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesGuidesSection;