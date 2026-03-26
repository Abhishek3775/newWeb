import React, { useState } from "react";
import "./EGCRecommendations.css";

import safari from "../../assets2/Experience/EXPERT CURATION/img1.png";
import kyoto from "../../assets2/Experience/EXPERT CURATION/img2.png";
import maldives from "../../assets2/Experience/EXPERT CURATION/img3.png";
import swiss from "../../assets2/Experience/EXPERT CURATION/img4.png";
import greece from "../../assets2/Experience/EXPERT CURATION/img5.png";

const tours = [
  {
    category: "WILDLIFE",
    location: "TANZANIA & KENYA",
    title: "The Great Migration Safari",
    days: "10 Days",
    price: "$15,000",
    image: safari,
    rating: 5,
    description:
      "Witness one of nature's most spectacular events across the Serengeti and Masai Mara.",
    note: "Our most requested safari experience. Book 6 months ahead for peak migration.",
    badge: "★ Concierge Pick",
  },
  {
    category: "CULTURAL",
    location: "KYOTO TO TOKYO",
    title: "Japanese Artisan Trail",
    days: "14 Days",
    price: "$22,000",
    image: kyoto,
    rating: 5,
    description:
      "Immerse yourself in centuries of craftsmanship, tea ceremonies, and private studio visits.",
    note: "Access to artisan workshops not open to the public — reserved exclusively for our guests.",
    badge: "★ Cultural Gem",
  },
  {
    category: "ROMANCE",
    location: "MALDIVES",
    title: "Maldives Overwater Paradise",
    days: "7 Days",
    price: "$18,000",
    image: maldives,
    rating: 5,
    description:
      "Seclusion, crystal lagoons, and private villa experiences tailored for two.",
    note: "Sunset dhoni cruises and private reef dinners can be arranged on request.",
    badge: "★ Romance Pick",
  },
  {
    category: "ADVENTURE",
    location: "SWITZERLAND",
    title: "Swiss Alpine Excellence",
    days: "8 Days",
    price: "$25,000",
    image: swiss,
    rating: 5,
    description:
      "Heli-skiing, glacier hikes, and Michelin-starred mountain dining across the Swiss Alps.",
    note: "Private helicopter transfers included. Best experienced December through March.",
    badge: "★ Adventure Select",
  },
  {
    category: "ROMANCE",
    location: "GREECE",
    title: "Santorini Private Odyssey",
    days: "6 Days",
    price: "$12,000",
    image: greece,
    rating: 5,
    description:
      "Exclusive caldera villas, yacht charters, and curated wine evenings above the Aegean.",
    note: "Sunset sailings are limited — we recommend reserving at least 3 months in advance.",
    badge: "★ Romance Pick",
  },
];

const categories = ["ALL", "WILDLIFE", "CULTURAL", "ROMANCE", "ADVENTURE"];

export default function EGCRecommendations() {
  const [active, setActive] = useState("ALL");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const filtered =
    active === "ALL"
      ? tours
      : tours.filter((item) => item.category === active);

  // When tab changes, reset featured to first item in new filtered list
  const handleTabChange = (cat) => {
    setActive(cat);
    setFeaturedIndex(0);
  };

  const featured = filtered[featuredIndex] ?? filtered[0];

  return (
    <section className="egc-recom-wrapper">
      {/* HEADER */}
      <div className="egc-recom-header">
        <span className="egc-recom-small">EXPERT CURATION</span>
        <h2>EGC Recommendations</h2>
        <p>
          Hand-selected by our concierge team based on exclusivity, guest
          feedback, and extraordinary experiences.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="egc-recom-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`egc-recom-tab-btn ${
              active === cat ? "egc-recom-active" : ""
            }`}
            onClick={() => handleTabChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="egc-recom-grid">

        {/* LEFT — DYNAMIC FEATURE CARD */}
        {featured && (
          <div className="egc-recom-feature">
            <img src={featured.image} alt={featured.title} />

            <div className="egc-recom-overlay">
              <span className="egc-recom-badge">{featured.badge}</span>
              <span className="egc-recom-type">{featured.category}</span>

              <span className="egc-recom-location">{featured.location}</span>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>

              <div className="egc-recom-note">
                <span>✦ CONCIERGE NOTE</span>
                <p>{featured.note}</p>
              </div>

              <div className="egc-recom-bottom">
                <span>
                  {featured.days} · From {featured.price}
                </span>
                <button>Inquire Now →</button>
              </div>
            </div>
          </div>
        )}

        {/* RIGHT — LIST (click to feature) */}
        <div className="egc-recom-list">
          {filtered.map((item, index) => (
            <div
              className={`egc-recom-list-card ${
                index === featuredIndex ? "egc-recom-list-card--active" : ""
              }`}
              key={index}
              onClick={() => setFeaturedIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && setFeaturedIndex(index)
              }
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} />

              <div className="egc-recom-list-content">
                <span className="egc-recom-location">{item.location}</span>
                <h4>{item.title}</h4>
                <p>
                  {item.days} · From {item.price}
                </p>
              </div>

              <div className="egc-recom-stars">
                {"★".repeat(item.rating)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}