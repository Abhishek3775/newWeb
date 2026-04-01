import React, { useState } from "react";
import styles from "./PersonalizedJourneys.module.css";

import img1 from "../../assets2/EGC Signature/4.png";
import img2 from "../../assets2/EGC Signature/5.png";
import img3 from "../../assets2/EGC Signature/6.png";
import img4 from "../../assets2/EGC Signature/7.png";
import img5 from "../../assets2/EGC Signature/8.png";
import img6 from "../../assets2/EGC Signature/9.png";
import img8 from "../../assets2/EGC Signature/10.png";
import img7 from "../../assets2/EGC Signature/11.png";

import { LuUsers } from "react-icons/lu";
import { FaRegCompass } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { PiHeartbeatBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 0,
    layout: "left-large",
    leftCard: {
      tag: "ROMANCE REDEFINED",
      title: "Couples Holidays",
      path: "/luxury-group-holiday",
      description:
        "Intimate escapes designed for two, from secluded beach villas to private wine tastings in Tuscan vineyards.",
      badges: ["Private Dining", "Spa Retreats", "Scenic Stays"],
      experiences: "48 experiences available",
      icon: <CiHeart />,
      iconGold: false,
      bg: img1,
    },
    rightSmall: [
      {
        tag: "ADVENTURES TOGETHER",
        title: "Families Travels",
        path: "/luxury-group-holiday",
        icon: <LuUsers />,
        bg: img2,
      },
      {
        tag: "PERSONAL DISCOVERY",
        title: "Solo Explorers",
        path: "/luxury-group-holiday",
        icon: <FaRegCompass />,
        bg: img3,
      },
    ],
    rightLarge: {
      tag: "BEYOND BOUNDARIES",
      title: "Adventure Seekers",
      path: "/luxury-group-holiday",
      description:
        "Thrilling expeditions for those who crave adrenaline, from heli-skiing to underwater explorations.",
      badges: ["Extreme Sports", "Expeditions", "Wildlife"],
      experiences: "41 experiences available",
      icon: <FaRegStar />,
      iconGold: true,
      bg: img4,
    },
  },
  {
    id: 1,
    layout: "right-large",
    leftSmall: [
      {
        tag: "SHARED LEGACIES",
        title: "Multi-Generational Travel",
        path: "/luxury-group-holiday",
        icon: <LuUsers />,
        bg: img5,
      },
      {
        tag: "TRAVEL TOGETHER",
        title: "Luxury Group Holidays",
        path: "/luxury-group-holiday",
        icon: <LuUsers />,
        bg: img6,
      },
    ],
    leftLarge: {
      tag: "RENEW & RESTORE",
      title: "Wellness & Retreat Escapes",
      path: "/luxury-group-holiday",
      description:
        "Rejuvenating escapes centered on wellbeing and balance — from secluded spa retreats to guided mindfulness and immersive nature experiences.",
      badges: ["Yoga & Meditation", "Holistic Healing", "Spa Retreats"],
      experiences: "24 experiences available",
      icon: <PiHeartbeatBold />,
      iconGold: true,
      bg: img7,
    },
    rightCard: {
      tag: "BEGIN FOREVER",
      title: "Luxury Honeymoons",
      path: "/luxury-group-holiday",
      description:
        "Celebrate love with bespoke escapes for two — from overwater villas and private island retreats to intimate candlelit dinners beneath the stars.",
      badges: ["Private Villas", "Romantic Dining", "Island Retreats"],
      experiences: "36 experiences available",
      icon: <CiHeart />,
      iconGold: false,
      bg: img8,
    },
  },
];

function LargeCard({ card, extraClass }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.card} ${styles.cardLarge} ${extraClass || ""}`}
      onClick={() => navigate(card.path)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          navigate(card.path);
        }
      }}
    >
      <img src={card.bg} alt={card.title} className={styles.cardImg} />
      <div className={styles.cardOverlay} />
      <div className={styles.cardContent}>
        <span
          className={`${styles.iconCircle} ${
            card.iconGold ? styles.iconGold : ""
          }`}
        >
          {card.icon}
        </span>
        <p className={styles.cardTag}>{card.tag}</p>
        <h3 className={styles.cardTitle}>{card.title}</h3>

        {card.description && (
          <p className={styles.cardDesc}>{card.description}</p>
        )}

        {card.badges?.length > 0 && (
          <div className={styles.badges}>
            {card.badges.map((b) => (
              <span key={b} className={styles.badge}>
                {b}
              </span>
            ))}
          </div>
        )}

        {card.experiences && (
          <p className={styles.experiences}>{card.experiences}</p>
        )}
      </div>
    </div>
  );
}

function SmallCard({ card }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.card} ${styles.cardSmall}`}
      onClick={() => navigate(card.path)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          navigate(card.path);
        }
      }}
    >
      <img src={card.bg} alt={card.title} className={styles.cardImg} />
      <div className={styles.cardOverlay} />
      <div className={`${styles.cardContent} ${styles.cardContentSmall}`}>
        <span className={styles.iconCircleSmall}>{card.icon}</span>
        <p className={styles.cardTagSmall}>{card.tag}</p>
        <h3 className={styles.cardTitleSmall}>{card.title}</h3>
      </div>
    </div>
  );
}

export default function PersonalizedJourneys() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState("");

  const goTo = (direction) => {
    if (animating) return;

    setDir(direction);
    setAnimating(true);

    setTimeout(() => {
      setActiveIndex((prev) =>
        direction === "next"
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length,
      );
      setAnimating(false);
      setDir("");
    }, 350);
  };

  const slide = slides[activeIndex];

  const gridClass = [
    styles.grid,
    animating && dir === "next" ? styles.exitLeft : "",
    animating && dir === "prev" ? styles.exitRight : "",
    !animating ? styles.enterVisible : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>PERSONALIZED JOURNEYS</p>
        <h2 className={styles.heading}>Your Style</h2>
        <p className={styles.subtext}>
          Every journey is unique. Select your travel style and discover
          experiences crafted specifically for the way you explore the world.
        </p>
      </div>

      <div className={styles.gridWrapper}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => goTo("prev")}
          aria-label="Previous"
        >
          &#8249;
        </button>

        <div className={gridClass} key={activeIndex}>
          {slide.layout === "left-large" && (
            <>
              <LargeCard card={slide.leftCard} />

              <div className={styles.rightCol}>
                <div className={styles.topRow}>
                  {slide.rightSmall.map((c) => (
                    <SmallCard key={c.title} card={c} />
                  ))}
                </div>

                <LargeCard
                  card={slide.rightLarge}
                  extraClass={styles.cardBottomRight}
                />
              </div>
            </>
          )}

          {slide.layout === "right-large" && (
            <>
              <div className={styles.rightCol}>
                <div className={styles.topRow}>
                  {slide.leftSmall.map((c) => (
                    <SmallCard key={c.title} card={c} />
                  ))}
                </div>

                <LargeCard
                  card={slide.leftLarge}
                  extraClass={styles.cardBottomRight}
                />
              </div>

              <LargeCard card={slide.rightCard} />
            </>
          )}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => goTo("next")}
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
