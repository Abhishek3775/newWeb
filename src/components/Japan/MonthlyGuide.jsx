import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "./MonthlyGuide.css";

const monthsData = [
  { name: "Jan", temp: "2°C - 10°C", rating: 0 },
  { name: "Feb", temp: "3°C - 11°C", rating: 0 },
  { name: "Mar", temp: "7°C - 14°C", rating: 0 },
  { name: "Apr", temp: "12°C - 19°C", rating: 5 },
  { name: "May", temp: "16°C - 23°C", rating: 3 },
  { name: "Jun", temp: "20°C - 26°C", rating: 2 },
  { name: "Jul", temp: "24°C - 31°C", rating: 1 },
  { name: "Aug", temp: "26°C - 33°C", rating: 1 },
  { name: "Sep", temp: "22°C - 28°C", rating: 2 },
  { name: "Oct", temp: "15°C - 22°C", rating: 5 },
  { name: "Nov", temp: "10°C - 17°C", rating: 3 },
  { name: "Dec", temp: "5°C - 12°C", rating: 1 },
];

const MonthlyGuide = () => {
  return (
    <section className="monthlyGuideSection">
      <div className="monthlyGuideContainer">
        <p className="monthlyGuideSubtitle">MONTH BY MONTH</p>
        <h2 className="monthlyGuideTitle">Your Monthly Guide</h2>

        <div className="monthlyGuideSliderWrap">
          <button className="mgArrow mgPrev" aria-label="Previous month">
            <FiChevronLeft />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".mgPrev",
              nextEl: ".mgNext",
            }}
            slidesPerView={6}
            spaceBetween={12}
            speed={700}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2.4,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 12,
              },
            }}
            className="monthlyGuideSwiper"
          >
            {monthsData.map((month, index) => (
              <SwiperSlide key={index}>
                <div className="monthlyGuideCard">
                  <p className="monthName">{month.name}</p>

                  <div className="monthStars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < month.rating ? "star filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="monthTemp">{month.temp}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="mgArrow mgNext" aria-label="Next month">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonthlyGuide;