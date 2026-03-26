import React, { useState } from "react";
import styles from "./Private.module.css"; // ✅ CSS Module import
import jetImage1 from "../../assets2/Services/aviation/3.jpg";
import jetImage2 from "../../assets2/Services/aviation/4.jpg";
import jetImage3 from "../../assets2/Services/aviation/5.jpg";
import inFlight_1 from "../../assets2/Services/aviation/In-Flight Amenities/1.png";
import inFlight_2 from "../../assets2/Services/aviation/In-Flight Amenities/2.png";
import inFlight_3 from "../../assets2/Services/aviation/In-Flight Amenities/3.png";
import inFlight_4 from "../../assets2/Services/aviation/In-Flight Amenities/4.png";
import egcImg from "../../assets2/Services/aviation/6.jpg";
import journeysImg_1 from "../../assets2/Services/aviation/Jet Expeditions/1.png";
import journeysImg_2 from "../../assets2/Services/aviation/Jet Expeditions/2.png";
import journeysImg_3 from "../../assets2/Services/aviation/Jet Expeditions/3.png";
import BrandStrip from "../../components/BrandStrip/BrandStrip";
import { LuShield } from "react-icons/lu";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaPlaneDeparture, FaCreditCard, FaCog, FaGlobe, FaClock, FaCar } from "react-icons/fa";

export default function PrivateAviation() {
  const [activeTab, setActiveTab] = useState("light");

  const jetsData = {
    light: {
      name: "CITATION CJ4",
      title: "Light Jets",
      image: jetImage1,
      description:
        "Perfect for short to medium-range journeys. Ideal for business trips and intimate getaways with exceptional speed and efficiency.",
      specs: [
        { label: "Capacity", value: "6–8 passengers" },
        { label: "Range", value: "2,165 nm" },
      ],
      features: [
        ["Wi-Fi connectivity", "Refreshment center"],
        ["Leather seating", "Lavatory"],
      ],
    },
    midsize: {
      name: "HAWKER 900XP",
      title: "Midsize Jets",
      image: jetImage2,
      description:
        "The perfect balance of comfort and capability. Spacious cabin with stand-up headroom for transcontinental travel.",
      specs: [
        { label: "Capacity", value: "8–9 passengers" },
        { label: "Range", value: "2,930 nm" },
      ],
      features: [
        ["Full-service galley", "Work tables"],
        ["Entertainment system", "Enhanced baggage"],
      ],
    },
    large: {
      name: "GULFSTREAM G650",
      title: "Large Jets",
      image: jetImage3,
      description:
        "Ultimate luxury for intercontinental journeys. The flagship of private aviation featuring flatbed seating and exquisite amenities.",
      specs: [
        { label: "Capacity", value: "14–16 passengers" },
        { label: "Range", value: "7,000 nm" },
      ],
      features: [
        ["Flatbed seats", "Full bedroom"],
        ["Private suites", "Shower facilities"],
      ],
    },
  };

  

  const activeJet = jetsData[activeTab];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.aviationPage}>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.aviationHero}>
        <div className={styles.aviationOverlay}>
          <h5 className={styles.aviationSubtitle}>ELEVATE YOUR JOURNEY</h5>
          <h1 className={styles.aviationTitle}>Private Aviation</h1>
          <p className={styles.aviationDesc}>
            Experience the pinnacle of luxury travel with our bespoke <br /> private aviation services.
            From exclusive jet charters <br /> to seamless global mobility, we redefine what it means to fly.
          </p>
          <button className={styles.quoteBtn}>REQUEST A QUOTE</button>
          <p className={styles.discover}>DISCOVER</p>
          <div className={styles.downArrow}>⌄</div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className={styles.aviationStats}>
        <div className={styles.statItem}>
          <h3>500+</h3>
          <p>AIRCRAFT NETWORK</p>
        </div>
        <div className={styles.statItem}>
          <h3>180+</h3>
          <p>COUNTRIES SERVED</p>
        </div>
        <div className={styles.statItem}>
          <h3>15K+</h3>
          <p>ANNUAL FLIGHTS</p>
        </div>
        <div className={styles.statItem}>
          <h3>24/7</h3>
          <p>CONCIERGE SUPPORT</p>
        </div>
      </section>

      {/* ===== REDEFINING PRIVATE AIR TRAVEL SECTION ===== */}
      <section className={styles.redefineSection}>
        <div className={styles.redefineContent}>
          <h5 className={styles.redefineSubtitle}>YOUR SKY, YOUR RULES</h5>
          <h2 className={styles.redefineTitle}>Redefining Private Air <br /> Travel</h2>
          <p className={styles.redefineDesc}>
            At Aurelia, we believe that the journey should be as <br /> extraordinary as the destination.
            Our private aviation division <br /> offers unparalleled access to the world's finest <br /> aircraft,
            combined with the personalized service that <br /> defines luxury travel.
          </p>
          <p className={styles.redefineDesc}>
            Whether you're planning a business trip, a family holiday, or a <br /> globe-spanning expedition,
            our aviation specialists craft bespoke <br /> solutions tailored to your exact requirements.
          </p>
          <ul className={styles.redefineList}>
            <li>No commercial queues or layovers</li>
            <li>Depart on your schedule</li>
            <li>Access to 5,000+ airports worldwide</li>
            <li>Customized in-flight experience</li>
          </ul>
        </div>
        <div className={styles.redefineImage}></div>
      </section>

      {/* ===== THE FLEET SECTION ===== */}
      <section className={styles.fleetSection}>
        <div className={styles.fleetHeader}>
          <p className={styles.fleetSubtitle}>OUR AIRCRAFT</p>
          <h2 className={styles.fleetTitle}>The Fleet</h2>
          <p className={styles.fleetDescription}>
            Access to over 500 meticulously maintained aircraft, from nimble light
            jets to ultra-long-range flagships.
          </p>

          <div className={styles.fleetTabs}>
            <button
              className={activeTab === "light" ? styles.active : ""}
              onClick={() => setActiveTab("light")}
            >
              LIGHT JETS
            </button>
            <button
              className={activeTab === "midsize" ? styles.active : ""}
              onClick={() => setActiveTab("midsize")}
            >
              MIDSIZE JETS
            </button>
            <button
              className={activeTab === "large" ? styles.active : ""}
              onClick={() => setActiveTab("large")}
            >
              LARGE JETS
            </button>
          </div>
        </div>

        <div className={styles.fleetContent}>
          <div className={styles.fleetImage}>
            <img src={activeJet.image} alt={activeJet.title} />
          </div>

          <div className={styles.fleetInfo}>
            <span className={styles.jetName}>{activeJet.name}</span>
            <h3>{activeJet.title}</h3>
            <p className={styles.jetDescription}>{activeJet.description}</p>

            <div className={styles.specs}>
              {activeJet.specs.map((spec, index) => (
                <div className={styles.specs1} key={index}>
                  <p className={styles.feetLabel}>{spec.label}</p>
                  <p>{spec.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.features}>
  <p className={styles.featuresLabel}>Features</p>
  <div className={styles.featuresGrid}>
    {activeJet.features.map((col, i) => (
      <ul key={i}>
        {col.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>

      {/* ===== Aviation Services ===== */}
      <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h4 className={styles.subtitle}>HOW WE SERVE YOU</h4>
        <h2 className={styles.title}>Aviation Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* ===== ONBOARD EXPERIENCE ===== */}
      <section className={styles.amenitiesSection}>
        <div className={styles.amenitiesHeader}>
          <p className={styles.amenitiesSubtitle}>ONBOARD EXPERIENCE</p>
          <h2 className={styles.amenitiesTitle}>In-Flight Amenities</h2>
          <p className={styles.amenitiesDesc}>
            Every journey features exceptional comfort and personalized service
          </p>
        </div>

        <div className={styles.amenitiesGrid}>
          <div className={styles.amenityCard}>
            <img src={inFlight_1} alt="Luxury Interiors" />
            <h4>Luxurious Interiors</h4>
            <p>
              Hand-stitched Italian leather seating with advanced electric recline
              systems and full bedding capability.
            </p>
          </div>
          <div className={styles.amenityCard}>
            <img src={inFlight_2} alt="Gourmet Dining" />
            <h4>Gourmet Dining</h4>
            <p>
              Michelin-quality cuisine prepared by private chefs, paired with
              premium champagne and fine wines.
            </p>
          </div>
          <div className={styles.amenityCard}>
            <img src={inFlight_3} alt="Global Connectivity" />
            <h4>Global Connectivity</h4>
            <p>
              High-speed satellite Wi-Fi, noise canceling headsets, and personal
              entertainment systems.
            </p>
          </div>
          <div className={styles.amenityCard}>
            <img src={inFlight_4} alt="VIP Terminals" />
            <h4>VIP Terminals</h4>
            <p>
              Skip commercial queues with access to exclusive FBOs and private
              terminals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EGC DIFFERENCE SECTION ===== */}
      <section className={styles.differenceSection}>
        <div className={styles.differenceContainer}>
          <div className={styles.differenceLeft}>
            <p className={styles.differenceSubtitle}>EVERY DETAIL, ELEVATED</p>
            <h2 className={styles.differenceTitle}>The EGC Difference</h2>

            <div className={styles.differenceItem}>
              <div className={styles.numberBox}>01</div>
              <div>
                <h4>Bespoke Itineraries</h4>
                <p>
                  Every flight is tailored to your preferences—from departure times
                  to in-flight dining menus.
                </p>
              </div>
            </div>
            <div className={styles.differenceItem}>
              <div className={styles.numberBox}>02</div>
              <div>
                <h4>Dedicated Flight Crew</h4>
                <p>
                  Highly trained professionals with years of experience in luxury
                  aviation service.
                </p>
              </div>
            </div>
            <div className={styles.differenceItem}>
              <div className={styles.numberBox}>03</div>
              <div>
                <h4>Privacy & Discretion</h4>
                <p>
                  Complete confidentiality with secure communications and discreet
                  ground handling.
                </p>
              </div>
            </div>
            <div className={styles.differenceItem}>
              <div className={styles.numberBox}>04</div>
              <div>
                <h4>24/7 Global Support</h4>
                <p>
                  Round-the-clock assistance from our aviation specialists,
                  wherever you are in the world.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.differenceRight}>
            <img src={egcImg} alt="Private Jet" />
            <div className={styles.safetyBox}>
              <div className={styles.shieldIcon}><LuShield /></div>
              <div>
                <h5>Safety First</h5>
                <p>ARGUS Platinum Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CURATED JOURNEYS ===== */}
      <section className={styles.curatedSection}>
        <div className={styles.curatedContainer}>
          <p className={styles.curatedSubtitle}>CURATED JOURNEYS</p>
          <h2 className={styles.curatedTitle}>Jet Expeditions</h2>
          <p className={styles.curatedDesc}>
            Join fellow discerning travelers on our signature private jet expeditions
          </p>

          <div className={styles.curatedGrid}>
            <div className={styles.curatedCard}>
              <div className={styles.curatedImage}>
                <img src={journeysImg_1} alt="Around the World" />
                <div className={styles.curatedOverlay}></div>
                <div className={styles.curatedImageText}>
                  <span>24-Day Private Jet Expedition</span>
                  <h3>Around the World</h3>
                </div>
              </div>
              <div className={styles.curatedContent}>
                <p>Tokyo · Bali · Maldives · Safari · Marrakech</p>
                <p className={styles.price}>From £125,000 per person</p>
                <span className={styles.viewDetails}>VIEW DETAILS →</span>
              </div>
            </div>

            <div className={styles.curatedCard}>
              <div className={styles.curatedImage}>
                <img src={journeysImg_2} alt="European Grand Tour" />
                <div className={styles.curatedOverlay}></div>
                <div className={styles.curatedImageText}>
                  <span>14-Day Private Jet Journey</span>
                  <h3>European Grand Tour</h3>
                </div>
              </div>
              <div className={styles.curatedContent}>
                <p>Paris · Monaco · Tuscany · Santorini · Vienna</p>
                <p className={styles.price}>From £68,000 per person</p>
                <span className={styles.viewDetails}>VIEW DETAILS →</span>
              </div>
            </div>

            <div className={styles.curatedCard}>
              <div className={styles.curatedImage}>
                <img src={journeysImg_3} alt="Asian Discovery" />
                <div className={styles.curatedOverlay}></div>
                <div className={styles.curatedImageText}>
                  <span>18-Day Private Jet Adventure</span>
                  <h3>Asian Discovery</h3>
                </div>
              </div>
              <div className={styles.curatedContent}>
                <p>Hong Kong · Japan · Vietnam · Thailand · Bhutan</p>
                <p className={styles.price}>From £95,000 per person</p>
                <span className={styles.viewDetails}>VIEW DETAILS →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENT EXPERIENCES ===== */}
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsContainer}>
          <p className={styles.reviewsSubtitle}>CLIENT EXPERIENCES</p>
          <h2 className={styles.reviewsTitle}>Guest Reviews</h2>

          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.reviewText}>
                "Aurelia's aviation team transformed our family trip to the Maldives.
                Every detail was perfect—from the champagne on boarding to the seamless
                customs clearance."
              </p>
              <p className={styles.reviewName}>Alexander M.</p>
              <p className={styles.reviewLocation}>London</p>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.reviewText}>
                "We've used many charter services, but none compare to Aurelia.
                The Gulfstream was immaculate, and the crew anticipated our every need."
              </p>
              <p className={styles.reviewName}>Caroline & James D.</p>
              <p className={styles.reviewLocation}>New York</p>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.reviewText}>
                "The jet card membership has been invaluable for my business travel.
                Guaranteed availability and consistent service excellence."
              </p>
              <p className={styles.reviewName}>Robert T.</p>
              <p className={styles.reviewLocation}>Dubai</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className={styles.srvFaqSection}>
        <h5 className={styles.srvFaqSubtitle}>QUESTIONS</h5>
        <h2 className={styles.srvFaqTitle}>Frequently Asked</h2>

        <div className={styles.srvFaqContainer}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.srvFaqItem} ${activeIndex === index ? styles.active : ""}`}
            >
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

      {/* ===== READY TO TAKE OFF ===== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Take Off?</h2>
          <p className={styles.ctaText}>
            Our aviation specialists are standing by to craft your perfect journey.
            <br />
            From first inquiry to final landing, we're with you every mile.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.btnGoldd}>REQUEST A QUOTE</button>
            <button className={styles.btnOutlinee}>Call +1(800) 555-0199</button>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterLeft}>
            <h2>Stay Inspired</h2>
            <p>
              Receive curated travel inspiration and exclusive offers directly to
              your inbox.
            </p>
          </div>
          <div className={styles.newsletterRight}>
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </section>

      {/* ===== LOGOS ROW ===== */}
      <BrandStrip />
    </div>
  );
}

// ~~~~~~~~~~~~ FAQ DATA ~~~~~~~~~~~~
const faqs = [
  {
    id: 1,
    question: "How far in advance should I book?",
    answer:
      "While we can arrange flights within 4–6 hours for on-demand charter, we recommend 48–72 hours notice for optimal aircraft selection. For peak travel periods or specific aircraft requirements, earlier booking is advisable.",
  },
  {
    id: 2,
    question: "What is included in the charter price?",
    answer:
      "Our charter price includes all flight crew, fuel surcharges, standard catering, ground handling, and landing fees. Additional services such as premium catering, ground transportation, and in-flight entertainment can be arranged upon request.",
  },
  {
    id: 3,
    question: "Can I bring pets on board?",
    answer:
      "Yes, pets are welcome on board our charter flights. We ask that you inform us in advance so we can make appropriate arrangements to ensure both your comfort and the safety of your furry companions throughout the journey.",
  },
  {
    id: 4,
    question: "What about customs and immigration?",
    answer:
      "We handle all customs and immigration arrangements on your behalf. Our concierge team coordinates with relevant authorities at departure and arrival airports to ensure a seamless, expedited process for all international travel.",
  },
  {
    id: 5,
    question: "Is there a minimum booking requirement?",
    answer:
      "There is no strict minimum booking requirement. Whether you need a short regional hop or a long-haul international journey, we tailor our services to meet your specific travel needs with the same level of luxury and attention to detail.",
  },
];

const services = [
    {
      icon: <FaPlaneDeparture />,
      title: "On-Demand Charter",
      description:
        "Book your private flight within hours. Our 24/7 concierge team ensures seamless arrangements to any destination.",
    },
    {
      icon: <FaCreditCard />,
      title: "Jet Card Membership",
      description:
        "Purchase flight hours in advance with guaranteed availability, fixed rates, and priority booking privileges.",
    },
    {
      icon: <FaCog />,
      title: "Aircraft Management",
      description:
        "Full-service management for jet owners including maintenance, crew, and charter revenue optimization.",
    },
    {
      icon: <FaGlobe />,
      title: "Group Jet Expeditions",
      description:
        "Curated luxury expeditions aboard custom-configured aircraft with expert-led excursions worldwide.",
    },
    {
      icon: <FaClock />,
      title: "Empty Leg Flights",
      description:
        "Access exclusive last-minute availability at reduced rates on repositioning flights.",
    },
    {
      icon: <FaCar />,
      title: "Ground Transportation",
      description:
        "Seamless door-to-door service with luxury vehicles, helicopter transfers, and yacht connections.",
    },
  ];