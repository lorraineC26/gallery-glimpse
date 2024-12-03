import React from "react";
import "../styles/GalleryCard.css";

const GalleryCard = ({ props }) => {
  const { title, src, alt, description } = props;

  return (
    <div className="card">
      <div className="card__content">
        <img src={src} alt={alt} className="card__pic" />
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
      </div>
      <button className="card__btn">View Details</button>
    </div>
  );
};

export default GalleryCard;
