import React, { useState } from "react";
import styles from "./JetExpeditions.module.css";
import { FaPlane, FaTimes, FaUtensils, FaStar } from "react-icons/fa";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaShieldAlt,
  FaWifi,
  FaBed,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

import img1 from "../../assets2/Services/aviation/Jet Expeditions/image/10.png";
import img2 from "../../assets2/Services/aviation/4.png";
import img3 from "../../assets2/Services/aviation/5.png";

import heroBg from "../../assets2/Services/aviation/Jet Expeditions/image/1.png";
import africaImg from "../../assets2/Services/aviation/Jet Expeditions/image/2.png";
import savannahImg from "../../assets2/Services/aviation/Jet Expeditions/image/3.png";
import kyotoImg from "../../assets2/Services/aviation/Jet Expeditions/image/4.png";
import antarcticaImg from "../../assets2/Services/aviation/Jet Expeditions/image/5.png";
import maldivesImg from "../../assets2/Services/aviation/Jet Expeditions/image/6.png";

import diningImg from "../../assets2/Services/aviation/Jet Expeditions/image/7.png";
import jetImg from "../../assets2/Services/aviation/Jet Expeditions/image/8.png";
import accessImg from "../../assets2/Services/aviation/Jet Expeditions/image/9.png";
import bgImage from "../../assets2/Services/aviation/Jet Expeditions/image/11.jpg";
import icon1 from "../../assets2/Services/aviation/Jet Expeditions/icon1.png";
import icon2 from "../../assets2/Services/aviation/Jet Expeditions/icon2.png";
import icon3 from "../../assets2/Services/aviation/Jet Expeditions/icon3.png";
import icon4 from "../../assets2/Services/aviation/Jet Expeditions/icon4.png";
import icon5 from "../../assets2/Services/aviation/Jet Expeditions/icon5.png";
import icon6 from "../../assets2/Services/aviation/Jet Expeditions/icon6.png";
import icon7 from "../../assets2/Services/aviation/Jet Expeditions/icon7.png";
import icon8 from "../../assets2/Services/aviation/Jet Expeditions/icon8.png";
import icon9 from "../../assets2/Services/aviation/Jet Expeditions/icon9.png";
import { FaArrowRightLong } from "react-icons/fa6";


const signatureExperiences = [
  {
    image: diningImg,
    icon: icon1,
    title: "Michelin-Starred Heights",
    description:
      "Dine at 40,000 feet with menus curated by world-renowned chefs. Each flight features bespoke culinary experiences.",
  },
  {
    image: jetImg,
    icon: icon3,
    title: "Private Jet Comfort",
    description:
      "Travel in our fleet of ultra-long-range aircraft, each configured for maximum comfort and privacy.",
  },
  {
    image: accessImg,
    icon: icon2,
    title: "Exclusive Access",
    description:
      "Gain entry to closed-door experiences, private collections, and invitation-only events worldwide.",
  },
];

const JetExpeditions = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+1");

  const countryCodes = [
    { flag: "🇺🇸", code: "+1" },
    { flag: "🇬🇧", code: "+44" },
    { flag: "🇮🇳", code: "+91" },
    { flag: "🇦🇪", code: "+971" },
    { flag: "🇿🇦", code: "+27" },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}

  <section
    className={styles.jetHeroSection}
    style={{
      backgroundImage: `url(${heroBg})`,
    }}
  >
    <div className={styles.jetOverlay}></div>

    <div className={styles.jetContent}>
      <p className={styles.jetSubtitle}>
        Curated for the discerning few
      </p>

      <h1 className={styles.jetTitle}>Jet Expeditions</h1>

      <p className={styles.jetDescription}>
        Traverse the world's most captivating destinations aboard your private
        aircraft. Each journey is a masterpiece of luxury, culture, and unparalleled access.
      </p>

      <div className={styles.jetButtons}>
        <button
          className={styles.primaryBtn}
          onClick={() => setShowModal(true)}
        >
          BEGIN YOUR JOURNEY
        </button>

        <button className={styles.secondaryBtn}>
          EXPLORE EXPEDITIONS
        </button>
      </div>
    </div>

    {/* Discover */}
    <div className={styles.discoverIndicator}>
      <span>DISCOVER</span>
      <span className={styles.discoverArrow}>⌄</span>
    </div>
  </section>

  {/* Stats Section */}
  <div className={styles.statsBar}>
    <div className={styles.statItem}>
      <h3>70+</h3>
      <p>COUNTRIES</p>
    </div>
    <div className={styles.statItem}>
      <h3>500+</h3>
      <p>CURATED PROPERTIES</p>
    </div>
    <div className={styles.statItem}>
      <h3>25</h3>
      <p>YEARS OF EXPERTISE</p>
    </div>
    <div className={styles.statItem}>
      <h3>100%</h3>
      <p>BESPOKE ITINERARIES</p>
    </div>
  </div>


      {/* ================= MODAL ================= */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleWrap}>
                <FaPlane className={styles.modalPlaneIcon} />
                <h2>Begin Your Journey</h2>
              </div>

              <button
                className={styles.closeBtn}
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <p className={styles.modalDesc}>
              Share your travel aspirations and our specialists will craft your perfect expedition.
            </p>

            <form className={styles.modalForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>FULL NAME *</label>
                  <input type="text" placeholder="Your name" />
                </div>

                <div className={styles.formGroup}>
                  <label>EMAIL *</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>PHONE</label>
                  <div className={styles.phoneWrapper}>
                    <select
                      className={styles.countryCode}
                      value={selectedCode}
                      onChange={(e) => setSelectedCode(e.target.value)}
                    >
                      {countryCodes.map((item, index) => (
                        <option key={index} value={item.code}>
                          {item.flag} {item.code}
                        </option>
                      ))}
                    </select>
                    <input type="text" placeholder="Phone number" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>EXPEDITION</label>
                  <select>
                    <option>Select...</option>
                    <option>Around the World in Three Continents</option>
                    <option>African Savannah Masterpiece</option>
                    <option>Kyoto: The Eternal Spring</option>
                    <option>Antarctic Frontier</option>
                    <option>Maldivian Atoll Escape</option>
                    <option>Custom Expedition</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>MESSAGE</label>
                <textarea placeholder="Tell us about your travel dreams ..." />
              </div>

              <button type="submit" className={styles.sendBtn}>
                SEND ENQUIRY
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= Curated Expeditions ================= */}
      <section className={styles.curatedSection}>
        <div className={styles.curatedContainer}>
          <div className={styles.curatedHeader}>
            <p className={styles.curatedSmallTitle}>SIGNATURE JOURNEYS</p>
            <h2 className={styles.curatedMainTitle}>Curated Expeditions</h2>
            <p className={styles.curatedDescription}>
              Each expedition is meticulously crafted to deliver extraordinary
              experiences across the world's most coveted destinations.
            </p>
          </div>

          <div className={styles.curatedGrid}>
            <div
              className={`${styles.curatedCard} ${styles.largeCard}`}
              style={{ backgroundImage: `url(${africaImg})` }}
            >
              <div className={styles.curatedCardOverlay}></div>
              <div className={styles.featuredBadge}>FEATURED</div>

              <div className={styles.curatedCardContent}>
                <div className={styles.curatedCardContentHeader}>
                  <div className={styles.curatedCardContentIcon}>
                    <CiLocationOn className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>Africa • Asia • Europe</p>
                  </div>
                  <div className={styles.curatedCardContentIcon}>
                    <CiCalendar className={styles.curatedCardContentIcon2} color="#C09551" />
                    <p className={styles.curatedCardMeta}>21 Days</p>
                  </div>
                </div>

                <h3>Around the World in Three Continents</h3>
                <p className={styles.curatedCardDesc}>
                  An extraordinary circumnavigation touching Morocco, Japan, and the Mediterranean.
                </p>
                <button className={styles.curatedCardLink}>DISCOVER <FaArrowRightLong color="#C09551" size={8}/></button>
              </div>
            </div>

            <div
              className={`${styles.curatedCard} ${styles.smallTopCard}`}
              style={{ backgroundImage: `url(${savannahImg})` }}
            >
              <div className={styles.curatedCardOverlay}></div>
              <div className={styles.curatedCardContent}>
                <div className={styles.curatedCardContentHeader}>
                  <div className={styles.curatedCardContentIcon}>
                    <CiLocationOn className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>Serengeti & Okavango</p>
                  </div>
                  <div className={styles.curatedCardContentIcon}>
                    <CiCalendar className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>14 Days</p>
                  </div>
                </div>
                <h3>African Savannah Masterpiece</h3>
                <p className={styles.curatedCardDesc}>
                  Witness the Great Migration from your private lodge.
                </p>
              </div>
            </div>

            <div
              className={`${styles.curatedCard} ${styles.smallMidCard}`}
              style={{ backgroundImage: `url(${kyotoImg})` }}
            >
              <div className={styles.curatedCardOverlay}></div>
              <div className={styles.curatedCardContent}>
                <div className={styles.curatedCardContentHeader}>
                  <div className={styles.curatedCardContentIcon}>
                    <CiLocationOn className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>Kyoto, Japan</p>
                  </div>
                  <div className={styles.curatedCardContentIcon}>
                    <CiCalendar className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>10 Days</p>
                  </div>
                </div>
                <h3>Kyoto: The Eternal Spring</h3>
                <p className={styles.curatedCardDesc}>
                  Private tea ceremonies and cherry blossom viewing.
                </p>
              </div>
            </div>

            <div
              className={`${styles.curatedCard} ${styles.bottomLeftCard}`}
              style={{ backgroundImage: `url(${antarcticaImg})` }}
            >
              <div className={styles.curatedCardOverlay}></div>
              <div className={styles.curatedCardContent}>
                <div className={styles.curatedCardContentHeader}>
                  <div className={styles.curatedCardContentIcon}>
                    <CiLocationOn className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>Antarctica</p>
                  </div>
                  <div className={styles.curatedCardContentIcon}>
                    <CiCalendar className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>16 Days</p>
                  </div>
                </div>
                <h3>Antarctic Frontier</h3>
                <p className={styles.curatedCardDesc}>
                  The ultimate polar expedition in supreme comfort.
                </p>
              </div>
            </div>

            <div
              className={`${styles.curatedCard} ${styles.bottomRightCard}`}
              style={{ backgroundImage: `url(${maldivesImg})` }}
            >
              <div className={styles.curatedCardOverlay}></div>
              <div className={styles.curatedCardContent}>
                <div className={styles.curatedCardContentHeader}>
                  <div className={styles.curatedCardContentIcon}>
                    <CiLocationOn className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>Maldives</p>
                  </div>
                  <div className={styles.curatedCardContentIcon}>
                    <CiCalendar className={styles.curatedCardContentIcon1} color="#C09551" />
                    <p className={styles.curatedCardMeta}>12 Days</p>
                  </div>
                </div>
                <h3>Maldivian Atoll Escape</h3>
                <p className={styles.curatedCardDesc}>
                  Private island sanctuary with underwater dining.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.curatedFooter}>
            <button className={styles.viewAllBtn}>VIEW ALL EXPEDITIONS</button>
          </div>
        </div>
      </section>

      {/* ================= Signature Experiences ================= */}
      <section className={styles.signatureSection}>
        <div className={styles.signatureContainer}>
          <div className={styles.signatureHeader}>
            <p className={styles.ssmallTitle}>BEYOND TRAVEL</p>
            <h2 className={styles.SEmainTitle}>Signature Experiences</h2>
            <p className={styles.subtitle}>
              Every element of your journey is designed to exceed expectations,
              from the moment you step aboard to your final destination.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {signatureExperiences.map((item, index) => (
              <div key={index} className={styles.signatureCard}>
                <div
                  className={styles.signatureCardImage}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className={styles.iconCircle}><img src={item.icon} alt="icon" className={styles.icon} /></div>
                </div>

                <div className={styles.signatureCardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AircraftSection ================= */}
      <section className={styles.aircraftLuxurySection}>
  <div className={styles.aircraftLuxuryContainer}>
    
    {/* LEFT SIDE IMAGE - DESKTOP */}
    <div className={styles.aircraftLeftArea}>
      <button className={styles.aircraftLeftBtn} onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className={styles.aircraftImageWrapper}>
        <img src={images[index]} alt="aircraft" />

        <div className={styles.aircraftBadge}>
          <h3>G700</h3>
          <p>Gulfstream Fleet</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className={styles.aircraftRightArea}>
      <div className={styles.aircraftContent}>
        <p className={styles.aircraftSmallTitle}>YOUR PRIVATE HAVEN</p>

        <h2 className={styles.aircraftTitle}>The Aircraft</h2>

        <p className={styles.aircraftDesc}>
          Our fleet of Gulfstream G700 aircraft represents the pinnacle of
          private aviation. With the industry's tallest, widest, and longest
          cabin, each journey becomes a destination in itself.
        </p>

        <p className={styles.aircraftDesc}>
          Configured with private suites, a full galley kitchen, and dedicated
          wellness spaces, your aircraft transforms into a flying sanctuary.
          Every detail has been considered to ensure your comfort at 51,000
          feet.
        </p>

        {/* FEATURES */}
        <div className={styles.aircraftFeaturesGrid}>
          {features.map((item, i) => (
            <div key={i} className={styles.aircraftFeatureItem}>
              <div className={styles.aircraftIconBox}><img src={item.icon} alt="icon" className={styles.icon} /></div>

              <div className={styles.aircraftFeatureText}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE IMAGE */}
        <div className={styles.aircraftMobileImageWrap}>
          <div className={styles.aircraftImageWrapper}>
            <img src={images[index]} alt="aircraft" />

            <div className={styles.aircraftBadge}>
              <h3>G700</h3>
              <p>Gulfstream Fleet</p>
            </div>
          </div>

          <div className={styles.aircraftMobileArrows}>
            <button className={styles.aircraftMobileBtn} onClick={prevSlide}>
              <FaChevronLeft />
            </button>

            <button className={styles.aircraftMobileBtn} onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <button className={styles.aircraftRightBtn} onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  </div>
</section>

      {/* ================= OurPhilosophy SECTION ================= */}
    <section className={styles.philosophySection}>
      <div className={styles.philosophyContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.philosophyLeft}>
          <p className={styles.philosophySmallTitle}>OUR PHILOSOPHY</p>

          <h2 className={styles.philosophyTitle}>
            Redefining the Art of Travel
          </h2>

          <p className={styles.philosophyText}>
            Elite Global Concierge was founded on a singular vision: to create
            journeys that transcend conventional luxury travel. We believe that
            true exploration requires more than beautiful destinations—it
            demands access, authenticity, and absolute discretion.
          </p>

          <p className={styles.philosophyText}>
            Our team of global specialists curates each expedition with
            meticulous attention to detail. From securing private viewings at
            the world&apos;s most prestigious museums to arranging audiences with
            cultural luminaries, we transform impossible requests into
            unforgettable realities.
          </p>

          <p className={styles.philosophyText}>
            With a network spanning six continents and relationships cultivated
            over decades, we open doors that remain closed to others. Your
            journey with Elite Global Concierge is not just a trip—it&apos;s a
            transformation.
          </p>
        </div>

        {/* RIGHT QUOTE CARD */}
        <div className={styles.philosophyRight}>
          <div className={styles.quoteCard}>
            <div className={styles.quoteIcon}>❞</div>

            <p className={styles.quoteText}>
              Travel is the only thing you buy that makes you richer. We ensure
              every moment compounds that wealth.
            </p>

            <div className={styles.quoteLine}></div>

            <div className={styles.quoteAuthorBlock}>
              <h4>Alexandra Sterling</h4>
              <p>Founder, Elite Global Concierge</p>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* ================= Cta SECTION ================= */}
     <section
      className={styles.ctaSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.ctaContent}>
        <p className={styles.smallTitle}>BEGIN YOUR JOURNEY</p>

        <h2 className={styles.mainTitle}>
          Ready to explore the extraordinary?
        </h2>

        <p className={styles.subText}>
          Our expedition specialists are available 24/7 to craft your bespoke journey.
        </p>

        <button className={styles.ctaBtn}>ENQUIRE NOW</button>
      </div>
    </section>
    </>
  );
};

const images = [img1, img2, img3];

const features = [
  {
    icon: icon4,
    title: "Safety First",
    desc: "FAA-certified crews and aircraft",
  },
  {
    icon: icon5,
    title: "Connected",
    desc: "High-speed global connectivity",
  },
  {
    icon: icon6,
    title: "Rest Well",
    desc: "Lie-flat beds and private suites",
  },
  {
    icon: icon7,
    title: "Intimate",
    desc: "Maximum 16 guests per expedition",
  },
  {
    icon: icon8,
    title: "Ultra-Range",
    desc: "Non-stop intercontinental flight",
  },
  {
    icon: icon9,
    title: "Global Access",
    desc: "Land at exclusive airstrips",
  },
];

export default JetExpeditions;