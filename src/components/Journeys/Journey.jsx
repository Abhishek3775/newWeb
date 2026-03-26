import React from "react";
import "./Journey.css";

/* Import images */
import europeImg from "../../assets/europe-odyssey.jpg";
import safariImg from "../../assets/african-safari.jpg";
import arabianImg from "../../assets/arabian-nights.jpg";
import islandImg from "../../assets/island-hopping.jpg";

const journeys = [
  {
    title: "The Grand European Odyssey",
    price: "From $85,000",
    days: "21 Days",
    desc: "A curated journey through Europe’s most storied capitals, private castles, and hidden treasures.",
    image: europeImg,
  },
  {
    title: "African Safari Excellence",
    price: "From $65,000",
    days: "14 Days",
    desc: "Witness the great migration from exclusive tented camps with world-renowned guides.",
    image: safariImg,
  },
  {
    title: "Arabian Nights Collection",
    price: "From $45,000",
    days: "10 Days",
    desc: "From Dubai’s gleaming towers to the ancient wadis of Oman, experience Arabian luxury.",
    image: arabianImg,
  },
  {
    title: "Island Hopping Perfection",
    price: "From $55,000",
    days: "12 Days",
    desc: "Private yacht charter through the Maldives, with dedicated butler and chef.",
    image: islandImg,
  },
];

const Journeys = () => {
  return (
    <section className="egc-jour-section">
      <div className="egc-jour-header">
        <span className="egc-jour-tag">CURATED EXCELLENCE</span>
        <h2 className="egc-jour-title">EGC Signature Journeys</h2>
        <p className="egc-jour-description">
          Meticulously crafted itineraries that represent the pinnacle of luxury
          travel. Each journey is a masterpiece of exclusivity, culture, and
          unforgettable moments.
        </p>
      </div>

      <div className="egc-jour-grid">
        {journeys.map((item, index) => (
          <div className="egc-jour-card" key={index}>
            <div
              className="egc-jour-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="egc-jour-days">{item.days}</span>
            </div>

            <div className="egc-jour-content">
              <span className="egc-jour-price">{item.price}</span>
              <h3 className="egc-jour-card-title">{item.title}</h3>
              <p className="egc-jour-card-desc">{item.desc}</p>
              <button className="egc-jour-btn">
                VIEW JOURNEY →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journeys;
