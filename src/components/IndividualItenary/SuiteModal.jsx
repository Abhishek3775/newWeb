import React, { useEffect, useRef } from "react";
import styles from "./SuiteModal.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import eliteLogo from "../../assets/elite-logo.png";

const SuiteModal = ({ isOpen, onClose, slides = [], initialSlide = 0 }) => {
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
        {/* Top Small Label */}
        <p className={styles.topLabel}>{slides[initialSlide]?.title}</p>

        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        {/* Nav Buttons */}
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

                {/* RIGHT CONTENT */}
                <div className={styles.infoSection}>
                  <h2 className={styles.title}>{item.modalTitle || item.title}</h2>

                  <div className={styles.locationRow}>
                    <span className={styles.dot}></span>
                    <span>{item.location || "ST. BARTHELEMY"}</span>
                  </div>

                  <p>{item.description}</p>
                  {item.description2 && <p>{item.description2}</p>}

                  {/* Bottom CTA Box */}
                  <div className={styles.ctaStrip}>
                    <div className={styles.ctaLeft}>
                      <img src={eliteLogo} alt="Elite Local" className={styles.ctaLogo} />
                      <div>
                        <h4>SPEAK TO AN EXPERT</h4>
                        <p>
                          Contact us to include Tambara Camp, an A&K Sanctuary in
                          your Journey.
                        </p>
                      </div>
                    </div>

                    <button className={styles.enquireBtn}>ENQUIRE</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuiteModal;