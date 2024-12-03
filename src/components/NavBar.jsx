import React, { useState, useEffect, useRef } from "react";
import "../styles/NavBar.css";
import ThemeOption from "./ThemeOption";

const NavBar = ({ setPage }) => {
  const navRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [currentTitle, setCurrentTitle] = useState("GalleryGlimpse");

  // const pageTitles = {
  //   "/": "GalleryGlimpse",
  //   "/gallery": "Gallery",
  //   "/membership": "Join Membership",
  // };

  useEffect(() => {
    const handlePageChange = (event) => {
      const target = event.target.closest("a");
      if (target) {
        const newPath = target.getAttribute("href");

        if (
          newPath.startsWith("http") ||
          target.getAttribute("target") === "_blank"
        ) {
          return;
        }

        event.preventDefault();
        window.history.pushState(null, "", newPath);
        setPage(newPath);
        // setCurrentTitle(pageTitles[newPath] || "GalleryGlimpse");
      }
    };

    const navElement = navRef.current;
    navElement.addEventListener("click", handlePageChange);

    return () => {
      navElement.removeEventListener("click", handlePageChange);
    };
  }, [setPage]);

  return (
    <header className="header">
      <a href="/">
        <h1 className="header__title">GalleryGlimpse</h1>
      </a>

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
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button>
              Tools <span className="dropdown__icon">▼</span>
            </button>

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

      <div className="theme-options">
        <span>Theme</span>
        <ThemeOption theme="dark" />
        <ThemeOption theme="light" />
      </div>
    </header>
  );
};

export default NavBar;
