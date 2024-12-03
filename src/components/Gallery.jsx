import React from "react";
import "../styles/Gallery.css";
import { catPhotos } from "../mock/photos";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>

      <section className="card-list">
        {catPhotos.map((photo) => (
          <GalleryCard key={photo.id} props={photo} />
        ))}
      </section>
    </div>
  );
};

export default Gallery;
