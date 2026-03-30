import React from "react";
import styles from "./WhyChooseEGC.module.css";
import {
  Shield,
  Globe,
  Users,
  Clock3,
  Headphones,
  Star,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Shield size={34} strokeWidth={1.5} />,
    title: "Effortless Hosting",
    desc: "We don't just plan - we're on the ground to orchestrate every moment with precision.",
  },
  {
    id: 2,
    icon: <Globe size={34} strokeWidth={1.5} />,
    title: "Global Reach",
    desc: "Access to the world's most exclusive properties, private experiences, and hidden gems.",
  },
  {
    id: 3,
    icon: <Users size={34} strokeWidth={1.5} />,
    title: "Any Scale",
    desc: "From intimate groups of 8 to grand gatherings of 100+, flawlessly executed.",
  },
  {
    id: 4,
    icon: <Clock3 size={34} strokeWidth={1.5} />,
    title: "24/7 Concierge",
    desc: "Round-the-clock dedicated support before, during, and after your journey.",
  },
  {
    id: 5,
    icon: <Headphones size={34} strokeWidth={1.5} />,
    title: "Personal Touch",
    desc: "A dedicated travel director who knows your preferences, tastes, and expectations.",
  },
  {
    id: 6,
    icon: <Star size={34} strokeWidth={1.5} />,
    title: "Exclusive Access",
    desc: "Private viewings, after-hours museum tours, chef's tables, and experiences money can't usually buy.",
  },
];

const WhyChooseEGC = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <p className={styles.topLabel}>WHY CHOOSE EGC</p>
        <h2 className={styles.heading}>Big Ideas demand effortless execution</h2>

        <div className={styles.grid}>
          {features.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEGC;