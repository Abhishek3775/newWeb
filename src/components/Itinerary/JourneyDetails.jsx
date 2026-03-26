import React, { useState } from "react";
import "./JourneyDetails.css";
import {
  FaChevronDown,
  FaGlobe,
  FaPassport,
  FaShieldAlt,
  FaCreditCard,
  FaFilePdf,
  FaPhoneAlt
} from "react-icons/fa";

const faqData = [
  {
    question: "What is the physical activity level required?",
    answer:
      "This journey has a moderate activity level. Guests should be comfortable walking on uneven surfaces and climbing stairs. Many shore excursions involve walking 2-3 hours. Optional fortress climbs may be strenuous. Please contact us if you have specific mobility concerns."
  },
  { question: "What is the cancellation policy?", answer: "Cancellation policies vary depending on booking date. Please contact support for detailed information." },
  { question: "Are flights included in the price?", answer: "International flights are not included unless specified in your package." },
  { question: "What is included in the all-inclusive experience?", answer: "Accommodations, meals, excursions, and gratuities are included." },
  { question: "What should I pack?", answer: "Comfortable walking shoes, lightweight clothing, travel documents, and personal essentials." },
  { question: "Is travel insurance required?", answer: "Travel insurance is strongly recommended for all guests." }
];

const JourneyDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="j-d-section">
      <div className="j-d-container">
        <p className="j-d-sub-heading">ESSENTIAL INFORMATION</p>
        <h2 className="j-d-main-heading">Journey Details</h2>
        <p className="j-d-description">
          Everything you need to know before embarking on your Adriatic adventure.
        </p>

        <div className="j-d-grid">
          {/* Left FAQ */}
          <div className="j-d-faq-section">
            <h4 className="j-d-faq-title">Frequently Asked Questions</h4>

            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="j-d-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <FaChevronDown
                    className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                  />
                </div>

                {activeIndex === index && (
                  <div className="j-d-faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="j-d-right-section">
            {/* Travel Requirements */}
            <div className="j-d-card">
              <h4>Travel Requirements</h4>

              <div className="j-d-info-item">
                <FaPassport className="j-d-icon" />
                <div>
                  <strong>Passport Validity</strong>
                  <p>Valid passport required with 6+ months remaining validity</p>
                </div>
              </div>

              <div className="j-d-info-item">
                <FaGlobe className="j-d-icon" />
                <div>
                  <strong>Visa Requirements</strong>
                  <p>No visa required for US, UK, EU citizens (90-day Schengen)</p>
                </div>
              </div>

              <div className="j-d-info-item">
                <FaShieldAlt className="j-d-icon" />
                <div>
                  <strong>Travel Insurance</strong>
                  <p>Comprehensive coverage strongly recommended</p>
                </div>
              </div>

              <div className="j-d-info-item">
                <FaCreditCard className="j-d-icon" />
                <div>
                  <strong>Payment Methods</strong>
                  <p>Credit card, wire transfer, or certified check accepted</p>
                </div>
              </div>
            </div>

            {/* Download Documents */}
            <div className="j-d-card">
              <h4>Download Documents</h4>

              <div className="j-d-download-item">
                <FaFilePdf />
                <span>Journey Brochure</span>
                <small>4.2MB</small>
              </div>

              <div className="j-d-download-item">
                <FaFilePdf />
                <span>Deck Plans</span>
                <small>1.8MB</small>
              </div>

              <div className="j-d-download-item">
                <FaFilePdf />
                <span>Packing Guide</span>
                <small>520KB</small>
              </div>

              <div className="j-d-download-item">
                <FaFilePdf />
                <span>Pre-Departure Information</span>
                <small>2.1MB</small>
              </div>
            </div>

            {/* Contact */}
            <div className="j-d-contact-card">
              <h4>Questions?</h4>
              <p>Our journey specialists are available 24/7 to assist you.</p>
              <button>
                <FaPhoneAlt /> +1 (800) 554-7016
              </button>
              <small>Or email us at journeys@eliteconcierge.com</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyDetails;
