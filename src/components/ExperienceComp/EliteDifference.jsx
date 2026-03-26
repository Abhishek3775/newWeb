import React from "react";
import "./EliteDifference.css";
import { LuShield } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { LuClock3 } from "react-icons/lu";
import { LuAward } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";

const EliteDifference = () => {
  return (
    <section className="elite-diff-section">
      <div className="elite-diff-container">
        {/* Header */}
        <div className="elite-diff-header">
          <div className="elite-diff-heading">
            <p className="elite-diff-subtitle">THE EGC DIFFERENCE</p>
            <h2 className="elite-diff-title">
              Why Choose Elite Global Concierge
            </h2>
            <p className="elite-diff-text">
              For over 20 years, we’ve been trusted by discerning travelers to
              deliver extraordinary experiences that exceed expectations.
            </p>
          </div>

          <div className="elite-diff-years">
            <h3>20+</h3>
            <p>YEARS OF EXCELLENCE</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="elite-diff-grid">
          <div className="elite-diff-card">
            <LuShield className="elite-diff-icon" />
            <h4>24/7 Concierge Support</h4>
            <p>
              Round-the-clock assistance from your dedicated travel specialist,
              anywhere in the world.
            </p>
          </div>

          <div className="elite-diff-card">
            <CiGlobe className="elite-diff-icon" />
            <h4>Global Access</h4>
            <p>
              Exclusive partnerships with over 2,000 luxury properties and
              experiences across 100+ countries.
            </p>
          </div>

          <div className="elite-diff-card">
            <LuClock3 className="elite-diff-icon" />
            <h4>Tailored Itineraries</h4>
            <p>
              Every journey is meticulously crafted to your preferences, timing,
              and travel style.
            </p>
          </div>

          <div className="elite-diff-card">
            <LuAward className="elite-diff-icon" />
            <h4>Award-Winning Service</h4>
            <p>
              Recognized by leading travel publications for exceptional client
              experiences.
            </p>
          </div>

          <div className="elite-diff-card">
            <LuUser className="elite-diff-icon" />
            <h4>Expert Local Guides</h4>
            <p>
              Handpicked specialists who bring destinations to life with insider
              knowledge.
            </p>
          </div>

          <div className="elite-diff-card">
            <LuSparkles className="elite-diff-icon" />
            <h4>Exclusive Privileges</h4>
            <p>
              VIP amenities, private access, and unique experiences unavailable
              elsewhere.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="elite-diff-stats">
          <div>
            <h3>50K+</h3>
            <p>HAPPY TRAVELERS</p>
          </div>
          <div>
            <h3>100+</h3>
            <p>COUNTRIES</p>
          </div>
          <div>
            <h3>2,000+</h3>
            <p>PARTNER PROPERTIES</p>
          </div>
          <div>
            <h3>98%</h3>
            <p>CLIENT SATISFACTION</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteDifference;
