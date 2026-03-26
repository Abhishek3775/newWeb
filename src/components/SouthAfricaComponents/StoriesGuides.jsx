import React from "react";
import "./StoriesGuides.css";

/* Images */
import img1 from "../../assets/scene1.jpg";
import img2 from "../../assets/safari.jpg";
import img3 from "../../assets/Beach.jpg";
import img4 from "../../assets/scene.jpg";
import img5 from "../../assets/elephant.jpg";
import img6 from "../../assets/lion.jpg";

const data = [
  {
    id: 1,
    tag: "Guides",
    readTime: "12 min read",
    title: "Our Complete Guide to South Africa",
    desc: "From romantic picnics in history-steeped wine lands to game watching on sprawling veldts, this is everything you need.",
    image: img1,
  },
  {
    id: 2,
    tag: "Stories",
    readTime: "8 min read",
    title: "Field Notes from the Kruger",
    desc: "Our travel specialist Maddie shares her intimate encounters with South Africa’s wild heart.",
    image: img2,
  },
  {
    id: 3,
    tag: "Guides",
    readTime: "10 min read",
    title: "Luxury Honeymoons in South Africa",
    desc: "Sun-drenched beaches, star-studded skies and mountain-fringed coastlines await newlyweds.",
    image: img3,
  },
  {
    id: 4,
    tag: "Guides",
    readTime: "6 min read",
    title: "24 Hours in Cape Town",
    desc: "Cape Town is far more than just the gateway to the Winelands — here’s how to make the most of it.",
    image: img4,
  },
  {
    id: 5,
    tag: "Stories",
    readTime: "15 min read",
    title: "The Ultimate Family Safari Guide",
    desc: "From the Maasai Mara to private reserves — planning your first family safari adventure.",
    image: img5,
  },
  {
    id: 6,
    tag: "Videos",
    readTime: "Watch",
    title: "South Africa - Live",
    desc: "Photographs alone don’t do South Africa justice; you need sight and sound to taste the true flavour.",
    image: img6,
  },
];

const StoriesGuides = () => {
  return (
    <section className="sg-section">
      <div className="sg-container">
        <p className="sg-sub-heading">LOOKING FOR INSPIRATION?</p>
        <h2 className="sg-main-heading">Stories & Guides</h2>

        <div className="sg-grid">
          {data.map((item) => (
            <div className="sg-card" key={item.id}>
              <div className="sg-image-wrapper">
                <img src={item.image} alt={item.title} />

                <div className="sg-badge-wrapper">
                  <span className="sg-badge">{item.tag}</span>
                  <span className="sg-read-time">{item.readTime}</span>
                </div>
              </div>

              <div className="sg-content">
                <h3 className="sg-title">{item.title}</h3>
                <p className="sg-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesGuides;
