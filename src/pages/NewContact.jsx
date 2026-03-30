import React from 'react'
import styles from './NewContact.module.css'; 

import phoneIcon from "../assets/phone1.png";
import phoneIcon1 from "../assets/phone.png";
import emailIcon from "../assets/msg1.png";
import locationIcon from "../assets/location.png";
import userIcon from "../assets/user.png";
import calendarIcon from "../assets/calender.png";
import messageIcon from "../assets/msg.png";
import sendIcon from "../assets/send.png";
import clockIcon from "../assets/clock.png";
import mailSmallIcon from "../assets/msg.png";
import flagUs from "../assets/flagUs.png";
import EnquirySection from '../components/Contact/EnquirySection';

function NewContact() {
  return (
    <>
    {/* first section  */}
    <section className={styles.firstSection}>
        <h1>TELL US ABOUT YOUR VISION</h1>
    </section>


    {/* second section  */}


{<EnquirySection/>}
    </>
  )
}

export default NewContact