import React from "react";
import "./PlanActivities.css";

import img1 from "../../assets/cherry.jpg";
import img2 from "../../assets/autumn.jpg";
import img3 from "../../assets/snowBoarding.jpg";
import img4 from "../../assets/Festival.jpg";
import img5 from "../../assets/HikingTrekking.jpg";
import img6 from "../../assets/Onsen.jpg";
import img7 from "../../assets/Beach.jpg";
import img8 from "../../assets/culry.jpg";

const activities = [
  {
    title: "Cherry Blossom Viewing",
    desc: "The quintessential Japan experience",
    months: ["March", "April"],
    image: img1,
  },
  {
    title: "Autumn Foliage",
    desc: "Spectacular colors at temples and gardens",
    months: ["October", "November"],
    image: img2,
  },
  {
    title: "Skiing & Snowboarding",
    desc: "World-renowned powder in Hokkaido and Nagano",
    months: ["January", "February", "March"],
    image: img3,
  },
  {
    title: "Festival Experiences",
    desc: "Traditional matsuri with fireworks and parades",
    months: ["July", "August"],
    image: img4,
  },
  {
    title: "Hiking & Trekking",
    desc: "From Mt. Fuji to ancient pilgrimage routes",
    months: ["May", "June", "September", "October"],
    image: img5,
  },
  {
    title: "Onsen Retreats",
    desc: "Hot springs in scenic winter settings",
    months: ["November", "December", "January", "February"],
    image: img6,
  },
  {
    title: "Beach & Island Hopping",
    desc: "Okinawa and southern islands paradise",
    months: ["March", "April", "July", "August"],
    image: img7,
  },
  {
    title: "Food & Culinary Tours",
    desc: "Each season brings unique delicacies",
    months: ["Year-round"],
    image: img8,
  },
];

const PlanActivities = () => {
  return (
    <section className="pta-wrapper">
      <div className="pta-container">

        <p className="pta-subtitle">PLAN YOUR ACTIVITIES</p>
        <h2 className="pta-title">Best Times for...</h2>

        <div className="pta-grid">
          {activities.map((item, index) => (
            <div className="pta-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="pta-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="pta-months">
                  {item.months.map((month, i) => (
                    <span key={i}>{month}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlanActivities;
