import React from "react";
import "./MonthlyGuide.css";

const monthsData = [
  { name: "Jan", temp: "2°C - 10°C", rating: 3 },
  { name: "Feb", temp: "3°C - 11°C", rating: 3 },
  { name: "Mar", temp: "7°C - 14°C", rating: 4 },
  { name: "Apr", temp: "12°C - 19°C", rating: 5 },
  { name: "May", temp: "16°C - 23°C", rating: 4 },
  { name: "Jun", temp: "20°C - 26°C", rating: 3 },
  { name: "Jul", temp: "24°C - 31°C", rating: 2 },
  { name: "Aug", temp: "26°C - 33°C", rating: 2 },
  { name: "Sep", temp: "22°C - 28°C", rating: 3 },
  { name: "Oct", temp: "15°C - 22°C", rating: 5 },
  { name: "Nov", temp: "10°C - 17°C", rating: 4 },
  { name: "Dec", temp: "5°C - 12°C", rating: 3 },
];

const MonthlyGuide = () => {
  return (
    <section className="mmg-wrapper">
      <div className="mmg-container">

        <p className="mmg-subtitle">MONTH BY MONTH</p>
        <h2 className="mmg-title">Your Monthly Guide</h2>

        <div className="mmg-grid">
          {monthsData.map((month, index) => (
            <div className="mmg-card" key={index}>
              <h4>{month.name}</h4>

              <div className="mmg-stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < month.rating ? "mmg-star filled" : "mmg-star"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="mmg-temp">{month.temp}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MonthlyGuide;
