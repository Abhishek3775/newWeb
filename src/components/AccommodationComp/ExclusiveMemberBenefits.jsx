import React from 'react';
import styles from './ExclusiveMemberBenefits.module.css';
import { LuDiamond } from "react-icons/lu";
import { LuCrown } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";


const ExclusiveMemberBenefits = () => {
  const benefits = [
    {
      icon: <LuDiamond/>,
      title: 'Exclusive Rates',
      desc: 'Access to preferential rates not available elsewhere, with added value amenities on every booking.'
    },
    {
      icon: <LuCrown/>,
      title: 'VIP Treatment',
      desc: 'Priority reservations, room upgrades when available, and personalized welcome amenities.'
    },
    {
      icon: <LuSparkles/>,
      title: 'Bespoke Experiences',
      desc: 'Curated experiences tailored to your preferences, from private tours to exclusive dining.'
    },
    {
      icon: <FiPhone/>,
      title: '24/7 Concierge',
      desc: 'Your dedicated concierge available around the clock, ensuring every detail is perfect.'
    }
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.header}>
        <h4 className={styles.subtitle}>WHY BOOK WITH US</h4>
        <h2 className={styles.title}>Exclusive Member Benefits</h2>
        <p className={styles.description}>
          Every booking includes privileges that elevate your experience beyond the ordinary.
        </p>
      </div>

      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitCard}>
            <div className={styles.icon}>{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveMemberBenefits;
