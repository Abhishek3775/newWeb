import React, { useEffect, useRef } from "react";
import styles from "./ItineraryModal.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import locationIcon from "../../assets/location.png";

const ItineraryModal = ({ isOpen, onClose, slides = [], initialSlide = 0 }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        {/* Swiper Nav Buttons */}
        <button ref={prevRef} className={`${styles.navBtn} ${styles.prevBtn}`}>
          ‹
        </button>

        <button ref={nextRef} className={`${styles.navBtn} ${styles.nextBtn}`}>
          ›
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={initialSlide}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className={styles.swiperWrapper}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideContent}>
                {/* LEFT IMAGE */}
                <div className={styles.imageSection}>
                  <img src={item.image} alt={item.title} className={styles.modalImage} />
                </div>

                {/* RIGHT TEXT */}
                <div className={styles.infoSection}>
                  <h2 className={styles.title}>{item.title}</h2>

                  <div className={styles.locationRow}>
                    <img src={locationIcon} alt="Location" />
                    <span>{item.location?.toUpperCase()}</span>
                  </div>

                  <p>{item.description}</p>

                  {item.description2 && <p>{item.description2}</p>}
                  {item.description3 && <p>{item.description3}</p>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ItineraryModal;