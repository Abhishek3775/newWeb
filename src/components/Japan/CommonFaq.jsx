import React, { useState } from "react";
import styles from "./CommonFaq.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CommonFaq = () => {
  const faqs = [
    {
      question: "What is the absolute best time to visit Japan?",
      answer:
        "For most travelers, late March to early April (cherry blossom season) or late October to mid-November (autumn foliage) offer the most spectacular experiences. However, these are also the busiest periods. For a balance of good weather and fewer crowds, consider late May or early October.",
    },
    {
      question: "When is the cheapest time to visit Japan?",
      answer:
        "The cheapest months are typically January, February, and June. Avoid Golden Week and major holidays for lower prices.",
    },
    {
      question: "Should I avoid rainy season (tsuyu)?",
      answer:
        "The rainy season usually runs from early June to mid-July. While it brings occasional showers, it’s still a great time to visit if you’re prepared for some rain.",
    },
    {
      question: "How far in advance should I book for cherry blossom season?",
      answer:
        "Book at least 3–6 months in advance, especially for hotels and flights during late March to early April.",
    },
    {
      question: "Can I see Mt. Fuji year-round?",
      answer:
        "Mt. Fuji can be viewed year-round on clear days, but the official climbing season is from early July to early September.",
    },
    {
      question: "When is the best time for a first visit to Japan?",
      answer:
        "Spring (March–May) and Autumn (October–November) are ideal for first-time visitors, offering pleasant weather and stunning scenery.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h4 className={styles.subtitle}>COMMON QUESTIONS</h4>
        <h2 className={styles.title}>Frequently Asked</h2>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              key={index}
            >
              <button
                className={styles.faqHeader}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className={styles.icon} />
                ) : (
                  <FaChevronDown className={styles.icon} />
                )}
              </button>
              <div
                className={styles.faqContent}
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonFaq;