import React from "react";
import styles from "./BespokeEnquiry.module.css";

import bgImage from "../../assets/bespoke-bg.png";
import phoneIcon from "../../assets/phone1.png";
import mailIcon from "../../assets/msg1.png";
import clockIcon from "../../assets/clock.png";
import star from "../../assets/star-list.png";

const BespokeEnquiry = () => {
  return (
    <section
      className={styles.bespokeSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* <div className={styles.overlay}></div> */}

      <div className={styles.wrapper}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <p className={styles.smallTitle}>BESPOKE ENQUIRY</p>

          <h2 className={styles.heading}>Begin Your Extraordinary Journey</h2>

          <p className={styles.desc}>
            Every Aurum journey begins with a conversation. Share your vision -
            however specific or open - ended - and our team of expert travel
            architects will craft an itinerary that exceeds imagination.
          </p>

          <ul className={styles.list}>
            <li>
              {" "}
              <img src={star} alt="star list" /> Personal travel architect
              assigned within 2 hours
            </li>
            <li>
              {" "}
              <img src={star} alt="star list" /> Complimentary consultation with
              zero obligation
            </li>
            <li>
              {" "}
              <img src={star} alt="star list" /> Access to properties not listed
              publicly
            </li>
            <li>
              {" "}
              <img src={star} alt="star list" /> 24/7 on-ground support
              throughout your journey
            </li>
          </ul>

          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <img src={phoneIcon} alt="call" />
              <div>
                <p>CALL US</p>
                <span>+44 207 4269888</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <img src={mailIcon} alt="email" />
              <div>
                <p>EMAIL</p>
                <span>concierge@aurumtravel.com</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <img src={clockIcon} alt="available" />
              <div>
                <p>AVAILABLE</p>
                <span>24 Hours, 365 Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <form className={styles.form}>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label>FULL NAME*</label>
                <input type="text" placeholder="Your name" />
              </div>

              <div className={styles.field}>
                <label>EMAIL*</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className={styles.field}>
              <label>DREAM DESTINATION(S)</label>
              <input
                type="text"
                placeholder="e.g. Japan & Africa, anywhere..."
              />
            </div>

            <div className={styles.row2}>
              <div className={styles.field}>
                <label>TRAVEL DATES</label>
                <input type="text" placeholder="Approximate dates" />
              </div>

              <div className={styles.field}>
                <label>NO. OF GUESTS</label>
                <select>
                  <option>Select</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label>BUDGET RANGE [PER PERSON]</label>
              <select>
                <option>Select budget range</option>
                <option>$2,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $20,000</option>
                <option>$20,000+</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>TELL US ABOUT YOUR VISION</label>
              <textarea
                rows="6"
                placeholder="Describe your ideal journey - no request is too extraordinary for our team..."
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              SUBMIT ENQUIRY <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BespokeEnquiry;
