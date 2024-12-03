import { useState } from "react";
import "../styles/Gallery.css";
import GalleryCard from "./GalleryCard";
import GalleryCardModal from "./GalleryCardModal";

const Gallery = ({
  updateComments,
  toggleFavorite,
  selectedPhoto,
  setSelectedPhoto,
  photos,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {photos.map((photo) => (
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
          updateComments={updateComments}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default Gallery;
