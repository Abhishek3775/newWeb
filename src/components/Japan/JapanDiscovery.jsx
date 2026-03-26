import React from "react";
import "./JapanDiscovery.css";
import teaImage from "../../assets/japanDiscovery.png"; 

const JapanDiscovery = () => {
  return (
    <section className="discovery-section">
      <div className="discovery-container">

        {/* LEFT IMAGE */}
        <div className="discovery-image">
          <img src={teaImage} alt="Japanese Tea Ceremony" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="discovery-content">
          <div className="content-top">
            <h2>The Art of Japanese Discovery</h2>

            <p>
              Japan reveals itself in whispered moments—the flutter of a silk kimono
              against centuries-old stone, the precise arc of a tea master's gesture,
              the silent majesty of Mount Fuji emerging through morning mist.
              Our bespoke journeys unlock doors that remain closed to ordinary travelers,
              offering you access to imperial gardens after hours, private kaiseki dinners
              with three-Michelin-starred chefs, and intimate encounters with living national treasures.
            </p>
          </div>

          {/* STATS STRIP */}
          <div className="stats-strip">
            <div className="stat">
              <h3>47</h3>
              <span>PREFECTURES</span>
            </div>

            <div className="divider"></div>

            <div className="stat">
              <h3>23</h3>
              <span>UNESCO SITES</span>
            </div>

            <div className="divider"></div>

            <div className="stat">
              <h3>∞</h3>
              <span>POSSIBILITIES</span>
            </div>
          </div>

          {/* QUOTE */}
          <div className="discovery-quote">
            <p>
              "Japan is not just a destination – it is a transformation."
            </p>
            <span>— The Elite Concierge Philosophy</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JapanDiscovery;
