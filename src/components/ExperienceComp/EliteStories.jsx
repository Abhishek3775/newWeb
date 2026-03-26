import React from "react";
import "./EliteStories.css";
import { FaStar } from "react-icons/fa";

const EliteStories = () => {
  return (
    <section className="elite-story-section">
      <div className="elite-story-container">
        {/* HEADER */}
        <div className="elite-story-header">
          <p className="elite-story-subtitle">CLIENT STORIES</p>
          <h2 className="elite-story-title">Journeys That Inspire</h2>
          <p className="elite-story-desc">
            Hear from travelers who have experienced the Elite Global Concierge difference.
          </p>
        </div>

        {/* MAIN FEATURE STORY */}
        <div className="elite-story-feature">
          <div className="elite-story-left">
            <div className="elite-story-quote">
              <div className="elite-story-rating">99</div>
              <p>
                “EGC arranged a once-in-a-lifetime safari that exceeded every
                expectation. From the private game drives to the surprise bush
                dinner under the stars—pure magic.”
              </p>

              <div className="elite-story-user">
                <img
                  src="https://i.pravatar.cc/40?img=11"
                  alt="user"
                  className="elite-story-avatar"
                />
                <div>
                  <h4>Alexandra Morrison</h4>
                  <span>New York, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="elite-story-right">
            <div className="elite-story-exp-box">
              <h5>EXPERIENCE</h5>
              <h3>African Safari</h3>
              <div className="elite-story-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="elite-story-star" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OTHER TESTIMONIALS */}
        <div className="elite-story-grid">
          <div className="elite-story-card">
            <div className="elite-story-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="elite-story-star" />
              ))}
            </div>
            <p>
              “The attention to detail was extraordinary. Private tea ceremonies,
              exclusive temple access—experiences money alone cannot buy.”
            </p>
            <div className="elite-story-trip">Japanese Cultural Tour</div>
            <div className="elite-story-person">
              <img
                src="https://i.pravatar.cc/40?img=15"
                alt="client"
                className="elite-story-avatar"
              />
              <div>
                <h4>James Chen</h4>
                <span>Singapore</span>
              </div>
            </div>
          </div>

          <div className="elite-story-card">
            <div className="elite-story-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="elite-story-star" />
              ))}
            </div>
            <p>
              “Our honeymoon was absolutely perfect. The overwater villa, the
              private dinners on the beach—EGC thought of everything.”
            </p>
            <div className="elite-story-trip">Maldives Honeymoon</div>
            <div className="elite-story-person">
              <img
                src="https://i.pravatar.cc/40?img=32"
                alt="client"
                className="elite-story-avatar"
              />
              <div>
                <h4>Isabella & Marco Rossi</h4>
                <span>Milan, Italy</span>
              </div>
            </div>
          </div>

          <div className="elite-story-card">
            <div className="elite-story-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="elite-story-star" />
              ))}
            </div>
            <p>
              “Helicopter transfers, private ski instructors, and the most
              incredible chalet I’ve ever stayed in. Simply world-class.”
            </p>
            <div className="elite-story-trip">Swiss Alps Adventure</div>
            <div className="elite-story-person">
              <img
                src="https://i.pravatar.cc/40?img=45"
                alt="client"
                className="elite-story-avatar"
              />
              <div>
                <h4>William Sterling</h4>
                <span>London, UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteStories;