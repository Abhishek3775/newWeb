import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";


import "swiper/css";
import "swiper/css/navigation";
import "./SeasonalSignature.css";

import springImg from "../../assets/spring11.jpg";
import summerImg from "../../assets/summer22.jpg";
import autumnImg from "../../assets/autumn11.jpg";

const experiences = [
  {
    season: "SPRING",
    title: "Private Hanami in Imperial Gardens",
    desc: "Exclusive after-hours access to Japan’s most prestigious gardens during cherry blossom season, complete with kaiseki dinner beneath the sakura.",
    price: "From £8,500 per couple",
    image: springImg,
  },
  {
    season: "SUMMER",
    title: "VIP Gion Matsuri Experience",
    desc: "Private viewing of Kyoto’s legendary festival from an exclusive machiya townhouse, with geiko entertainment and traditional cuisine.",
    price: "From £12,000 per couple",
    image: summerImg,
  },
  {
    season: "AUTUMN",
    title: "Momijigari by Private Charter",
    desc: "Helicopter tour over Japan’s autumn landscapes, landing at a private ryokan accessible only by air, for an unforgettable foliage experience.",
    price: "From £25,000 per couple",
    image: autumnImg,
  },
];

const SeasonalSignature = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="sse-wrapper">
      <div className="sse-container">

        <p className="sse-subtitle">EXCLUSIVE ACCESS</p>
        <h2 className="sse-title">Seasonal Signature Experiences</h2>
        <p className="sse-desc">
          Each season offers unique opportunities for extraordinary experiences available only through our network.
        </p>

        <div className="sse-slider-wrapper">

          <div ref={prevRef} className="sse-nav sse-prev">
            <FiChevronLeft />
          </div>

          <div ref={nextRef} className="sse-nav sse-next">
            <FiChevronRight />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={35}
            slidesPerView={3}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1100: { slidesPerView: 3, spaceBetween: 35 },
            }}
          >
            {experiences.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="sse-card">

                  <div className="sse-image">
                    <img src={item.image} alt="" />

                    <span className="sse-season-tag">
                      {item.season}
                    </span>

                    <div className="sse-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>

                  <div className="sse-footer">
                    <span>{item.price}</span>
                    <button>ENQUIRE NOW <FaArrowRightLong color="#C09551"/></button>
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

export default SeasonalSignature;