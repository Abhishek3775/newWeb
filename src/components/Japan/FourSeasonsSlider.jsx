import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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
    name: "春 Haru/Spring",
    season: "Hanami",
    temp: "8°C - 20°C",
    desc: "Spring in Japan is a symphony of renewal. Cherry blossoms (sakura) transform the landscape into a breathtaking spectacle.",
    image: springImg,
  },
  {
    id: 2,
    tag: "June - August",
    name: "夏 Natsu/Summer",
    season: "Natsu",
    temp: "20°C - 35°C",
    desc: "Summer brings Japan alive with energy and tradition. While June ushers in the rainy season (tsuyu), July and August glow with festivals.",
    image: summerImg,
  },
  {
    id: 3,
    tag: "September - November",
    name: "秋 Aki/Autumn",
    season: "Koyo",
    temp: "10°C - 22°C",
    desc: "Autumn is when Japan reveals its soul. The practice of momijigari autumn leaf hunting draws travelers into crimson landscapes.",
    image: autumnImg,
  },
];

const FourSeasonsSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="fs-season-wrapper">
      <div className="fs-season-container">
        <p className="fs-season-subtitle">FOUR SEASONS</p>
        <h2 className="fs-season-title">Choose Your Season</h2>

        <div className="fs-swiper-wrapper">
          <button
            ref={prevRef}
            className="fs-nav-btn fs-nav-left"
            aria-label="Previous Slide"
          >
            <FiChevronLeft />
          </button>

          <button
            ref={nextRef}
            className="fs-nav-btn fs-nav-right"
            aria-label="Next Slide"
          >
            <FiChevronRight />
          </button>

          {mounted && (
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              speed={900}
              grabCursor={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (
                    swiper.params.navigation &&
                    typeof swiper.params.navigation !== "boolean"
                  ) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 22,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                },
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
                        <h3 className="fs-season-name">{item.season}</h3>
                        <p className="fs-season-temp">{item.temp}</p>
                      </div>
                    </div>

                    <div className="fs-season-content">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default FourSeasonsSlider;