import React, { useEffect, useRef, useState } from "react";
import styles from "./EnquirySection.module.css";

// icons/images

import phoneIcon from "../../assets/phone1.png";
import phoneIcon1 from "../../assets/phone.png";
import emailIcon from "../../assets/msg1.png";
import locationIcon from "../../assets/location.png";
import userIcon from "../../assets/user.png";
import calendarIcon from "../../assets/calender.png";
import messageIcon from "../../assets/msg.png";
import sendIcon from "../../assets/send.png";
import clockIcon from "../../assets/clock.png";
import mailSmallIcon from "../../assets/msg.png";
// import flagUs from "../../assets/flagUs.png";

// flags
import flagUs from "../../assets/flagUs.png";
import flagCanada from "../../assets/canada.png";
import flagFrance from "../../assets/france.png";
import flagIndia from "../../assets/india-flag.png";
import flagUk from "../../assets/uk.png";

const countryOptions = [
  { code: "+1", name: "United States", flag: flagUs },
  { code: "+1", name: "Canada", flag: flagCanada },
  { code: "+33", name: "France", flag: flagFrance },
  { code: "+91", name: "India", flag: flagIndia },
  { code: "+44", name: "United Kingdom", flag: flagUk },
];

const timeframeOptions = [
  "Immediate / ASAP",
  "Within 1-Week",
  "Within 2-4 Week",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Flexible / No rush",
  "Recurring / Ongoing",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "Prefer not to say",
];

const EnquirySection = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [selectedTimeframe, setSelectedTimeframe] = useState("When do you need this for?");
  const [selectedBudget, setSelectedBudget] = useState("Select budget");

  const [countryOpen, setCountryOpen] = useState(false);
  const [timeframeOpen, setTimeframeOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const countryRef = useRef(null);
  const timeframeRef = useRef(null);
  const budgetRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
      if (timeframeRef.current && !timeframeRef.current.contains(e.target)) {
        setTimeframeOpen(false);
      }
      if (budgetRef.current && !budgetRef.current.contains(e.target)) {
        setBudgetOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className={styles.enquirySection}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.leftPanel}>
          {/* Immediate Assistance */}
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <div className={styles.iconBox}>
                <img src={phoneIcon} alt="phone" />
              </div>
              <h3>IMMEDIATE ASSISTANCE</h3>
            </div>

            <p className={styles.infoText}>
              For urgent requests, our team is available 24/7.
            </p>

            <div className={styles.contactLines}>
              <p><img src={phoneIcon1} alt="phone" className={styles.blackIcon}/> +81 (0) 20 7946 0958</p>
              <p><img src={phoneIcon1} alt="phone" className={styles.blackIcon}/> +27 (212) 555 0198</p>
            </div>

            <div className={styles.bottomNote}>
              <img src={clockIcon} alt="clock" />
              <span>24/7 Availability</span>
            </div>
          </div>

          {/* Email Us */}
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <div className={styles.iconBox}>
                <img src={emailIcon} alt="email" />
              </div>
              <h3>EMAIL US</h3>
            </div>

            <div className={styles.emailLine}>
              <img src={mailSmallIcon} alt="mail" />
              <p>whiteglove@eliteglobalconcierge.com</p>
            </div>

            <p className={styles.responseText}>Response within 2 hours</p>
          </div>

          {/* Global Offices */}
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <div className={styles.iconBox}>
                <img src={locationIcon} alt="location" />
              </div>
              <h3>GLOBAL OFFICES</h3>
            </div>

            <div className={styles.officeBlock}>
              <div className={styles.officeRow}>
                <h4>Japan</h4>
                <span>GMT+9</span>
              </div>
              <p>Higashihokima-1-2-1 Adachi-Ku</p>
              <p>Tokyo 121-0063 JPN</p>
            </div>

            <div className={styles.officeBlock}>
              <div className={styles.officeRow}>
                <h4>South Africa</h4>
                <span>GMT+2</span>
              </div>
              <p>21 Junction Ave Parktown Johannesburg</p>
              <p>2193</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightPanel}>
          <div className={styles.formTopLabel}>
            <span className={styles.topLine}></span>
            <p>ENQUIRY FORM</p>
          </div>

          <div className={styles.formSectionTitle}>
            <img src={userIcon} alt="user" />
            <h3>PERSONAL DETAILS</h3>
          </div>

          <form className={styles.form}>
            {/* Name Row */}
            <div className={styles.rowTwo}>
              <div className={styles.formGroup}>
                <label>FIRST NAME *</label>
                <input type="text" placeholder="Enter your first name" />
              </div>

              <div className={styles.formGroup}>
                <label>LAST NAME *</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>

            {/* Email + Phone */}
            <div className={styles.rowTwo}>
              <div className={styles.formGroup}>
                <label>EMAIL ADDRESS *</label>
                <input type="email" placeholder="your@email.com" />
              </div>

              <div className={styles.formGroup}>
                <label>&nbsp;</label>

                <div className={styles.phoneRow}>
                  {/* Country Dropdown */}
                  <div className={styles.countryDropdownWrapper} ref={countryRef}>
                    <div
                      className={styles.countryCode}
                      onClick={() => setCountryOpen(!countryOpen)}
                    >
                      <img src={selectedCountry.flag} alt={selectedCountry.name} />
                      <span>{selectedCountry.code}</span>
                      <span className={`${styles.dropdownArrow} ${countryOpen ? styles.rotateArrow : ""}`}>
                        ▾
                      </span>
                    </div>

                    {countryOpen && (
                      <div className={styles.countryDropdownMenu}>
                        <input
                          type="text"
                          className={styles.countrySearch}
                          placeholder="Search..."
                        />

                        <div className={styles.countryList}>
                          {countryOptions.map((country, index) => (
                            <div
                              key={index}
                              className={styles.countryOption}
                              onClick={() => {
                                setSelectedCountry(country);
                                setCountryOpen(false);
                              }}
                            >
                              <img src={country.flag} alt={country.name} />
                              <span>{country.name}</span>
                              <small>({country.code})</small>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <input type="text" placeholder="Phone number" />
                </div>
              </div>
            </div>

            {/* Timeframe + Budget */}
            <div className={styles.rowTwo}>
              {/* Timeframe */}
              <div className={styles.formGroup}>
                <label>TIMEFRAME</label>
                <div className={styles.selectWrapper} ref={timeframeRef}>
                  <div
                    className={styles.customSelectBox}
                    onClick={() => setTimeframeOpen(!timeframeOpen)}
                  >
                    <div className={styles.selectLeft}>
                      <img src={calendarIcon} alt="calendar" />
                      <span>{selectedTimeframe}</span>
                    </div>
                    <span className={`${styles.dropdownArrow} ${timeframeOpen ? styles.rotateArrow : ""}`}>
                      ▾
                    </span>
                  </div>

                  {timeframeOpen && (
                    <div className={styles.dropdownMenu}>
                      {timeframeOptions.map((item, index) => (
                        <div
                          key={index}
                          className={`${styles.dropdownItem} ${
                            selectedTimeframe === item ? styles.activeDropdownItem : ""
                          }`}
                          onClick={() => {
                            setSelectedTimeframe(item);
                            setTimeframeOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div className={styles.formGroup}>
                <label>BUDGET RANGE</label>
                <div className={styles.selectWrapper} ref={budgetRef}>
                  <div
                    className={styles.customSelectBox}
                    onClick={() => setBudgetOpen(!budgetOpen)}
                  >
                    <div className={styles.selectLeft}>
                      <span className={styles.currencySymbol}>$</span>
                      <span>{selectedBudget}</span>
                    </div>
                    <span className={`${styles.dropdownArrow} ${budgetOpen ? styles.rotateArrow : ""}`}>
                      ▾
                    </span>
                  </div>

                  {budgetOpen && (
                    <div className={styles.dropdownMenu}>
                      {budgetOptions.map((item, index) => (
                        <div
                          key={index}
                          className={`${styles.dropdownItem} ${
                            selectedBudget === item ? styles.activeDropdownItem : ""
                          }`}
                          onClick={() => {
                            setSelectedBudget(item);
                            setBudgetOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className={styles.formSectionTitle}>
              <img src={messageIcon} alt="message" />
              <h3>YOUR MESSAGE</h3>
            </div>

            <div className={styles.formGroup}>
              <label>TELL US ABOUT YOUR REQUIREMENTS *</label>
              <textarea
                rows="8"
                placeholder="Describe your vision, preferences, and any specific requirements. The more detail you provide, the better we can serve you."
              ></textarea>
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitBtn}>
              <span>SUBMIT ENQUIRY</span>
              <img src={sendIcon} alt="send" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;