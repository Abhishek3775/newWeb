import React, { useRef } from "react";
import "./JapanSignatureJourney.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img1 from "../../assets/journey11.png";
import img2 from "../../assets/journey22.png";
import img3 from "../../assets/journey33.png";
import { useNavigate } from "react-router-dom";

const journeys = [
  {
    nights: "14 Nights",
    locations: "TOKYO · KYOTO · NARA",
    title: "Imperial Odyssey",
    desc: "A 14-day immersion into Japan's imperial heritage...",
    price: "From £28,500 per person",
    image: img1,
  },
  {
    nights: "10 Nights",
    locations: "KOYASAN · NAOSHIMA · KYOTO",
    title: "Zen & The Art of Stillness",
    desc: "A transformative journey through Japan's spiritual heartland...",
    price: "From £22,000 per person",
    image: img2,
  },
  {
    nights: "12 Nights",
    locations: "TOKYO · OSAKA · KANAZAWA",
    title: "The Connoisseur's Table",
    desc: "An epicurean voyage through Japan's culinary excellence...",
    price: "From £35,500 per person",
    image: img3,
  },
];

const JapanSignatureJourneys = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section className="japan-signature-section">
      <div className="japan-signature-header">
        <h2>EGC Signature Journeys</h2>
        <p>
          These are simply suggestions. Yours will be tailored, altered, and
          refined until it matches you completely.
        </p>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {journeys.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="japan-signature-card" 
            
            onClick={()=>{
              if(i===0){
                navigate("/imperial-odyssey");
              }
            }}

            >
              <div className="japan-signature-image">
                <img src={item.image} alt={item.title} />
                <span className="japan-signature-nights">
                  {item.nights}
                </span>

                <div className="japan-signature-overlay">
                  <span className="japan-signature-locations">
                    {item.locations}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>

              <div className="japan-signature-footer">
                <span className="japan-signature-price">
                  {item.price}
                </span>
                <span className="japan-signature-view">
                  VIEW JOURNEY →
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="japan-signature-nav">
        <button onClick={() => swiperRef.current.slidePrev()}>
          <FaChevronLeft />
        </button>
        <button onClick={() => swiperRef.current.slideNext()}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default JapanSignatureJourneys;
