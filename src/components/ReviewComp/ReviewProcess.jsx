import React from "react";
import styles from "./ReviewProcess.module.css";
import { ShieldCheck, Lock, BarChart3, Star } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <ShieldCheck size={18} strokeWidth={1.8} />,
    title: "100% Authentic",
    desc: "Every review comes from a verified client experience",
  },
  {
    id: 2,
    icon: <Lock size={18} strokeWidth={1.8} />,
    title: "Privacy Protected",
    desc: "Private client identities are safeguarded with discretion",
  },
  {
    id: 3,
    icon: <BarChart3 size={18} strokeWidth={1.8} />,
    title: "Real-Time Updates",
    desc: "Reviews are fetched directly from platforms via API",
  },
];

const platforms = ["Google", "TripAdvisor", "Trustpilot"];

const ReviewProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Verified & Transparent Review Process
          </h2>

          <p className={styles.paragraph}>
            Every review on this page is verified and sourced from legitimate
            platforms and clients. We maintain the highest standards of
            transparency and authenticity.
          </p>

          <p className={styles.paragraph}>
            Our reviews are collected from Google Reviews, TripAdvisor,
            Trustpilot, and direct feedback from our private clientele. We
            never edit, manipulate, or incentivize reviews.
          </p>

          <div className={styles.featureList}>
            {features.map((item) => (
              <div key={item.id} className={styles.featureItem}>
                <div className={styles.iconBox}>{item.icon}</div>

                <div>
                  <h4 className={styles.featureTitle}>{item.title}</h4>
                  <p className={styles.featureDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.ratingCard}>
            <h3 className={styles.ratingValue}>4.9</h3>

            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#c09551" stroke="#c09551" />
              ))}
            </div>

            <p className={styles.ratingText}>Based on 300+ verified reviews</p>

            <div className={styles.platforms}>
              {platforms.map((platform) => (
                <span key={platform} className={styles.platformBadge}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewProcess;