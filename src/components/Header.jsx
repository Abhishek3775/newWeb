import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isLightPage = [
    "/about",
  ].includes(location.pathname);

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
    <header className={`main-header ${scrolled || isLightPage ? "scrolled" : ""}`}>
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
          <Link to="/about" className={`nav-link ${isActive("/about")}`}>
            ABOUT
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

          <Link
            to="/calender"
            className={`nav-link ${isActive("/calender")}`}
          >
            CALENDER
          </Link>

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
          <Link to="/blog" className={`nav-link ${isActive("/blog")}`}>
            BLOG
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <FaSearch />
          </button>
          <button className="icon-btn" aria-label="User">
            <FaUser />
          </button>
          <Link to="/contact" className="enquire-btn">
            Enquire Now
          </Link>
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
