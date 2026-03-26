import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "./FourSeasonsSlider.css";

import springImg from "../../assets/spring.jpg";
import summerImg from "../../assets/summer.png";
import autumnImg from "../../assets/autumn.jpg";

const seasonsData = [
  {
    id: 1,
    tag: "March - May",
    name: "春 Haru",
    season: "Spring",
    temp: "8°C - 20°C",
    desc: "Spring in Japan is a symphony of renewal. Cherry blossoms (sakura) transform the landscape into a dream.",
    btn: "EXPLORE SPRING",
    image: springImg,
  },
  {
    id: 2,
    tag: "June - August",
    name: "夏 Natsu",
    season: "Summer",
    temp: "20°C - 35°C",
    desc: "Summer brings Japan alive with energy and tradition. While June ushers in the rainy season (tsuyu)...",
    btn: "EXPLORE SUMMER",
    image: summerImg,
  },
  {
    id: 3,
    tag: "September - November",
    name: "秋Aki",
    season: "Autumn",
    temp: "10°C - 22°C",
    desc: "Autumn is when Japan reveals its soul. The practice of momijigari autumn leaf hunting draws...",
    btn: "EXPLORE AUTUMN",
    image: autumnImg,
  },

];

const FourSeasonsSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="fs-season-wrapper">
      <div className="fs-season-container">

        <p className="fs-season-subtitle">FOUR SEASONS</p>
        <h2 className="fs-season-title">Choose Your Season</h2>

        <div className="fs-swiper-wrapper">

          <div ref={prevRef} className="fs-nav-btn fs-nav-left">
            <FiChevronLeft />
          </div>

          <div ref={nextRef} className="fs-nav-btn fs-nav-right">
            <FiChevronRight />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            navigation
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
          >
            {seasonsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="fs-season-card">

                  <div className="fs-season-image">
                    <img src={item.image} alt={item.season} />
                    <span className="fs-season-tag">{item.tag}</span>

                    <div className="fs-season-overlay">
                      <p className="fs-name">{item.name}</p>
                      <p className="fs-season-name">{item.season}</p>
                      <p className="fs-season-temp">{item.temp}</p>
                    </div>
                  </div>

                  <div className="fs-season-content">
                    <p>{item.desc}</p>
                    <button className="fs-season-btn">
                      {item.btn} →
                    </button>
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

export default FourSeasonsSlider;
