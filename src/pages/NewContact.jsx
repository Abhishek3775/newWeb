import React from "react";
import styles from "./NewContact.module.css";

import EnquirySection from "../components/Contact/EnquirySection";
import TestimonialSection from "../components/Contact/TestimonialSection";

function NewContact() {
  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.firstSection}>
        <h1>TELL US ABOUT YOUR VISION</h1>
      </section>

      {/* Enquiry Section */}
      <div className={styles.enquiryWrapper}>
        <EnquirySection />
      </div>

      {/* Testimonial Section */}
      <div className={styles.testimonialWrapper}>
        <TestimonialSection />
      </div>
    </div>
  );
}

export default NewContact;