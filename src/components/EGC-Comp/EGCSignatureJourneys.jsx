// EGCSignatureJourneys.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./EGCSignatureJourneys.module.css";

import img1 from "../../assets2/EGC Signature/1.png";
import img2 from "../../assets2/EGC Signature/2.png";
import img3 from "../../assets2/EGC Signature/3.png";

import { CiLocationOn } from "react-icons/ci";


const data = [
  {
    id: 1,
    nights: "7 NIGHTS",
    title: "Victoria Falls",
    location: "ZIMBABWE, AFRICA",
    price: "From $8,500 per person",
    image: img1,
    badge: "V",
  },
  {
    id: 2,
    nights: "10 NIGHTS",
    title: "Ultimate Botswana Safari",
    location: "BOTSWANA, SOUTH AFRICA",
    price: "From $10,000 per person",
    image: img2,
    badge: "B",
  },
  {
    id: 3,
    nights: "6 NIGHTS",
    title: "Iceland: Reykjavik",
    location: "ICELAND",
    price: "From $8,500 per person",
    image: img3,
    badge: "I",
  },
];

// Extended data for infinite carousel effect
const extendedData = [...data, ...data, ...data];

export default function EGCSignatureJourneys() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTouching, setIsTouching] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Responsive hook
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsTouching(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    setIsTouching(false);
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Only swipe if horizontal movement is greater than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.headerContainer}>
        <p className={styles.topText}>TOP TRENDING</p>
        <h2 className={styles.heading}>EGC Signature Journeys</h2>
      </div>

      <div className={styles.sliderWrapper}>
        <button
          className={styles.navBtn}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div
          className={styles.sliderViewport}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.cardTrack}
            style={{
              transform: `translateX(-${
                index * (100 / itemsPerView)
              }%)`,
              transition: isTouching ? "none" : "transform 0.5s ease",
            }}
            onTransitionEnd={() => {
              if (index >= extendedData.length - itemsPerView) {
                setIndex(0);
              }
            }}
          >
            {extendedData.map((item, i) => (
              <div
                key={i}
                className={styles.card}
                style={{
  flex: `0 0 ${100 / itemsPerView}%`,
}}
              >
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.title} />
                  <span className={styles.nights}>{item.nights}</span>
                  {/* <div className={styles.badge}>{item.badge}</div> */}
                </div>

                <div className={styles.overlay}></div>

                <div className={styles.content}>
                  <div className={styles.cardLeble}><CiLocationOn/><p className={styles.location}>{item.location}</p></div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.price}>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.navBtn}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* <div className={styles.indicators}>
        {data.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
}