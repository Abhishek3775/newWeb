import React, { useState, useEffect } from "react";
import "./ExperienceSection.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import img1 from "../../assets/rahino1.jpg";
import img2 from "../../assets/rahino2.jpg";
import img3 from "../../assets/rahino3.jpg";
import tick from "../../assets/correct.png";

import timeIcon from "../../assets/time.png";
import peopleIcon from "../../assets/people.png";
import calendarIcon from "../../assets/calender.png";

const data = [
  {
    tab: "TRACKING EXPERIENCE",
    title: "Morning Rhino Tracking Walk",
    price: "£2,800",
    image: img1,
    duration: "4 hours",
    guests: "2-4 guests",
    availability: "Daily, weather permitting",
    description:
      "Begin at sunrise as expert Shangaan trackers guide you on foot through rhino territory. Learn to read fresh spoor and natural signs as you move quietly across open plains and acacia woodland. The experience ends with a traditional bush breakfast and fireside stories.",
    includes: [
      "Private access to protected rhino habitat",
      "Guided walking safari with expert trackers",
      "Armed ranger escort for safety",
      "Bush breakfast or refreshments",
      "Conservation briefing and wildlife insights",
    ],
  },
  {
    tab: "CONSERVATION SIGNATURE",
    title: "Rhino Conservation VIP Trek",
    price: "£5,500",
    image: img2,
    duration: "Full Day",
    guests: "2-6 guests",
    availability: "Year-round (subject to weather conditions)",
    description:
      "Spend an exclusive day in rhino conservation. Enjoy private transfers to a reserve, a guided walking safari with expert trackers, insights into anti-poaching efforts, and a gourmet bush lunch overlooking the savannah, followed by a brief discussion with conservation leaders.",
    includes: [
      "Private access to protected rhino habitat",
      "Guided walking safari with expert trackers",
      "Armed ranger escort for safety",
      "Bush breakfast or refreshments",
      "Conservation briefing and wildlife insights",
    ],
  },
  {
    tab: "EXCLUSIVE ENCOUNTER",
    title: "Private Rhino Trekking",
    price: "£1,500",
    image: img3,
    duration: "3 hours",
    guests: "2-4 guests",
    availability: "Year-round, advance booking required",
    description:
      "Join a private rhino trek in a protected South African reserve. Walk with expert trackers and armed rangers through pristine bushland to encounter these endangered giants while learning about their behaviour and conservation.",
    includes: [
      "Private access to protected rhino habitat",
      "Guided walking safari with expert trackers",
      "Armed ranger escort for safety",
      "Bush breakfast or refreshments",
      "Conservation briefing and wildlife insights",
    ],
  },
];

const ExperienceSection = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const next = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const current = data[index];

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="exp-section">
      <div className="exp-container">
        {/* HEADER */}
        <div className="exp-header">
          <p className="exp-subtitle">OUR OFFERINGS</p>
          <h2 className="exp-title">Choose Your Experience</h2>

          <div className="exp-tabs">
            {data.map((item, i) => (
              <button
                key={i}
                className={index === i ? "active" : ""}
                onClick={() => setIndex(i)}
              >
                {item.tab}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN WRAPPER */}
        <div className="exp-wrapper">
          {/* LEFT ARROW */}
          <button className="exp-arrow exp-arrow-left" onClick={prev}>
            <FaChevronLeft />
          </button>

          {/* CARD */}
          <div className={`exp-card ${index === 1 ? "reverse" : ""}`}>
            {/* IMAGE */}
            <div className="exp-image">
              <img src={current.image} alt={current.title} />

              <div className="exp-price-tag">
                <span>FROM</span>
                <h4>
                  {current.price}
                  <p>per person</p>
                </h4>
              </div>
            </div>

            {/* DETAILS */}
            <div className="exp-details">
              <p className="exp-small-heading">{current.tab}</p>

              <h3 className="exp-experience-title">{current.title}</h3>

              <p className="exp-description">{current.description}</p>

              <div className="exp-meta">
                <span>
                  <img src={timeIcon} alt="time" />
                  {current.duration}
                </span>
                <span>
                  <img src={peopleIcon} alt="guests" />
                  {current.guests}
                </span>
                <span>
                  <img src={calendarIcon} alt="calendar" />
                  {current.availability}
                </span>
              </div>

              <div className="exp-divider"></div>

              <div className="exp-includes">
                <h4>INCLUDES</h4>

                <div className="exp-includes-grid">
                  {current.includes.map((item, i) => (
                    <p key={i}>
                      <span className="tick"><img src={tick} alt="" /></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="exp-buttons">
                <button className="exp-btn-outline" onClick={openModal}>
                  VIEW MORE
                </button>

                <button className="exp-btn-primary">
                  RESERVE EXPERIENCE <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button className="exp-arrow exp-arrow-right" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* =========================
          POPUP MODAL
      ========================= */}
      {showModal && (
        <div className="exp-modal-overlay" onClick={closeModal}>
          <div className="exp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="exp-modal-close" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="exp-modal-left">
              <img src={current.image} alt={current.title} />
            </div>

            <div className="exp-modal-right">
              <h2 className="exp-modal-title">Start Your Journey Today</h2>

              <div className="exp-modal-form">
                <h4>GUEST INFORMATION</h4>

                <div className="exp-modal-row exp-modal-row-3">
                  <select>
                    <option>Title*</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                    <option>Dr</option>
                  </select>

                  <input type="text" placeholder="First Name*" />
                  <input type="text" placeholder="Last Name*" />
                </div>

                <div className="exp-modal-row exp-modal-row-2">
                  <input type="text" placeholder="🇮🇳 Phone Number*" />
                  <input type="email" placeholder="Email Address*" />
                </div>

                <h4 className="exp-modal-subheading">
                  TELL US MORE ABOUT YOUR RHINO TREKKING EXPERIENCE
                </h4>

                <textarea
                  rows="6"
                  placeholder="Preferred date, number of guests, fitness level, photography interests, and any special requests."
                ></textarea>

                <label className="exp-checkbox">
                  <input type="checkbox" />
                  <span>
                    I accept the <a href="/">Privacy Policy</a>.
                  </span>
                </label>

                <label className="exp-checkbox">
                  <input type="checkbox" />
                  <span>
                    Yes! I would like to receive news, updates, and other
                    information from Elite Global Concierge.
                  </span>
                </label>

                <button className="exp-modal-submit">SPEAK TO AN EXPERT</button>

                <p className="exp-modal-note">
                  To review full details of our affiliated partners who may
                  contact you, and to understand how your information may be
                  used for direct marketing, please refer to our Privacy Policy.
                  If you prefer not to receive marketing communications or wish
                  to limit contact from our affiliates, you may request not to
                  be contacted, unsubscribe at any time, or email us at
                  privacy@eliteglobalconcierge.com. Communications may include
                  calls or messages sent via automated systems. Your consent to
                  receive such communications is not a condition of purchasing
                  our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;