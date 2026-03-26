import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "swiper/css";
import "./BestOfJapan.css";

import Tokyo from "../../assets/Tokyo.jpg";
import Kyoto from "../../assets/Kyoto.jpg";
import Hakone from "../../assets/Hakone.jpg";
import h3 from "../../assets/h3.jpg";
import h2 from "../../assets/h2.jpg";
import h1 from "../../assets/h1.jpg";
import h4 from "../../assets/h4.jpg";
import h5 from "../../assets/h5.jpg";
import h6 from "../../assets/h6.jpg";

// import GrootbosPrivate from "../../assets/GrootbosPrivate.jpg";

const BestOfJapan = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("destinations");

  /* DESTINATIONS DATA */
  const destinations = [
    {
      id: 1,
      title: "Tokyo",
      image: Tokyo,
      description:"Tokyo is a vibrant blend of ancient tradition and futuristic energy, where historic temples, cutting-edge architecture, and world-class cuisine come together to create one of the world’s most dynamic cities.",
    },
    {
      id: 2,
      title: "Kyoto",
      image: Kyoto,
      description:
        "Kyoto is Japan’s cultural heart, where centuries-old temples, traditional streets, and serene gardens preserve the timeless beauty of the country’s rich heritage.",
    },
    {
      id: 3,
      title: "Hakone",
      image: Hakone,
      description:
        "Hakone is a scenic mountain retreat known for its hot springs, lake views, and views of Mount Fuji—offering a peaceful escape just outside Tokyo.",
    },
  ];

  /* HOTELS DATA */
  const hotels = [
    {
      id: 1,
      name: "Aman Tokyo",
      location: "Chiyoda City, Tokyo",
      price: "£1,200",
      rating: 5,
      image: h3,
      description:
        "A refined urban sanctuary in Chiyoda, where elegant, Japanese-inspired suites and serene spaces rise above the city’s energy.",
    },
    {
      id: 2,
      name: "Hilton Tokyo",
      location: "Shinjuku City, Tokyo",
      price: "£800",
      rating: 5,
      image: h2,
      description:
        "A standout hotel in Shinjuku blending modern comfort with expansive city views and easy access to Tokyo’s top attractions.",
    },
    {
      id: 3,
      name: "The Silo Hotel",
      location: "CAPE TOWN",
      price: "£650",
      rating: 5,
      image: h1,
      description:
        "A former grain silo reimagined to create architectural poetry above the Zeitz MocAA museum.",
    },
    {
      id: 4,
      name: "The Ritz-Carlton",
      location: "Nikko, Tochigi",
      price: "£850",
      rating: 5,
      image: h4,
      description:
        "A lakeside sanctuary in Nikko National Park, where elegant rooms, a signature onsen, and refined dining meet Japan’s breathtaking natural beauty.",
    },
    {
      id: 5,
      name: "The Machiya Ebisuya",
      location: "Kyotango, Kyoto",
      price: "£950",
      rating: 5,
      image: h5,
      description:
        "Tucked in Kyoto’s historic streets, The Machiya Ebisuya blends traditional townhouse charm with modern comfort, offering a quiet and authentic stay in the heart of the city.",
    },
    {
      id: 6,
      name: "Hotel Hakodate Royal",
      location: "Hokkaido, Japan",
      price: "£950",
      rating: 5,
      image: h6,
      description:
        "A refined waterfront hotel in Hakodate, offering harbor views, warm hospitality, and easy access to the city’s historic charm.",
    },
  ];

  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <h1 className="main-title">The Best Of South Africa</h1>

        {/* TABS */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "destinations" ? "active" : ""}`}
            onClick={() => setActiveTab("destinations")}
          >
            Where to Go
          </button>

          <button
            className={`tab ${activeTab === "hotels" ? "active" : ""}`}
            onClick={() => setActiveTab("hotels")}
          >
            The Best Hotels
          </button>
        </div>

        {/* SLIDER */}
        <div className="slider-wrapper">
          <Swiper
            key={activeTab}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* DESTINATIONS */}
            {activeTab === "destinations" &&
              destinations.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="destination-card">
                    <div className="destination-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="destination-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            {/* HOTELS */}
            {activeTab === "hotels" &&
              hotels.map((hotel) => (
                <SwiperSlide key={hotel.id}>
                  <div className="hotel-card">
                    <div className="hotel-image">
                      <img src={hotel.image} alt={hotel.name} />

                      <div className="rating-badge">
                        {[...Array(hotel.rating)].map((_, i) => (
                          <FaStar key={i} className="star-icon" />
                        ))}
                        <span>FIVE STAR</span>
                      </div>
                    </div>

                    <div className="hotel-content">
                      <div className="hotel-location">
                        <FaMapMarkerAlt />
                        <span>{hotel.location}</span>
                      </div>

                      <h3>{hotel.name}</h3>
                      <p>{hotel.description}</p>

                      <div className="hotel-footer">
                        <span className="price">
                          From {hotel.price} per night
                        </span>
                        <button className="view-hotel-btn">
                          VIEW HOTEL →
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* BOTTOM CENTER NAVIGATION */}
          <div className="bottom-navigation">
            <button
              className="custom-nav"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaChevronLeft />
            </button>

            <button
              className="custom-nav"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestOfJapan;
