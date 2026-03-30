import React, { useState } from "react";
import mapImg from "../../assets2/japan/Imperial Odyssey/3-I.png"; // Your map image path
import styles from "./JourneyOverview.module.css";

const JourneyOverview = () => {
  const [mapZoom, setMapZoom] = useState(1);

  const handleZoom = (direction) => {
    if (direction === "in") {
      setMapZoom((prev) => Math.min(prev + 0.2, 2));
    } else {
      setMapZoom((prev) => Math.max(prev - 0.2, 0.8));
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SECTION */}
        <div className={styles.leftSection}>
          {/* Header */}
          <div className={styles.header}>
            <p className={styles.sectionLabel}>Journey Overview</p>
            <h2 className={styles.mainTitle}>A 14-Day Masterpiece</h2>
            <p className={styles.description}>
              A14-day immersion into Japan's imperial heritage, from the modern grandeur of Tokyo to the ancient capitals where emperors once walked. This meticulously crafted journey reveals Japan at its most refined–private tea ceremonies with living masters, exclusive access to imperial gardens, and stays at legendary ryokans.
            </p>
          </div>

          {/* Highlights Section */}
          <div className={styles.highlightsSection}>
            <h3 className={styles.sectionTitle}>Journey Highlights</h3>
            <ul className={styles.highlightsList}>
              {[
                "Private after-hours viewing at Tokyo's Imperial Palace gardens",
                "Exclusive kaiseki dinner with a three-Michelin-starred chef",
                "Traditional tea ceremony with a 15th-generation tea master in Kyoto",
                "Private geiko (geisha) performance in a historic Gion ochaya",
                "Helicopter transfer over Mount Fuji to a secluded onsen ryokan",
                "Behind-the-scenes access to Kanazawa's gold leaf artisan workshops",
              ].map((item, i) => (
                <li key={i} className={styles.highlightItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Best Time Section */}
          <div className={styles.bestTimeBox}>
            <h3 className={styles.bestTimeTitle}>Best Time to Travel</h3>
            <p className={styles.bestTimeText}>
              March to May (Cherry Blossom) • October to November (Autumn Foliage)
            </p>
          </div>

          {/* What's Included Section */}
          <div className={styles.includedBox}>
            <h3 className={styles.includedTitle}>What's Included</h3>
            <div className={styles.includedGrid}>
              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <span>13 nights luxury accommodation</span>
              </div>
              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <span>All entrance fees and experiences</span>
              </div>
              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <span>All internal transfers including shinkansen</span>
              </div>
              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <span>24/7 concierge support</span>
              </div>
            </div>
            <button className={styles.viewAllButton}>
              View all inclusions →
            </button>
          </div>
        </div>

        {/* RIGHT SECTION - MAP */}
        <div className={styles.rightSection}>
          {/* Map Header */}
          <div className={styles.mapHeader}>
            <h3 className={styles.mapTitle}>Journey Route</h3>

          </div>

          {/* Map Container */}
          <div className={styles.mapContainer}>
            <img
              src={mapImg}
              alt="Japan Journey Route Map"
              className={styles.mapImage}
              style={{ transform: `scale(${mapZoom})` }}
            />

            

            {/* Compass Rose
            <div className={styles.compassContainer}>
              <div className={styles.compassLabel}>N</div>
              <svg viewBox="0 0 50 50" className={styles.compassSvg}>
                <path
                  d="M25 5 L35 40 L25 35 L15 40 Z"
                  fill="none"
                  stroke="#E8C547"
                  strokeWidth="1.5"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="#E8C547"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </svg>
            </div> */}
          </div>

          {/* Route Summary */}
          <div className={styles.routeSummary}>
            <span className={styles.routeCity}>● Tokyo</span>
            <span className={styles.routeSeparator}>→</span>
            <span className={styles.routeCity}>● Hakone</span>
            <span className={styles.routeSeparator}>→</span>
            <span className={styles.routeCity}>● Kyoto</span>
            <span className={styles.routeSeparator}>→</span>
            <span className={styles.routeCity}>● Nara</span>
            <span className={styles.routeSeparator}>→</span>
            <span className={styles.routeCity}>● Kanazawa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyOverview;