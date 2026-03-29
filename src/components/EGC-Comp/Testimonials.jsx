import React from "react";
import styles from "./Testimonials.module.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: `"From the first call to the final farewell dinner, every detail was impeccable. Our family of 22 had the most extraordinary week in the Maldives."`,
    name: "THE RICHARDSON FAMILY",
  },
  {
    id: 2,
    text: `"They managed to coordinate 35 executives across three time zones and deliver an experience that exceeded even our most ambitious expectations."`,
    name: "JAMES K., CEO",
  },
  {
    id: 3,
    text: `"Our 50th anniversary celebration in Provence was nothing short of magical. The private vineyard dinner under the stars will stay with us forever."`,
    name: "ELEANOR & DAVID M.",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <p className={styles.topLabel}>TESTIMONIALS</p>
        <h2 className={styles.heading}>Words From Our Guests</h2>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#c89a4b" stroke="#c89a4b" />
                ))}
              </div>

              <p className={styles.text}>{item.text}</p>

              <p className={styles.name}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;