import React, { useState, useEffect } from "react";

import SumoBookingModal from "./SumoBookingModal";
import FoodDrinksModal from "./FoodDrinksModal";
import MorningTimelineModal from "./MorningTimelineModal";

import offeringImg from "../../assets/sumoOffer.jpg"; 
import vipImg from "../../assets/tournament.png";
import demoImg from "../../assets/privateSumo.png";
import correct from "../../assets/correct.png";



/* ─── Design tokens (match reference: cream bg, tan gold, dark gray type) ─ */
const GOLD    = "#c19a6b";
const GOLD_DK = "#a88455";
const BG      = "#f9f7f2";
const WHITE   = "#ffffff";
const TEXT    = "#333333";
const TEXT_MUTED = "#555555";
const LINE    = "#e5e2dc";

/* ─── Placeholder images (swap for your real asset imports) ─────────────── */
const IMG = {
  sumoOffer: offeringImg,
  tournament:vipImg,
  privateSumo: demoImg
};
/* ─── Responsive breakpoint hook ────────────────────────────────────────── */
function useBreakpoint() {
  const getSize = () => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    if (w < 480)  return "mobile";
    if (w < 768)  return "mobileLg";
    if (w < 1024) return "tablet";
    return "desktop";
  };
  const [bp, setBp] = useState(getSize);
  useEffect(() => {
    const handler = () => setBp(getSize());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return bp;
}

/* ─── Icon components ───────────────────────────────────────────────────── */
const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.75" aria-hidden>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const PeopleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.75" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const CalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.75" aria-hidden>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MetaItem = ({ icon, text, bp }) => (
  <span style={{ display:"flex", alignItems:"center", gap:6, color:TEXT, fontSize: bp === "mobile" ? 12 : 13, flexShrink:0, fontWeight:400 }}>
    {icon}
    <span>{text}</span>
  </span>
);

/* ─── Shared button styles ──────────────────────────────────────────────── */
const btnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 22px",
  fontSize: 11,
  letterSpacing: 1.2,
  fontWeight: 500,
  cursor: "pointer",
  transition: "background .25s, color .25s, border-color .25s",
  whiteSpace: "nowrap",
  fontFamily: "inherit",
};
const btnOutlineStyle = { ...btnBase, border: `1px solid ${GOLD}`, background: WHITE, color: GOLD };
const btnPrimaryStyle = { ...btnBase, border: `1px solid ${GOLD}`, background: GOLD, color: WHITE };

/* ─── Price badge (semi-opaque beige, FROM in gold, amount in dark gray) ─── */
const PriceBadge = ({ price, bp }) => {
  const lines = String(price).split("\n").map((s) => s.trim()).filter(Boolean);
  const fromLine = lines[0] || "";
  const rest = lines.slice(1).join(" ");
  return (
    <div
      style={{
        position: "absolute",
        top: bp === "mobile" ? 12 : 16,
        left: bp === "mobile" ? 12 : 16,
        padding: bp === "mobile" ? "10px 14px" : "12px 18px",
        background: "rgba(249, 247, 242, 0.92)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <p style={{ margin: 0, fontSize: 9, letterSpacing: 2, color: GOLD, fontWeight: 500, lineHeight: 1.4 }}>
        {fromLine}
      </p>
      <p style={{ margin: "4px 0 0", fontSize: bp === "mobile" ? 13 : 14, color: TEXT, fontWeight: 400, lineHeight: 1.35 }}>
        {rest}
      </p>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED CARD SHELL
═══════════════════════════════════════════════════════════════════════════ */
function Card({ bp, imgSrc, imgAlt, price, imgLeft = true, children }) {
  const isMobile = bp === "mobile" || bp === "mobileLg";
  const isTablet = bp === "tablet";
  const imgPct     = isTablet ? "40%" : "44%";
  const contentPct = isTablet ? "60%" : "56%";

  const cardStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr"
      : imgLeft ? `${imgPct} ${contentPct}` : `${contentPct} ${imgPct}`,
    background: WHITE,
    width: "100%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
    ...(isMobile ? {} : { minHeight: isTablet ? 460 : 520 }),
    overflow: "hidden",
  };

  const imgWrapStyle = {
    position: "relative",
    overflow: "hidden",
    minHeight: isMobile ? (bp === "mobile" ? 200 : 240) : undefined,
    height: isMobile ? (bp === "mobile" ? "min(52vw, 260px)" : "min(48vw, 300px)") : "100%",
    order: isMobile ? -1 : 0,
  };

  const contentStyle = {
    padding: isMobile
      ? bp === "mobile"
        ? "20px 18px 24px"
        : "24px 22px 28px"
      : isTablet
        ? "32px 36px 36px"
        : "44px 48px 48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: isMobile ? "flex-start" : "center",
    boxSizing: "border-box",
    overflowY: "auto",
  };

  return (
    <div style={cardStyle}>
      <div style={imgWrapStyle}>
        <img src={imgSrc} alt={imgAlt} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        <PriceBadge price={price} bp={bp} />
      </div>
      <div style={contentStyle}>{children}</div>
    </div>
  );
}

/* ─── Reusable text blocks ───────────────────────────────────────────────── */
const Tag   = ({ bp, children }) => (
  <p style={{ fontSize: 10, letterSpacing: 2.5, color: GOLD, margin: "0 0 10px", fontWeight: 500, textTransform: "uppercase" }}>{children}</p>
);
const Title = ({ bp, children }) => (
  <h3 style={{
    fontSize: bp === "mobile" ? 19 : bp === "mobileLg" ? 21 : bp === "tablet" ? 23 : 26,
    fontWeight: 400,
    margin: "0 0 14px",
    lineHeight: 1.25,
    color: TEXT,
    letterSpacing: 0.3,
  }}>{children}</h3>
);
const Desc  = ({ bp, children }) => (
  <p style={{ fontSize: bp === "mobile" ? 13 : 14, lineHeight: 1.75, color: TEXT_MUTED, margin: "0 0 20px" }}>{children}</p>
);
const MetaRow = ({ bp, items }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: bp === "mobile" ? 12 : 18, marginBottom: bp === "mobile" ? 18 : 22, alignItems: "center" }}>
    {items.map((it, i) => <MetaItem key={i} icon={it.icon} text={it.text} bp={bp} />)}
  </div>
);

const ContentDivider = () => (
  <div style={{ height: 1, background: LINE, margin: "0 0 18px", width: "100%" }} />
);
const BtnRow = ({ bp, onViewMore, onReserve }) => (
  <div style={{ display: "flex", gap: bp === "mobile" ? 10 : 16, flexWrap: "wrap", alignItems: "center" }}>
    <button
      type="button"
      style={{ ...btnOutlineStyle, ...(bp === "mobile" ? { flex: "1 1 auto", minWidth: "min(100%, 140px)", justifyContent: "center" } : {}) }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = GOLD;
        e.currentTarget.style.color = WHITE;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = WHITE;
        e.currentTarget.style.color = GOLD;
      }}
      onClick={onViewMore}
    >
      VIEW MORE
    </button>
    <button
      type="button"
      style={{
        ...btnPrimaryStyle,
        gap: 8,
        ...(bp === "mobile" ? { flex: "1 1 auto", minWidth: "min(100%, 200px)" } : {}),
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = GOLD_DK;
        e.currentTarget.style.borderColor = GOLD_DK;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = GOLD;
        e.currentTarget.style.borderColor = GOLD;
      }}
      onClick={onReserve}
    >
      RESERVE EXPERIENCE
      <span style={{ fontSize: 14, lineHeight: 1 }} aria-hidden>→</span>
    </button>
  </div>
);

/* ─── Per-slide includes data ────────────────────────────────────────────── */
const INCLUDES = {
  slide1: [
    "Private access to authentic sumo stable",
    "Meet active sumo wrestlers",
    "Expert commentary from sumo historian",
    "Observe morning training rituals",
    "Traditional chanko nabe breakfast",
  ],
  slide2: [
    "Private ringside seating at Grand Tournament",
    "Post-match dinner with former yokozuna",
    "Private transfers to & from venue",
    "Traditional kaiseki lunch",
    "Backstage access & wrestler meet",
    "Dedicated bilingual host",
  ],
  slide3: [
    "Private venue of your choosing",
    "Observe morning training rituals",
    "Former professional wrestler performers",
    "Traditional chanko nabe breakfast",
    "Traditional ring-entering ceremony",
    "Exhibition matches & technique demo",
  ],
};

const IncludesList = ({ bp, items }) => (
  <>
    <p style={{ fontSize: 10, letterSpacing: 2, fontWeight: 500, margin: "0 0 12px", color: TEXT, textTransform: "uppercase" }}>INCLUDES</p>
    <div style={{
      display: "grid",
      gridTemplateColumns: bp === "mobile" ? "1fr" : "1fr 1fr",
      gap: "8px 20px",
      fontSize: bp === "mobile" ? 12 : 13,
      color: TEXT_MUTED,
      marginBottom: bp === "mobile" ? 20 : 24,
      lineHeight: 1.5,
    }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <span style={{ color: GOLD, flexShrink: 0, marginTop: 3 }}>
            <img src={correct} alt="" style={{ height: 10, width: 10, display: "block", objectFit: "contain" }} />
          </span>
          <span>{item}</span>
        </span>
      ))}
    </div>
  </>
);

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDES
═══════════════════════════════════════════════════════════════════════════ */
const Slide1 = ({ bp, onReserve }) => (
  <Card bp={bp} imgSrc={IMG.sumoOffer} imgAlt="Sumo Training" price={"FROM\n£2,800 per person"} imgLeft>
    <Tag bp={bp}>KEIKO SESSION</Tag>
    <Title bp={bp}>Morning Training at a Sumo Stable</Title>
    <Desc bp={bp}>Rise before dawn to enter the sacred training grounds of a prestigious sumo stable. Witness the grueling keiko practice as wrestlers clash in centuries-old rituals, followed by a traditional chanko nabe breakfast with the rikishi.</Desc>
    <MetaRow bp={bp} items={[{ icon: <ClockIcon />, text: "4 hours" }, { icon: <PeopleIcon />, text: "2-4 guests" }, { icon: <CalIcon />, text: "Daily except tournament periods" }]} />
    <ContentDivider />
    <IncludesList bp={bp} items={INCLUDES.slide1} />
    <BtnRow bp={bp} onReserve={onReserve} />
  </Card>
);

const Slide2 = ({ bp }) => (
  <Card bp={bp} imgSrc={IMG.tournament} imgAlt="Grand Tournament VIP" price={"FROM\n£5,500 per person"} imgLeft={false}>
    <Tag bp={bp}>HONBASHO PREMIUM</Tag>
    <Title bp={bp}>Grand Tournament VIP Experience</Title>
    <Desc bp={bp}>Experience the electric atmosphere of a Grand Sumo Tournament from the most coveted ringside seats. Your day includes private transfers, a kaiseki lunch, backstage access, and post-tournament dinner with a former yokozuna.</Desc>
    <MetaRow bp={bp} items={[{ icon: <ClockIcon />, text: "Full Day" }, { icon: <PeopleIcon />, text: "2-6 guests" }, { icon: <CalIcon />, text: "January, May, September (Tokyo)" }]} />
    <ContentDivider />
    <IncludesList bp={bp} items={INCLUDES.slide2} />
    <BtnRow bp={bp} />
  </Card>
);

const Slide3 = ({ bp, onViewMore, onReserve }) => (
  <Card bp={bp} imgSrc={IMG.privateSumo} imgAlt="Private Sumo Demonstration" price={"FROM\n£15,000"} imgLeft>
    <Tag bp={bp}>EXCLUSIVE PERFORMANCE</Tag>
    <Title bp={bp}>Private Sumo Demonstration</Title>
    <Desc bp={bp}>Commission a private sumo demonstration at an exclusive venue of your choosing. Former professional wrestlers perform traditional ring-entering ceremonies, demonstrate techniques, and engage in exhibition matches.</Desc>
    <MetaRow bp={bp} items={[{ icon: <ClockIcon />, text: "3 hours" }, { icon: <PeopleIcon />, text: "10-30 guests" }, { icon: <CalIcon />, text: "Year-round, advance booking required" }]} />
    <ContentDivider />
    <IncludesList bp={bp} items={INCLUDES.slide3} />
    <BtnRow bp={bp} onViewMore={onViewMore} onReserve={onReserve} />
  </Card>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN SLIDER
═══════════════════════════════════════════════════════════════════════════ */
export default function SumoOfferingsSlider() {
  const bp       = useBreakpoint();
  const [active, setActive] = useState(0);
  const [sumoBookingOpen, setSumoBookingOpen] = useState(false);
  const [foodDrinksOpen, setFoodDrinksOpen] = useState(false);
  const [morningTimelineOpen, setMorningTimelineOpen] = useState(false);
  const isMobile = bp === "mobile" || bp === "mobileLg";
  const isNarrow = bp === "mobile";

  const slides = [
    { tag: "KEIKO SESSION",          component: <Slide1 bp={bp} onReserve={() => setSumoBookingOpen(true)} /> },
    { tag: "HONBASHO PREMIUM",       component: <Slide2 bp={bp} /> },
    {
      tag: "EXCLUSIVE PERFORMANCE",
      component: (
        <Slide3
          bp={bp}
          onViewMore={() => setFoodDrinksOpen(true)}
          onReserve={() => setMorningTimelineOpen(true)}
        />
      ),
    },
  ];

  const prev = () => setActive(a => (a - 1 + slides.length) % slides.length);
  const next = () => setActive(a => (a + 1) % slides.length);

  const tabBtn = (i) => ({
    padding: isNarrow ? "10px 12px" : isMobile ? "11px 16px" : "12px 24px",
    fontSize: isNarrow ? 8.5 : isMobile ? 9 : 10,
    letterSpacing: isNarrow ? 1 : isMobile ? 1.4 : 1.8,
    border: `1px solid ${active === i ? GOLD : LINE}`,
    background: active === i ? GOLD : WHITE,
    color: active === i ? WHITE : TEXT,
    cursor: "pointer",
    transition: "background .2s, color .2s, border-color .2s",
    whiteSpace: "nowrap",
    fontWeight: 500,
    textTransform: "uppercase",
    fontFamily: "inherit",
    flexShrink: 0,
  });

  const arrowStyle = (side) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: isNarrow ? 4 : isMobile ? 6 : -22,
    width: isNarrow ? 36 : isMobile ? 38 : 42,
    height: isNarrow ? 36 : isMobile ? 38 : 42,
    borderRadius: "50%",
    border: `1px solid ${LINE}`,
    background: WHITE,
    color: TEXT,
    fontSize: isNarrow ? 20 : 22,
    lineHeight: isNarrow ? "34px" : "36px",
    textAlign: "center",
    cursor: "pointer",
    zIndex: 10,
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
  });

  const sectionPad = isNarrow ? "40px 12px 48px" : isMobile ? "52px 20px 56px" : bp === "tablet" ? "64px 28px 72px" : "80px 40px 88px";
  const sliderPadX = isNarrow ? "44px" : isMobile ? "48px" : "52px";

  return (
    <section
      style={{
        background: BG,
        padding: sectionPad,
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        color: TEXT,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", boxSizing: "border-box" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: isNarrow ? 22 : isMobile ? 26 : 36 }}>
          <p style={{ color: GOLD, fontSize: 18, letterSpacing: 3.5, margin: "0 0 10px", fontWeight: 500, textTransform: "uppercase", textAlign:"center" }}>
            OUR OFFERINGS
          </p>
          <h2 style={{
            fontSize: isNarrow ? 24 : isMobile ? 28 : bp === "tablet" ? 32 : 36,
            fontWeight: 400,
            margin: 0,
            color: TEXT,
            letterSpacing: 0.5,
            lineHeight: 1.2,
          }}>
            Choose Your Experience
          </h2>
        </div>

        {/* Tabs: scroll on very narrow widths */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: isNarrow ? "nowrap" : "wrap",
            gap: isNarrow ? 6 : 8,
            marginBottom: isNarrow ? 22 : isMobile ? 26 : 32,
            overflowX: isNarrow ? "auto" : "visible",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
            padding: "2px 0 6px",
            marginLeft: isNarrow ? -4 : 0,
            marginRight: isNarrow ? -4 : 0,
            paddingLeft: isNarrow ? 4 : 0,
            paddingRight: isNarrow ? 4 : 0,
          }}
        >
          {slides.map((s, i) => (
            <button key={i} type="button" style={tabBtn(i)} onClick={() => setActive(i)}>
              {s.tag}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div style={{ position: "relative", paddingLeft: sliderPadX, paddingRight: sliderPadX, boxSizing: "border-box" }}>
          <button type="button" aria-label="Previous offering" style={arrowStyle("left")} onClick={prev}>
            ‹
          </button>
          <div style={{ width: "100%", overflow: "hidden" }}>
            {slides[active].component}
          </div>
          <button type="button" aria-label="Next offering" style={arrowStyle("right")} onClick={next}>
            ›
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: isNarrow ? 20 : 28 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                padding: 0,
                background: active === i ? GOLD : "#d4d0c8",
                cursor: "pointer",
                transition: "width .25s, background .25s",
              }}
            />
          ))}
        </div>

      </div>

      {sumoBookingOpen && (
        <SumoBookingModal closeModal={() => setSumoBookingOpen(false)} />
      )}
      <FoodDrinksModal isOpen={foodDrinksOpen} onClose={() => setFoodDrinksOpen(false)} />
      {morningTimelineOpen && (
        <MorningTimelineModal closeModal={() => setMorningTimelineOpen(false)} />
      )}
    </section>
  );
}