import React, { useState } from "react";
import styles from "./VesselExperience.module.css";

// Accommodation Images
import room1 from "../../assets/ocean-suite.png";
import room2 from "../../assets/deluxe-suite.png";
import room3 from "../../assets/owner-suite.png";

// Amenity Icons (PNG)
import diningIcon from "../../assets/dining.png";
import barIcon from "../../assets/bar.png";
import fitnessIcon from "../../assets/fitness.png";
import poolIcon from "../../assets/pool.png";
import wifiIcon from "../../assets/wifi.png";
import cameraIcon from "../../assets/camera.png";

import SuiteModal from "./SuiteModal";

const accommodations = [
  {
    title: "Ocean View Suite",
    modalTitle: "Seven Seas",
    size: "25 sqm /269 sq ft",
    image: room1,
    price: "$12,495",
    location: "ST. BARTHELEMY",
    features: ["Queen bed", "Ocean view window", "Sitting area", "En-suite bathroom"],
    description:
      "Seven Seas Cruises redefines ultra-luxury travel, where timeless elegance meets boundless horizon. Each voyage unfolds with effortless sophistication, offering expansive suites, panoramic ocean views, and intuitive, personalized service tailored to every preference.",
    description2:
      "From the gentle rhythm of the sea at sunrise to golden sunsets on your private veranda, every detail is thoughtfully curated to create a seamless and indulgent journey.",
  },
  {
    title: "Deluxe Suite",
    modalTitle: "Ocean Retreat",
    size: "35 sqm / 377 sq ft",
    image: room2,
    price: "$15,995",
    location: "MEDITERRANEAN SEA",
    features: ["King bed", "Private balcony", "Living area", "Marble bathroom"],
    description:
      "Deluxe Suite offers a serene sanctuary at sea with elegant interiors, floor-to-ceiling views, and refined comforts throughout your voyage.",
    description2:
      "From spacious lounging areas to a tranquil private balcony, every moment aboard is designed for comfort and calm sophistication.",
  },
  {
    title: "Owner’s Suite",
    modalTitle: "Royal Horizon",
    size: "55 sqm/592 sq ft",
    image: room3,
    price: "$15,995",
    location: "ADRIATIC COAST",
    features: ["King bed", "Wrap-around balcony", "Butler service", "Jacuzzi tub"],
    description:
      "The Owner’s Suite represents the pinnacle of onboard luxury, blending grand design with uninterrupted sea views and exceptional privacy.",
    description2:
      "Enjoy personalized butler service, expansive living space, and elevated finishes that transform every stay into a world-class escape.",
  },
];

const amenities = [
  {
    icon: diningIcon,
    title: "Gourmet Dining",
    description: "Two restaurants with Mediterranean cuisine",
  },
  {
    icon: barIcon,
    title: "Premium Bar",
    description: "Curated wine selection and craft cocktails",
  },
  {
    icon: fitnessIcon,
    title: "Fitness Center",
    description: "State-of-the-art equipment and yoga",
  },
  {
    icon: poolIcon,
    title: "Sun Deck Pool",
    description: "Relaxation pool with ocean views",
  },
  {
    icon: wifiIcon,
    title: "Connectivity",
    description: "Complimentary WiFi throughout",
  },
  {
    icon: cameraIcon,
    title: "Photography",
    description: "Professional photographer on board",
  },
];

const VesselExperience = () => {
  const [activeTab, setActiveTab] = useState("accommodations");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          {/* Tabs */}
          <div className={styles.tabsWrapper}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "accommodations" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("accommodations")}
            >
              Accommodations
            </button>

            <button
              className={`${styles.tabButton} ${
                activeTab === "amenities" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("amenities")}
            >
              Amenities
            </button>
          </div>

          {/* Accommodations */}
          {activeTab === "accommodations" && (
            <div className={styles.accommodationGrid}>
              {accommodations.map((item, index) => (
                <div
                  key={index}
                  className={styles.roomCard}
                  onClick={() => openModal(index)}
                >
                  <div className={styles.roomImageWrapper}>
                    <img src={item.image} alt={item.title} className={styles.roomImage} />
                    <span className={styles.roomSize}>{item.size}</span>
                  </div>

                  <div className={styles.roomContent}>
                    <h3 className={styles.roomTitle}>{item.title}</h3>

                    <ul className={styles.featureList}>
                      {item.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <div className={styles.roomFooter}>
                      <span className={styles.price}>From {item.price}</span>
                      <button className={styles.viewBtn}>View →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Amenities */}
          {activeTab === "amenities" && (
            <div className={styles.amenitiesGrid}>
              {amenities.map((item, index) => (
                <div key={index} className={styles.amenityCard}>
                  <div className={styles.iconCircle}>
                    <img src={item.icon} alt={item.title} className={styles.amenityIcon} />
                  </div>

                  <h3 className={styles.amenityTitle}>{item.title}</h3>
                  <p className={styles.amenityDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <SuiteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        slides={accommodations}
        initialSlide={modalIndex}
      />
    </>
  );
};

export default VesselExperience;