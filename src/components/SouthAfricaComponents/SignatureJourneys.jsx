import React, { useRef } from "react";
import "./SignatureJourneys.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
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
    image: img1,
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
    image: img3,
  },
  {
    nights: "10 Nights",
    locations: "Cape Town · Franschhoek · Private Safari",
    title: "Romantic South Africa",
    desc:
      "An intimate journey through South Africa’s most romantic settings, perfect for honeymoons and special celebrations.",
    price: "From £14,500 per person",
    image: img3,
  },
  {
    nights: "10 Nights",
    locations: "Cape Town · Franschhoek · Private Safari",
    title: "Romantic South Africa",
    desc:
      "An intimate journey through South Africa’s most romantic settings, perfect for honeymoons and special celebrations.",
    price: "From £14,500 per person",
    image: img3,
  },
  
];

const SignatureJourneys = () => {
  const swiperRef = useRef(null);

  return (
    <section className="signature-section">
      {/* HEADER */}
      <div className="signature-header">
        <h2>EGC Signature Journeys</h2>
        <p>
          These are simply suggestions. Yours will be tailored, altered, and
          refined until it matches you completely.
        </p>
      </div>

      {/* SLIDER */}
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
            <div className="journey-card">
              <div className="journey-image">
                <img src={item.image} alt={item.title} />
                <span className="nights">{item.nights}</span>

                {/* IMAGE OVERLAY CONTENT */}
                <div className="image-overlay">
                  <span className="locations">{item.locations}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="journey-footer">
                <span className="price">{item.price}</span>
                <span className="view">VIEW JOURNEY →</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM NAV */}
      <div className="slider-nav">
        <button onClick={() => swiperRef.current.slidePrev()}><FaChevronLeft /></button>
        <button onClick={() => swiperRef.current.slideNext()}><FaChevronRight /></button>
      </div>
    </section>
  );
};

export default SignatureJourneys;
