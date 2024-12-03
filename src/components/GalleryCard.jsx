import React from "react";
import "../styles/GalleryCard.css";

const GalleryCard = ({ photo, handleModalOpen }) => {
  const { title, src, alt, description } = photo;

  return (
    <div className="card">
      <div className="card__content">
        <img src={src} alt={alt} className="card__pic" />
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
      </div>
      <button className="card__btn" onClick={() => handleModalOpen(photo)}>
        View Details
      </button>
    </div>
  );
};

export default GalleryCard;
