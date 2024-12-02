import React, { useEffect, useRef } from "react";
import "../styles/Home.css";

import landingPic from "../../public/camera-girl.jpg";

const Home = ({ setPage }) => {
  const homeRef = useRef(null);

  useEffect(() => {
    const handlePageChange = (event) => {
      if (event.target.tagName === "A") {
        event.preventDefault();
        window.history.pushState(null, "", event.target.pathname);
        setPage(event.target.pathname);
      }
    };

    const homeRefEl = homeRef.current;
    homeRefEl.addEventListener("click", handlePageChange);

    return () => {
      homeRefEl.removeEventListener("click", handlePageChange);
    };
  }, []);

  return (
    <div className="home-container" ref={homeRef}>
      <img
        src={landingPic}
        alt="woman using Nikon DSLR camera"
        className="home__hero-pic"
      />
      <p className="home__slogan">
        A Picture for Every Story, A Glimpse into Beauty
      </p>

      <section className="features-container">
        <h2 className="features__title">What You Can Do at GalleryGlimpse:</h2>
        <ul className="features__list">
          <div className="features__card">Browse images</div>
          <div className="features__card">Mark favorites</div>
          <div className="features__card">Customize details</div>
        </ul>
      </section>

      <a href="/gallery">Let's get started!</a>
    </div>
  );
};

export default Home;
