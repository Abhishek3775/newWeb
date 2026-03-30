import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import hamburger from "../assets/hamburger.png";
import user from "../assets/user.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isLightPage = ["/about", "/", "/egc-signature", "/reviews"].includes(
    location.pathname
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setMenuOpen(false);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`main-header ${scrolled || isLightPage ? "scrolled" : ""}`}
    >
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-circle">
            <span className="logo-icon">E</span>
          </div>
          <div className="logo-text">
            <span className="logo-title">ELITE GLOBAL</span>
            <span className="logo-subtitle">LUXURY TRAVEL</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className={`main-nav ${menuOpen ? "active" : ""}`}>
          {/* Search inside nav (desktop like screenshot) */}
          <button className="icon-btn nav-search-btn" aria-label="Search">
            <FaSearch className="icon-image" />
          </button>

          <Link to="/about" className={`nav-link ${isActive("/about")}`}>
            ABOUT US
          </Link>

          {/* Services Dropdown */}
          <div className="nav-item dropdown">
            <Link
              to="/services"
              className={`nav-link ${isActive("/services")}`}
            >
              SERVICES
            </Link>
            <div className="dropdown-menu">
              <Link to="/private-aviation" className="dropdown-link">
                Private Aviation
              </Link>
              <Link to="/cruises" className="dropdown-link">
                Cruises
              </Link>
            </div>
          </div>

          {/* Destinations Dropdown */}
          <div className="nav-item dropdown">
            <Link
              to="/destinations"
              className={`nav-link ${isActive("/destinations")}`}
            >
              DESTINATIONS
            </Link>
            <div className="dropdown-menu">
              <Link to="/south-africa" className="dropdown-link">
                South Africa
              </Link>
              <Link to="/japan" className="dropdown-link">
                Japan
              </Link>
              <Link to="/itinerary" className="dropdown-link">
                Itinerary
              </Link>
            </div>
          </div>

          <Link
            to="/experiences"
            className={`nav-link ${isActive("/experiences")}`}
          >
            EXPERIENCES
          </Link>

          <Link
            to="/accommodation"
            className={`nav-link ${isActive("/accommodation")}`}
          >
            ACCOMMODATION
          </Link>

          <Link to="/reviews" className={`nav-link ${isActive("/reviews")}`}>
            REVIEWS
          </Link>

          <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>
            CONTACT
          </Link>

          {/* Hamburger Dropdown (Desktop) */}
          <div className="nav-item dropdown hamburger-dropdown desktop-only">
            <button className="icon-btn hamburger-hover-btn" aria-label="Menu">
              <img
                src={hamburger}
                alt="hamburger menu"
                className="icon-image"
              />
            </button>

            <div className="dropdown-menu hamburger-menu">
              <Link to="/calender" className="dropdown-link">
                CALENDER
              </Link>
              <Link to="/blog" className="dropdown-link">
                BLOG
              </Link>
            </div>
          </div>
        </nav>

        {/* Right Side */}
        <div className="header-actions">
          <button className="icon-btn user-btn" aria-label="User">
            <img src={user} alt="User" className="icon-image" />
          </button>

          <Link to="/contact" className="enquire-btn">
            Enquire Now
          </Link>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;