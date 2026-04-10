import React, { useState } from "react";
import "./SeasonalInspiration.css";
import locationIcon from "../../assets/location.png"

const months = [
  {
    name: "January",
    heading: "January",
    desc: "Start the year in tropical paradises or explore the Southern Hemisphere summer.",
    destinations: [
      {
        location: "MALDIVES",
        img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
        note: "Perfect weather, whale shark season",
        cta: "Explore Maldives",
      },
      {
        location: "NEW ZEALAND",
        img: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&q=80",
        note: "Summer adventures, wine country",
        cta: "Explore New Zealand",
      },
    ],
  },
  {
    name: "February",
    heading: "February",
    desc: "Valentine's month calls for romantic getaways and warm coastlines.",
    destinations: [
      {
        location: "PARIS",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
        note: "City of love in full bloom",
        cta: "Explore Paris",
      },
      {
        location: "BALI",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        note: "Dry season begins, perfect beaches",
        cta: "Explore Bali",
      },
    ],
  },
  {
    name: "March",
    heading: "March",
    desc: "Spring blooms across Asia and Europe beckon early travellers.",
    destinations: [
      {
        location: "JAPAN",
        img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&q=80",
        note: "Peak cherry blossom season",
        cta: "Explore Japan",
      },
      {
        location: "AMSTERDAM",
        img: "https://images.unsplash.com/photo-1576924542622-772281b13240?w=1200&q=80",
        note: "Tulip fields in full colour",
        cta: "Explore Amsterdam",
      },
    ],
  },
  {
    name: "April",
    heading: "April",
    desc: "Wildflowers, mild weather, and fewer crowds make April ideal.",
    destinations: [
      {
        location: "TUSCANY",
        img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80",
        note: "Rolling hills, vineyards in bloom",
        cta: "Explore Tuscany",
      },
      {
        location: "PORTUGAL",
        img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
        note: "Sun without the summer crowds",
        cta: "Explore Portugal",
      },
    ],
  },
  {
    name: "May",
    heading: "May",
    desc: "Pre-summer warmth with none of the peak-season pricing.",
    destinations: [
      {
        location: "GREECE",
        img: "https://images.unsplash.com/photo-1539366664-c6b6e8d5e26f?w=1200&q=80",
        note: "Warm seas, uncrowded islands",
        cta: "Explore Greece",
      },
      {
        location: "SCOTLAND",
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
        note: "Longest days, dramatic landscapes",
        cta: "Explore Scotland",
      },
    ],
  },
  {
    name: "June",
    heading: "June",
    desc: "Longest days of the year perfect for outdoor exploration.",
    destinations: [
      {
        location: "AMALFI COAST",
        img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=1200&q=80",
        note: "Cliffside villages, azure sea",
        cta: "Explore Amalfi",
      },
      {
        location: "NORWAY",
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
        note: "Midnight sun fjord cruises",
        cta: "Explore Norway",
      },
    ],
  },
  {
    name: "July",
    heading: "July",
    desc: "Peak season across Europe and beyond — book early for the best experiences.",
    destinations: [
      {
        location: "SANTORINI",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
        note: "Iconic sunsets, whitewashed villas",
        cta: "Explore Santorini",
      },
      {
        location: "CANADA",
        img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=80",
        note: "Rockies at their most dramatic",
        cta: "Explore Canada",
      },
    ],
  },
  {
    name: "August",
    heading: "August",
    desc: "Warm evenings and vibrant energy across the Mediterranean and beyond.",
    destinations: [
      {
        location: "CROATIA",
        img: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1200&q=80",
        note: "Adriatic islands, crystal water",
        cta: "Explore Croatia",
      },
      {
        location: "TANZANIA",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
        note: "Great Wildebeest Migration peak",
        cta: "Explore Tanzania",
      },
    ],
  },
  {
    name: "September",
    heading: "September",
    desc: "Crowds thin, temperatures ease — the connoisseur's favourite month.",
    destinations: [
      {
        location: "TUSCANY",
        img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80",
        note: "Harvest season, truffle hunting",
        cta: "Explore Tuscany",
      },
      {
        location: "JAPAN",
        img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&q=80",
        note: "Silver week, pre-autumn colour",
        cta: "Explore Japan",
      },
    ],
  },
  {
    name: "October",
    heading: "October",
    desc: "Fiery foliage and harvest festivals paint October gold.",
    destinations: [
      {
        location: "NEW ENGLAND",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
        note: "Peak fall foliage road trips",
        cta: "Explore New England",
      },
      {
        location: "KYOTO",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
        note: "Early koyo maple colours",
        cta: "Explore Kyoto",
      },
    ],
  },
  {
    name: "November",
    heading: "November",
    desc: "Shoulder season gems before the festive rush.",
    destinations: [
      {
        location: "MOROCCO",
        img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80",
        note: "Mild desert days, vibrant souks",
        cta: "Explore Morocco",
      },
      {
        location: "INDIA",
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
        note: "Golden Triangle at its best",
        cta: "Explore India",
      },
    ],
  },
  {
    name: "December",
    heading: "December",
    desc: "Festive magic across European markets or summer sunshine in the south.",
    destinations: [
      {
        location: "LAPLAND",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1200&q=80",
        note: "Northern lights, reindeer safaris",
        cta: "Explore Lapland",
      },
      {
        location: "AUSTRALIA",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        note: "Sydney summer, Great Barrier Reef",
        cta: "Explore Australia",
      },
    ],
  },
];

export default function SeasonalInspiration() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = months[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? months.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === months.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="si-wrapper">
      <div className="si-container">
        {/* HEADER */}
        <p className="si-subtitle">SEASONAL INSPIRATION</p>
        <h2 className="si-title">Where To Go When</h2>
        <p className="si-desc">
          Let the calendar guide your wanderlust. Each month offers unique
          experiences in destinations perfectly suited to the season.
        </p>

        {/* MONTH TABS */}
        <div className="si-tabs-wrap">
          <div className="si-tabs">
            {months.map((m, i) => (
              <button
                key={m.name}
                className={`si-tab${activeIdx === i ? " si-tab--active" : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="si-body">
          <div className="si-top-row">
            <h3 className="si-month-heading">{current.heading}</h3>
            <p className="si-month-desc">{current.desc}</p>
          </div>

          <div className="si-cards">
            {current.destinations.map((d, i) => (
              <div className="si-card" key={i}>
                <div className="si-card-img-wrap">
                  <img src={d.img} alt={d.location} />
                </div>

                <div className="si-card-info">
                  <span className="si-card-location">
                    <img src={locationIcon} alt="Location" className="si-location-icon" />
                    {d.location}
                  </span>

                  <div className="si-card-bottom">
                    <p>{d.note}</p>
                    <button className="si-card-link">{d.cta} →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM ARROWS */}
          <div className="si-nav">
            <button className="si-nav-btn" onClick={handlePrev}>
              ‹
            </button>
            <button className="si-nav-btn" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}