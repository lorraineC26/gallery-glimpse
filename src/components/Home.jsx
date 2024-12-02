import React from "react";
import "../styles/Home.css";

import landingPic from "../../public/camera-girl.jpg";

const Home = () => {
  return (
    <div className="home-container">
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
    </div>
  );
};

export default Home;
