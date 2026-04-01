import React, { useState } from "react";
import styles from "./Expendition.module.css";

import heroImg from "../../assets2/Services/aviation/cruising/1.jpg";
import page1img1 from "../../assets2/Services/aviation/cruising/page1/1.jpg";
import page1img2 from "../../assets2/Services/aviation/cruising/page1/2.jpg";
import page1img3 from "../../assets2/Services/aviation/cruising/page1/3.jpg";

import page2img1 from "../../assets2/Services/aviation/cruising/page2/2.jpg";
import page2img2 from "../../assets2/Services/aviation/cruising/page2/3.jpg";
import page2img3 from "../../assets2/Services/aviation/cruising/page2/1.jpg";

import voyage1 from "../../assets2/Services/aviation/cruising/page4/1.jpg";
import voyage2 from "../../assets2/Services/aviation/cruising/page4/2.jpg";
import voyage3 from "../../assets2/Services/aviation/cruising/page4/3.jpg";
import voyage4 from "../../assets2/Services/aviation/cruising/page4/4.jpg";
import voyage5 from "../../assets2/Services/aviation/cruising/page4/5.jpg";
import voyage6 from "../../assets2/Services/aviation/cruising/page4/6.jpg";
import voyage7 from "../../assets2/Services/aviation/cruising/page4/7.jpg";
import voyage8 from "../../assets2/Services/aviation/cruising/page4/8.jpg";
import voyage9 from "../../assets2/Services/aviation/cruising/page4/9.jpg";
import voyage18 from "../../assets2/Services/aviation/cruising/page4/18.jpg";
import voyage13 from "../../assets2/Services/aviation/cruising/page4/13.jpg";

import whyicon1 from "../../assets2/Services/aviation/cruising/icon/1.png";
import whyicon2 from "../../assets2/Services/aviation/cruising/icon/2.png";
import whyicon3 from "../../assets2/Services/aviation/cruising/icon/3.png";
import whyicon4 from "../../assets2/Services/aviation/cruising/icon/4.png";
import whyicon5 from "../../assets2/Services/aviation/cruising/icon/5.png";
import whyicon6 from "../../assets2/Services/aviation/cruising/icon/6.png";

import bgImage from "../../assets2/Services/aviation/cruising/2.png";
import timeicon from "../../assets/time2.png";
import phoneicon from "../../assets/phone.png";
import mailicon from "../../assets/msg.png";
import location from "../../assets/location.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CiClock2, CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { FaRegCompass } from "react-icons/fa";
import { MdWaves } from "react-icons/md";
import { IoBoatOutline } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import BrandStrip from "../../components/BrandStrip/BrandStrip";

/* ===== REUSABLE CARD COMPONENT ===== */
const VoyageCard = ({
  img,
  label,
  featured,
  region,
  title,
  sub,
  days,
  guests,
  price,
  docs,
}) => (
  <div className={styles.ecVoyageCard}>
    <div className={styles.ecVoyageImg}>
      <img src={img} alt={title} />
      <span className={styles.ecLabel}>{label}</span>
      {featured && <span className={styles.ecFeatured}>FEATURED</span>}
    </div>

    <div className={styles.ecVoyageContent}>
      <div className={styles.ecRegion}><img src={location}  className={styles.ecRegionicon} /><span className={styles.ecRegiontext}>{region}</span></div>
      <h3>{title}</h3>
      <h5>{sub}</h5>
      <p>{docs}</p>

      <div className={styles.ecVoyageFooter}>
        <div className={styles.ecVoyageLeft}>
          <span className={styles.ecVoyageMeta}>
            <CiClock2 className={styles.ecVoyageIcon} />
            {days}
          </span>

          <span className={styles.ecVoyageMeta}>
            <LuUsers className={styles.ecVoyageIcon} />
            {guests}
          </span>
        </div>

        <span className={styles.ecPrice}>From {price}</span>
      </div>
    </div>
  </div>
);

const voyagesData = {
  expedition: [
    {
      img: voyage1,
      label: "EXPEDITION",
      icon: location,
      region: "South America",
      title: "Amazon Expedition",
      sub: "Brazil Peru",
      docs: "Navigate the world's mightiest river through pristine rainforest. Encounter pink river dolphins, exotic wildlife,..",
      days: "14 Days",
      guests: "32",
      price: "$8,500",
    },
    {
      img: voyage2,
      label: "EXPEDITION",
      featured: true,
      region: "Polar",
      title: "Antarctic Explorer",
      sub: "Antarctica",
      docs: "Journey to the white continent aboard our state-of-the-art expedition vessel. Witness pristine glaciers, pengui...",
      days: "10 Days",
      guests: "199",
      price: "$18,500",
    },
    {
      img: voyage3,
      label: "EXPEDITION",
      region: "Polar",
      title: "Arctic Expedition",
      sub: "Svalbard Arctic",
      docs: "Venture into the realm of polar bears and Arctic aboard our ice-strengthened vessel. Experience...",
      days: "8 Days",
      guests: "120",
      price: "$15,900",
    },
    {
      img: voyage7,
      label: "EXPEDITION",
      region: "South America",
      title: "Galapagos Discovery",
      sub: "Galapagos Islands",
      docs: "Follow in Darwin's footsteps through this living laboratory of evolution. Encounter giant tortoises,...",
      days: "10 Days",
      guests: "48",
      price: "$12,800",
    },
    {
      img: voyage9,
      label: "EXPEDITION",
      region: "Asia",
      title: "Indonesian Archipelago",
      sub: "Indonesia",
      docs: "Explore the remote islands of Indonesia's Raja Ampat and Komodo. Dive into the world's most biodiverse...",
      days: "12 Days",
      guests: "36",
      price: "$14,200",
    },
    {
      img: voyage2,
      label: "EXPEDITION",
      featured: true,
      region: "Polar",
      title: "Antarctic Explorer",
      sub: "Antarctica",
      docs: "Journey to the white continent aboard our state-of-the-art expedition vessel. Witness pristine glaciers, pengui...",
      days: "10 Days",
      guests: "199",
      price: "$18,500",
    },
  ],
  ocean: [
    {
      img: voyage4,
      label: "OCEAN",
      region: "Europe",
      title: "British Isles Explorer",
      sub: "United Kingdom Ireland",
      docs: "Cruise through the heart of imperial Europe along the majestic Danube. From Vienna to Budapest, experience...",
      days: "13 Days",
      guests: "180",
      price: "$11,500",
    },
    {
      img: voyage8,
      label: "OCEAN",
      featured: true,
      region: "Mediterranean",
      title: "Greek Isles Odyssey",
      sub: "Greece",
      docs: "Island-hop through the legendary Aegean aboard our elegant yacht. From Santorini's sunsets to Mykonos's...",
      days: "11 Days",
      guests: "150",
      price: "$9,800",
    },
    {
      img: voyage18,
      label: "OCEAN",
      featured: true,
      region: "Scandinavia",
      title: "Norwegian Fjords",
      sub: "Norway",
      docs: "Sail through Norway's dramatic fjords, past cascading waterfalls and snow-capped peaks. Experience the...",
      days: "10 Days",
      guests: "200",
      price: "$7,500",
    },
  ],
  river: [
    {
      img: voyage5,
      label: "RIVER",
      featured: true,
      region: "Europe",
      title: "Danube Imperial",
      sub: "Central Europe",
      docs: "Cruise through the heart of imperial Europe along the majestic Danube. From Vienna to Budapest, experience...",
      days: "8 Days",
      guests: "150",
      price: "$5,500",
    },
    {
      img: voyage6,
      label: "RIVER",
      region: "Europe",
      title: "European Waterways",
      sub: "France",
      docs: "Glide through the scenic canals and rivers of France aboard an intimate barge. Discover châteaux, vineyard...",
      days: "7 Days",
      guests: "12",
      price: "$7,500",
    },
    {
      img: voyage13,
      label: "RIVER",
      region: "Asia",
      title: "Mekong Journey",
      sub: "Vietnam & Cambodia",
      docs: "Navigate the mighty Mekong through floating markets, ancient temples, and rural villages. Experience the...",
      days: "7 Days",
      guests: "12",
      price: "$7,500",
    },
  ],
};

const ExpenditionCruising = () => {
  const [activeTab, setActiveTab] = useState("all");

  const mobileVoyages =
    activeTab === "all"
      ? [...voyagesData.expedition, ...voyagesData.ocean, ...voyagesData.river]
      : voyagesData[activeTab] || [];

  return (
    <div className={styles.ecPage}>
      {/* ===== HERO SECTION ===== */}
      <section
        className={styles.expeditionHero}
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className={styles.expeditionOverlay}>
          <div className={styles.expeditionContent}>
            <h5 className={styles.expeditionSubtitle}>REDEFINING</h5>
            <h1 className={styles.expeditionTitle}>
              The Ultra <br /> Luxury Cruises
            </h1>
            <p className={styles.expeditionDesc}>
              State-of-the-art vessels to Earth's last frontiers
            </p>
            <div className={styles.expeditionButtons}>
              <button className={styles.sBtnGold}>EXPLORE VOYAGES</button>
            </div>
          </div>

          <div className={styles.sDiscover}>
            DISCOVER
            <div className={styles.sArrow}>⌄</div>
          </div>
        </div>
      </section>

      {/* ===== WAYS TO EXPLORE ===== */}
      <section className={styles.ecWaysSection}>
        <h2 className={styles.ecWaysTitle}>Ways to Explore</h2>
        <p className={styles.ecWaysSubtitle}>
          Three distinct cruise experiences, each offering its own incomparable
          way to discover the world's most remarkable destinations.
        </p>

        <div className={styles.ecWaysGrid}>
          <div className={styles.ecWaysCard}>
            <img src={page1img1} alt="Expedition Cruises" />
            <div className={styles.ecWaysOverlay}>
              <div className={styles.ecTopContent}>
                <div className={styles.ecIconCircle}>
                  <FaRegCompass className={styles.ecCardIcon} />
                </div>
                <span className={styles.ecMiniTitle}>
                  Journey to Earth's Last Frontiers
                </span>
                <h3>Expedition Cruises</h3>
                <p>
                  The greatest adventures you can have at sea aboard
                  state-of-the-art vessels that redefine expedition travel.
                </p>
                <div className={styles.ecTags}>
                  <span>Expert naturalists</span>
                  <span>Small ship intimacy</span>
                  <span>Polar & remote destinations</span>
                </div>
              </div>

              <div className={styles.ecBottomRow}>
                <span>5 voyages</span>
                <span className={styles.ecExploreLink}>Explore +</span>
              </div>
            </div>
          </div>

          <div className={styles.ecWaysCard}>
            <img src={page1img2} alt="River Cruises" />
            <div className={styles.ecWaysOverlay}>
              <div className={styles.ecTopContent}>
                <div className={styles.ecIconCircle}>
                  <MdWaves className={styles.ecCardIcon} />
                </div>
                <span className={styles.ecMiniTitle}>
                  Navigate Ancient Waterways
                </span>
                <h3>River Cruises</h3>
                <p>
                  Time-travelling journeys through history aboard intimate
                  vessels from the Nile to the Mekong.
                </p>
                <div className={styles.ecTags}>
                  <span>Cultural immersion</span>
                  <span>Intimate vessels</span>
                  <span>Expert Egyptologists & guides</span>
                </div>
              </div>

              <div className={styles.ecBottomRow}>
                <span>4 voyages</span>
                <span className={styles.ecExploreLink}>Explore +</span>
              </div>
            </div>
          </div>

          <div className={styles.ecWaysCard}>
            <img src={page1img3} alt="Ocean Voyages" />
            <div className={styles.ecWaysOverlay}>
              <div className={styles.ecTopContent}>
                <div className={styles.ecIconCircle}>
                  <IoBoatOutline className={styles.ecCardIcon} />
                </div>
                <span className={styles.ecMiniTitle}>
                  Island-Hopping Adventures
                </span>
                <h3>Ocean Voyages</h3>
                <p>
                  Elegant yacht experiences through legendary seas, from the
                  Greek Isles to the Norwegian fjords.
                </p>
                <div className={styles.ecTags}>
                  <span>Luxury amenities</span>
                  <span>Scenic coastlines</span>
                  <span>World-class service</span>
                </div>
              </div>

              <div className={styles.ecBottomRow}>
                <span>3 voyages</span>
                <span className={styles.ecExploreLink}>Explore +</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RECOMMENDED JOURNEYS ===== */}
      <section className={styles.rjJourneysSection}>
        <h5 className={styles.rjJourneysSubtitle}>HANDPICKED</h5>
        <h2 className={styles.rjJourneysTitle}>Recommended Journeys</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={{
            prevEl: ".rj-prev-btn",
            nextEl: ".rj-next-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1100: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className={styles.rjJourneysSlider}
        >
          <SwiperSlide>
            <div className={styles.rjJourneyCard}>
              <div className={styles.rjJourneyImage}>
                <img src={page2img1} alt="Antarctic Explorer" />
                <span className={styles.rjTag}>EXPEDITION</span>
              </div>
              <div className={styles.rjJourneyInfo}>
                <p className={styles.rjRegion}>
                  <CiLocationOn /> Polar
                </p>
                <h3 className={styles.rjJourneyName}>Antarctic Explorer</h3>
                <p className={styles.rjLocation}>Antarctica</p>
                <div className={styles.rjJourneyFooter}>
                  <div className={styles.rjJourneyFooterleft}>
                    <img
                      src={timeicon}
                      alt=""
                      className={styles.rjJourneyFootericon}
                    />
                    <p>14 Days</p>
                  </div>
                  <p className={styles.rjPrice}>From $18,500</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.rjJourneyCard}>
              <div className={styles.rjJourneyImage}>
                <img src={page2img2} alt="Galapagos Discovery" />
                <span className={styles.rjTag}>EXPEDITION</span>
              </div>
              <div className={styles.rjJourneyInfo}>
                <p className={styles.rjRegion}>
                  <CiLocationOn /> South America
                </p>
                <h3 className={styles.rjJourneyName}>Galapagos Discovery</h3>
                <p className={styles.rjLocation}>Galapagos Islands</p>
                <div className={styles.rjJourneyFooter}>
                  <div className={styles.rjJourneyFooterleft}>
                    <img
                      src={timeicon}
                      alt=""
                      className={styles.rjJourneyFootericon}
                    />
                    <p>10 Days</p>
                  </div>
                  <p className={styles.rjPrice}>From $12,800</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.rjJourneyCard}>
              <div className={styles.rjJourneyImage}>
                <img src={page2img3} alt="Nile Treasures" />
                <span className={styles.rjTag}>RIVER</span>
              </div>
              <div className={styles.rjJourneyInfo}>
                <p className={styles.rjRegion}>
                  <CiLocationOn /> Africa & Middle East
                </p>
                <h3 className={styles.rjJourneyName}>Nile Treasures</h3>
                <p className={styles.rjLocation}>Egypt</p>
                <div className={styles.rjJourneyFooter}>
                  <div className={styles.rjJourneyFooterleft}>
                    <img
                      src={timeicon}
                      alt=""
                      className={styles.rjJourneyFootericon}
                    />
                    <p>8 Days</p>
                  </div>
                  <p className={styles.rjPrice}>From $6,800</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={styles.rjNavWrapper}>
          <div className={`${styles.rjJourneysNav} rj-prev-btn`}>
            <FiChevronLeft />
          </div>
          <div className={`${styles.rjJourneysNav} rj-next-btn`}>
            <FiChevronRight />
          </div>
        </div>
      </section>

      {/* ===== ALL VOYAGES ===== */}
      <section className={styles.ecVoyagesSection}>
        <div className={styles.ecVoyagesHeader}>
          <h2>All Voyages</h2>
          <p>Browse our complete collection of extraordinary journeys</p>

          <div className={styles.ecVoyagesTabs}>
            <span
              className={activeTab === "all" ? styles.ecTabActive : ""}
              onClick={() => setActiveTab("all")}
            >
              ALL VOYAGES
            </span>

            <span
              className={activeTab === "expedition" ? styles.ecTabActive : ""}
              onClick={() => setActiveTab("expedition")}
            >
              EXPEDITION
            </span>

            <span
              className={activeTab === "river" ? styles.ecTabActive : ""}
              onClick={() => setActiveTab("river")}
            >
              RIVER
            </span>

            <span
              className={activeTab === "ocean" ? styles.ecTabActive : ""}
              onClick={() => setActiveTab("ocean")}
            >
              OCEAN
            </span>
          </div>
        </div>

        {/* DESKTOP / TABLET GRID */}
        <div className={styles.ecVoyagesGridDesktop}>
          <div className={styles.ecVoyagesGrid}>
            {(activeTab === "all" || activeTab === "expedition") && (
              <>
                {voyagesData.expedition.map((item, index) => (
                  <VoyageCard key={`exp-${index}`} {...item} />
                ))}
              </>
            )}

            {(activeTab === "all" || activeTab === "ocean") && (
              <>
                {voyagesData.ocean.map((item, index) => (
                  <VoyageCard key={`ocean-${index}`} {...item} />
                ))}
              </>
            )}

            {(activeTab === "all" || activeTab === "river") && (
              <>
                {voyagesData.river.map((item, index) => (
                  <VoyageCard key={`river-${index}`} {...item} />
                ))}
              </>
            )}
          </div>
        </div>

        {/* MOBILE ONLY SLIDER */}
        <div className={styles.ecVoyagesMobileSlider}>
          <Swiper
            modules={[ Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: ".voyage-prev",
              nextEl: ".voyage-next",
            }}
            pagination={{ clickable: true }}
            className={styles.ecVoyagesSwiper}
          >
            {mobileVoyages.map((item, index) => (
              <SwiperSlide key={`${item.title}-${index}`}>
                <VoyageCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.ecVoyageNavWrapper}>
  <div className={`${styles.ecVoyageNavBtn} voyage-prev`}>
    <FiChevronLeft />
  </div>

  <div className={`${styles.ecVoyageNavBtn} voyage-next`}>
    <FiChevronRight />
  </div>
</div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={styles.ecWhySection}>
        <div className={styles.ecWhyTop}>
          <div className={styles.ecWhyLeft}>
            <span className={styles.ecWhySmall}>WHY CHOOSE US</span>
            <h2>The Elite Difference</h2>
          </div>

          <div className={styles.ecWhyRight}>
            <p>Every voyage is meticulously crafted to exceed expectations</p>
          </div>
        </div>

        <div className={styles.ecWhyGrid}>
          <div className={styles.ecWhyBox}>
            <img
              src={whyicon1}
              alt="Expert-Led Journeys"
              className={styles.ecWhyIcon}
            />
            <h3>Expert-Led Journeys</h3>
            <p>
              World-renowned naturalists, historians, and cultural experts
              bring every destination to life.
            </p>
          </div>

          <div className={styles.ecWhyBox}>
            <img
              src={whyicon2}
              alt="Five-Star Cuisine"
              className={styles.ecWhyIcon}
            />
            <h3>Five-Star Cuisine</h3>
            <p>
              Gourmet meals crafted by acclaimed chefs using locally-sourced
              ingredients.
            </p>
          </div>

          <div className={styles.ecWhyBox}>
            <img
              src={whyicon3}
              alt="Unparalleled Safety"
              className={styles.ecWhyIcon}
            />
            <h3>Unparalleled Safety</h3>
            <p>
              State-of-the-art vessels with advanced safety features and nearly
              1:1 staff ratios.
            </p>
          </div>

          <div className={styles.ecWhyBox}>
            <img
              src={whyicon4}
              alt="30+ Years Excellence"
              className={styles.ecWhyIcon}
            />
            <h3>30+ Years Excellence</h3>
            <p>
              Three decades of pioneering luxury travel setting the standard for
              cruise experiences.
            </p>
          </div>

          <div className={styles.ecWhyBox}>
            <img
              src={whyicon5}
              alt="Exclusive Access"
              className={styles.ecWhyIcon}
            />
            <h3>Exclusive Access</h3>
            <p>
              Hidden gems and private experiences unavailable to ordinary
              travelers.
            </p>
          </div>

          <div className={styles.ecWhyBox}>
            <img
              src={whyicon6}
              alt="Personalized Service"
              className={styles.ecWhyIcon}
            />
            <h3>Personalized Service</h3>
            <p>
              Your dedicated concierge anticipates every need, creating a
              seamlessly tailored voyage.
            </p>
          </div>
        </div>
      </section>

      {/* ===== JOURNEY SECTION ===== */}
      <section
  className={styles.ecExpJourneySection}
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className={styles.ecExpJourneyOverlay}></div>

  <div className={styles.ecExpJourneyContainer}>
    <span className={styles.ecExpJourneySmall}>YOUR JOURNEY AWAITS</span>
    <h2 className={styles.ecExpJourneyTitle}>Begin Your Journey</h2>

    <p className={styles.ecExpJourneyDesc}>
      Every extraordinary journey begins with a conversation. Our Japan
      specialists await to craft your bespoke itinerary, tailored to your
      every desire.
    </p>

    <div className={styles.ecExpJourneyContact}>
      <div className={styles.ecExpContactItem}>
        <div className={styles.ecExpIconBox}>
          <img src={phoneicon} className={styles.ecExpBoxicon} alt="phone" />
        </div>
        <span className={styles.ecExpContactText}>+442074269888</span>
      </div>

      <div className={styles.ecExpContactItem}>
        <div className={styles.ecExpIconBox}>
          <img src={mailicon} className={styles.ecExpBoxicon2} alt="mail" />
        </div>
        <span className={styles.ecExpContactText}>
          southafrica@eliteconcierge.com
        </span>
      </div>
    </div>

    <button className={styles.ecExpJourneyBtn}>
      BEGIN YOUR JOURNEY <span>→</span>
    </button>
  </div>
</section>

      <BrandStrip />
    </div>
  );
};

export default ExpenditionCruising;