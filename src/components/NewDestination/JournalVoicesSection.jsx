import React from "react";
import styles from "./JournalVoicesSection.module.css";

import linepattern2 from "../../assets/linePattern2.png";
import quoteIcon from "../../assets/quote.png";

const testimonials = [
  {
    text: "Aurum didn’t just plan a trip — they revealed a version of the world I didn’t know existed. The private access to Angkor Wat at dawn moved me to tears.",
    name: "Catherine M.",
    city: "NEW YORK",
    trip: "CAMBODIA & LAOS, 2025",
  },
  {
    text: "Every detail was engineered to exceed expectation. The aurora-chasing expedition in Svalbard was the single greatest experience of my life.",
    name: "James A.",
    city: "LONDON",
    trip: "ARCTIC CIRCLE, 2025",
  },
  {
    text: "We requested the impossible — a private dinner on the salt flats of Bolivia with a live string quartet. Aurum delivered without a single question.",
    name: "Sofia & David R.",
    city: "MILAN",
    trip: "SOUTH AMERICA, 2024",
  },
];

const articles = [
  {
    tag: "DISPATCH",
    region: "INDIAN OCEAN",
    title: "Inside the World’s Last Truly Private Island",
    desc: "Our travel editor spent ten days at an unnamed atoll in the Maldives — accessible only by arrangement. Here is the untold account.",
    date: "FEBRUARY 2026",
    readTime: "8 min read",
  },
  {
    tag: "INSIDER",
    region: "ASIA",
    title: "Kyoto After Hours: The Temples That Open Only for Two",
    desc: "A singular arrangement with one of Kyoto’s oldest Buddhist orders grants Aurum client access to temple ceremonies closed to the public since 1923.",
    date: "JANUARY 2026",
    readTime: "6 min read",
  },
  {
    tag: "INTELLIGENCE",
    region: "AFRICA",
    title: "The New Frontier: Why Zambia is the Next Great Safari Destination",
    desc: "While Kenya and Tanzania grow ever more crowded, discerning travelers are discovering Zambia’s vast, untouched wilderness—before the world does.",
    date: "DECEMBER 2025",
    readTime: "10 min read",
  },
];

const JournalVoicesSection = () => {
  return (
    <section
      className={styles.section}
      style={{ "--journal-pattern": `url(${linepattern2})` }}
    >
      <div className={styles.bgpattern}>
      <div className={styles.custom}>
        <div className={styles.block}>
          <p className={styles.kicker}>Client Voices</p>
          <h2 className={styles.heading}>Journeys That Transcend</h2>

          <div className={styles.testimonialGrid}>
            {testimonials.map((item, index) => (
              <article className={styles.testimonialCard} key={index}>
                <img
                  src={quoteIcon}
                  alt=""
                  className={styles.quoteIcon}
                  width={32}
                  height={32}
                />
                <p className={styles.testimonialText}>{item.text}</p>
                <div className={styles.cardDivider} aria-hidden="true" />
                <footer className={styles.clientMeta}>
                  <p className={styles.clientName}>{item.name}</p>
                  <p className={styles.clientCity}>{item.city}</p>
                  <p className={styles.clientTrip}>{item.trip}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
      </div>

      <div className={styles.bgpattern}>
      <div className={styles.custom}>
        <div className={styles.block}>
          <p className={styles.kicker}>The EGC Journal</p>
          <h2 className={styles.heading}>Intelligence &amp; Inspiration</h2>

          <div className={styles.articleGrid}>
            {articles.map((item, index) => (
              <article className={styles.articleCard} key={index}>
                <div className={styles.articleTop}>
                  <span className={styles.articleTag}>{item.tag}</span>
                  <span className={styles.articleRegion}>{item.region}</span>
                </div>

                <h3 className={styles.articleTitle}>{item.title}</h3>
                <p className={styles.articleDesc}>{item.desc}</p>

                <div className={styles.cardDivider} aria-hidden="true" />

                <div className={styles.articleFooter}>
                  <div className={styles.articleMetaCol}>
                    <p className={styles.articleDate}>{item.date}</p>
                    <p className={styles.readTime}>{item.readTime}</p>
                  </div>
                  <a className={styles.readLink} href="#">
                    READ →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default JournalVoicesSection;