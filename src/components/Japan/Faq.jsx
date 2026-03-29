import React, { useState } from "react";
import styles from "./Faq.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


const faqData = [
  {
    question: "What is the activity level of this journey?",
    answer:
      "This journey is rated as moderate. While we don't undertake strenuous hikes, there is considerable walking on temple grounds, through city streets, and up some stairs. A reasonable level of fitness is recommended.",
  },
  {
    question: "Can the itinerary be customized?",
    answer:
      "Yes, itineraries can be tailored to suit your preferences and travel style.",
  },
  {
    question: "What is included in the helicopter transfer?",
    answer:
      "The helicopter transfer includes private charter, luggage handling, and scenic aerial views.",
  },
  {
    question: "How exclusive are the cultural experiences?",
    answer:
      "Experiences are curated with local experts and offer exclusive access not available to regular tourists.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.srvFaqSection}>
        <h5 className={styles.srvFaqSubtitle}>QUESTIONS</h5>
        <h2 className={styles.srvFaqTitle}>Frequently Asked</h2>
        <div className={styles.srvFaqContainer}>
          {faqData.map((faq, index) => (
            <div key={index} className={`${styles.srvFaqItem} ${activeIndex === index ? styles.active : ""}`}>
              <button className={styles.srvFaqQuestion} onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={styles.srvFaqIcon}>
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              {activeIndex === index && (
                <div className={styles.srvFaqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
  );
}
