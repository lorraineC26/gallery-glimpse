import { useState } from "react";
import "../styles/Gallery.css";
import { catPhotos } from "../mock/photos";
import GalleryCard from "./GalleryCard";
import GalleryCardModal from "./GalleryCardModal";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleModalOpen = (photo) => {
    setIsModalOpen(true);
    setSelectedPhoto(photo);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>

      <section className="card-list">
        {catPhotos.map((photo) => (
          <GalleryCard
            key={photo.id}
            photo={photo}
            handleModalOpen={handleModalOpen}
          />
        ))}
      </section>

      {isModalOpen && (
        <GalleryCardModal
          isModalOpen={isModalOpen}
          selectedPhoto={selectedPhoto}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Gallery;
