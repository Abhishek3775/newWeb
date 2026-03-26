import React, { useState, useEffect } from "react";
import styles from "./CuratedCollection.module.css";
import img1 from "../../assets2/Accommodation/1.png";
import img2 from "../../assets2/Accommodation/2.png";
import img3 from "../../assets2/Accommodation/3.png";
import img4 from "../../assets2/Accommodation/4.png";
import img5 from "../../assets2/Accommodation/5.png";
import { FiSearch, FiHeart, FiChevronDown, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { LuShield } from "react-icons/lu";

const hotelsData = [
  {
    id: 1,
    name: "Soneva Fushi",
    location: "MALDIVES",
    country: "Maldives",
    destination: "Indian Ocean",
    type: "Beach Resort",
    grade: "Ultra Luxury",
    stars: 5,
    price: 2500,
    image: img1,
    description: "A barefoot luxury haven nestled in a UNESCO Biosphere Reserve, where pristine beaches meet jungle wilderness.",
    longDescription: "Soneva Fushi is a barefoot luxury haven nestled in a UNESCO Biosphere Reserve, where pristine beaches meet jungle wilderness. Each villa is a sanctuary of space and natural beauty, with direct beach access and lush tropical gardens. The resort offers an extraordinary range of dining experiences, from fine dining under the stars to barefoot beach barbecues. Guests can indulge in world-class spa treatments, explore the vibrant coral reef, or simply unwind in their private pool villa.",
    tags: ["Private Beach Villas", "Star Gazing", "Organic Gardens", "Award-Winning Spa"],
    benefit: "Complimentary sunset dolphin cruise & private dining experience",
    highlights: ["Private Beach Villas", "Star Gazing", "Organic Gardens", "Award-Winning Spa"],
  },
  {
    id: 2,
    name: "Cheval Blanc St-Barth",
    location: "ST. BARTHELEMY",
    country: "Caribbean",
    destination: "Caribbean",
    type: "Beach Resort",
    grade: "Ultra Luxury",
    stars: 5,
    price: 3200,
    image: img2,
    description: "An intimate sanctuary on the pristine shores of St. Barth, where French sophistication meets Caribbean charm.",
    longDescription: "Cheval Blanc St-Barth is an intimate sanctuary perched on the pristine shores of St. Barth, where French sophistication meets Caribbean charm. The hotel's stunning design seamlessly blends with the natural landscape, offering panoramic views of the turquoise sea. Each suite and villa is uniquely decorated with a refined elegance that reflects the island's artistic heritage. The Guerlain Spa offers bespoke treatments using rare ingredients, while the private beach provides the ultimate escape.",
    tags: ["Ocean View Suites", "Guerlain Spa", "Private Yacht", "Michelin Dining"],
    benefit: "Room upgrade & exclusive beach cabana access",
    highlights: ["Ocean View Suites", "Guerlain Spa", "Private Yacht", "Michelin Dining"],
  },
  {
    id: 3,
    name: "Canaves Oia Epitome",
    location: "SANTORINI, GREECE",
    country: "Greece",
    destination: "Mediterranean",
    type: "City Hotel",
    grade: "Luxury",
    stars: 5,
    price: 1800,
    image: img3,
    description: "Perched on the caldera cliffs, this architectural masterpiece offers breathtaking Aegean vistas and timeless Greek elegance.",
    longDescription: "Canaves Oia Epitome is perched dramatically on the caldera cliffs of Santorini, offering some of the most breathtaking views of the Aegean Sea. This architectural masterpiece blends traditional Cycladic design with contemporary luxury, featuring infinity pools that seem to merge with the horizon. Each suite is a private sanctuary with uninterrupted caldera views. The hotel's wine cellar tours showcase the finest Greek wines, while helicopter transfers ensure a grand arrival befitting the experience.",
    tags: ["Infinity Pool Suites", "Wine Cellar Tours", "Helicopter Transfers", "Sunset Terraces"],
    benefit: "Private caldera yacht tour with champagne dinner",
    highlights: ["Infinity Pool Suites", "Wine Cellar Tours", "Helicopter Transfers", "Sunset Terraces"],
  },
  {
    id: 4,
    name: "The Chedi Andermatt",
    location: "SWISS ALPS",
    country: "Switzerland",
    destination: "Europe",
    type: "Mountain Resort",
    grade: "Ultra Luxury",
    stars: 5,
    price: 1500,
    image: img4,
    description: "A sophisticated Alpine retreat combining Asian-inspired design with Swiss mountain grandeur and world-class skiing.",
    longDescription: "The Chedi Andermatt is a sophisticated Alpine retreat nestled in the heart of the Swiss Alps, seamlessly combining Asian-inspired design philosophy with Swiss mountain grandeur. The hotel's striking architecture features natural stone, warm wood and floor-to-ceiling windows framing majestic mountain panoramas. The 35-metre indoor pool is among the longest in the Alps, while the Japanese restaurant brings Far Eastern culinary artistry to the mountains. Private ski-in/ski-out access and exclusive chalets complete this extraordinary alpine sanctuary.",
    tags: ["Ski-In/Ski-Out", "35m Indoor Pool", "Japanese Restaurant", "Private Chalets"],
    benefit: "Private ski guide & apres-ski spa experience",
    highlights: ["Ski-In/Ski-Out", "35m Indoor Pool", "Japanese Restaurant", "Private Chalets"],
  },
  {
    id: 5,
    name: "Aman Tokyo",
    location: "TOKYO, JAPAN",
    country: "Japan",
    destination: "Asia Pacific",
    type: "City Hotel",
    grade: "Ultra Luxury",
    stars: 5,
    price: 1900,
    image: img5,
    description: "An urban sanctuary rising above Tokyo's skyline, blending traditional Japanese aesthetics with contemporary luxury.",
    longDescription: "Aman Tokyo is a sanctuary of calm in the prestigious Otemachi district, occupying the top floors of the iconic Otemachi Tower with breathtaking views over Tokyo and the Imperial Palace gardens. The interiors draw on traditional Japanese craftsmanship, with shoji screens, washi paper and wood, offering a quiet and elegant escape above the city. Guests will find thoughtful amenities, tasteful furnishings and fine art throughout. The outdoor terrace provides a truly immersive dining experience set against the backdrop of the city skyline.",
    tags: ["Panoramic City Views", "Traditional Spa", "Private Dining", "Cultural Experiences"],
    benefit: "Exclusive access to private tea ceremony & cultural tour",
    highlights: ["Panoramic City Views", "Traditional Spa", "Private Dining", "Cultural Experiences"],
  },
];

const countryOptions = ["All Countries", "Maldives", "Caribbean", "Greece", "Switzerland", "Japan", "France", "Italy", "UAE"];
const destinationOptions = ["All Destinations", "Indian Ocean", "Caribbean", "Mediterranean", "Europe", "Asia Pacific", "Middle East"];
const typeOptions = ["All Types", "Beach Resort", "Mountain Resort", "City Hotel", "Safari Lodge", "Private Island"];
const gradeOptions = ["All Grades", "Ultra Luxury", "Luxury", "Premium"];

const CuratedCollection = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ country: "", destination: "", type: "", grade: "" });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setSelectedHotel(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedHotel ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedHotel]);

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value.startsWith("All") ? "" : value }));
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);
  const toggleWishlist = (id) => setWishlist((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const filtered = hotelsData.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) &&
    (!filters.country || h.country === filters.country) &&
    (!filters.destination || h.destination === filters.destination) &&
    (!filters.type || h.type === filters.type) &&
    (!filters.grade || h.grade === filters.grade)
  );

  const getLabel = (key, options) => (filters[key] ? filters[key] : options[0]);
  const modalImages = selectedHotel ? [selectedHotel.image, selectedHotel.image, selectedHotel.image] : [];

  const filterConfig = [
    { key: "country", label: "COUNTRY", options: countryOptions },
    { key: "destination", label: "DESTINATION", options: destinationOptions },
    { key: "type", label: "HOTEL TYPE", options: typeOptions },
    { key: "grade", label: "GRADE", options: gradeOptions },
  ];

  const renderHotelCard = (hotel, isReversed) => (
    <div className={`${styles.card} ${isReversed ? styles.cardReverse : ""}`} key={hotel.id}>
      {/* Image Block */}
      <div className={styles.imageWrapper}>
        <span className={styles.badge}>{hotel.grade}</span>
        <button
          className={`${styles.wishlistBtn} ${wishlist.includes(hotel.id) ? styles.wishlisted : ""}`}
          onClick={() => toggleWishlist(hotel.id)}
        >
          <FiHeart />
        </button>
        <img src={hotel.image} alt={hotel.name} />
      </div>

      {/* Content Block */}
      <div className={styles.cardContent}>
        <span className={styles.location}><FaMapMarkerAlt className={styles.pinIcon} /> {hotel.location}</span>
        <h3 className={styles.hotelName}>{hotel.name}</h3>
        <div className={styles.rating}>{"★".repeat(hotel.stars)} <span>{hotel.stars}-Star Luxury</span></div>
        <p className={styles.description}>{hotel.description}</p>
        <div className={styles.tags}>{hotel.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className={styles.benefit}>
          <LuShield className={styles.benefitIcon} />
          <div>
            <span className={styles.benefitLabel}>EXCLUSIVE MEMBER BENEFIT</span>
            <p>{hotel.benefit}</p>
          </div>
        </div>
        <div className={styles.priceRow}>
          <div>
            <span className={styles.from}>FROM</span>
            <h4 className={styles.price}>${hotel.price.toLocaleString()}<span>/night</span></h4>
          </div>
          <button className={styles.btn} onClick={() => { setSelectedHotel(hotel); setModalImgIndex(0); }}>
            View Details →
          </button>
        </div>
      </div>
    </div>
  );



  return (
    <section className={styles.wrapper} onClick={() => setOpenDropdown(null)}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <span className={styles.smallTitle}>DISCOVER</span>
        <h2 className={styles.heading}>Our Curated Collection</h2>
        <p className={styles.subText}>Filter through 500+ handpicked properties to find your perfect retreat</p>
        <div className={styles.searchBox}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* ── Filters Strip ── */}
      <div className={styles.filtersStrip} onClick={(e) => e.stopPropagation()}>
        <div className={styles.filtersInner}>
          {filterConfig.map(({ key, label, options }) => (
            <div className={styles.filterItem} key={key}>
              <label>{label}</label>
              <div
                className={`${styles.customSelect} ${openDropdown === key ? styles.open : ""}`}
                onClick={() => toggleDropdown(key)}
              >
                <span className={filters[key] ? styles.activeFilter : ""}>{getLabel(key, options)}</span>
                <FiChevronDown className={`${styles.chevron} ${openDropdown === key ? styles.rotated : ""}`} />
                {openDropdown === key && (
                  <ul className={styles.dropdown}>
                    {options.map((opt) => (
                      <li
                        key={opt}
                        className={`${styles.dropdownItem} ${filters[key] === opt || (!filters[key] && opt.startsWith("All")) ? styles.selected : ""}`}
                        onClick={() => handleFilter(key, opt)}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Results ── */}
      <div className={styles.resultsArea}>
        <div className={styles.results}>
          {filtered.length === 0 ? (
            <div className={styles.noResults}><p>No properties match your filters. Try adjusting your search.</p></div>
          ) : (
            // Simple approach: render each hotel exactly once, alternating layout
            filtered.map((hotel, index) => {
              const isReversed = index % 2 !== 0;
              return renderHotelCard(hotel, isReversed);
            })
          )}
        </div>
      </div>

      {/* ── Modal ── */}
      {selectedHotel && (
        <div className={styles.modalOverlay} onClick={() => setSelectedHotel(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedHotel(null)}><FiX /></button>
            <div className={styles.modalBody}>
              <div className={styles.modalImageSection}>
                <span className={styles.modalBadge}>{selectedHotel.grade}</span>
                <img src={modalImages[modalImgIndex]} alt={selectedHotel.name} className={styles.modalMainImage} />
                <button className={`${styles.sliderBtn} ${styles.sliderLeft}`} onClick={() => setModalImgIndex((modalImgIndex - 1 + modalImages.length) % modalImages.length)}>
                  <FiChevronLeft />
                </button>
                <button className={`${styles.sliderBtn} ${styles.sliderRight}`} onClick={() => setModalImgIndex((modalImgIndex + 1) % modalImages.length)}>
                  <FiChevronRight />
                </button>
                <div className={styles.sliderDots}>
                  {modalImages.map((_, i) => (
                    <span key={i} className={`${styles.dot} ${i === modalImgIndex ? styles.dotActive : ""}`} onClick={() => setModalImgIndex(i)} />
                  ))}
                </div>
              </div>
              <div className={styles.modalContent}>
                <span className={styles.modalLocation}><FaMapMarkerAlt className={styles.pinIcon} /> {selectedHotel.location}</span>
                <h2 className={styles.modalTitle}>{selectedHotel.name}</h2>
                <div className={styles.modalRating}>{"★".repeat(selectedHotel.stars)} <span>{selectedHotel.stars}-Star Luxury</span></div>
                <p className={styles.modalDesc}>{selectedHotel.longDescription}</p>
                <div className={styles.modalHighlights}>
                  {selectedHotel.highlights.map((h) => (
                    <span key={h} className={styles.highlightTag}>{h}</span>
                  ))}
                </div>
                <div className={styles.modalBenefit}>
                  <LuShield className={styles.benefitIcon} />
                  <div>
                    <span className={styles.benefitLabel}>EXCLUSIVE MEMBER BENEFIT</span>
                    <p>{selectedHotel.benefit}</p>
                  </div>
                </div>
                <div className={styles.expertBox}>
                  <div className={styles.expertLeft}>
                    <FaPhone className={styles.expertIcon} />
                    <div>
                      <p className={styles.expertTitle}>SPEAK TO AN EXPERT</p>
                      <p className={styles.expertSub}>Contact us to speak to Subashish Dutta, an APA curator to book your retreat</p>
                    </div>
                  </div>
                  <button className={styles.enquireBtn}>ENQUIRE →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CuratedCollection;