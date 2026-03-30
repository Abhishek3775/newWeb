import React from "react";
import styles from "./TrendingSection.module.css";

import kyoto from "../../assets/kyoto.png";
import marrakech from "../../assets/marrakech.png";
import serengeti from "../../assets/sarengetii.png";
import torres from "../../assets/torres.png";
import amalfi from "../../assets/amalfi.png";
import svalbard from "../../assets/svalbard.png";
import sossusvlei from "../../assets/sossusvlei.png";
import bora from "../../assets/bora.png";
import rajasthan from "../../assets/rajasthan.png";

const TrendingSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>What&apos;s Trending?</h2>
        <p>Each personally inspected by our team of global travel architects.</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.topRow}>
          <TravelCard
            image={kyoto}
            title="Kyoto"
            country="Japan"
            region="Asia"
            subtitle="Where antiquity breathes."
            price="$9,800"
            nights="10 nights"
            tags={["History", "Wellness", "Gastronomy"]}
            size="large"
            explore
          />

          <div className={styles.rightColumn}>
            <TravelCard
              image={marrakech}
              title="Marrakech"
              country="Morocco"
              region="Africa"
              badge="New Addition"
              tags={["Desert", "Cuisine", "Architecture"]}
              size="medium"
            />

            <TravelCard
              image={serengeti}
              title="Serengeti"
              country="Tanzania"
              region="Africa"
              tags={["Desert", "Safari", "Wildlife"]}
              size="smallTop"
            />
          </div>
        </div>

        <div className={styles.bottomGrid}>
          <TravelCard
            image={torres}
            title="Torres del Paine"
            country="Patagonia, Chile"
            region="South America"
            tags={["Trekking", "Wildlife", "Photography"]}
            size="small"
          />

          <TravelCard
            image={amalfi}
            title="Amalfi Coast"
            country="Italy"
            region="Europe"
            badge="Most Requested"
            subtitle="La dolce vita, elevated."
            price="$11,000"
            nights="8 nights"
            tags={["Romance", "Yachting", "Gastronomy"]}
            size="small"
          />

          <TravelCard
            image={svalbard}
            title="Svalbard"
            country="Norway"
            region="Arctic Circle"
            badge="Arctic Exclusive"
            tags={["Wildlife", "Adventure", "Aurora Viewing"]}
            size="small"
          />

          <TravelCard
            image={sossusvlei}
            title="Sossusvlei"
            country="Namibia"
            region="Africa"
            tags={["Solitude", "Stargazing", "Photography"]}
            size="small"
          />

          <TravelCard
            image={bora}
            title="Bora Bora"
            country="French Polynesia"
            region="South Pacific"
            badge="Honeymoon Favourite"
            subtitle="Paradise, privately tailored."
            price="$19,000"
            nights="8 nights"
            tags={["Romance", "Seclusion", "Snorkeling"]}
            size="small"
          />

          <TravelCard
            image={rajasthan}
            title="Rajasthan"
            country="India"
            region="Asia"
            tags={["Heritage", "Cuisine", "Spirituality"]}
            size="small"
          />
        </div>
      </div>
    </section>
  );
};

const TravelCard = ({
  image,
  title,
  country,
  region,
  month,
  subtitle,
  price,
  nights,
  tags = [],
  badge,
  size = "small",
  explore = false,
}) => {
  return (
    <article className={`${styles.card} ${styles[size]}`}>
      <img src={image} alt={title} className={styles.image} loading="lazy" />
      <div className={styles.gradient} aria-hidden="true"></div>

      <div className={styles.content}>
        <div className={styles.topMeta}>
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>

        <div className={styles.bottomContent}>
          <div className={styles.textBlock}>
            {region && <span className={styles.region}>{region}</span>}
            <h3>{title}</h3>
            {country && <p className={styles.country}>{country}</p>}
            {month && <p className={styles.month}>{month}</p>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

            {price && (
              <div className={styles.priceWrap}>
                <span className={styles.startingFrom}>Starting from</span>
                <span className={styles.price}>{price}</span>
                {nights && <span className={styles.nights}>{nights}</span>}
              </div>
            )}
          </div>

          <div className={styles.footerRow}>
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            {explore && <span className={styles.explore}>Explore &rarr;</span>}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TrendingSection;
