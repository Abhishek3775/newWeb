import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "./WhenToVisitJapan.css";

import spring from "../../assets/Hanami.jpg";
import summer from "../../assets/Natsu.png";
import autumn from "../../assets/Koyo.jpg";

const seasons = [
  {
    id: 1,
    title: "Hanami",
    months: "March - May",
    temp: "8°C - 20°C",
    image: spring,
  },
  {
    id: 2,
    title: "Natsu",
    months: "June - August",
    temp: "20°C - 35°C",
    image: summer,
  },
  {
    id: 3,
    title: "Koyo",
    months: "September - November",
    temp: "10°C - 22°C",
    image: autumn,
  },

    {
    id: 4,
    title: "Natsu",
    months: "June - August",
    temp: "20°C - 35°C",
    image: summer,
  },
];

const WhenToVisitJapan = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="wtv-section">
      <div className="wtv-container">
        {/* HEADER */}
        <div className="wtv-header">
          <div className="wtv-left">
            <span className="wtv-subtitle">THE PERFECT MOMENT</span>
            <h2>When to Visit Japan</h2>
            <p>
              Japan transforms with breathtaking drama throughout the year. Each
              season unveils new wonders — from ethereal cherry blossoms to
              vibrant summer festivals.
            </p>
          </div>

          <div className="wtv-right">
            <div>
              <strong className="wtv-label">Best Overall</strong>
              <span>Spring & Autumn</span>
            </div>
            <div>
              <strong className="wtv-label">Fewest Crowds</strong>
              <span>January - February</span>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div className="wtv-slider-wrapper">
          <div ref={prevRef} className="wtv-nav left">
            <FiChevronLeft />
          </div>

          <div ref={nextRef} className="wtv-nav right">
            <FiChevronRight />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true}
            speed={900}
            grabCursor={true}
            watchSlidesProgress={true}
            navigation
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {seasons.map((season) => (
              <SwiperSlide key={season.id}>
                <div className="wtv-card">
                  <img src={season.image} alt={season.title} />

                  <div className="wtv-overlay">
                    <span className="wtv-temp">{season.temp}</span>
                    <span className="wtv-months">{season.months}</span>
                    <h3>{season.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhenToVisitJapan;
