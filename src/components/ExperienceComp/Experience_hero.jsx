import React from 'react'
import styles from "./Experience_hero.module.css"

const Experiencehero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p className={styles.subtitle}>ELITE GLOBAL CONCIERGE</p>

          <h1 className={styles.title}>
            Extraordinary Experiences <br />
            Curated For You
          </h1>

          <p className={styles.description}>
            Discover journeys that transcend the ordinary. From untouched wilderness
            to exclusive cultural immersions, we craft experiences that leave lasting
            impressions.
          </p>

          <div className={styles.btnGroup}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              View Dates &amp; Prices
            </button>
            <button className={`${styles.btn} ${styles.btnOutline}`}>
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <div className={styles.discover}>
        <span>Discover</span>
        <div className={styles.arrow}>⌄</div>
      </div>
    </section>
  )
}

export default Experiencehero