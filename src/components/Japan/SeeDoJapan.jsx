import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "./SeeDoJapan.css";

import img1 from "../../assets/Japan1.jpg";
import img2 from "../../assets/Japan2.jpg";
import img3 from "../../assets/Japan3.jpg";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    image: img1,
    title: "A Journey to Japan",
    desc: "From Kyoto’s temples to Mount Fuji, experience Japan through privately curated journeys with Elite Global.",
  },
  {
    id: 2,
    image: img2,
    title: "The Beauty of japan in Bloom",
    desc: "As cherry blossoms drift over quiet canals and historic castles, Japan reveals its most enchanting season.",
  },
  {
    id: 3,
    image: img3,
    title: "Sumo Experience",
    desc: "Witness the power and tradition of sumo wrestling, where ancient rituals meet raw strength in the heart of Japan.",
  },

];

const SeeDoJapan = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section className="see-section">
      <div className="see-container">

        {/* HEADER */}
        <div className="see-header">
          <h2>See & Do Unique to Japan</h2>
          <p>
            Moments that can only happen here - from tracking endangered rhinos
            on foot to floating over the bushveld at sunrise.
          </p>
        </div>

        {/* SWIPER */}
        <div className="see-swiper-wrapper">

          <div ref={prevRef} className="nav-btn left">
            <FiChevronLeft />
          </div>

          <div ref={nextRef} className="nav-btn right">
            <FiChevronRight />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={35}
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
            {cards.map((card,index) => (
              <SwiperSlide key={card.id}>
                <div className="see-card" onClick={()=>{
                  if(index === 2){
                      navigate("/sumo-guide")
                  }
                }}>
                  <div className="see-image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="see-content">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
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

export default SeeDoJapan;
