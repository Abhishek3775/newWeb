import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";

import "swiper/css";
import "./SouthAfricaShowcase.css";

import capetown from "../../assets/capetown.jpg";
import krugar from "../../assets/krugar.jpg";
import FranschhoekWinelands from "../../assets/FranschhoekWinelands.jpg";
import singita from "../../assets/singita.png";
import Ellerman from "../../assets/ellermen.jpg";
import silo from "../../assets/silo.png";
import RoyalMalewane from "../../assets/RoyalMalewane.jpg";
import logo from "../../assets/elite-logo.png";

const SouthAfricaShowcase = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("destinations");

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const hotels = [
    {
      id: 1,
      name: "Singita Lebombo Lodge",
      location: "KRUGER NATIONAL PARK",
      price: "£1,200",
      image: singita,
      gallery: [singita, Ellerman, silo],
      description:
        "Suspended above the N'wanetsi River, these sculptural suites offer uninterrupted views of elephants gathering at the waterhole below.",
      fullDescription:
        "Singita Lebombo represents the pinnacle of safari luxury. Each of the 15 suites features a private deck with a plunge pool, indoor and outdoor showers, and floor-to-ceiling glass walls that seamlessly bring the surrounding wilderness inside. Perched along the N'wanetsi River in Kruger National Park, the lodge offers breathtaking views of the dramatic landscape and abundant wildlife below. Its cutting-edge sustainable design, inspired by the terrain and elevated above the riverbank, has won numerous architectural awards and sets a new benchmark for eco-conscious luxury in Africa.",
    },
    {
      id: 2,
      name: "Ellerman House",
      location: "CAPE TOWN",
      price: "£800",
      image: Ellerman,
      gallery: [Ellerman, singita, silo],
      description:
        "A luxury boutique hotel offering magnificent views of the Atlantic Ocean.",
      fullDescription:
        "Perched dramatically above Bantry Bay, Ellerman House is one of Cape Town’s most exclusive boutique hotels. With sweeping ocean views, museum-worthy South African art, exceptional wine collections, and highly personalized service, it offers a refined and intimate luxury stay unlike anywhere else in the city.",
    },
    {
      id: 3,
      name: "The Silo Hotel",
      location: "CAPE TOWN",
      price: "£650",
      image: silo,
      gallery: [silo, Ellerman, singita],
      description:
        "A former grain silo reimagined to create architectural poetry above the Zeitz MocAA museum.",
      fullDescription:
        "Built above the Zeitz MOCAA, The Silo Hotel is one of South Africa’s most iconic design-led stays. Its pillowed glass windows, bold interiors, and elevated harbour views create an unforgettable urban luxury experience in the heart of Cape Town.",
    },
    {
      id: 4,
      name: "Royal Malewane",
      location: "GREATER KRUGER",
      price: "£850",
      image: RoyalMalewane,
      gallery: [RoyalMalewane, singita, silo],
      description:
        "Colonial elegance in the African bush - Royal Malewane is where classic safari style meets timeless luxury.",
      fullDescription:
        "Royal Malewane delivers one of the most exclusive safari experiences in South Africa. Known for its exceptional guiding, antique-filled interiors, and deeply personalized hospitality, it blends classic bush glamour with world-class wildlife encounters in a private reserve setting.",
    },
    {
      id: 5,
      name: "Grootbos Private Nature Reserve",
      location: "WALKER BAY",
      price: "£950",
      image: silo,
      gallery: [silo, Ellerman, singita],
      description:
        "The best of both worlds - sumptuous beaches and lush forest. Accommodating only 27 luxury suites.",
      fullDescription:
        "Grootbos Private Nature Reserve offers a rare combination of marine, botanical, and luxury experiences. Set above Walker Bay, it provides exceptional whale-watching opportunities, floral safaris, and refined contemporary suites overlooking one of South Africa’s most beautiful natural landscapes.",
    },
  ];

  useEffect(() => {
    if (selectedHotel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedHotel]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedHotel(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openHotelModal = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentImageIndex(0);
  };

  const closeHotelModal = () => {
    setSelectedHotel(null);
    setCurrentImageIndex(0);
  };

  const nextModalImage = () => {
    if (!selectedHotel?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev === selectedHotel.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevModalImage = () => {
    if (!selectedHotel?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedHotel.gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
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

              {activeTab === "hotels" &&
                hotels.map((hotel) => (
                  <SwiperSlide key={hotel.id}>
                    <div className="hotel-card">
                      <div className="hotel-image">
                        <img src={hotel.image} alt={hotel.name} />
                      </div>

                      <div className="hotel-content">
                        <div className="hotel-location">
                          <RiMapPin2Line />
                          <span>{hotel.location}</span>
                        </div>

                        <h3>{hotel.name}</h3>
                        <p>{hotel.description}</p>

                        <div className="hotel-footer">
                          <span className="price">
                            From {hotel.price} per night
                          </span>
                          <button
                            className="view-hotel-btn"
                            onClick={() => openHotelModal(hotel)}
                          >
                            VIEW HOTEL →
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* BOTTOM NAV */}
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

      {/* ================= HOTEL MODAL ================= */}
      {selectedHotel && (
        <div className="hotel-modal-overlay" onClick={closeHotelModal}>
          <div className="hotel-modal" onClick={(e) => e.stopPropagation()}>
            <button className="hotel-modal-close" onClick={closeHotelModal}>
              ×
            </button>

            <p className="hotel-modal-label">HOTELS IN SOUTH AFRICA</p>

            <div className="hotel-modal-body">
              <div className="hotel-modal-image-wrap">
                <img
                  src={selectedHotel.gallery[currentImageIndex]}
                  alt={selectedHotel.name}
                  className="hotel-modal-image"
                />

                {selectedHotel.gallery.length > 1 && (
                  <>
                    <button
                      className="hotel-modal-arrow hotel-modal-prev"
                      onClick={prevModalImage}
                    >
                      <FaChevronLeft />
                    </button>

                    <button
                      className="hotel-modal-arrow hotel-modal-next"
                      onClick={nextModalImage}
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>

              <div className="hotel-modal-content">
                <h2>{selectedHotel.name}</h2>

                <div className="hotel-modal-location">
                  <RiMapPin2Line />
                  <span>{selectedHotel.location}</span>
                </div>

                <p>{selectedHotel.fullDescription}</p>

                <div className="hotel-modal-cta">
                  <div className="hotel-modal-cta-left">
                    <div className="hotel-modal-logo">
                      <img src={logo} alt="" />
                    </div>

                    <div>
                      <h4>SPEAK TO AN EXPERT</h4>
                      <p>
                        Contact us, an Elite Global Concierge in your Journey.
                      </p>
                    </div>
                  </div>

                  <button className="hotel-modal-enquire">ENQUIRE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SouthAfricaShowcase;