import React, { useState } from "react";
import styles from "./BlogPage.module.css";
import bgImage from "../assets/img1a.png";

import img1 from "../assets/img2a.png";
import img2 from "../assets/img3a.png";
import img3 from "../assets/img4a.png";
import img4 from "../assets/img5a.png";
import img5 from "../assets/img6a.png";
import img6 from "../assets/img7a.png";
import img7 from "../assets/img8a.png";
import img8 from "../assets/img9a.png";
import img9 from "../assets/img10a.png";
// import img10 from "../assets/img11a.png";
// import img11 from "../assets/img12a.png";
// import img12 from "../assets/img13a.png";
// import img13 from "../assets/img14a.png";


export default function BlogPage() {
  const [active, setActive] = useState("ALL");

  const data = [
    {
      id: 1,
      category: "EXPERIENCES",
      read: "9 MIN READ",
      title: "Into the Wild: A Safari Beyond Compare",
      docs: "The Serengeti at dawn reveals its secrets only to those who wait - and those who know where to look.",
      img: img1,
      type: "large",
    },
    {
      id: 2,
      category: "CULTURE",
      read: "12 MIN READ",
      title: "Sacred Temples & Hidden Kingdoms",
      img: img2,
    },
    {
      id: 3,
      category: "DESTINATIONS",
      read: "6 MIN READ",
      title: "Mediterranean Voyages by Private Yacht",
      img: img3,
    },
    {
      id: 4,
      category: "WELLNESS",
      read: "7 MIN READ",
      title: "Alpine Retreats: Winter's Quiet Luxury",
      img: img4,
      type: "wide",
    },
  ];

  const filters = ["ALL", "DESTINATIONS", "EXPERIENCES", "CULTURE", "WELLNESS"];

  const filteredData =
    active === "ALL"
      ? data
      : data.filter((item) => item.category === active);

      const SecondData = [
    {
      id: 1,
      category: "EXPERIENCES",
      read: "5 MIN READ",
      title: "Cappadocia at Dawn: A Hot Air Balloon Journey",
      desc: "Floating above ancient fairy chimneys as the first light paints Turkey's otherworldly landscape in shades of amber and rose.",
      img: img6,
      reverse: false,
    },
    {
      id: 2,
      category: "WELLNESS",
      read: "9 MIN READ",
      title: "Canopy Living: The World's Finest Treehouse Retreats",
      desc: "From Costa Rica's cloud forests to Bali's river valleys, a new wave of elevated escapes is blurring the line between architecture and nature.",
      img: img7,
      reverse: true,
    },
    {
      id: 3,
      category: "CULTURE",
      read: "11 MIN READ",
      title: "The Ryokan Revival: Japan’s Timeless Art of Hosting",
      desc: "Centuries-old traditions meet contemporary sensibility in Japan’s most exclusive inns.",
      img: img8,
      reverse: false,
    },
  ];

  const articles = [
  {
    id: 1,
    category: "EXPERIENCES",
    date: "FEBRUARY 2026",
    time: "8 MIN",
    title: "The New Rules of Safari Style",
    desc: "What to pack, what to expect, and why the Serengeti’s golden hour will change your perspective on everything.",
    link: "EXPLORE EXPERIENCE →",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 2,
    category: "GASTRONOMY",
    date: "FEBRUARY 2026",
    time: "10 MIN",
    title: "Cliffside Dining: Ten Tables Worth the Journey",
    desc: "We scoured the Mediterranean coast to find the restaurants where the view is matched only by the plate.",
    link: "EXPLORE GASTRONOMY →",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 3,
    category: "DESTINATIONS",
    date: "JANUARY 2026",
    time: "7 MIN",
    title: "The Chalet Edit: Where to Stay This Winter",
    desc: "From the Swiss Engadin to Japan’s Niseko, these are the alpine retreats defining luxury winter travel.",
    link: "EXPLORE DESTINATION →",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
  },
  {
    id: 4,
    category: "EXPERIENCES",
    date: "JANUARY 2026",
    time: "5 MIN",
    title: "Above the Clouds in Cappadocia",
    desc: "A dawn balloon ride over Turkey’s fairy chimneys is merely the beginning of an extraordinary Turkish odyssey.",
    link: "EXPLORE EXPERIENCE →",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
];

  return (
  <>
    {/*  Hero Section  */}
    <section className={styles.hero}>
      
      {/* Background Image */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content Wrapper */}
      <div className={styles.container}>
        
        <div className={styles.content}>
          <p className={styles.tag}>FEATURED STORY</p>

          <h1 className={styles.title}>
            The Art of Slow Travel in <br /> the Indian Ocean
          </h1>

          <p className={styles.description}>
            Discover a new philosophy of exploration — where time dissolves and
            every moment is curated to perfection.
          </p>

          <button className={styles.btn}>READ THE STORY →</button>
        </div>

      </div>
    </section>

    {/* The Journal Section  */}
    <section className={styles.journalSection}>
  <div className={styles.journalContainer}>
    
    {/* Header */}
    <div className={styles.journalHeader}>
      <div>
        <p className={styles.journalTag}>THE JOURNAL</p>
        <h2 className={styles.journalTitle}>Stories Worth Telling</h2>
      </div>

      <div className={styles.journalFilters}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`${styles.journalFilterBtn} ${
              active === f ? styles.journalActive : ""
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>

    {/* Grid */}
    <div className={styles.journalGrid}>
      {filteredData.map((item) => (
        <div
          key={item.id}
          className={`${styles.journalCard} 
          ${item.type === "large" ? styles.journalLarge : ""} 
          ${item.type === "wide" ? styles.journalWide : ""}`}
        >
          <img src={item.img} alt={item.title} />

          <div className={styles.journalOverlay}>
            <p className={styles.journalMeta}>
              {item.category} • {item.read}
            </p>
            <h3>{item.title}</h3>
            <p className={styles.journalDocs}>{item.docs}</p>
            <span>EXPLORE {item.category} →</span>
          </div>
        </div>
      ))}
    </div>

  </div>
    </section>

    {/* Editer Note  */}
    <section className={styles.saharaSection}>
      
      {/* Background Image */}
      <div
        className={styles.saharaBg}
        style={{ backgroundImage: `url(${img5})` }}
      />

      {/* Content Card */}
      <div className={styles.saharaCard}>
        <p className={styles.saharaTag}>
          EDITOR'S NOTE • FEBRUARY 2026
        </p>

        <h2 className={styles.saharaTitle}>
          Why the Sahara Remains the Ultimate Test of True Luxury
        </h2>

        <p className={styles.saharaText}>
          There is a moment in the deep desert – usually just after the sun drops
          below the dune line and before the first stars appear – when silence
          becomes almost tangible. It's in this liminal space that we've found
          some of the world's most extraordinary hospitality experiences are
          being quietly redefined.
        </p>

        <p className={styles.saharaText}>
          From Morocco's Agafay Desert to Oman's Wahiba Sands, a new generation
          of desert camps is reimagining what it means to be remote. Think
          hand-woven Berber carpets on sand floors, private telescopes for
          stargazing, and multi-course dinners prepared by chefs who've trained
          at the world's finest restaurants - all without a single other guest in sight.
        </p>

        <button className={styles.saharaBtn}>
          CONTINUE READING →
        </button>
      </div>

      {/* Quote Section */}
      <div className={styles.saharaQuote}>
        <p>
          The real voyage of discovery consists not in seeking new landscapes,
          but in having new eyes.
        </p>
        <span>MARCEL PROUST</span>
      </div>

    </section>

    {/* HandPicked Section  */}
    <section className={styles.editorsSection}>
      <div className={styles.editorsContainer}>
        
        {/* Header */}
        <div className={styles.editorsHeader}>
          <p className={styles.editorsTag}>HANDPICKED</p>
          <h2 className={styles.editorsTitle}>Editor's Picks</h2>
        </div>

        {/* Cards */}
        <div className={styles.editorsList}>
          {SecondData.map((item) => (
            <div
              key={item.id}
              className={`${styles.editorsRow} ${
                item.reverse ? styles.reverse : ""
              }`}
            >
              {/* Image */}
              <div className={styles.editorsImage}>
                <img src={item.img} alt={item.title} />
              </div>

              {/* Content */}
              <div className={styles.editorsContent}>
                <p className={styles.editorsMeta}>
                  {item.category} • {item.read}
                </p>

                <h3>{item.title}</h3>

                <p className={styles.editorsDesc}>{item.desc}</p>

                <div className={styles.editorsActions}>
                  <span>READ MORE →</span>
                  <span>EXPLORE →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* Destination Spotlight  */}
    <section className={styles.destHeroSection}>
      
      {/* Background */}
      <div
        className={styles.destHeroBg}
        style={{ backgroundImage: `url(${img9})` }}
      />

      {/* Overlay */}
      <div className={styles.destHeroOverlay}></div>

      {/* Content */}
      <div className={styles.destHeroContent}>
        <p className={styles.destHeroTag}>DESTINATION SPOTLIGHT</p>

        <h1 className={styles.destHeroTitle}>
          Patagonia: The Last Frontier of Wilderness Luxury
        </h1>

        <p className={styles.destHeroDesc}>
          Where glaciers calve into turquoise lakes and the wind carries stories
          of a land untouched by time - discover why this remains our most
          requested journey.
        </p>

        <button className={styles.destHeroBtn}>
          EXPLORE PATAGONIA
        </button>
      </div>

    </section>

    {/* Fresh Form Section  */}
    <section className={styles.freshSection}>
      <div className={styles.freshContainer}>

        {/* Header */}
        <div className={styles.freshHeader}>
          <div>
            <p className={styles.freshLatest}>LATEST</p>
            <h2 className={styles.freshTitle}>
              Fresh From the Field
            </h2>
          </div>
          <span className={styles.freshViewAll}>
            VIEW ALL ARTICLES →
          </span>
        </div>

        {/* List */}
        <div className={styles.freshList}>
          {articles.map((item, index) => (
            <div key={item.id}>

              <div className={styles.freshCard}>

                <div className={styles.freshImageWrapper}>
                  <img src={item.img} alt={item.title} />
                </div>

                <div className={styles.freshContent}>
                  <p className={styles.freshMeta}>
                    {item.category} • {item.date} • {item.time}
                  </p>

                  <h3 className={styles.freshHeading}>
                    {item.title}
                  </h3>

                  <p className={styles.freshDesc}>
                    {item.desc}
                  </p>

                  <span className={styles.freshLink}>
                    {item.link}
                  </span>
                </div>

              </div>

              {index !== articles.length - 1 && (
                <hr className={styles.freshDivider} />
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className={styles.freshButtonWrap}>
          <button className={styles.freshLoadBtn}>
            LOAD MORE STORIES
          </button>
        </div>

      </div>
    </section>

    {/* Inspired Section  */}
    <section className={styles.inspiredSection}>
      
      {/* Overlay */}
      <div className={styles.inspiredOverlay}></div>

      {/* Content */}
      <div className={styles.inspiredContent}>
        
        <p className={styles.inspiredTag}>STAY INSPIRED</p>

        <h1 className={styles.inspiredTitle}>
          The World, Curated
        </h1>

        <p className={styles.inspiredDesc}>
          Receive our monthly edit of extraordinary destinations, private access
          opportunities, and bespoke journey ideas—delivered with discretion.
        </p>

        {/* Form */}
        <div className={styles.inspiredForm}>
          <input
            type="email"
            placeholder="Your email address"
            className={styles.inspiredInput}
          />
          <button className={styles.inspiredButton}>
            SUBSCRIBE
          </button>
        </div>

      </div>
    </section>

  </>
  );
}