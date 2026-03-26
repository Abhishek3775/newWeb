import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "swiper/css";
import "./SouthAfricaShowcase.css";

import capetown from "../../assets/capetown.jpg";
import krugar from "../../assets/krugar.jpg";
import FranschhoekWinelands from "../../assets/FranschhoekWinelands.jpg";
import singita from "../../assets/singita.png";
import Ellerman from "../../assets/ellermen.jpg";
import silo from "../../assets/silo.png";
import RoyalMalewane from "../../assets/RoyalMalewane.jpg";
// import GrootbosPrivate from "../../assets/GrootbosPrivate.jpg";

const SouthAfricaShowcase = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("destinations");

  /* DESTINATIONS DATA */
  const destinations = [
    {
      id: 1,
      title: "Cape Town",
      image: capetown,
      description:
        "Beneath the grey-blue flanks of Table Mountain, Cape Town unfolds as a cool-as-ice city where dramatic landscapes meet a rich tapestry of culture, layered history, and a vibrant culinary scene shaped by many influences.",
    },
    {
      id: 2,
      title: "Kruger National Park",
      image: krugar,
      description:
        "Set within South Africa's untamed wilderness, Kruger National Park offers a sophisticated safari experience with elegant lodges, private game drives, and unforgettable Big Five encounters against sweeping savanna landscapes.",
    },
    {
      id: 3,
      title: "Franschhoek Winelands",
      image: FranschhoekWinelands,
      description:
        "Set amid rolling vineyards and dramatic mountain backdrops, Franschhoek Winelands offers an indulgent escape of prestigious wine estates, Michelin-inspired fine dining, and serene countryside elegance—perfectly crafted for a refined luxury getaway.",
    },
  ];

  /* HOTELS DATA */
  const hotels = [
    {
      id: 1,
      name: "Singita Lebombo Lodge",
      location: "KRUGER NATIONAL PARK",
      price: "£1,200",
      rating: 5,
      image: singita,
      description:
        "Suspended above the N'wanetsi River, these sculptural suites offer uninterrupted views of elephants gathering at the waterhole below.",
    },
    {
      id: 2,
      name: "Ellerman House",
      location: "CAPE TOWN",
      price: "£800",
      rating: 5,
      image: Ellerman,
      description:
        "A luxury boutique hotel offering magnificent views of the Atlantic Ocean.",
    },
    {
      id: 3,
      name: "The Silo Hotel",
      location: "CAPE TOWN",
      price: "£650",
      rating: 5,
      image: silo,
      description:
        "A former grain silo reimagined to create architectural poetry above the Zeitz MocAA museum.",
    },
    {
      id: 4,
      name: "Royal Malewane",
      location: "Greater kruger",
      price: "£850",
      rating: 5,
      image: RoyalMalewane,
      description:
        "Colonial elegance in the African bush - Royal Malewane is where classic safari style meets....",
    },
    {
      id: 5,
      name: "Grootbos Private Nature Reserve",
      location: "walker bay",
      price: "£950",
      rating: 5,
      image: silo,
      description:
        "The best of both worlds - sumptuous beaches and lush forest. Accommodating only 27 luxury suites,...",
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

export default SouthAfricaShowcase;
