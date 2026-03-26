import React from "react";
import "./PrivateRhinoTrek.css";
import rhinoImage from "../../assets/rahinoFron.jpg";
import time from "../../assets/time.png";
import people from "../../assets/people.png";
import calender from "../../assets/calender.png";

const PrivateRhinoTrek = () => {
  return (
    <section className="private-section">
      <div className="private-container">

        {/* LEFT IMAGE */}
        <div className="private-image-wrapper">
          <img src={rhinoImage} alt="Private Rhino Trekking" />

          <div className="price-badge">
            <span className="from">FROM</span>
            <span className="price">£15,000</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="private-content">
          <p className="private-label">EXCLUSIVE ENCOUNTER</p>

          <h2>Private Rhino Trekking</h2>

          <p className="private-description">
            Embark on a privately guided rhino trek within a protected wilderness reserve in South Africa.
            Accompanied by elite wildlife trackers and armed rangers, you will follow fresh spoor on foot,
            learning the ancient art of tracking as you move quietly through pristine bushland. Encounter one
            of Africa’s most endangered giants at a respectful distance, gaining rare insight into their
            behaviour, conservation, and survival.
          </p>

          <div className="private-info">
         
            <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={time} alt="" style={{height:"15px",width:"15px"}} /> 3 hours</span>
                          <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={people} alt="" style={{height:"15px",width:"15px"}} />2-6 Guests</span>
                          <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={calender} alt="" style={{height:"15px",width:"15px"}} />Year-round, advance booking required</span>
                        
          </div>

          <div className="private-buttons">
            <button className="btn-outline">VIEW MORE</button>
            <button className="btn-filled">
              RESERVE EXPERIENCE →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrivateRhinoTrek;
