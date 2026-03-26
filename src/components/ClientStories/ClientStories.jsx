import React from "react";
import "./ClientStories.css";

/* asset image */
import storyImg from "../../assets/client-story.jpg";

const ClientStories = () => {
  return (
    <section className="stories">
      <div className="stories-header">
        <span className="tag">CLIENT STORIES</span>
        <h2>Hear From Our Distinguished Guests</h2>
        <p>
          Real stories from travelers who have experienced the EGC difference.
        </p>
      </div>

      <div
        className="story-card"
        style={{ backgroundImage: `url(${storyImg})` }}
      >
        <div className="story-overlay">
          <p className="story-quote">
            “EGC transformed our anniversary into something beyond imagination.
            Every single detail was perfect.”
          </p>
          <span className="story-author">
            — The Sterlings, European Odyssey 2025
          </span>
        </div>

        <button className="story-btn">❚❚</button>
      </div>
    </section>
  );
};

export default ClientStories;
