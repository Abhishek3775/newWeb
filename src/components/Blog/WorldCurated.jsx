import React, { useState } from 'react';
import styles from './WorldCurated.module.css';

import bg from "../../assets2/IndividualBlog/8.png"

const WorldCurated = ({ backgroundImage }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => {
          setEmail('');
          setIsSubmitted(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <div 
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage || bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.textGroup}>
          <p className={styles.stayLabel}>Stay Inspired</p>
          <h1 className={styles.mainTitle}>The World, Curated</h1>
          <p className={styles.description}>
            Receive our monthly edit of extraordinary destinations, private access opportunities, and bespoke journey ideas - delivered with discretion.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading || isSubmitted}
            >
              {isLoading ? 'SUBSCRIBING...' : isSubmitted ? '✓ SUBSCRIBED' : 'SUBSCRIBE'}
            </button>
          </div>

          {isSubmitted && (
            <p className={styles.successMessage}>
              Thank you for subscribing! Check your email for confirmation.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default WorldCurated;