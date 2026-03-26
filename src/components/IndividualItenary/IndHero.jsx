import React from "react";

import bgImage from "../../assets/ind.png";
import calendarIcon from "../../assets/calender.png";
import locationIcon from "../../assets/location.png";
import peopleIcon from "../../assets/people.png";

const StatItem = ({ icon, value, label }) => (
  <div className="flex items-start gap-2.5 sm:gap-3 min-w-[95px] sm:min-w-[110px]">
    <img
      src={icon}
      alt={label}
      className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px] mt-[4px] object-contain opacity-90"
    />
    <div className="leading-none">
      <p className="text-white font-light text-[28px] sm:text-[32px] md:text-[34px] lg:text-[36px] leading-none">
        {value}
      </p>
      <p className="text-white/80 text-[10px] sm:text-[11px] md:text-[12px] leading-[1.1] mt-[2px] font-light">
        {label}
      </p>
    </div>
  </div>
);

const IndHero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Adriatic Voyage"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Luxury Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/75 via-[#0d0d0d]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/70 via-transparent to-[#1a0f0f]/20" />

      {/* Top tiny label */}
      <div className="relative z-20 w-full">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 pt-8 sm:pt-10 md:pt-12">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[2px] uppercase text-white/50 font-light">
            THE LUXE VOYAGES
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
          <div className="max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[610px] xl:max-w-[650px] pt-16 sm:pt-20 md:pt-24 lg:pt-0">
            
            {/* Top category */}
            <p className="text-[#C09551] uppercase tracking-[1px] sm:tracking-[1.5px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium mb-6 sm:mb-7 md:mb-8">
              Expedition Cruises
            </p>

            {/* Heading */}
            <h1 className="text-white font-light text-[38px] sm:text-[50px] md:text-[60px] lg:text-[72px] xl:text-[78px] leading-[1.05] tracking-[-0.02em]">
              Adriatic Voyage
            </h1>

            {/* Sub Heading */}
            <h2 className="text-[#C09551] font-light text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] xl:text-[54px] leading-[1.08] tracking-[-0.02em] mt-1 sm:mt-2">
              Croatia, Montenegro &amp; Greece
            </h2>

            {/* Description */}
            <p className="text-white/75 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.9] font-light max-w-[620px] mt-7 sm:mt-8 md:mt-10">
              Embark on an extraordinary journey through the crystalline waters of
              the Adriatic Sea, exploring ancient walled cities, hidden coves, and
              the timeless beauty of the Mediterranean coast.
            </p>

            {/* Divider */}
            <div className="w-full max-w-[500px] h-px bg-white/10 mt-7 sm:mt-8 md:mt-9" />

            {/* Rating */}
            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
              <div className="flex items-center gap-[2px] text-[#C09551] text-[12px] sm:text-[13px] md:text-[14px] tracking-[1px]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="text-white/80 text-[13px] sm:text-[14px] md:text-[15px] font-light">
                Exceptional Experience
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-14 gap-y-6 sm:gap-y-7 mt-10 sm:mt-12 md:mt-14">
              <StatItem icon={calendarIcon} value="9" label="Days" />
              <StatItem icon={locationIcon} value="8" label="Destinations" />
              <StatItem icon={peopleIcon} value="48" label="Guests Max" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Explore */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <p className="text-white/80 text-[10px] sm:text-[11px] tracking-[2px] uppercase font-light">
          Explore
        </p>
        <div className="text-white/80 text-[20px] sm:text-[22px] mt-[2px] animate-bounce">
          ˅
        </div>
      </div>
    </section>
  );
};

export default IndHero;