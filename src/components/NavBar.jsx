import React, { useState, useEffect, useRef } from "react";
import "../styles/NavBar.css";

const NavBar = ({ setPage, title }) => {
  const navRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("GalleryGlimpse");

  useEffect(() => {
    const handlePageChange = (event) => {
      if (event.target.tagName === "Li") {
        event.preventDefault();
        window.history.pushState(null, "", event.target.pathname);
        setPage(event.target.pathname);
      }
    };

    const navElement = navRef.current;
    navElement.addEventListener("click", handlePageChange);

    return () => {
      navElement.removeEventListener("click", handlePageChange);
    };
  }, [setPage, title]);

  return (
    <header className="header">
      <h1 className="header__title">{currentTitle}</h1>

      <nav className="nav" ref={navRef}>
        {/* Hamburger Menu */}
        <button
          className="nav__mobile-toggle"
          aria-label="hamburger menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu*/}
        <ul className={`nav__menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/membership">Become a Member</a>
          </li>
          <li
            className="dropdown"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Tools</span> <span className="dropdown__icon">▼</span>
            {isDropdownOpen && (
              <ul className="dropdown__content">
                <li>
                  <a
                    href="https://www.iloveimg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Edit Image
                  </a>
                </li>
                <li>
                  <a
                    href="https://imageresizer.com/image-compressor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Image Compressor
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
