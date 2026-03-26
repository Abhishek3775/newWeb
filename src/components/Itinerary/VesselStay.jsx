import React, { useState } from "react";
import "./VesselStay.css";
import { FaWineGlassAlt, FaSwimmer, FaWifi, FaCamera, FaDumbbell, FaUtensils } from "react-icons/fa";

// Images (replace paths)
import suite1 from "../../assets2/Itinerary/Accommodations/img1.png";
import suite2 from "../../assets2/Itinerary/Accommodations/img2.png";
import suite3 from "../../assets2/Itinerary/Accommodations/img3.png";

const VesselStay = () => {
  const [activeTab, setActiveTab] = useState("accommodations");

  const suites = [
    {
      id: 1,
      name: "Ocean View Suite",
      size: "25 sqm / 269 sq ft",
      features: ["Ocean bed", "Ocean view window", "Sitting area", "En-suite bathroom"],
      price: "$12,495",
      image: suite1,
    },
    {
      id: 2,
      name: "Deluxe Suite",
      size: "35 sqm / 377 sq ft",
      features: ["King bed", "Private balcony", "Living area", "Marble bathroom"],
      price: "$15,995",
      image: suite2,
    },
    {
      id: 3,
      name: "Owner’s Suite",
      size: "55 sqm / 592 sq ft",
      features: ["King bed", "Wrap-around balcony", "Butler service", "Jacuzzi tub"],
      price: "$19,995",
      image: suite3,
    },
  ];

  const amenities = [
    { id: 1, icon: <FaUtensils />, title: "Gourmet Dining", desc: "Two restaurants with Mediterranean cuisine" },
    { id: 2, icon: <FaWineGlassAlt />, title: "Premium Bar", desc: "Curated wine selection and craft cocktails" },
    { id: 3, icon: <FaDumbbell />, title: "Fitness Center", desc: "State-of-the-art equipment and yoga" },
    { id: 4, icon: <FaSwimmer />, title: "Sun Deck Pool", desc: "Relaxation pool with ocean views" },
    { id: 5, icon: <FaWifi />, title: "Connectivity", desc: "Complimentary WiFi throughout" },
    { id: 6, icon: <FaCamera />, title: "Photography", desc: "Professional photographer on board" },
  ];

  return (
    <section className="vessel-stay-section">
      <div className="vessel-stay-container">
        {/* Toggle Tabs */}
        <div className="vessel-stay-tabs">
          <button
            className={activeTab === "accommodations" ? "active" : ""}
            onClick={() => setActiveTab("accommodations")}
          >
            Accommodations
          </button>
          <button
            className={activeTab === "amenities" ? "active" : ""}
            onClick={() => setActiveTab("amenities")}
          >
            Amenities
          </button>
        </div>

        {/* Accommodations Tab */}
        {activeTab === "accommodations" && (
          <div className="vessel-stay-grid">
            {suites.map((suite) => (
              <div className="vessel-suite-card" key={suite.id}>
                <div className="vessel-suite-image-wrapper">
                  <img src={suite.image} alt={suite.name} className="vessel-suite-image" />
                  <span className="vessel-suite-size">{suite.size}</span>
                </div>
                <div className="vessel-suite-content">
                  <h3 className="vessel-suite-title">{suite.name}</h3>
                  <ul className="vessel-suite-features">
                    {suite.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="vessel-suite-footer">
                    <p className="vessel-suite-price">From {suite.price}</p>
                    <button  className="vessel-suite-link">View →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Amenities Tab */}
        {activeTab === "amenities" && (
          <div className="vessel-amenities-grid">
            {amenities.map((item) => (
              <div className="vessel-amenity-card" key={item.id}>
                <div className="vessel-amenity-icon">{item.icon}</div>
                <h4 className="vessel-amenity-title">{item.title}</h4>
                <p className="vessel-amenity-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VesselStay;
