import React from "react";
import styles from "./FavouriteTrips.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import trip1 from "../../assets2/EGC Signature/luxary hotel/2.png";
import trip2 from "../../assets2/EGC Signature/luxary hotel/3.png";
import trip3 from "../../assets2/EGC Signature/luxary hotel/4.png";
import trip4 from "../../assets2/EGC Signature/luxary hotel/5.png";
import trip5 from "../../assets2/EGC Signature/luxary hotel/6.png";
import trip6 from "../../assets2/EGC Signature/luxary hotel/7.png";

const trips = [
  {
    id: 1,
    nights: "7 NIGHTS",
    location: "TUSCANY, ITALY",
    title: "A Private Villa Retreat in the Heart of Tuscany",
    price: "From €9,500 per person",
    image: trip1,
  },
  {
    id: 2,
    nights: "6 NIGHTS",
    location: "SERENGETI, TANZANIA",
    title: "An Exclusive Safari Camp Under African Skies",
    price: "From €12,000 per person",
    image: trip2,
  },
  {
    id: 3,
    nights: "8 NIGHTS",
    location: "GREEK ISLANDS",
    title: "A Private Yacht Charter Through the Cyclades",
    price: "From €15,000 per person",
    image: trip3,
  },
  {
    id: 4,
    nights: "7 NIGHTS",
    location: "PATAGONIA, CHILE",
    title: "A Private Expedition Through Patagonia’s Wild Landscapes",
    price: "From €11,500 per person",
    image: trip4,
  },
  {
    id: 5,
    nights: "6 NIGHTS",
    location: "KYOTO, JAPAN",
    title: "A Cultural Journey Through Japan’s Timeless Traditions",
    price: "From £9,800 per person",
    image: trip5,
  },
  {
    id: 6,
    nights: "8 NIGHTS",
    location: "MALDIVES",
    title: "A Private Island Escape in the Indian Ocean",
    price: "From €14,500 per person",
    image: trip6,
  },
];

const FavouriteTrips = () => {
  return (
    <section className={styles.favouriteTrips}>
      <div className={styles.container}>
        <p className={styles.topLabel}>CURATED ITINERARIES</p>
        <h2 className={styles.heading}>Our Favourite Group Trips</h2>
        <p className={styles.subheading}>
          Use these as inspiration. Every journey is tailored to your group's
          desires.
        </p>

        <div className={styles.sliderWrapper}>
          <button className={`${styles.navBtn} ${styles.leftBtn}`}>
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <div className={styles.grid}>
            {trips.map((trip) => (
              <div
                key={trip.id}
                className={styles.card}
                style={{ backgroundImage: `url(${trip.image})` }}
              >
                <div className={styles.overlay}></div>

                <span className={styles.nights}>{trip.nights}</span>

                <div className={styles.cardContent}>
                  <p className={styles.location}>{trip.location}</p>
                  <h3 className={styles.cardTitle}>{trip.title}</h3>
                  <p className={styles.price}>{trip.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.rightBtn}`}>
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className={styles.bottomRow}>
          <button className={styles.viewMore}>
            VIEW MORE <span>→</span>
          </button>
        </div>
          <button className={styles.customBtn}>CUSTOMIZE YOUR JOURNEY</button>
      </div>
    </section>
  );
};

export default FavouriteTrips;