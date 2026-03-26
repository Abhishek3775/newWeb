import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaPaperPlane, FaClock, FaGlobe } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    budget: '',
    timeframe: '',
    referralSource: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `${formData.serviceType} - ${formData.budget}`,
        message: `Service Type: ${formData.serviceType}\nBudget: ${formData.budget}\nTimeframe: ${formData.timeframe}\nReferral: ${formData.referralSource}\n\nMessage:\n${formData.message}`,
        website: 'master'
      });

      if (response.data.success) {
        toast.success('Thank you for contacting us! We will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          serviceType: '',
          budget: '',
          timeframe: '',
          referralSource: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-new">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">GET IN TOUCH</h1>
          <h2 className="hero-subtitle">LET'S CREATE SOMETHING EXTRAORDINARY</h2>
          <p className="hero-text">We're here to turn your vision into reality. Reach out and let's begin your journey.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section">
        <div className="contact-container">
          {/* Left Sidebar */}
          <aside className="contact-sidebar">
            {/* Immediate Assistance */}
            <div className="sidebar-card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <h3>IMMEDIATE ASSISTANCE</h3>
              <p className="card-description">For urgent requests, our team is available 24/7.</p>
              <div className="contact-info-list">
                <a href="tel:+15551234567" className="contact-link">
                  <FaPhone /> +1 (555) 123-4567
                </a>
                <a href="tel:+15559876543" className="contact-link">
                  <FaPhone /> +1 (555) 987-6543
                </a>
              </div>
              <div className="availability">
                <FaClock /> 24/7 Availability
              </div>
            </div>

            {/* Email Us */}
            <div className="sidebar-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <h3>EMAIL US</h3>
              <a href="mailto:concierge@eliteglobal.com" className="email-link">
                <FaEnvelope /> concierge@eliteglobal.com
              </a>
              <p className="response-time">Response within 2 hours</p>
            </div>

            {/* Global Offices */}
            <div className="sidebar-card">
              <div className="card-icon">
                <FaGlobe />
              </div>
              <h3>GLOBAL OFFICES</h3>
              
              <div className="office">
                <h4>Japan <span className="timezone">GMT+9</span></h4>
                <p>Higashihokima-1-2-1 Adachi-Ku<br/>Tokyo 121-0063 JPN</p>
              </div>

              <div className="office">
                <h4>South Africa <span className="timezone">GMT+2</span></h4>
                <p>21 Junction Ave Parktown Johannesburg<br/>2193</p>
              </div>

              <div className="office">
                <h4>United States <span className="timezone">GMT-5</span></h4>
                <p>123 Business Street, Suite 100<br/>New York, NY 10001</p>
              </div>
            </div>
          </aside>

          {/* Right Form Section */}
          <div className="form-section">
            <div className="form-header">
              <span className="form-label"> ENQUIRY FORM</span>
              <h2>TELL US ABOUT YOUR VISION</h2>
              <p>Share your requirements and we'll craft a bespoke solution tailored to your needs.</p>
            </div>

            <form className="luxury-form" onSubmit={handleSubmit}>
              {/* Personal Details */}
              <div className="form-section-title">
                <FaEnvelope /> PERSONAL DETAILS
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>FIRST NAME *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>LAST NAME *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1(555)000-0000"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>SERVICE TYPE *</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Luxury Travel">Luxury Travel</option>
                    <option value="Destination Planning">Destination Planning</option>
                    <option value="Accommodation">Accommodation</option>
                    <option value="Experiences">Experiences</option>
                    <option value="Corporate Events">Corporate Events</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>BUDGET RANGE</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">$ Select budget</option>
                    <option value="Under $10,000">Under $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="Over $100,000">Over $100,000</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>TIMEFRAME</label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                  >
                    <option value="">When do you need this?</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="12+ months">12+ months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>HOW DID YOU HEAR ABOUT US?</label>
                  <select
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Event">Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Your Message */}
              <div className="form-section-title">
                <FaPaperPlane /> YOUR MESSAGE
              </div>

              <div className="form-group">
                <label>TELL US ABOUT YOUR REQUIREMENTS *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your vision, preferences, and any specific requirements. The more detail you provide, the better we can serve you."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="luxury-submit-btn" disabled={loading}>
                {loading ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                <FaPaperPlane />
              </button>

              <p className="privacy-notice">
                By submitting this form, you agree to our privacy policy. Your information will be handled with the utmost discretion.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <span className="section-label">CLIENT TESTIMONIALS</span>
          <blockquote className="testimonial">
            "They made the impossible happen. A private dinner at the Louvre? Done. A helicopter to a glacier for lunch? Effortless."
          </blockquote>
          <p className="testimonial-author">Jonathan M. | New York</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
