import React, { useRef } from "react";
import "./MarchGallerySection.css";

import southAfricaImg from "../../assets/img12.jpg";
import moroccoImg from "../../assets/img13.jpg";
import newZealandImg from "../../assets/img14.jpg";
import peruImg from "../../assets/img15.jpg";
import greeceImg from "../../assets/img16.jpg";
import vietnamImg from "../../assets/img17.jpg";
import Maldives from "../../assets/img18.jpg";
import costaRicaImg from "../../assets/CostaRica.jpg";

import japanImg from "../../assets/japanMain.jpg";
import thermometerIcon from "../../assets/thermo2.png";
import locationIcon from "../../assets/location.png";
import correctIcon from "../../assets/correct.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

import springImg from "../../assets/spring11.jpg";
import summerImg from "../../assets/summer22.jpg";
import autumnImg from "../../assets/autumn11.jpg";

const destinationsData = [
  {
    id: 1,
    tag: "SAKURA SEASON IN BLOOM",
    title: "Japan",
    description:
      "March marks the beginning of Japan's iconic cherry blossom season. Witness the ethereal beauty of sakura blooms painting cities and countryside in delicate shades of pink. From Tokyo's historic gardens to Kyoto's ancient temples, experience a cultural journey like no other.",
    temperature: "12–18°C",
    meta: "Cherry blossoms, culture, cuisine",
    image: japanImg,
    highlights: [
      "Cherry blossom viewing (Hanami)",
      "Private tea ceremony",
      "Bullet train journey",
      "Traditional ryokan stay",
    ],
  },
  {
    id: 2,
    tag: "RAINFOREST PARADISE",
    title: "Costa Rica",
    description:
      "Costa Rica's dry season continues into March, perfect for wildlife spotting and zip-lining through rainforest canopies. Spot sloths, toucans, and sea turtles in this biodiversity hotspot.",
    temperature: "24–30°C",
    meta: "Wildlife, adventure, beaches",
    image: costaRicaImg,
    highlights: [
      "Zip-lining through cloud forests",
      "Wildlife spotting at Arenal",
      "Sea turtle nesting beaches",
      "Luxury eco-lodge stays",
    ],
  },
  {
    id: 7,
    tag: "CRYSTAL CLEAR WATERS",
    title: "Maldives",
    description:
      "March brings the tail end of the dry season to the Maldives, with pristine conditions for snorkeling and diving. Overwater villas offer front-row seats to spectacular sunsets and the underwater world below.",
    temperature: "28–31°C",
    meta: "Beaches, diving, romance",
    image: Maldives,
    highlights: [
      "Overwater villa with private pool",
      "Snorkeling with manta rays",
      "Sunset dolphin cruise",
      "World-class spa treatments",
    ],
  },
];

const destinations = [
  {
    id: 1,
    tag: "INTO THE AFRICAN WILD",
    title: "South Africa",
    description:
      "As autumn arrives in South Africa, the wildlife viewing reaches its peak. The vegetation thins and animals gather at water sources creating extraordinary encounters.",
    temperature: "18–28°C",
    meta: "Safari, wildlife, wine",
    image: southAfricaImg,
    highlights: [
      "Big Five safari in private reserves",
      "Wine tasting in Stellenbosch vineyards",
      "Cape Town's Table Mountain at sunset",
    ],
  },
  {
    id: 2,
    tag: "PERFECT DESERT WEATHER",
    title: "Morocco",
    description:
      "March offers the perfect climate to explore Morocco's diverse landscapes. From the winding medinas of Marrakech to the golden dunes of the Sahara.",
    temperature: "15–24°C",
    meta: "Culture, desert, adventure",
    image: moroccoImg,
    highlights: [
      "Luxury desert camp under the stars",
      "Private guided tours of Marrakech's souks",
      "Atlas Mountains trekking",
    ],
  },
  {
    id: 3,
    tag: "AUTUMN ADVENTURES",
    title: "New Zealand",
    description:
      "New Zealand's autumn paints the landscapes in brilliant golds and reds. March offers perfect temperatures for hiking, wine tasting, and experiencing Maori culture.",
    temperature: "15–22°C",
    meta: "Adventure, nature, wine",
    image: newZealandImg,
    highlights: [
      "Milford Sound scenic cruise",
      "Wine tasting in Marlborough",
      "Queenstown adventure activities",
    ],
  },
  {
    id: 4,
    tag: "MACHU PICCHU MAGIC",
    title: "Peru",
    description:
      "March marks the end of the rainy season in Peru, with fewer crowds at Machu Picchu and lush green landscapes. Trek the Inca Trail through cloud forests.",
    temperature: "12–20°C",
    meta: "History, trekking, culture",
    image: peruImg,
    highlights: [
      "Sunrise at Machu Picchu",
      "Inca Trail guided trek",
      "Sacred Valley exploration",
    ],
  },
  {
    id: 5,
    tag: "SPRING AWAKENING",
    title: "Greece",
    description:
      "Greece is a land of radiant islands, classical wonders, and shimmering blue seas, where ancient history meets effortless Mediterranean elegance.",
    temperature: "12–18°C",
    meta: "History, islands, cuisine",
    image: greeceImg,
    highlights: [
      "Acropolis private tour at sunrise",
      "Santorini caldera views",
      "Private yacht cruising between Mykonos and Santorini",
    ],
  },
  {
    id: 6,
    tag: "CULTURAL IMMERSION",
    title: "Vietnam",
    description:
      "Vietnam enchants with emerald landscapes, ancient temples, and a rich tapestry of culture shaped by centuries of tradition and natural beauty.",
    temperature: "20–28°C",
    meta: "Culture, food, scenery",
    image: vietnamImg,
    highlights: [
      "Ha Long Bay luxury cruise",
      "Hoi An lantern-lit old town",
      "Exclusive river and countryside experiences",
    ],
  },
];

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

const MarchGallerySection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const firstDestination = destinationsData[0];
  const secondDestination = destinationsData[1];
  const thirdDestination = destinationsData[2];

  return (
    <>
      {/* FIRST FEATURED DESTINATION */}
      <section className="luxdest-section">
        <div className="luxdest-container">
          <div className="luxdest-card">
            <div className="luxdest-image-wrapper">
              <img
                src={firstDestination.image}
                alt={firstDestination.title}
                className="luxdest-image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="luxdest-content">
              <p className="luxdest-tag">{firstDestination.tag}</p>
              <h2 className="luxdest-title">{firstDestination.title}</h2>

              <p className="luxdest-description">
                {firstDestination.description}
              </p>

              <div className="luxdest-meta">
                <div className="luxdest-meta-item">
                  <img
                    src={thermometerIcon}
                    alt="temperature"
                    className="luxdest-icon"
                  />
                  <span>{firstDestination.temperature}</span>
                </div>

                <div className="luxdest-meta-item">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="luxdest-icon2"
                  />
                  <span>{firstDestination.meta}</span>
                </div>
              </div>

              <div className="luxdest-highlights">
                <h4>HIGHLIGHTS</h4>
                <ul className="luxdest-list">
                  {firstDestination.highlights.map((point, index) => (
                    <li key={index}>
                      <img src={correctIcon} alt="" className="correct-icon" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="luxdest-btn">PLAN YOUR TRIP →</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2 CARDS */}
      <section className="dual-section">
        <div className="dual-container">
          {destinations.slice(0, 2).map((item) => (
            <div className="dual-card" key={item.id}>
              <div className="dual-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="dual-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="dual-content">
                <p className="luxdest-tag">{item.tag}</p>
                <h2 className="luxdest-title dual-title-fix">{item.title}</h2>

                <p className="luxdest-description dual-description-fix">
                  {item.description}
                </p>

                <div className="luxdest-meta">
                  <div className="luxdest-meta-item">
                    <img src={thermometerIcon} alt="" className="luxdest-icon" />
                    <span>{item.temperature}</span>
                  </div>
                  <div className="luxdest-meta-item">
                    <img src={locationIcon} alt="" className="luxdest-icon2" />
                    <span>{item.meta}</span>
                  </div>
                </div>

                <div className="luxdest-highlights">
                  <h4>HIGHLIGHTS</h4>
                  <ul className="luxdest-list">
                    {item.highlights.map((point, index) => (
                      <li key={index}>
                        <img src={correctIcon} alt="" className="correct-icon" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="luxdest-btn">PLAN YOUR TRIP →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MALDIVES FEATURED */}
      <section className="luxdest-section">
        <div className="luxdest-container">
          <div className="luxdest-card reverse">
            <div className="luxdest-image-wrapper">
              <img
                src={thirdDestination.image}
                alt={thirdDestination.title}
                className="luxdest-image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="luxdest-content">
              <p className="luxdest-tag">{thirdDestination.tag}</p>
              <h2 className="luxdest-title">{thirdDestination.title}</h2>

              <p className="luxdest-description">
                {thirdDestination.description}
              </p>

              <div className="luxdest-meta">
                <div className="luxdest-meta-item">
                  <img
                    src={thermometerIcon}
                    alt="temperature"
                    className="luxdest-icon"
                  />
                  <span>{thirdDestination.temperature}</span>
                </div>

                <div className="luxdest-meta-item">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="luxdest-icon2"
                  />
                  <span>{thirdDestination.meta}</span>
                </div>
              </div>

              <div className="luxdest-highlights">
                <h4>HIGHLIGHTS</h4>
                <ul className="luxdest-list">
                  {thirdDestination.highlights.map((point, index) => (
                    <li key={index}>
                      <img src={correctIcon} alt="" className="correct-icon" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="luxdest-btn">PLAN YOUR TRIP →</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2 MORE CARDS */}
      <section className="dual-section">
        <div className="dual-container">
          {destinations.slice(2, 4).map((item) => (
            <div className="dual-card" key={item.id}>
              <div className="dual-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="dual-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="dual-content">
                <p className="luxdest-tag">{item.tag}</p>
                <h2 className="luxdest-title dual-title-fix">{item.title}</h2>

                <p className="luxdest-description dual-description-fix">
                  {item.description}
                </p>

                <div className="luxdest-meta">
                  <div className="luxdest-meta-item">
                    <img src={thermometerIcon} alt="" className="luxdest-icon" />
                    <span>{item.temperature}</span>
                  </div>
                  <div className="luxdest-meta-item">
                    <img src={locationIcon} alt="" className="luxdest-icon2" />
                    <span>{item.meta}</span>
                  </div>
                </div>

                <div className="luxdest-highlights">
                  <h4>HIGHLIGHTS</h4>
                  <ul className="luxdest-list">
                    {item.highlights.map((point, index) => (
                      <li key={index}>
                        <img src={correctIcon} alt="" className="correct-icon" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="luxdest-btn">PLAN YOUR TRIP →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECOND FEATURED */}
      <section className="luxdest-section">
        <div className="luxdest-container">
          <div className="luxdest-card">
            <div className="luxdest-image-wrapper">
              <img
                src={secondDestination.image}
                alt={secondDestination.title}
                className="luxdest-image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="luxdest-content">
              <p className="luxdest-tag">{secondDestination.tag}</p>
              <h2 className="luxdest-title">{secondDestination.title}</h2>

              <p className="luxdest-description">
                {secondDestination.description}
              </p>

              <div className="luxdest-meta">
                <div className="luxdest-meta-item">
                  <img
                    src={thermometerIcon}
                    alt="temperature"
                    className="luxdest-icon"
                  />
                  <span>{secondDestination.temperature}</span>
                </div>

                <div className="luxdest-meta-item">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="luxdest-icon2"
                  />
                  <span>{secondDestination.meta}</span>
                </div>
              </div>

              <div className="luxdest-highlights">
                <h4>HIGHLIGHTS</h4>
                <ul className="luxdest-list">
                  {secondDestination.highlights.map((point, index) => (
                    <li key={index}>
                      <img src={correctIcon} alt="" className="correct-icon" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="luxdest-btn">PLAN YOUR TRIP →</button>
            </div>
          </div>
        </div>
      </section>

      {/* LAST 2 CARDS */}
      <section className="dual-section">
        <div className="dual-container">
          {destinations.slice(4, 6).map((item) => (
            <div className="dual-card" key={item.id}>
              <div className="dual-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="dual-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="dual-content">
                <p className="luxdest-tag">{item.tag}</p>
                <h2 className="luxdest-title dual-title-fix">{item.title}</h2>

                <p className="luxdest-description dual-description-fix">
                  {item.description}
                </p>

                <div className="luxdest-meta">
                  <div className="luxdest-meta-item">
                    <img src={thermometerIcon} alt="" className="luxdest-icon" />
                    <span>{item.temperature}</span>
                  </div>
                  <div className="luxdest-meta-item">
                    <img src={locationIcon} alt="" className="luxdest-icon2" />
                    <span>{item.meta}</span>
                  </div>
                </div>

                <div className="luxdest-highlights">
                  <h4>HIGHLIGHTS</h4>
                  <ul className="luxdest-list">
                    {item.highlights.map((point, index) => (
                      <li key={index}>
                        <img src={correctIcon} alt="" className="correct-icon" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="luxdest-btn">PLAN YOUR TRIP →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPTIONAL SLIDER */}
      {/* <section className="sse-wrapper">
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
              {experiences.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="sse-card">
                    <div className="sse-image">
                      <img src={item.image} alt={item.title} />
                      <span className="sse-season-tag">{item.season}</span>
                      <div className="sse-overlay">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>

                    <div className="sse-footer">
                      <span className="sse-price">{item.price}</span>
                      <button className="sse-btn">ENQUIRE NOW →</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default MarchGallerySection;