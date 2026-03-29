import React from 'react'
import styles from "./RelatedJourney.module.css"

import relatedj_ourneys_1 from "../../assets2/japan/Imperial Odyssey/Related Journeys/1.png"
import relatedj_ourneys_2 from "../../assets2/japan/Imperial Odyssey/Related Journeys/2.png"
import relatedj_ourneys_3 from "../../assets2/japan/Imperial Odyssey/Related Journeys/3.jpg"

const RelatedJourney = () => {
    const journeys = [
        { title: "Zen & The Art of Stillness", duration: "10 DAYS", price: "From £22,000", image: relatedj_ourneys_1, alt: "Zen forest with torii gate" },
        { title: "The Connoisseur's Table", duration: "12 DAYS", price: "From £35,000", image: relatedj_ourneys_2, alt: "Luxury Japanese cuisine" },
        { title: "Seasons of Changes", duration: "16 DAYS", price: "From £42,000", image: relatedj_ourneys_3, alt: "Japanese castle in sakura season" },
      ];
  return (
    <section className={styles.rjSection}>
            <p className={styles.rjLabel}>EXPLORE MORE</p>
            <h2 className={styles.rjHeading}>Related Journeys</h2>
            <div className={styles.rjGrid}>
              {journeys.map((journey) => (
                <article key={journey.title} className={styles.rjCard}>
                  <img src={journey.image} alt={journey.alt} className={styles.rjImage} loading="lazy" />
                  <div className={styles.rjOverlay}>
                    <span className={styles.rjDuration}>{journey.duration}</span>
                    <h3 className={styles.rjTitle}>{journey.title}</h3>
                    <p className={styles.rjPrice}>{journey.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
  )
}

export default RelatedJourney