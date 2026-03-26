import React from "react";
import styles from "./Services.module.css";
import { CiGlobe } from "react-icons/ci";
import { LuShield } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


import { useNavigate } from "react-router-dom";
import BrandStrip from "../../components/BrandStrip/BrandStrip";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className={styles.servicesPage}>

      {/* ===== HERO ===== */}
      <section className={styles.servicesHeroSection}>
        <div className={styles.servicesHeroOverlay}>
          <h5 className={styles.servicesHeroSubtitle}>EXCELLENCE DEFINED</h5>
          <p className={styles.servicesHeroTitle}>Our Services</p>
          <p className={styles.servicesHeroTagline}>Curating Extraordinary Experiences Worldwide</p>
          <p className={styles.servicesHeroDesc}>
            From private aviation to bespoke travel management, we deliver unparalleled luxury
            services tailored to discerning individuals and corporations seeking excellence in every detail.
          </p>
          <button className={styles.heroBtn}>EXPLORE</button>
          <div className={styles.sArrow}>⌄</div>
        </div>
      </section>

      {/* ===== NINE PILLARS ===== */}
      <section className={styles.pillarsSection}>
        <h2>Nine Pillars of Exceptional Service</h2>
        <p>
          Each service is meticulously crafted to exceed expectations, delivered with the discretion
          and attention to detail that defines true luxury.
        </p>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <div className={styles.servicesGrid}>

        {/* ── PAIR 1: image LEFT ── */}
        <div className={`${styles.sp} ${styles.spImgLeft}`}>
          <div className={`${styles.sgImage} ${styles.page1}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>Private Client Services</h2>
            <p className={styles.serviceDesc}>
              Bespoke solutions for our most discerning clientele.
              <br /><br />
              Experience the pinnacle of personalized service with our Private Client division.
              From exclusive access to sold-out events to securing rare collectibles, our dedicated
              team anticipates your needs before you even express them.
            </p>
            <ul className={styles.serviceList}>
              <li>24/7 dedicated lifestyle manager</li>
              <li>Exclusive access to private events</li>
              <li>Luxury property sourcing</li>
              <li>Fine art and collectibles acquisition</li>
            </ul>
            <button className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

        {/* ── PAIR 2: image RIGHT ── */}
        <div className={`${styles.sp} ${styles.spImgRight}`}>
          <div className={`${styles.sgImage} ${styles.page2}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>Private Aviation</h2>
            <p className={styles.serviceDesc}>
              Seamless travel aboard the world's finest aircraft.
              <br /><br />
              Transcend conventional travel with our private aviation services. Whether chartering a
              light jet for a quick business trip or a long-range aircraft for intercontinental journeys,
              we ensure every flight is an experience in refined luxury.
            </p>
            <ul className={styles.serviceList}>
              <li>Access to 7,000+ aircraft worldwide</li>
              <li>Custom-configured interiors</li>
              <li>Empty leg flight opportunities</li>
              <li>Global concierge coordination</li>
            </ul>
            <button onClick={() => navigate('/private-aviation')} className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

        {/* ── PAIR 3: image LEFT ── */}
        <div className={`${styles.sp} ${styles.spImgLeft}`}>
          <div className={`${styles.sgImage} ${styles.page3}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>Yacht Charter</h2>
            <p className={styles.serviceDesc}>
              Navigate the world's most beautiful waters in style.
              <br /><br />
              Set sail on an unforgettable maritime adventure with our curated yacht charter services.
              From Mediterranean escapes to Caribbean explorations, we arrange everything from intimate
              sailing yachts to mega yachts with full crew.
            </p>
            <ul className={styles.serviceList}>
              <li>Motor yachts & sailing vessels</li>
              <li>Professional crew arrangements</li>
              <li>Bespoke itinerary planning</li>
              <li>Onboard chef & provisions</li>
            </ul>
            <button onClick={() => navigate('/expendition')} className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

        {/* ── PAIR 4: image RIGHT ── */}
        <div className={`${styles.sp} ${styles.spImgRight}`}>
          <div className={`${styles.sgImage} ${styles.page4}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>First & Business Class Flights</h2>
            <p className={styles.serviceDesc}>
              Premium commercial travel, expertly curated.
              <br /><br />
              When commercial aviation suits your itinerary, travel in the comfort you deserve.
              Our specialists secure the finest first and business class seats on leading carriers.
            </p>
            <ul className={styles.serviceList}>
              <li>Best fare guarantees</li>
              <li>Lounge access worldwide</li>
              <li>Priority boarding & security</li>
              <li>Seamless rebooking services</li>
            </ul>
            <button className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

        {/* ── PAIR 5: image LEFT ── */}
        <div className={`${styles.sp} ${styles.spImgLeft}`}>
          <div className={`${styles.sgImage} ${styles.page5}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>Ultra Luxury Cruises</h2>
            <p className={styles.serviceDesc}>
              Voyage aboard the world's most exclusive vessels.
              <br /><br />
              Discover remote destinations and iconic ports aboard the world's most prestigious
              cruise lines. From expedition vessels exploring Antarctica to six-star ships.
            </p>
            <ul className={styles.serviceList}>
              <li>Suite & penthouse reservations</li>
              <li>Shore excursion planning</li>
              <li>Private dining arrangements</li>
              <li>Pre & post cruise experiences</li>
            </ul>
            <button onClick={() => navigate('/expendition')} className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

        {/* ── PAIR 6: image RIGHT ── */}
        <div className={`${styles.sp} ${styles.spImgRight}`}>
          <div className={`${styles.sgImage} ${styles.page6}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>Rewards & Incentives</h2>
            <p className={styles.serviceDesc}>
              Motivate and reward with unforgettable experiences.
              <br /><br />
              Elevate your corporate rewards and incentive programs with experiences that inspire.
              We design bespoke travel incentives and curate exclusive event access.
            </p>
            <ul className={styles.serviceList}>
              <li>Custom incentive travel programs</li>
              <li>VIP event packages</li>
              <li>Luxury gift procurement</li>
              <li>Recognition ceremony planning</li>
            </ul>
            <button className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

        {/* ── PAIR 7: image LEFT ── */}
        <div className={`${styles.sp} ${styles.spImgLeft}`}>
          <div className={`${styles.sgImage} ${styles.page7}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>C-Level Travel Management</h2>
            <p className={styles.serviceDesc}>
              Executive travel orchestrated to perfection.
              <br /><br />
              Your time is your most valuable asset. Our C-level travel management service ensures
              every journey is optimized for efficiency without compromising comfort.
            </p>
            <ul className={styles.serviceList}>
              <li>Dedicated executive travel desk</li>
              <li>Real-time itinerary management</li>
              <li>Security & risk assessment</li>
              <li>Expense tracking & reporting</li>
            </ul>
            <button className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

        {/* ── PAIR 8: image RIGHT ── */}
        <div className={`${styles.sp} ${styles.spImgRight}`}>
          <div className={`${styles.sgImage} ${styles.page8}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>Conference & Events</h2>
            <p className={styles.serviceDesc}>
              Exceptional gatherings in extraordinary settings.
              <br /><br />
              Transform your corporate events into landmark occasions. Whether it's an intimate board
              retreat or a global conference, we source exceptional venues.
            </p>
            <ul className={styles.serviceList}>
              <li>Venue sourcing & negotiation</li>
              <li>Full event production</li>
              <li>Guest travel coordination</li>
              <li>On-site management team</li>
            </ul>
            <button className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

        {/* ── PAIR 9: image LEFT ── */}
        <div className={`${styles.sp} ${styles.spImgLeft}`}>
          <div className={`${styles.sgImage} ${styles.page9}`} />
          <div className={styles.sgContent}>
            <h5 className={styles.serviceSubtitle}>EXCLUSIVE SERVICE</h5>
            <h2 className={styles.serviceTitle}>Personal Assistant</h2>
            <p className={styles.serviceDesc}>
              Your wishes, our priority — around the clock.
              <br /><br />
              Experience the freedom of having a dedicated team ready to fulfil any request.
              From securing impossible reservations to managing complex logistics.
            </p>
            <ul className={styles.serviceList}>
              <li>24/7 global availability</li>
              <li>Restaurant & table reservations</li>
              <li>Shopping & errand services</li>
              <li>Research & procurement</li>
            </ul>
            <button className={styles.viewBtn}>VIEW ALL →</button>
          </div>
        </div>

      </div>
      {/* ===== END SERVICES GRID ===== */}

      {/* ===== STATS ===== */}
      <section className={styles.statsSection}>
        <div className={styles.statsTop}>
          <div><h3>50+</h3><p>COUNTRIES SERVED</p></div>
          <div><h3>15K+</h3><p>HAPPY CLIENTS</p></div>
          <div><h3>24/7</h3><p>GLOBAL SUPPORT</p></div>
          <div><h3>100%</h3><p>SATISFACTION RATE</p></div>
        </div>
        <div className={styles.statsIcons}>
          <div className={styles.iconCard}>
            <div className={styles.icon}><CiGlobe size={22} /></div>
            <h4>Global Reach</h4>
            <p>Our extensive network spans across continents, ensuring seamless service wherever your journey takes you.</p>
          </div>
          <div className={styles.iconCard}>
            <div className={styles.icon}><LuShield size={22} /></div>
            <h4>Absolute Discretion</h4>
            <p>Your privacy is paramount. Every interaction is handled with the utmost confidentiality and professionalism.</p>
          </div>
          <div className={styles.iconCard}>
            <div className={styles.icon}><FiClock size={22} /></div>
            <h4>Around the Clock</h4>
            <p>Our dedicated team is available 24/7, ready to assist with any request, no matter the time zone.</p>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => <FaStar key={i} className={styles.star} />)}
          </div>
          <p className={styles.quote}>
            "Their attention to detail and unwavering commitment to excellence transformed our
            corporate retreat into an unforgettable experience. Every single request was handled
            with precision and grace."
          </p>
          <p className={styles.author}><strong>Jonathan Mitchell</strong><br />CEO, Mitchell Holdings</p>
        </div>
      </section>

      {/* ===== JOURNEY ===== */}
      <section className={styles.journeySection}>
        <h5 className={styles.journeySubtitle}>YOUR JOURNEY AWAITS</h5>
        <h2 className={styles.journeyTitle}>Begin Your Journey</h2>
        <p className={styles.journeyText}>
          Every extraordinary journey begins with a conversation. Our specialists await to craft
          your bespoke itinerary, tailored to your every desire.
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
}