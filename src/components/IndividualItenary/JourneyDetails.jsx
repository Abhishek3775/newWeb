import React, { useState } from "react";
import styles from "./JourneyDetails.module.css";

// PNG Icons
import faqIcon from "../../assets/faq-icon.png";
import passportIcon from "../../assets/passport.png";
import paymentIcon from "../../assets/payment.png";
import visaIcon from "../../assets/visa.png";
import insuranceIcon from "../../assets/insurance.png";
import fileIcon from "../../assets/file.png";
import downloadIcon from "../../assets/download.png";
import phoneIcon from "../../assets/phone.png";

const faqData = [
  {
    question: "What is the physical activity level required?",
    answer:
      "This journey has a moderate activity level. Guests should be comfortable walking on uneven surfaces and climbing stairs. Many shore excursions involve walking 2-3 hours. Optional fortress climbs may be strenuous. Please contact us if you have specific mobility concerns.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations are subject to our booking terms and conditions. We recommend reviewing your booking agreement for full details.",
  },
  {
    question: "Are flights included in the price?",
    answer:
      "International and domestic flights are not included unless specifically stated in your package details.",
  },
  {
    question: "What is included in the all-inclusive experience?",
    answer:
      "Meals, select beverages, guided shore excursions, and onboard enrichment programs are included.",
  },
  {
    question: "What should I pack?",
    answer:
      "We recommend comfortable walking shoes, lightweight clothing, swimwear, and a light jacket for evenings.",
  },
  {
    question: "Is travel insurance required?",
    answer:
      "Travel insurance is strongly recommended and may be required depending on your itinerary and country of residence.",
  },
];

const travelRequirements = [
  {
    icon: passportIcon,
    title: "Passport Validity",
    text: "Valid passport required with 6+ months remaining validity",
  },
  {
    icon: visaIcon,
    title: "Visa Requirements",
    text: "No visa required for US, UK, EU citizens (90-day Schengen)",
  },
  {
    icon: insuranceIcon,
    title: "Travel Insurance",
    text: "Comprehensive coverage strongly recommended",
  },
  {
    icon: paymentIcon,
    title: "Payment Methods",
    text: "Credit card, wire transfer, or certified check accepted",
  },

];

const documents = [
  { name: "Journey Brochure", size: "4.3MB" },
  { name: "Deck Plans", size: "1.8 MB" },
  { name: "Packing Guide", size: "520KB" },
  { name: "Pre-Departure Information", size: "2.1 MB" },
];

const JourneyDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subHeading}>ESSENTIAL INFORMATION</p>
          <h2 className={styles.heading}>Journey Details</h2>
          <p className={styles.description}>
            Everything you need to know before embarking on your Adriatic adventure.
          </p>
        </div>

        <div className={styles.grid}>
          {/* LEFT FAQ */}
          <div className={styles.leftPanel}>
            <div className={styles.faqHeader}>
              <img src={faqIcon} alt="FAQ" className={styles.smallIcon} />
              <span>Frequently Asked Questions</span>
            </div>

            <div className={styles.faqList}>
              {faqData.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div key={index} className={styles.faqItem}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{item.question}</span>
                      <span className={styles.arrow}>{isActive ? "⌃" : "⌄"}</span>
                    </button>

                    {isActive && (
                      <div className={styles.faqAnswer}>
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className={styles.rightPanel}>
            {/* Travel Requirements */}
            <div className={styles.infoBlock}>
              <h3 className={styles.blockTitle}>Travel Requirements</h3>

              <div className={styles.requirementBox}>
                {travelRequirements.map((item, index) => (
                  <div key={index} className={styles.requirementItem}>
                    <img src={item.icon} alt={item.title} className={styles.reqIcon} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Documents */}
            <div className={styles.infoBlock}>
              <h3 className={styles.blockTitle}>Download Documents</h3>

              <div className={styles.documentBox}>
                {documents.map((doc, index) => (
                  <div key={index} className={styles.documentItem}>
                    <div className={styles.documentLeft}>
                      <img src={fileIcon} alt="File" className={styles.docIcon} />
                      <span>{doc.name}</span>
                    </div>

                    <div className={styles.documentRight}>
                      <span>{doc.size}</span>
                      <img src={downloadIcon} alt="Download" className={styles.downloadIcon} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Box */}
            <div className={styles.contactBox}>
              <h3>Questions?</h3>
              <p>Our journey specialists are available 24/7 to assist you.</p>

              <button className={styles.callButton}>
                <img src={phoneIcon} alt="Phone" />
                <span>+1(800) 554-7016</span>
              </button>

              <p className={styles.emailText}>
                Or email us at journey@elitecruising.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyDetails;