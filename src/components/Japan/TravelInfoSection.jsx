import React, { useState, useEffect } from "react";
import styles from "./TravelInfoSection.module.css";
import { FaRegHeart, FaRegCheckCircle, FaAngleRight } from "react-icons/fa";
import compass from "../../assets/compass.png";
import health from "../../assets/health.png";

const testimonials = [
  {
    quote:
      '"Elite Concierge opened doors I didn\'t know existed. The private tea ceremony in Kyoto brought me to tears - it was like stepping into another dimension of beauty and meaning."',
    name: "Alexandra M.",
    trip: "Imperial Odyssey, 2024",
  },
  {
    quote:
      '"Every detail felt intentional and deeply personal. Japan became more than a destination — it became a memory I’ll carry forever."',
    name: "Daniel R.",
    trip: "Autumn Escape, 2024",
  },
  {
    quote:
      '"From Tokyo to Kyoto, the journey felt seamless and elegant. It was the most beautifully curated travel experience of my life."',
    name: "Sophia L.",
    trip: "Spring Discovery, 2024",
  },
];

const essentialCards = [
  { title: "CAPITAL", text: "Tokyo" },
  { title: "CURRENCY", text: "Japanese Yen (JPY)" },
  {
    title: "LANGUAGES",
    text: "Japanese (English spoken in major cities, hotels,\nand tourist areas)",
  },
  { title: "TIME ZONE", text: "JST (GMT +9)" },
  { title: "FLIGHT FROM LONDON", text: "11-12 hours direct" },
  {
    title: "VISA",
    text: "Not required for UK/US/EU citizens (up to 90 days)\nVisa requirements may vary by nationality",
  },
  {
    title: "VACCINATIONS",
    text: "No mandatory vaccinations\nRoutine vaccinations recommended\nConsult your travel clinic prior to departure",
  },
  {
    title: "BEST AIRPORTS",
    text: "Tokyo Haneda (HND)\nTokyo Narita (NRT)\nOsaka Kansai (KIX)",
  },
];

const healthTips = [
  "Japan has excellent healthcare facilities",
  "Travel insurance recommended",
  "Pharmacies are widely available, though some medications may require prescriptions",
  "Carry personal medications with original prescriptions",
];

const packingEssentials = [
  "Comfortable walking shoes (extensive walking expected)",
  "Light layers for changing seasons",
  "Modest clothing for temples and shrines",
  "Portable Wi-Fi device or eSIM",
  "Cash for local shops and traditional establishments",
];

const TravelInfoSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.wrapper}>
      {/* Quote Section */}
      <div className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <p className={styles.quoteText}>{testimonials[active].quote}</p>
          <h4 className={styles.quoteName}>{testimonials[active].name}</h4>
          <p className={styles.quoteTrip}>{testimonials[active].trip}</p>

          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  active === index ? styles.activeDot : ""
                }`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Essential Info Section */}
      <div className={styles.infoSection}>
        <div className={styles.headingWrap}>
          <p className={styles.subtitle}>BEFORE YOU GO</p>
          <h2 className={styles.title}>Essential Information</h2>
        </div>

        <div className={styles.infoGrid}>
          {/* Left Grid */}
          <div className={styles.leftGrid}>
            {essentialCards.map((card, index) => (
              <div className={styles.infoCard} key={index}>
                <h4>{card.title}</h4>
                <p>
                  {card.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className={styles.rightColumn}>
            <div className={styles.sideCard}>
              <h4>
                <img src={health} alt="Health Tips" className={styles.icons}/> Health Tips
              </h4>
              <ul>
                {healthTips.map((item, index) => (
                  <li key={index}>
                    <FaAngleRight className={styles.arrowIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h4>
                <img src={compass} alt="Packing Essentials" className={styles.icons} /> Packing Essentials
              </h4>
              <ul>
                {packingEssentials.map((item, index) => (
                  <li key={index}>
                    <FaAngleRight className={styles.arrowIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfoSection;