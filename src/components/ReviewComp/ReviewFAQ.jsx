import React, { useState } from "react";
import styles from "./ReviewFAQ.module.css";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do you verify reviews?",
    answer:
      "All reviews are sourced directly from verified platforms such as Google, TripAdvisor, and Trustpilot, or from confirmed private clients. Each review is checked for authenticity before being displayed.",
  },
  {
    question: "Can I leave a review?",
    answer:
      "Yes, clients who have experienced our services can leave a review through verified platforms or directly via our concierge team.",
  },
  {
    question: "Do you edit or remove negative reviews?",
    answer:
      "No, we do not edit or remove reviews. We believe in complete transparency and display all genuine feedback.",
  },
  {
    question: "How often are reviews updated?",
    answer:
      "Reviews are updated regularly and in real-time wherever possible, ensuring the most current feedback is always available.",
  },
  {
    question: 'Why are some reviews marked as "Private Client"?',
    answer:
      "Some high-profile clients prefer anonymity. These reviews are verified but labeled as private to protect client confidentiality.",
  },
];

const ReviewFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Review Questions</h2>
        <p className={styles.subtext}>
          Common questions about our reviews and verification process
        </p>

        <div className={styles.faqList}>
          {faqs.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqHeader}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>

              <div
                className={`${styles.faqContent} ${
                  activeIndex === index ? styles.open : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewFAQ;