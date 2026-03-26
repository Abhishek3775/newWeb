import React from "react";
import styles from "./JournalSection.module.css";

import img1 from "../../assets2/Accommodation/9.png";
import img2 from "../../assets2/Accommodation/10.png";
import img3 from "../../assets2/Accommodation/11.png";

const articles = [
  {
    image: img1,
    category: "TRAVEL PHILOSOPHY",
    date: "15 July 2025",
    title: "The Art of Slow Travel: Why Less is More",
    desc: "Discover how embracing a slower pace transforms your journey into an unforgettable experience."
  },
  {
    image: img2,
    category: "HOTEL GUIDE",
    date: "8 July 2025",
    title: "Hidden Gems: Boutique Hotels Off the Beaten Path",
    desc: "Our curators reveal their favorite secret retreats around the world."
  },
  {
    image: img3,
    category: "SUSTAINABILITY",
    date: "1 July 2025",
    title: "The Future of Luxury: Sustainable Sophistication",
    desc: "How the world’s finest hotels are leading the way in eco-conscious luxury."
  }
];

const JournalSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.smallTitle}>JOURNAL</span>
            <h2 className={styles.heading}>Travel Insights</h2>
          </div>

          <p className={styles.viewAll}>
            View All Articles →
          </p>
        </div>

        {/* Articles */}
        <div className={styles.grid}>
          {articles.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.content}>
                <span className={styles.meta}>
                  {item.category} • {item.date}
                </span>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JournalSection;