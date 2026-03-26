import React from "react";
import "./TravelerSection.css";
import { CiHeart } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";




import img1 from "../../assets2/Experience/PERSONALIZED JOURNEYS/img1.png";
import img2 from "../../assets2/Experience/PERSONALIZED JOURNEYS/img2.png";
import img3 from "../../assets2/Experience/PERSONALIZED JOURNEYS/img3.png";
import img4 from "../../assets2/Experience/PERSONALIZED JOURNEYS/img4.png";


const TravelerSection = () => {
  return (
    <section className="pj-section">

      <div className="pj-header">
        <p className="pj-subtitle">PERSONALIZED JOURNEYS</p>
        <h2 className="pj-title">By Traveler Type</h2>
        <p className="pj-desc">
          Every journey is unique. Select your travel style and discover
          experiences crafted specifically for the way you explore the world.
        </p>
      </div>

      <div className="pj-grid">

        {/* LEFT BIG CARD */}
        <div className="pj-card pj-left">
          <img src={img1} alt="" />
          <div className="pj-overlay">
            <div className="pj-content">
              <div ><CiHeart size={30} className="pj-badge"/></div>
              <span className="pj-label">ROMANCE REDEFINED</span>
              <h3>Couples & Honeymooners</h3>
              <p>
                Intimate escapes designed for two, from secluded beach villas to
                private wine tastings in Tuscany vineyards.
              </p>

              <div className="pj-tags">
                <span>Private Dining</span>
                <span>Spa Retreats</span>
                <span>Scenic Stays</span>
              </div>

              <div className="pj-bottom">48 experiences available</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="pj-right">

          <div className="pj-card">
            <img src={img2} alt="" />
            <div className="pj-overlay small">
              <div className="pj-content">
              <div ><FiUsers size={30} className="pj-badge"/></div>
                <span className="pj-label">ADVENTURES TOGETHER</span>
                <h4>Families & Groups</h4>
              </div>
            </div>
          </div>

          <div className="pj-card">
            <img src={img3} alt="" />
            <div className="pj-overlay small">
              <div className="pj-content">
              <div ><FaRegCompass size={30} className="pj-badge"/></div>
                <span className="pj-label">PERSONAL DISCOVERY</span>
                <h4>Solo Explorers</h4>
              </div>
            </div>
          </div>

          <div className="pj-card pj-wide">
            <img src={img4} alt="" />
            <div className="pj-overlay">
              <div className="pj-content">
              <div ><CiStar size={30} className="pj-badge y"/></div>
                <span className="pj-label">BEYOND BOUNDARIES</span>
                <h3>Adventure Seekers</h3>
                <p>
                  Thrilling expeditions for those who crave adrenaline,
                  from heli-skiing to wildlife safaris.
                </p>

                <div className="pj-tags">
                  <span>Extreme Sports</span>
                  <span>Expeditions</span>
                  <span>Wildlife</span>
                </div>

                <div className="pj-bottom">41 experiences available</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TravelerSection;
