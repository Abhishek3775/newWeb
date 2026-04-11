import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "./SouthAfricaSlider.css";

import rhino from "../../assets/rhino.jpg";
import balloon from "../../assets/ballon.jpg";
import helicopter from "../../assets/helicopter.png";
import whale from "../../assets/whale.jpg";
import penguin from "../../assets/penguin.jpg";
import hotel from "../../assets/hotel.jpg";

const slidesData = [
  {
    id: 1,
    image: rhino,
    title: "Private Black Rhino Tracking",
    description:
      "Join expert trackers on foot through private reserves to encounter one of Africa's most endangered species.",
  },
  {
    id: 2,
    image: balloon,
    title: "Hot Air Balloon Safari",
    description:
      "Float silently over the African bushveld at sunrise, watching wildlife wake beneath...",
  },
  {
    id: 3,
    image: helicopter,
    title: "Helicopter Wine Tour",
    description:
      "Soar over the dramatic Cape Peninsula before landing at an exclusive vineyard estate.",
  },
  {
    id: 4,
    image: whale,
    title: "Great White Shark Cage Diving",
    description:
      "Face-to-face encounters with the ocean's apex predator in the shark capital of the world.",
  },
  {
    id: 5,
    image: penguin,
    title: "Private Penguin Colony Visit",
    description:
      "Experience Boulders Beach's African penguin colony with exclusive early morning access.",
  },
  {
    id: 6,
    image: hotel,
    title: "Luxury Blue Train Journey",
    description:
      "Travel in legendary style aboard the Blue Train from Pretoria to Cape Town.",
  },
];

const SouthAfricaSlider = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section className="saus-section">
      <div className="saus-container">
        {/* HEADER */}
        <div className="saus-header">
          <h2>See &amp; Do Unique to South Africa</h2>
          <p>
            Moments that can only happen here - from tracking endangered rhinos
            on foot to floating over the bushveld at sunrise.
          </p>
        </div>

        {/* SLIDER */}
        <div className="saus-slider-wrapper">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={3}
            speed={850}
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
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="saus-slide-item"
                  onClick={() => {
                    if (index === 0) {
                      navigate("/south-africa/rhino-tracking");
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="saus-card">
                    <img src={slide.image} alt={slide.title} />
                  </div>

                  <div className="saus-card-content">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* BOTTOM NAV */}
          <div className="saus-bottom-nav">
            <button
              className="saus-arrow"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>

            <button
              className="saus-arrow"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SouthAfricaSlider;