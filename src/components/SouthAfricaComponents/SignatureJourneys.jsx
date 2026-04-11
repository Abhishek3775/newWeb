import React, { useRef } from "react";
import styles from "./SignatureJourneys.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img1 from "../../assets/journey1.jpg";
import img2 from "../../assets/journey2.jpg";
import img3 from "../../assets/journey3.jpg";

const journeys = [
  {
    nights: "12 Nights",
    locations: "Cape Town · Franschhoek · Garden Route",
    title: "Ultimate South Africa",
    desc:
      "The definitive South African journey, combining cosmopolitan Cape Town, the pastoral Winelands, and thrilling Big Five safari in a single unforgettable itinerary.",
    price: "From £18,500 per person",
    image: img3,
  },
  {
    nights: "9 Nights",
    locations: "Cape Town · Grootbos · Madikwe Reserve",
    title: "Family Safari Adventure",
    desc:
      "A wildlife-packed family adventure designed for younger travellers, with child-friendly activities and accommodations throughout.",
    price: "From £9,000 per person",
    image: img2,
  },
  {
    nights: "10 Nights",
    locations: "Cape Town · Franschhoek · Private Safari",
    title: "Romantic South Africa",
    desc:
      "An intimate journey through South Africa’s most romantic settings, perfect for honeymoons and special celebrations.",
    price: "From £14,500 per person",
    image: img1,
  },
];

const SignatureJourneys = () => {
  const swiperRef = useRef(null);

  return (
    <section className={styles.signatureSection}>
      <div className={styles.signatureHeader}>
        <h2>EGC Signature Journeys</h2>

        <p>
          These are simply suggestions. Yours will be tailored, altered, and
          refined until it matches your taste. Reach out to{" "}
          <span>Customize</span>
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={26}
          slidesPerView={3}
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 16,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 1.08,
              spaceBetween: 18,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1.45,
              spaceBetween: 20,
              centeredSlides: false,
            },
            992: {
              slidesPerView: 2.1,
              spaceBetween: 22,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
          className={styles.swiperCustom}
        >
          {journeys.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={styles.journeyCard}>
                <div className={styles.journeyImage}>
                  <img src={item.image} alt={item.title} />

                  <span className={styles.nights}>{item.nights}</span>

                  <div className={styles.imageOverlay}>
                    <span className={styles.locations}>{item.locations}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <div className={styles.journeyFooter}>
                  <span className={styles.price}>{item.price}</span>
                  <span className={styles.view}>
                    VIEW JOURNEY <span>→</span>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Navigation */}
        <div className={styles.bottomNav}>
          <button
            className={styles.navBtn}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <button
            className={styles.navBtn}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignatureJourneys;