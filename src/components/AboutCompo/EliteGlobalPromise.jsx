import React from "react";
import "./EliteGlobalPromise.css";
import promiseBg from "../../assets/promise-bg.jpg";

const ElitePromiseScope = () => {
  return (
    <section id="elite-promise-root">

      <div className="elite-promise-bg-wrapper">
        <img
          src={promiseBg}
          alt="Luxury Background"
          loading="lazy"
        />
      </div>

      <div className="elite-promise-overlay"></div>

      <div className="elite-promise-inner">

        <div className="elite-promise-header">
          <span className="elite-promise-small">OUR PROMISE</span>
          <h2 className="elite-promise-title">
            WE'LL SHOW YOU THE WORLD
          </h2>
          <p className="elite-promise-sub">
            And in an entirely new light
          </p>
          <p className="elite-promise-text">
            We curate experiences for those who seek to see the world up close —
            foregoing tourist traps in favour of deeper, more intimate <br />
            connections with cultures, places, and moments that transform.
          </p>
        </div>

        <div className="elite-promise-grid">

          <div className="elite-promise-card">
            <div className="elite-promise-number">01</div>
            <h3>Beyond the Ordinary</h3>
            <p>
              We don't do tick lists. Every journey is designed to reveal
              something unexpected, something that stays with you long after you return.
            </p>
          </div>

          <div className="elite-promise-card">
            <div className="elite-promise-number">02</div>
            <h3>Local Expertise</h3>
            <p>
              Our global network of insiders ensures authentic experiences that
              no guidebook could ever offer.
            </p>
          </div>

          <div className="elite-promise-card">
            <div className="elite-promise-number">03</div>
            <h3>Tailored Precision</h3>
            <p>
              Like a perfectly crafted suit, each experience is different
              because each client is different. Your world, your way.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ElitePromiseScope;
