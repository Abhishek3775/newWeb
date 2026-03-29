import React, { useState } from 'react';
import styles from './YouMayAlsoEnjoy.module.css';

import img1 from "../../assets2/IndividualBlog/5.png"
import img2 from "../../assets2/IndividualBlog/6.png"
import img3 from "../../assets2/IndividualBlog/7.png"

const YouMayAlsoEnjoy = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const articles = [
    {
      id: 1,
      category: 'DESTINATIONS',
      readTime: '6 MIN READ',
      title: 'Mediterranean Voyages by Private Yacht',
      image: img1,
      color: '#4A90E2'
    },
    {
      id: 2,
      category: 'EXPERIENCES',
      readTime: '8 MIN READ',
      title: 'Into the Wild: A Safari Beyond Compare',
      image: img2,
      color: '#50C878'
    },
    {
      id: 3,
      category: 'WELLNESS',
      readTime: '7 MIN READ',
      title: 'Alpine Retreats: Winter\'s Quiet Luxury',
      image: img3,
      color: '#9B59B6'
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <div>
            <p className={styles.continueLabel}>CONTINUE READING</p>
            <h2 className={styles.title}>You May Also Enjoy</h2>
          </div>
          <a href="#" className={styles.backLink}>
            ← BACK TO JOURNAL
          </a>
        </div>

        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <article
              key={article.id}
              className={styles.articleCard}
              onMouseEnter={() => setHoveredCard(article.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.content}>
                <div className={styles.metadata}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.readTime}>• {article.readTime}</span>
                </div>
                <h3 className={styles.articleTitle}>{article.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YouMayAlsoEnjoy;