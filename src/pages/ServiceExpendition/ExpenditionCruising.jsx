import React, { useState, useRef } from 'react'
import styles from "./Expendition.module.css"
import heroImg from "../../assets2/Services/aviation/cruising/1.jpg";
import page1img1 from "../../assets2/Services/aviation/cruising/page1/1.jpg";
import page1img2 from "../../assets2/Services/aviation/cruising/page1/2.jpg";
import page1img3 from "../../assets2/Services/aviation/cruising/page1/3.jpg";
import page3img1 from "../../assets2/Services/aviation/cruising/page3/1.jpg";
import page3img2 from "../../assets2/Services/aviation/cruising/page3/2.jpg";
import page3img3 from "../../assets2/Services/aviation/cruising/page3/3.jpg";
import page3img4 from "../../assets2/Services/aviation/cruising/page3/4.jpg";
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
import whyicon1 from "../../assets2/Services/aviation/cruising/icon/1.png"
import whyicon2 from "../../assets2/Services/aviation/cruising/icon/2.png"
import whyicon3 from "../../assets2/Services/aviation/cruising/icon/3.png"
import whyicon4 from "../../assets2/Services/aviation/cruising/icon/4.png"
import whyicon5 from "../../assets2/Services/aviation/cruising/icon/5.png"
import whyicon6 from "../../assets2/Services/aviation/cruising/icon/6.png"
import whyicon7 from "../../assets2/Services/aviation/cruising/icon/7.png"
import whyicon8 from "../../assets2/Services/aviation/cruising/icon/8.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { CiClock2 } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { FaRegCompass } from "react-icons/fa";
import { MdWaves } from "react-icons/md";
import { IoBoatOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";

import BrandStrip from '../../components/BrandStrip/BrandStrip';

const ExpenditionCruising = () => {

  const [activeTab, setActiveTab] = useState("all");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
              Expedition <br /> Cruising
            </h1>
            <p className={styles.expeditionDesc}>
              State-of-the-art vessels to Earth's last frontiers
            </p>
            <div className={styles.expeditionButtons}>
              <button className={styles.sBtnGold}>EXPLORE VOYAGES</button>
              <button className={styles.sBtnOutline}>CONTACT CONCIERGE</button>
            </div>
            <div className={styles.sliderLines}>
              <span className={`${styles.line} ${styles.active}`}></span>
              <span className={styles.line}></span>
            </div>
          </div>

          <div className={styles.sDiscover}>
            DISCOVER
            <div className={styles.sArrow}>⌄</div>
          </div>
        </div>
      </section>

      {/* ===== WAYS TO EXPLORE SECTION ===== */}
      <section className={styles.ecWaysSection}>
        <h2 className={styles.ecWaysTitle}>Ways to Explore</h2>
        <p className={styles.ecWaysSubtitle}>
          Three distinct cruise experiences, each offering its own incomparable way to discover the world's most remarkable destinations.
        </p>

        <div className={styles.ecWaysGrid}>

          <div className={styles.ecWaysCard}>
            <img src={page1img1} alt="" />
            <div className={styles.ecWaysOverlay}>
              <div className={styles.ecTopContent}>
                <div className={styles.ecIconCircle}><FaRegCompass size={30}/></div>
                <span className={styles.ecMiniTitle}>Journey to Earth's Last Frontiers</span>
                <h3>Expedition Cruises</h3>
                <p>The greatest adventures you can have at sea aboard state-of-the-art vessels that redefine expedition travel.</p>
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
            <img src={page1img2} alt="" />
            <div className={styles.ecWaysOverlay}>
              <div className={styles.ecTopContent}>
                <div className={styles.ecIconCircle}><MdWaves size={30}/></div>
                <span className={styles.ecMiniTitle}>Navigate Ancient Waterways</span>
                <h3>River Cruises</h3>
                <p>Time-travelling journeys through history aboard intimate vessels from the Nile to the Mekong.</p>
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
            <img src={page1img3} alt="" />
            <div className={styles.ecWaysOverlay}>
              <div className={styles.ecTopContent}>
                <div className={styles.ecIconCircle}><IoBoatOutline size={30}/></div>
                <span className={styles.ecMiniTitle}>Island-Hopping Adventures</span>
                <h3>Ocean Voyages</h3>
                <p>Elegant yacht experiences through legendary seas, from the Greek Isles to the Norwegian fjords.</p>
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
      <section className={styles.ecJourneysSection}>
        <h5 className={styles.ecJourneysSubtitle}>HANDPICKED</h5>
        <h2 className={styles.ecJourneysTitle}>Recommended Journeys</h2>

        <div ref={prevRef} className={`${styles.ecJourneysNav} ${styles.ecJourneysPrev}`}>
          <FiChevronLeft />
        </div>
        <div ref={nextRef} className={`${styles.ecJourneysNav} ${styles.ecJourneysNext}`}>
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
          className={styles.ecJourneysSlider}
        >
          <SwiperSlide>
            <div className={styles.ecJourneyCard}>
              <div className={`${styles.ecJourneyImage} ${styles.ecImg1}`}>
                <span className={styles.ecTag}>EXPEDITION</span>
              </div>
              <div className={styles.ecJourneyInfo}>
                <p className={styles.ecRegion}><CiLocationOn/> Polar</p>
                <h3 className={styles.ecJourneyName}>Antarctic Explorer</h3>
                <p className={styles.ecLocation}>Antarctica</p>
                <div className={styles.ecJourneyFooter}>
                  <p>14 Days</p>
                  <p className={styles.ecPrice}>From $18,500</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.ecJourneyCard}>
              <div className={`${styles.ecJourneyImage} ${styles.ecImg2}`}>
                <span className={styles.ecTag}>EXPEDITION</span>
              </div>
              <div className={styles.ecJourneyInfo}>
                <p className={styles.ecRegion}><CiLocationOn/> South America</p>
                <h3 className={styles.ecJourneyName}>Galapagos Discovery</h3>
                <p className={styles.ecLocation}>Galapagos Islands</p>
                <div className={styles.ecJourneyFooter}>
                  <p>10 Days</p>
                  <p className={styles.ecPrice}>From $12,800</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.ecJourneyCard}>
              <div className={`${styles.ecJourneyImage} ${styles.ecImg3}`}>
                <span className={styles.ecTag}>RIVER</span>
              </div>
              <div className={styles.ecJourneyInfo}>
                <p className={styles.ecRegion}><CiLocationOn/> Africa & Middle East</p>
                <h3 className={styles.ecJourneyName}>Nile Treasures</h3>
                <p className={styles.ecLocation}>Egypt</p>
                <div className={styles.ecJourneyFooter}>
                  <p>8 Days</p>
                  <p className={styles.ecPrice}>From $6,800</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.ecJourneyCard}>
              <div className={`${styles.ecJourneyImage} ${styles.ecImg1}`}>
                <span className={styles.ecTag}>EXPEDITION</span>
              </div>
              <div className={styles.ecJourneyInfo}>
                <p className={styles.ecRegion}><CiLocationOn/> Polar</p>
                <h3 className={styles.ecJourneyName}>Antarctic Explorer</h3>
                <p className={styles.ecLocation}>Antarctica</p>
                <div className={styles.ecJourneyFooter}>
                  <p>14 Days</p>
                  <p className={styles.ecPrice}>From $18,500</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ===== SIGNATURE MOMENTS SECTION ===== */}
      <section className={styles.ecSignatureSection}>
        <span className={styles.ecSmallTitle}>THE EXPERIENCE</span><br />
        <h2 className={styles.ecSmallSubtitle}>Signature Moments</h2>
        <p className={styles.ecSmallDocs}>
          Every voyage is defined by extraordinary moments that stay with you forever
        </p>

        <div className={styles.ecSignatureWrapper}>
          <div className={styles.ecSignatureLeft}>
            <img src={page3img1} alt="Signature" />
          </div>
          <div className={styles.ecSignatureRight}>
            <div className={styles.ecIconCircle}>
              <img src={whyicon1} alt="" className={styles.ecWhyIcon}/>
            </div>
            <h3>Expert-Led Discovery</h3>
            <p>Charismatic naturalists, Egyptologists, marine biologists, and local experts transform every moment into an unforgettable learning experience.</p>
          </div>
        </div>

        <div className={styles.ecSignatureWrapper}>
          <div className={styles.ecSignatureRight}>
            <div className={styles.ecIconCircle}>
              <img src={whyicon2} alt="" className={styles.ecWhyIcon}/>
            </div>
            <h3>Immersive Activities</h3>
            <p>Zodiac landings, kayaking excursions, and guided hikes bring you closer to nature's wonders and cultural treasures.</p>
          </div>
          <div className={styles.ecSignatureLeft}>
            <img src={page3img2} alt="Signature" />
          </div>
        </div>

        <div className={styles.ecSignatureWrapper}>
          <div className={styles.ecSignatureLeft}>
            <img src={page3img3} alt="Signature" />
          </div>
          <div className={styles.ecSignatureRight}>
            <div className={styles.ecIconCircle}>
              <img src={whyicon7} alt="" className={styles.ecWhyIcon}/>
            </div>
            <h3>Culinary Excellence</h3>
            <p>World-class chefs create extraordinary dining experiences featuring regional specialties and locally-sourced ingredients.</p>
          </div>
        </div>

        <div className={styles.ecSignatureWrapper}>
          <div className={styles.ecSignatureRight}>
            <div className={styles.ecIconCircle}>
              <img src={whyicon8} alt="" className={styles.ecWhyIcon}/>
            </div>
            <h3>Luxurious Comfort</h3>
            <p>State-of-the-art vessels with elegant accommodations, wellness facilities, and panoramic observation decks for ultimate relaxation.</p>
          </div>
          <div className={styles.ecSignatureLeft}>
            <img src={page3img4} alt="Signature" />
          </div>
        </div>
      </section>

      {/* ===== ALL VOYAGES SECTION ===== */}
      <section className={styles.ecVoyagesSection}>
        <div className={styles.ecVoyagesHeader}>
          <h2>All Voyages</h2>
          <p>Browse our complete collection of extraordinary journeys</p>
          <div className={styles.ecVoyagesTabs}>
            <span className={activeTab === "all" ? styles.ecTabActive : ""} onClick={() => setActiveTab("all")}>ALL VOYAGES</span>
            <span className={activeTab === "expedition" ? styles.ecTabActive : ""} onClick={() => setActiveTab("expedition")}>EXPEDITION</span>
            <span className={activeTab === "river" ? styles.ecTabActive : ""} onClick={() => setActiveTab("river")}>RIVER</span>
            <span className={activeTab === "ocean" ? styles.ecTabActive : ""} onClick={() => setActiveTab("ocean")}>OCEAN</span>
          </div>
        </div>

        <div className={styles.ecVoyagesGrid}>
          {(activeTab === "all" || activeTab === "expedition") && (
            <>
              <VoyageCard img={voyage1} label="EXPEDITION" region="South America" title="Amazon Expedition" sub="Brazil Peru" docs="Navigate the world's mightiest river through pristine rainforest. Encounter pink river dolphins, exotic wildlife,.." days="14 Days" guests="32" price="$8,500" />
              <VoyageCard img={voyage2} label="EXPEDITION" featured region="Polar" title="Antarctic Explorer" sub="Antarctica" docs="Journey to the white continent aboard our state-of-the-art expedition vessel. Witness pristine glaciers, pengui..." days="10 Days" guests="199" price="$8,500" />
              <VoyageCard img={voyage3} label="EXPEDITION" region="Polar" title="Arctic Expedition" sub="Svalbard Arctic" docs="Venture into the realm of polar bears and Arctic aboard our ice-strengthened vessel. Experience" days="8 Days" guests="32" price="$8,500" />
              <VoyageCard img={voyage7} label="EXPEDITION" region="South America" title="Galapagos Discovery" sub="Galapagos Islands" docs="Follow in Darwin's footsteps through this living laboratory of evolution. Encounter giant tortoises,..." days="10 Days" guests="48" price="$12,800" />
              <VoyageCard img={voyage9} label="EXPEDITION" region="Asia" title="Indonesian Archipelago" sub="Indonesia" docs="Explore the remote islands of Indonesia's Raja Ampat and Komodo. Dive into the world's most biodiverse..." days="12 Days" guests="36" price="$14,200" />
              <VoyageCard img={voyage2} label="EXPEDITION" featured region="Polar" title="Antarctic Explorer" sub="Antarctica" docs="Journey to the white continent aboard our state-of-the-art expedition vessel. Witness pristine glaciers, pengui..." days="10 Days" guests="199" price="$8,500" />
            </>
          )}

          {(activeTab === "all" || activeTab === "ocean") && (
            <>
              <VoyageCard img={voyage4} label="OCEAN" region="Europe" title="British Isles Explorer" sub="United Kingdom Ireland" docs="Cruise through the heart of imperial Europe along the majestic Danube. From Vienna to Budapest, experience..." days="13 Days" guests="180" price="$11,500" />
              <VoyageCard img={voyage8} label="OCEAN" featured region="Mediterranean" title="Greek Isles Odyssey" sub="Greece" docs="Island-hop through the legendary Aegean aboard our elegant yacht. From Santorini's sunsets to Mykonos's.." days="11 Days" guests="150" price="$9,800" />
              <VoyageCard img={voyage18} label="OCEAN" featured region="Scandinavia" title="Norwegian Fjords" sub="Norway" docs="Sail through Norway's dramatic fjords, past cascading waterfalls and snow-capped peaks. Experience the..." days="10 Days" guests="200" price="$7,500" />
            </>
          )}

          {(activeTab === "all" || activeTab === "river") && (
            <>
              <VoyageCard img={voyage5} label="RIVER" featured region="Europe" title="Danube Imperial" sub="Central Europe" docs="Cruise through the heart of imperial Europe along the majestic Danube. From Vienna to Budapest, experience..." days="8 Days" guests="150" price="$5,500" />
              <VoyageCard img={voyage6} label="RIVER" region="Europe" title="European Waterways" sub="France" docs="Glide through the scenic canals and rivers of France aboard an intimate barge. Discover châteaux, vineyard..." days="7 Days" guests="12" price="$7,500" />
              <VoyageCard img={voyage13} label="RIVER" region="Asia" title="Mekong Journey" sub="Vietnam & Cambodia" docs="Navigate the mighty Mekong through floating markets, ancient temples, and rural villages. Experience the..." days="7 Days" guests="12" price="$7,500" />
            </>
          )}
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
            <img src={whyicon1} alt="" className={styles.ecWhyIcon}/>
            <h3>Expert-Led Journeys</h3>
            <p>World-renowned naturalists, historians, and cultural experts bring every destination to life.</p>
          </div>
          <div className={styles.ecWhyBox}>
            <img src={whyicon2} alt="" className={styles.ecWhyIcon}/>
            <h3>Five-Star Cuisine</h3>
            <p>Gourmet meals crafted by acclaimed chefs using locally-sourced ingredients.</p>
          </div>
          <div className={styles.ecWhyBox}>
            <img src={whyicon3} alt="" className={styles.ecWhyIcon}/>
            <h3>Unparalleled Safety</h3>
            <p>State-of-the-art vessels with advanced safety features and nearly 1:1 staff ratios.</p>
          </div>
          <div className={styles.ecWhyBox}>
            <img src={whyicon4} alt="" className={styles.ecWhyIcon}/>
            <h3>30+ Years Excellence</h3>
            <p>Three decades of pioneering luxury travel setting the standard for cruise experiences.</p>
          </div>
          <div className={styles.ecWhyBox}>
            <img src={whyicon5} alt="" className={styles.ecWhyIcon}/>
            <h3>Exclusive Access</h3>
            <p>Hidden gems and private experiences unavailable to ordinary travelers.</p>
          </div>
          <div className={styles.ecWhyBox}>
            <img src={whyicon6} alt="" className={styles.ecWhyIcon}/>
            <h3>Personalized Service</h3>
            <p>Your dedicated concierge anticipates every need, creating a seamlessly tailored voyage.</p>
          </div>
        </div>
      </section>

      {/* ===== JOURNEY SECTION ===== */}
      <section className={styles.ecExpJourneySection}>
        <div className={styles.ecExpJourneyContainer}>
          <span className={styles.ecExpJourneySmall}>YOUR JOURNEY AWAITS</span>
          <h2>Begin Your Journey</h2>
          <p className={styles.ecExpJourneyDesc}>
            Every extraordinary journey begins with a conversation. Our Japan
            specialists await to craft your bespoke itinerary, tailored to your every desire.
          </p>
          {/* Contact Row */}
                  <div className="journey-contact">
                      <div className="contact-item">
                        <div className="icon-box">
                          <FaPhoneAlt />
                        </div>
                        <span>+44 2074269888</span>
                      </div>
            
                      <div className="divider"></div>
            
                      <div className="contact-item">
                        <div className="icon-box">
                          <FaEnvelope />
                        </div>
                        <span>southafrica@eliteconcierge.com</span>
                      </div>
                  </div>
          <button className={styles.ecExpJourneyBtn}>BEGIN YOUR JOURNEY →</button>
        </div>
        <BrandStrip/>
      </section>

    </div>
  )
}

/* ===== REUSABLE CARD COMPONENT ===== */
const VoyageCard = ({ img, label, featured, region, title, sub, days, guests, price, docs }) => (
  <div className={styles.ecVoyageCard}>
    <div className={styles.ecVoyageImg}>
      <img src={img} alt="" />
      <span className={styles.ecLabel}>{label}</span>
      {featured && <span className={styles.ecFeatured}>FEATURED</span>}
    </div>
    <div className={styles.ecVoyageContent}>
      <span className={styles.ecRegion}>{region}</span>
      <h3>{title}</h3>
      <h5>{sub}</h5>
      <p>{docs}</p>
      <div className={styles.ecVoyageFooter}>
        <div className={styles.ecVoyageLeft}>
          <span>
            <CiClock2 className={styles.ecVoyageIcon}/> {days}
            <LuUsers className={styles.ecVoyageIcon}/> {guests}
          </span>
        </div>
        <span className={styles.ecPrice}>From {price}</span>
      </div>
    </div>
  </div>
);

export default ExpenditionCruising
