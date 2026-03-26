import React, { useState } from "react";
import "./SeasonalInspiration.css";
import { PiLeaf } from "react-icons/pi";
import { IoSunnyOutline } from "react-icons/io5";
// import plant from "../../assets2/Experience/SEASONAL INSPIRATION/Img3.png"
import { PiFlowerLight } from "react-icons/pi";
import { IoIosSnow } from "react-icons/io";





const months = [
  { name: "January",   icon: <IoIosSnow/>,  season: "WINTER",  theme: "Escape the cold",
    heading: "January",
    desc: "Start the year in tropical paradises or explore the Southern Hemisphere summer.",
    destinations: [
      { location: "MALDIVES",     img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80", note: "Perfect weather, whale shark season",       cta: "Explore Maldives" },
      { location: "NEW ZEALAND",  img: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80", note: "Summer adventures, wine country",            cta: "Explore New Zealand" },
    ]
  },
  { name: "February",  icon: <IoIosSnow/>,  season: "WINTER",  theme: "Romance & warmth",
    heading: "February",
    desc: "Valentine's month calls for romantic getaways and warm coastlines.",
    destinations: [
      { location: "PARIS",        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", note: "City of love in full bloom",                 cta: "Explore Paris" },
      { location: "BALI",         img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", note: "Dry season begins, perfect beaches",          cta: "Explore Bali" },
    ]
  },
  { name: "March",     icon: <PiFlowerLight/>, season: "SPRING",  theme: "Cherry blossoms await",
    heading: "March",
    desc: "Spring blooms across Asia and Europe beckon early travellers.",
    destinations: [
      { location: "JAPAN",        img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80", note: "Peak cherry blossom season",                 cta: "Explore Japan" },
      { location: "AMSTERDAM",    img: "https://images.unsplash.com/photo-1576924542622-772281b13240?w=800&q=80", note: "Tulip fields in full colour",                 cta: "Explore Amsterdam" },
    ]
  },
  { name: "April",     icon: <PiFlowerLight/>, season: "SPRING",  theme: "Spring escapes",
    heading: "April",
    desc: "Wildflowers, mild weather, and fewer crowds make April ideal.",
    destinations: [
      { location: "TUSCANY",      img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80", note: "Rolling hills, vineyards in bloom",           cta: "Explore Tuscany" },
      { location: "PORTUGAL",     img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80", note: "Sun without the summer crowds",                cta: "Explore Portugal" },
    ]
  },
  { name: "May",       icon: <PiLeaf/>, season: "SPRING",  theme: "Before the rush",
    heading: "May",
    desc: "Pre-summer warmth with none of the peak-season pricing.",
    destinations: [
      { location: "GREECE",       img: "https://images.unsplash.com/photo-1539366664-c6b6e8d5e26f?w=800&q=80", note: "Warm seas, uncrowded islands",                 cta: "Explore Greece" },
      { location: "SCOTLAND",     img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80", note: "Longest days, dramatic landscapes",           cta: "Explore Scotland" },
    ]
  },
  { name: "June",      icon: <IoSunnyOutline/>, season: "SUMMER",  theme: "Sun-soaked adventures",
    heading: "June",
    desc: "Longest days of the year perfect for outdoor exploration.",
    destinations: [
      { location: "AMALFI COAST", img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=80", note: "Cliffside villages, azure sea",              cta: "Explore Amalfi" },
      { location: "NORWAY",       img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80", note: "Midnight sun fjord cruises",                 cta: "Explore Norway" },
    ]
  },
  { name: "July",      icon: <IoSunnyOutline/>, season: "SUMMER",  theme: "Peak summer bliss",
    heading: "July",
    desc: "Peak season across Europe and beyond — book early for the best experiences.",
    destinations: [
      { location: "SANTORINI",    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80", note: "Iconic sunsets, whitewashed villas",          cta: "Explore Santorini" },
      { location: "CANADA",       img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80", note: "Rockies at their most dramatic",               cta: "Explore Canada" },
    ]
  },
  { name: "August",    icon: <IoSunnyOutline/>, season: "SUMMER",  theme: "Late summer luxury",
    heading: "August",
    desc: "Warm evenings and vibrant energy across the Mediterranean and beyond.",
    destinations: [
      { location: "CROATIA",      img: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80", note: "Adriatic islands, crystal water",              cta: "Explore Croatia" },
      { location: "TANZANIA",     img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80", note: "Great Wildebeest Migration peak",              cta: "Explore Tanzania" },
    ]
  },
  { name: "September", icon: <PiLeaf/>, season: "AUTUMN",  theme: "Golden season travel",
    heading: "September",
    desc: "Crowds thin, temperatures ease — the connoisseur's favourite month.",
    destinations: [
      { location: "TUSCANY",      img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80", note: "Harvest season, truffle hunting",             cta: "Explore Tuscany" },
      { location: "JAPAN",        img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80", note: "Silver week, pre-autumn colour",              cta: "Explore Japan" },
    ]
  },
  { name: "October",   icon: <PiLeaf/>, season: "AUTUMN",  theme: "Autumn colour trails",
    heading: "October",
    desc: "Fiery foliage and harvest festivals paint October gold.",
    destinations: [
      { location: "NEW ENGLAND",  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", note: "Peak fall foliage road trips",               cta: "Explore New England" },
      { location: "KYOTO",        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80", note: "Early koyo maple colours",                   cta: "Explore Kyoto" },
    ]
  },
  { name: "November",  icon: <PiLeaf/>, season: "AUTUMN",  theme: "Off-season discoveries",
    heading: "November",
    desc: "Shoulder season gems before the festive rush.",
    destinations: [
      { location: "MOROCCO",      img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80", note: "Mild desert days, vibrant souks",             cta: "Explore Morocco" },
      { location: "INDIA",        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", note: "Golden Triangle at its best",                 cta: "Explore India" },
    ]
  },
  { name: "December",  icon: <IoSunnyOutline/>,  season: "WINTER",  theme: "Festive escapes",
    heading: "December",
    desc: "Festive magic across European markets or summer sunshine in the south.",
    destinations: [
      { location: "LAPLAND",      img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&q=80", note: "Northern lights, reindeer safaris",           cta: "Explore Lapland" },
      { location: "AUSTRALIA",    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", note: "Sydney summer, Great Barrier Reef",           cta: "Explore Australia" },
    ]
  },
];

export default function SeasonalInspiration() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = months[activeIdx];

  return (
    <section className="si-wrapper">
      <div className="si-container">

        {/* ── HEADER ── */}
        <p className="si-subtitle">SEASONAL INSPIRATION</p>
        <h2 className="si-title">Where To Go When</h2>
        <p className="si-desc">
          Let the calendar guide your wanderlust. Each month offers unique
          experiences in destinations perfectly suited to the season.
        </p>

        {/* ── MONTH TABS ── */}
        <div className="si-tabs-wrap">
          <div className="si-tabs">
            {months.map((m, i) => (
              <button
                key={m.name}
                className={`si-tab${activeIdx === i ? " si-tab--active" : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="si-tab-icon">{m.icon}</span>
                <span className="si-tab-name">{m.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="si-body">

          {/* LEFT */}
          <div className="si-left">

            {/* Season label + month heading + "Escape" btn row */}
            <div className="si-top-row">
              <div className="si-top-left">
                <span className="si-season-badge">
                  <span className="si-season-icon">{current.icon}</span>
                  {current.season}
                </span>
                <h3 className="si-month-heading">{current.heading}</h3>
                <p className="si-month-desc">{current.desc}</p>
              </div>
              <button className="si-escape-btn">{current.theme}</button>
            </div>

            {/* Destination cards */}
            <div className="si-cards">
              {current.destinations.map((d, i) => (
                <div className="si-card" key={i}>
                  <div className="si-card-img-wrap">
                    <img src={d.img} alt={d.location} />
                  </div>
                  <div className="si-card-info">
                    <span className="si-card-location">
                      <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
                        <path d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 9.5 4.5 9.5S10 7.875 10 4.5C10 2.015 7.985 0 5.5 0zm0 6.125A1.625 1.625 0 1 1 5.5 2.875 1.625 1.625 0 0 1 5.5 6.125z" fill="#b88a44"/>
                      </svg>
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

          </div>
        </div>

        {/* ── FOOTER BUTTON ── */}
        <div className="si-footer">
          <button className="si-calendar-btn">VIEW FULL CALENDAR →</button>
        </div>

      </div>
    </section>
  );
}