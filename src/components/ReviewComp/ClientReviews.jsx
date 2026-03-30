import React, { useMemo, useState } from "react";
import styles from "./ClientReviews.module.css";
import { ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";

const filters = [
  "All Reviews",
  "Google",
  "TripAdvisor",
  "Trustpilot",
  "Private Clients",
];

const reviewData = [
  {
    id: 1,
    source: "Google",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    text: "Absolutely exceptional service from start to finish. Elite Concierge arranged our entire Mediterranean vacation, from private yacht charters to exclusive restaurant reservations with flawless precision and care.",
    name: "Sarah Mitchell",
    location: "New York, USA",
    time: "1 week ago",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    source: "TripAdvisor",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    text: "We have used many concierge services over the years, but Elite Concierge stands in a league of their own. Their ability to secure impossible reservations and arrange private experiences is remarkable.",
    name: "James Richardson",
    location: "London, UK",
    time: "1 week ago",
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    source: "Trustpilot",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    text: "Elite Concierge transformed our anniversary celebration into an unforgettable experience. They arranged a private dinner at an exclusive venue we didn’t even know existed, complete with every thoughtful detail.",
    name: "Michael & Diana Chen",
    location: "Singapore",
    time: "1 week ago",
    avatar:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 4,
    source: "Private Clients",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    text: "As someone who values privacy and discretion above all else, I can confidently say Elite Concierge understands the needs of high-profile individuals. They have handled everything with grace and confidentiality.",
    name: "UHNW Client",
    location: "Dubai, UAE",
    time: "2 weeks ago",
    avatar:
      "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    id: 5,
    source: "Google",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    text: "The team at Elite Concierge went above and beyond for our corporate retreat. They coordinated international travel for 30 executives, arranged exclusive team-building experiences, and handled every request seamlessly.",
    name: "Rebecca Thompson",
    location: "Toronto, Canada",
    time: "2 weeks ago",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 6,
    source: "TripAdvisor",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    text: "We engaged Elite Concierge for our month-long tour of Asia. They curated experiences that went far beyond typical tourist attractions — private temple tours, exclusive culinary evenings, and hidden gems everywhere.",
    name: "David & Emma Wilson",
    location: "Sydney, Australia",
    time: "3 weeks ago",
    avatar:
      "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 7,
    source: "Google",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    text: "Elite Concierge handled our destination wedding with grace and precision. From coordinating 150 international guests to arranging private entertainment, they made every moment feel effortless and luxurious.",
    name: "Alexandra Martinez",
    location: "Madrid, Spain",
    time: "3 weeks ago",
    avatar:
      "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 8,
    source: "Trustpilot",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    text: "As a frequent business traveler, I rely on Elite Concierge for seamless trip planning. They handle everything from flight arrangements to ground transportation and accommodation with absolute professionalism.",
    name: "Robert Anderson",
    location: "Frankfurt, Germany",
    time: "3 weeks ago",
    avatar:
      "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 9,
    source: "Private Clients",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80",
    text: "Elite Concierge has become an indispensable part of our lifestyle management. Their ability to anticipate needs, secure exclusive access, and maintain absolute discretion makes them truly exceptional.",
    name: "Private Family Office",
    location: "Geneva, Switzerland",
    time: "4 weeks ago",
    avatar:
      "https://randomuser.me/api/portraits/women/57.jpg",
  },
  {
    id: 10,
    source: "Google",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    text: "Every request was handled with incredible attention to detail. Their recommendations felt deeply personalized and elevated our trip beyond anything we could have planned ourselves.",
    name: "Emily Carter",
    location: "Los Angeles, USA",
    time: "1 month ago",
    avatar:
      "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 11,
    source: "TripAdvisor",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    text: "A truly world-class service. Every transfer, reservation, and bespoke experience was delivered with elegance and precision throughout our European itinerary.",
    name: "Oliver Grant",
    location: "Manchester, UK",
    time: "1 month ago",
    avatar:
      "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 12,
    source: "Trustpilot",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    text: "Their team made us feel like every moment mattered. From luxury airport pickups to curated local access, everything was smooth, discreet, and elevated.",
    name: "Sophie Laurent",
    location: "Paris, France",
    time: "1 month ago",
    avatar:
      "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

const REVIEWS_PER_PAGE = 9;

const ClientReviews = () => {
  const [activeFilter, setActiveFilter] = useState("All Reviews");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredReviews = useMemo(() => {
    let data =
      activeFilter === "All Reviews"
        ? [...reviewData]
        : reviewData.filter((item) => item.source === activeFilter);

    if (sortBy === "Most Recent") {
      data = [...data].sort((a, b) => a.id - b.id);
    }

    return data;
  }, [activeFilter, sortBy]);

  const totalPages = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE);

  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE
  );

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.topBar}>
          <div className={styles.headingWrap}>
            <h2 className={styles.heading}>Client Reviews</h2>
            <p className={styles.subtext}>
              Verified testimonials from our global clientele
            </p>
          </div>

          <div className={styles.controls}>
            <div className={styles.filters}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`${styles.filterBtn} ${
                    activeFilter === filter ? styles.activeFilter : ""
                  }`}
                  onClick={() => handleFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className={styles.sortBox}>
              <span>{sortBy}</span>
              <ChevronDown size={15} strokeWidth={1.8} />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {paginatedReviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={review.image}
                  alt={review.name}
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.source}>{review.source.toUpperCase()}</span>

                  {review.verified && (
                    <span className={styles.verified}>● Verified</span>
                  )}
                </div>

                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#c09551" stroke="#c09551" />
                  ))}
                </div>

                <p className={styles.reviewText}>{review.text}</p>

                <div className={styles.userRow}>
                  <div className={styles.userInfo}>
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className={styles.avatar}
                    />
                    <div>
                      <h4 className={styles.userName}>{review.name}</h4>
                      <p className={styles.userLocation}>{review.location}</p>
                    </div>
                  </div>

                  <span className={styles.time}>{review.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ChevronLeft size={15} />
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                className={`${styles.pageBtn} ${
                  currentPage === page ? styles.activePage : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className={styles.pageBtn}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientReviews;