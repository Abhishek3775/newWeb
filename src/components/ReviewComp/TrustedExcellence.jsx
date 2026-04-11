import React from "react";
import styles from "./TrustedExcellence.module.css";
import {
  Star,
  ClipboardList,
  Globe,
  BadgeCheck,
  Clock3,
} from "lucide-react";

import { FaUsers,FaRegCheckCircle , FaRegQuestionCircle } from "react-icons/fa";



const stats = [
  {
    id: 1,
    icon: <Star size={24} strokeWidth={1.7} />,
    value: "5.0",
    label: "Average Rating",
  },
  {
    id: 2,
    icon: <ClipboardList size={24} strokeWidth={1.7} />,
    value: "12",
    label: "Verified Reviews",
  },
  {
    id: 3,
    icon: <Globe size={24} strokeWidth={1.7} />,
    value: "25+",
    label: "Countries Served",
  },
  {
    id: 4,
    icon: <FaRegCheckCircle size={24} strokeWidth={1.7} />,
    value: "98%",
    label: "Satisfaction Rate",
  },
  {
    id: 5,
    icon: <Clock3 size={24} strokeWidth={1.7} />,
    value: "24/7",
    label: "Elite Support",
  },
  {
    id: 6,
    icon: <FaUsers size={24} strokeWidth={1.7} />,
    value: "5,000+",
    label: "Elite Clients",
  },
  {
    id: 7,
    icon: <FaRegQuestionCircle size={24} strokeWidth={1.7} />,
    value: "<15min",
    label: "Response Time",
  },
  {
    id: 8,
    icon: <BadgeCheck size={24} strokeWidth={1.7} />,
    value: "95%",
    label: "Client Retention",
  },
];

const TrustedExcellence = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <span className={styles.badge}>TRUSTED EXCELLENCE</span>

          <h2 className={styles.heading}>
            Real Experiences.
            <br />
            Real Excellence.
          </h2>

          <p className={styles.subtext}>
            Discover why the world's most discerning clientele trust Elite
            Concierge for their most important moments. Every review reflects
            our unwavering commitment to perfection.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.value}>{item.value}</h3>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedExcellence;