import React, { useState } from "react";
import styles from "./ImperialOdysseyHome.module.css";
import bgImage from "../../assets2/japan/Imperial Odyssey/1.png";
import mapImage from "../../assets2/japan/Imperial Odyssey/3.png";
import arivetokyo from "../../assets2/japan/Imperial Odyssey/4.jpg";
import imperialtokyo from "../../assets2/japan/Imperial Odyssey/5.jpg";

import tokyo1 from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/1.jpg";
import tokyo2 from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/5.jpg";
import hakone from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/2.jpg";
import kyoto from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/3.jpg";
import kanazawa from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/4.jpg";

import relatedj_ourneys_1 from "../../assets2/japan/Imperial Odyssey/Related Journeys/1.png";
import relatedj_ourneys_2 from "../../assets2/japan/Imperial Odyssey/Related Journeys/2.png";
import relatedj_ourneys_3 from "../../assets2/japan/Imperial Odyssey/Related Journeys/3.jpg";

import { GrLocation } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import BrandStrip from "../../components/BrandStrip/BrandStrip";

const ImperialOdysseyHome = () => {

  const [selectedDay, setSelectedDay] = useState(0);
  const [viewType, setViewType] = useState("detailed");
  const [selectedHotelIndex, setSelectedHotelIndex] = useState(0);
  const [activeCity, setActiveCity] = useState("Tokyo");
  const hotels = staysData[activeCity];
  const selectedHotel = hotels[selectedHotelIndex];

  const allHotels = Object.entries(staysData).flatMap(([city, hotels]) =>
    hotels.map((hotel) => ({ ...hotel, city }))
  );

  const day = itineraryData[selectedDay];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const journeys = [
    { title: "Zen & The Art of Stillness", duration: "10 DAYS", price: "From £22,000", image: relatedj_ourneys_1, alt: "Zen forest with torii gate" },
    { title: "The Connoisseur's Table", duration: "12 DAYS", price: "From £35,000", image: relatedj_ourneys_2, alt: "Luxury Japanese cuisine" },
    { title: "Seasons of Changes", duration: "16 DAYS", price: "From £42,000", image: relatedj_ourneys_3, alt: "Japanese castle in sakura season" },
  ];

  return (
    <div>

      {/* ===== HERO ===== */}
      <section className={styles.impHero} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.impOverlay}>
          <div className={styles.impContent}>
            <p className={styles.impSubtitle}>SIGNATURE JOURNEY</p>
            <h1 className={styles.impTitle}>Imperial Odyssey</h1>
            <p className={styles.impLocations}>Tokyo · Hakone · Kyoto · Nara · Kanazawa</p>
            <div className={styles.impDetails}>
              <span><MdOutlineDateRange color="#d1a650" /> 14 Days</span>
              <span><GrLocation color="#d1a650" /> 5 Cities</span>
              <span><FiUsers color="#d1a650" /> 8 Guests</span>
            </div>
            <div className={styles.impPricing}>
              FROM <span>£28,500</span> per person, based on double occupancy
            </div>
          </div>
          <button className={styles.impBtn}>VIEW DATES & PRICES →</button>
        </div>
      </section>

      {/* ===== JOURNEY OVERVIEW ===== */}
      <section className={styles.journeyOverview}>
        <div className={styles.journeyContainer}>
          <div className={styles.journeyLeft}>
            <p className={styles.sectionSubtitle}>JOURNEY OVERVIEW</p>
            <h2 className={styles.sectionTitle}>A 14-Day Masterpiece</h2>
            <p className={styles.journeyDescription}>
              A 14-day immersion into Japan's imperial heritage, from the modern grandeur of Tokyo to
              the ancient capitals where emperors once walked. This meticulously crafted journey reveals
              Japan at its most refined— private tea ceremonies with living masters, exclusive access to
              imperial gardens, and stays at legendary ryokans where traditions have been perfected over centuries.
            </p>
            <h3 className={styles.highlightsTitle}>JOURNEY HIGHLIGHTS</h3>
            <ul className={styles.highlightsList}>
              <li>Private after-hours viewing at Tokyo's Imperial Palace gardens</li>
              <li>Exclusive kaiseki dinner with a three-Michelin-starred chef</li>
              <li>Traditional tea ceremony with a 15th-generation tea master in Kyoto</li>
              <li>Private geiko (geisha) performance in a historic Gion ochaya</li>
              <li>Helicopter transfer over Mount Fuji to a secluded onsen ryokan</li>
              <li>Behind-the-scenes access to Kanazawa's gold leaf artisan workshops</li>
            </ul>
            <div className={styles.bestTimeBox}>
              <h4>BEST TIME TO TRAVEL</h4>
              <p>March to May (Cherry Blossom) • October to November (Autumn Foliage)</p>
            </div>
          </div>

          <div className={styles.journeyRight}>
            <div className={styles.routeSection}>
              <p className={styles.routeTitle}>JOURNEY ROUTE</p>
              <div className={styles.routeMap}>
                <img src={mapImage} alt="Japan Journey Route" />
              </div>
              <div className={styles.routeLocations}>
                <span>● Tokyo</span> → <span>● Hakone</span> → <span>● Kyoto</span> → <span>● Nara</span> → <span>● Kanazawa</span>
              </div>
            </div>

            <div className={styles.includedBox}>
              <h3>WHAT'S INCLUDED</h3>
              <ul>
                <li>13 nights luxury accommodation</li>
                <li>All internal transfers including shinkansen</li>
                <li>Private English-speaking guide throughout</li>
                <li>Daily breakfast, 8 lunches, 10 dinners</li>
                <li>All entrance fees and experiences</li>
                <li>24/7 concierge support</li>
              </ul>
              <button className={styles.viewLink}>View all inclusions →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ITINERARY ===== */}
      <section className={styles.itinerarySection}>
        <div className={styles.itineraryHeader}>
          <div>
            <p className={styles.itinerarySubtitle}>DAY BY DAY</p>
            <h2 className={styles.itineraryTitle}>Your Itinerary</h2>
          </div>
          <div className={styles.viewToggle}>
            <button className={viewType === "detailed" ? styles.active : ""} onClick={() => setViewType("detailed")}>DETAILED</button>
            <button className={viewType === "quick" ? styles.active : ""} onClick={() => setViewType("quick")}>QUICK VIEW</button>
          </div>
        </div>

        {viewType === "quick" ? (
          <div className={styles.quickviewList}>
            {itineraryData.map((item, i) => (
              <div key={i} className={styles.quickviewCard}>
                <div className={styles.quickviewLeft}>
                  <p className={styles.dayNum}>Day {parseInt(item.day)}</p>
                  <div>
                    <p className={styles.quickviewCity}>{item.city}</p>
                    <h4 className={styles.quickviewTitle}>{item.title}</h4>
                  </div>
                </div>
                <div className={styles.quickviewRight}>
                  <FaBed className={styles.hotelIcon} />
                  <p>{item.hotel}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.itineraryContainer}>
            <div className={styles.itinerarySidebar}>
              {itineraryData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.dayItem} ${index === selectedDay ? styles.active : ""}`}
                  onClick={() => setSelectedDay(index)}
                >
                  <div className={styles.dayNumber}>{item.day}</div>
                  <div className={styles.dayInfo}>
                    <p className={styles.dayCity}>{item.city}</p>
                    <p className={styles.dayTitle}>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.itineraryContent}>
              <img src={day.image} alt={day.city} className={styles.itineraryImage} />
              <div className={styles.itineraryDetails}>
                <h4><span>Day {day.day}</span> | {day.city}</h4>
                <h2>{day.title}</h2>
                <p className={styles.itineraryDesc}>{day.description}</p>
                <div className={styles.highlights}>
                  <h5>TODAY'S HIGHLIGHTS</h5>
                  <ul>
                    {day.highlights.map((h, i) => <li key={i}>✓ {h}</li>)}
                  </ul>
                </div>
                <div className={styles.footerInfo}>
                  <p><strong>{day.hotel}</strong> | {day.meals}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ===== STAYS ===== */}
      <section className={styles.staysSection}>
        <div className={styles.staysHeader}>
          <div>
            <p className={styles.staysSubtitle}>WHERE YOU'LL STAY</p>
            <h2 className={styles.staysTitle}>Exceptional Accommodations</h2>
            <p className={styles.staysDesc}>Each property has been hand-selected for its exceptional service, prime location, and authentic character.</p>
          </div>
        </div>

        <div className={styles.cityTabs}>
          {Object.keys(staysData).map((city) => (
            <button
              key={city}
              className={activeCity === city ? styles.active : ""}
              onClick={() => { setActiveCity(city); setSelectedHotelIndex(0); }}
            >
              {city}
            </button>
          ))}
        </div>

        <div className={styles.stayContent}>
          <div className={styles.stayImage}>
            <img src={selectedHotel.image} alt={selectedHotel.name} />
          </div>
          <div className={styles.stayInfo}>
            <p className={styles.stayCity}>{activeCity.toUpperCase()} | {selectedHotel.nights}</p>
            <h3 className={styles.stayName}>{selectedHotel.name}</h3>
            <p className={styles.stayDesc}>{selectedHotel.description}</p>
            <div className={styles.stayHighlights}>
              {selectedHotel.highlights.map((item, i) => <span key={i}>{item}</span>)}
            </div>
          </div>
        </div>

        <div className={styles.stayGallery}>
          {allHotels.map((hotel, i) => (
            <div
              key={i}
              className={`${styles.galleryItem} ${
                hotel.city === activeCity && staysData[activeCity][selectedHotelIndex].name === hotel.name
                  ? styles.selected : ""
              }`}
              onClick={() => {
                setActiveCity(hotel.city);
                const index = staysData[hotel.city].findIndex((h) => h.name === hotel.name);
                setSelectedHotelIndex(index);
              }}
            >
              <img src={hotel.image} alt={hotel.name} />
              <p className={styles.galleryCity}>{hotel.city}</p>
              <p className={styles.galleryNights}>{hotel.nights}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INCLUSIONS ===== */}
      <section className={styles.incluSection}>
        <div className={styles.incluWrapper}>
          <div className={styles.incluCol}>
            <p className={styles.incluLabel}>WHAT'S INCLUDED</p>
            <h2 className={styles.incluHeading}>Inclusions</h2>
            <ul className={styles.incluList}>
              {inclusions.map((item, i) => (
                <li key={i} className={styles.incluListItem}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.incluCol}>
            <p className={styles.incluLabel}>NOT INCLUDED</p>
            <h2 className={styles.incluHeading}>Exclusions</h2>
            <ul className={styles.incluList}>
              {exclusions.map((item, i) => (
                <li key={i} className={styles.incluListItem}>
                  <CrossIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className={styles.incluDownloadLink}>
              <DownloadIcon />
              DOWNLOAD FULL ITINERARY PDF
            </button>
          </div>
        </div>
      </section>

      {/* ===== DATES & PRICES ===== */}
      <section className={styles.datesSection}>
        <div className={styles.datesHeader}>
          <p className={styles.datesSubtitle}>PLAN YOUR JOURNEY</p>
          <h2 className={styles.datesTitle}>Dates & Prices</h2>
          <p className={styles.datesDesc}>Select your preferred departure. All prices are per person based on double occupancy.</p>
        </div>

        <div className={styles.datesList}>
          {datesData.map((item, index) => (
            <div className={styles.dateCard} key={index}>
              <div className={styles.dateInfo}>
                <FiCalendar className={styles.calendarIcon} />
                <div>
                  <h4>{item.date}</h4>
                  <p className={styles.dateLabel}>{item.label}</p>
                </div>
              </div>
              <div className={styles.datePrice}>
                <h3>{item.price}</h3>
                <span>per person</span>
              </div>
              <div className={styles.dateActions}>
                <span className={`${styles.statusBadge} ${item.status === "AVAILABLE" ? styles.available : styles.limited}`}>
                  {item.status}
                </span>
                <button className={styles.enquireBtn}>ENQUIRE</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.customDateSection}>
          <p>Looking for a different date? We can arrange private departures for your preferred travel dates.</p>
          <button className={styles.customDateBtn}>REQUEST CUSTOM DATE →</button>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={styles.srvFaqSection}>
        <h5 className={styles.srvFaqSubtitle}>QUESTIONS</h5>
        <h2 className={styles.srvFaqTitle}>Frequently Asked</h2>
        <div className={styles.srvFaqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.srvFaqItem} ${activeIndex === index ? styles.active : ""}`}>
              <button className={styles.srvFaqQuestion} onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={styles.srvFaqIcon}>
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              {activeIndex === index && (
                <div className={styles.srvFaqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== RELATED JOURNEYS ===== */}
      <section className={styles.rjSection}>
        <p className={styles.rjLabel}>EXPLORE MORE</p>
        <h2 className={styles.rjHeading}>Related Journeys</h2>
        <div className={styles.rjGrid}>
          {journeys.map((journey) => (
            <article key={journey.title} className={styles.rjCard}>
              <img src={journey.image} alt={journey.alt} className={styles.rjImage} loading="lazy" />
              <div className={styles.rjOverlay}>
                <span className={styles.rjDuration}>{journey.duration}</span>
                <h3 className={styles.rjTitle}>{journey.title}</h3>
                <p className={styles.rjPrice}>{journey.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== BEGIN YOUR JOURNEY ===== */}
      <section className={styles.journeySection}>
        <h5 className={styles.journeySubtitle}>YOUR JOURNEY AWAITS</h5>
        <h2 className={styles.journeyTitle}>Begin Your Journey</h2>
        <p className={styles.journeyText}>
          Every extraordinary journey begins with a conversation. Our Japan specialists await to craft your bespoke itinerary, tailored to your every desire.
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
        <button className={styles.journeyBtn}>BEGIN YOUR JOURNEY →</button>
        <BrandStrip />
      </section>

    </div>
  );
};

/* ===== DATA ===== */

const itineraryData = [
  { day: "01", city: "Tokyo", title: "Arrive Tokyo", description: "Your journey begins as you're met at Haneda or Narita Airport by your private guide and whisked to your luxury hotel in the heart of Tokyo. After settling in, enjoy a welcome dinner at a renowned restaurant where traditional Japanese cuisine meets contemporary innovation.", highlights: ["VIP airport meet and greet", "Private transfer in luxury vehicle", "Welcome dinner at acclaimed restaurant"], hotel: "The Peninsula Tokyo", meals: "Dinner", image: arivetokyo },
  { day: "02", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch", image: imperialtokyo },
  { day: "03", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "04", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "05", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "06", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "07", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "08", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "09", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "10", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "11", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "12", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "13", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
  { day: "14", city: "Tokyo", title: "Imperial Tokyo", description: "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.", highlights: ["Private tour of Imperial Palace gardens", "Tea ceremony with master", "Michelin-starred lunch"], hotel: "Aman Tokyo", meals: "Breakfast, Lunch" },
];

const staysData = {
  Tokyo: [
    { name: "The Peninsula Tokyo", nights: "3 nights", image: tokyo1, description: "Rising above the historic Imperial Palace gardens, The Peninsula Tokyo epitomizes Japanese hospitality fused with contemporary luxury. Each room offers views of the palace moats or the glittering Ginza skyline.", highlights: ["Imperial Palace views", "Rooftop terrace dining", "Award-winning spa"] },
    { name: "Aman Tokyo", nights: "2 nights", image: tokyo2, description: "A serene sanctuary high above the city, Aman Tokyo blends urban dynamism with the tranquility of Japanese tradition. Enjoy panoramic skyline views and holistic wellness at Japan's finest urban retreat.", highlights: ["Panoramic skyline views", "Luxury spa", "Infinity pool"] },
  ],
  Hakone: [
    { name: "Gora Kadan", nights: "2 nights", image: hakone, description: "Once the discreet summer retreat of Japan's imperial family, Gora Kadan is Japan's most revered ryokan, offering private onsen baths and traditional kaiseki cuisine amidst serene mountain scenery.", highlights: ["Private onsen suites", "Imperial heritage", "Multi-course kaiseki"] },
  ],
  Kyoto: [
    { name: "The Ritz-Carlton Kyoto", nights: "4 nights", image: kyoto, description: "A riverside sanctuary blending modern luxury with Kyoto's timeless culture. Featuring serene gardens, tea ceremonies, and Michelin-starred dining.", highlights: ["Riverside views", "Traditional architecture", "Michelin dining"] },
  ],
  Kanazawa: [
    { name: "Hyatt Centric Kanazawa", nights: "2 nights", image: kanazawa, description: "Contemporary sophistication meets Kanazawa's artistic soul. Located near Kenrokuen Garden, this modern hotel combines style with authentic Japanese hospitality.", highlights: ["Art-inspired interiors", "Central location", "Modern comfort"] },
  ],
};

const inclusions = [
  "13 nights accommodation at luxury properties",
  "All meals as specified (daily breakfast, 8 lunches, 10 dinners)",
  "Private English-speaking guide throughout",
  "Helicopter transfer Tokyo-Hakone over Mt Fuji",
  "First-class shinkansen rail travel",
  "All private ground transportation",
  "Airport meet and greet with private transfers",
  "All entrance fees and cultural experiences",
  "Private tea ceremony with master",
  "24/7 concierge support",
  "Comprehensive travel insurance",
];

const exclusions = [
  "International flights",
  "Travel visa (if required)",
  "Personal expenses and gratuities",
  "Meals not specified",
  "Optional activities",
];

const CheckIcon = () => (
  <span className={styles.incluIcon} aria-hidden="true">
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4L4 7.5L10 1" stroke="#b58a2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const CrossIcon = () => (
  <span className={styles.incluIcon} aria-hidden="true">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="#b58a2f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </span>
);

const DownloadIcon = () => (
  <svg className={styles.incluDownloadIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1V9M7 9L4 6M7 9L10 6" stroke="#b58a2f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 11H13" stroke="#b58a2f" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const datesData = [
  { date: "March 15 - 28, 2026", label: "CHERRY BLOSSOM", price: "£28,500", status: "AVAILABLE" },
  { date: "March 29 - April 11, 2026", label: "PEAK SAKURA", price: "£32,000", status: "LIMITED" },
  { date: "April 12 - 25, 2026", label: "LATE SPRING", price: "£28,500", status: "AVAILABLE" },
  { date: "May 3 - 16, 2026", label: "GOLDEN WEEK", price: "£26,500", status: "AVAILABLE" },
  { date: "October 4 - 17, 2026", label: "EARLY AUTUMN", price: "£28,500", status: "AVAILABLE" },
  { date: "November 1 - 14, 2026", label: "PEAK FOLIAGE", price: "£32,000", status: "LIMITED" },
  { date: "November 15 - 28, 2026", label: "LATE AUTUMN", price: "£28,500", status: "AVAILABLE" },
];

const faqs = [
  { question: "What is the activity level of this journey?", answer: "This journey is rated as moderate. While we don't undertake strenuous hikes, there is considerable walking on temple grounds, through city streets, and up some stairs. A reasonable level of fitness is recommended." },
  { question: "Can the itinerary be customized?", answer: "Yes, our travel specialists can tailor the itinerary to your preferences — from private tours and dining experiences to extended stays or alternate routes." },
  { question: "What is included in the helicopter transfer?", answer: "The helicopter transfer includes a private charter between Tokyo and Hakone, offering aerial views of Mount Fuji and surrounding landscapes." },
  { question: "How exclusive are the cultural experiences?", answer: "All experiences are designed to be private or small-group only, ensuring exclusivity and personalized attention from local experts." },
];

export default ImperialOdysseyHome;