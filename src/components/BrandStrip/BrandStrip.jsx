import React from "react";
import "./BrandStrip.css";

/* assets */
import eiffel from "../../assets/eiffel.png";
import vs from "../../assets/vs.png";
import robert from "../../assets/robert-johnson.png";

const logos = [
  eiffel,
  vs,
  robert,
  eiffel,
  vs,
  robert,
  eiffel,
  vs,
];

const BrandStrip = () => {
  return (
    <section className="brand-strip">
      <div className="brand-slider">
        <div className="brand-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="brand-item" key={index}>
              <img src={logo} alt="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
