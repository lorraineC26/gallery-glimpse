import React from "react";
import "../styles/Confirmation.css";

const Confirmation = () => {
  return (
    <div className="confirm-container">
      <h2>Thank you for joining GalleryGlimpse!</h2>
      <section className="success-message">
        <p>
          We have received your registration. Welcome to be part of
          GalleryGlimpse!
        </p>
        <p>
          Please note that <span>only the first registration</span> is
          considered. Duplicate registrations will not be accepted.
        </p>
        <p>
          If you would like to modify your name, password, or newsletter
          preferences, please email us at{" "}
          <a href="mailto:support@galleryglimpse.com">
            support@galleryglimpse.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Confirmation;
