import React, { useState } from "react";
import mapImg from "../../assets2/japan/Imperial Odyssey/3-I.png";
import tickIcon from "../../assets/tick1.png";
import tickIcon1 from "../../assets/correct.png";
import styles from "./JourneyOverview.module.css";

const includedItems = [
  "13 nights accommodation at luxury properties",
  "All meals as specified (daily breakfast, 8 lunches, 10 dinners)",
  "Private English-speaking guide throughout",
  "Helicopter transfer Tokyo-Hakone over Mt Fuji",
  "First-class shinkansen rail travel",
  "All private ground transportation",
  "Airport meet and greet with private transfers",
  "All entrance fees and cultural experiences",
  "Private tea ceremony with master",
  "24/7 concierge support",
  "Comprehensive travel insurance",
];

const excludedItems = [
  "International flights",
  "Travel visa (if required)",
  "Personal expenses and gratuities",
  "Meals not specified",
  "Optional activities",
];

const JourneyOverview = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          {/* LEFT SECTION */}
          <div className={styles.leftSection}>
            {/* Header */}
            <div className={styles.header}>
              <p className={styles.sectionLabel}>Journey Overview</p>
              <h2 className={styles.mainTitle}>A 14-Day Masterpiece</h2>
              <p className={styles.description}>
                A 14-day immersion into Japan's imperial heritage, from the modern
                grandeur of Tokyo to the ancient capitals where emperors once
                walked. This meticulously crafted journey reveals Japan at its
                most refined-private tea ceremonies with living masters, exclusive
                access to imperial gardens, and stays at legendary ryokans where
                traditions have been perfected over centuries.
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
                    <img src={tickIcon} alt="tick" className={styles.tickIcon} />
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
                  <img src={tickIcon1} alt="tick" className={styles.tickIconSmall} />
                  <span>13 nights luxury accommodation</span>
                </div>

                <div className={styles.includedItem}>
                  <img src={tickIcon1} alt="tick" className={styles.tickIconSmall} />
                  <span>All entrance fees and experiences</span>
                </div>

                <div className={styles.includedItem}>
                  <img src={tickIcon1} alt="tick" className={styles.tickIconSmall} />
                  <span>All internal transfers including shinkansen</span>
                </div>

                <div className={styles.includedItem}>
                  <img src={tickIcon1} alt="tick" className={styles.tickIconSmall} />
                  <span>24/7 concierge support</span>
                </div>
              </div>

              <button
                className={styles.viewAllButton}
                onClick={() => setShowPopup(true)}
              >
                View all inclusions →
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className={styles.rightSection}>
            <div className={styles.mapHeader}>
              <h3 className={styles.mapTitle}>Journey Route</h3>
            </div>

            <div className={styles.mapContainer}>
              <img
                src={mapImg}
                alt="Japan Journey Route Map"
                className={styles.mapImage}
              />
            </div>

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

      {/* POPUP MODAL */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div
            className={styles.popupBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.popupClose}
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            <div className={styles.popupGrid}>
              {/* Included */}
              <div className={styles.popupColumn}>
                <p className={styles.popupLabel}>WHAT'S INCLUDED</p>
                <h2 className={styles.popupTitle}>Inclusions</h2>

                <ul className={styles.popupList}>
                  {includedItems.map((item, i) => (
                    <li key={i} className={styles.popupItem}>
                      <img src={tickIcon1} alt="tick" className={styles.popupIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className={styles.popupColumn}>
                <p className={styles.popupLabel}>NOT INCLUDED</p>
                <h2 className={styles.popupTitle}>Exclusions</h2>

                <ul className={styles.popupList}>
                  {excludedItems.map((item, i) => (
                    <li key={i} className={styles.popupItem}>
                      <span className={styles.popupCross}>✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className={styles.downloadBtn}>
                  ↓ DOWNLOAD FULL ITINERARY PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JourneyOverview;