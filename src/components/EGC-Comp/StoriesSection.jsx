import React, { useState } from "react";
import styles from "./StoriesSection.module.css";
import { MapPin, Users, CalendarDays } from "lucide-react";

import story1 from "../../assets2/EGC Signature/luxary hotel/8.png";
import story2 from "../../assets2/EGC Signature/luxary hotel/8.png";
import story3 from "../../assets2/EGC Signature/luxary hotel/8.png";
import bgPattern from "../../assets/linePattern3.png";
import icon1 from "../../assets/location.png";
import icon2 from "../../assets/people1.png";
import icon3 from "../../assets/date.png";

const storiesData = [
  {
    id: 1,
    tab: "STORY 1",
    title: "An Evening with a Legend in Vienna",
    description:
      "A private concert held within the gilded walls of a Viennese palace. World-renowned musicians performed for just forty guests, followed by a candlelit supper with rare vintages from the palace's own cellar – an evening where music and history intertwined.",
    location: "Vienna, Austria",
    guests: "40 Guests",
    duration: "1 Evening",
    image: story1,
    tags: [
      "PRIVATE CONCERT",
      "PALACE VENUE",
      "RARE VINTAGES",
      "CANDLELIT SUPPER",
    ],
  },
  {
    id: 2,
    tab: "STORY 2",
    title: "A Desert Gala Under Arabian Stars",
    description:
      "An immersive evening deep in the desert featuring traditional performances, a bespoke gourmet dining experience, and a starlit ambiance designed for unforgettable celebration and connection.",
    location: "Dubai, UAE",
    guests: "60 Guests",
    duration: "1 Evening",
    image: story2,
    tags: [
      "DESERT GALA",
      "LIVE PERFORMANCE",
      "LUXURY DINING",
      "PRIVATE CAMP",
    ],
  },
  {
    id: 3,
    tab: "STORY 3",
    title: "A Coastal Celebration on the Amalfi Coast",
    description:
      "A cliffside private gathering overlooking the Mediterranean, blending curated cuisine, live acoustic performances, and sunset storytelling in one of Italy’s most breathtaking settings.",
    location: "Amalfi, Italy",
    guests: "35 Guests",
    duration: "2 Days",
    image: story3,
    tags: [
      "COASTAL VENUE",
      "PRIVATE DINING",
      "SUNSET EVENT",
      "BESPOKE EXPERIENCE",
    ],
  },
];

const StoriesSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const currentStory = storiesData[activeStory];

  return (
    <section className={styles.storiesSection} style={{ backgroundImage: `url(${bgPattern})` }}>
      <div className={styles.container}>
        <p className={styles.topLabel}>STORIES</p>
        <h2 className={styles.heading}>Moments We&apos;ve Orchestrated</h2>

        <div className={styles.tabs}>
          {storiesData.map((story, index) => (
            <button
              key={story.id}
              className={`${styles.tabBtn} ${
                activeStory === index ? styles.activeTab : ""
              }`}
              onClick={() => setActiveStory(index)}
            >
              {story.tab}
            </button>
          ))}
        </div>

        <div className={styles.storyCard}>
          <div className={styles.imageWrap}>
            <img
              src={currentStory.image}
              alt={currentStory.title}
              className={styles.storyImage}
            />
          </div>

          <div className={styles.content}>
            <h3 className={styles.storyTitle}>{currentStory.title}</h3>

            <p className={styles.storyDesc}>{currentStory.description}</p>

            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <img src={icon1} className={styles.metaItemIcon}/>
                <span>{currentStory.location}</span>
              </div>

              <div className={styles.metaItem}>
                <img src={icon2} className={styles.metaItemIcon}/>
                <span>{currentStory.guests}</span>
              </div>

              <div className={styles.metaItem}>
                <img src={icon3} className={styles.metaItemIcon}/>
                <span>{currentStory.duration}</span>
              </div>
            </div>

            <div className={styles.tags}>
              {currentStory.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;