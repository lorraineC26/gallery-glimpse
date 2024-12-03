import { useState } from "react";
import "../styles/Gallery.css";
import { catPhotos } from "../mock/photos";
import GalleryCard from "./GalleryCard";
import GalleryCardModal from "./GalleryCardModal";

const Gallery = () => {
  const [photos, setPhotos] = useState(catPhotos);
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

  const updateComments = (newComment) => {
    if (selectedPhoto) {
      const updatedPhotos = photos.map((photo) => {
        if (photo.id === selectedPhoto.id) {
          return {
            ...photo,
            comments: [...photo.comments, newComment],
          };
        }
        
        return photo;
      });

      setPhotos(updatedPhotos);
      setSelectedPhoto({
        ...selectedPhoto,
        comments: [...selectedPhoto.comments, newComment],
      });
    }
  };

  const toggleFavorite = () => {
    if (selectedPhoto) {
      const updatedPhotos = photos.map((photo) => {
        if (photo.id === selectedPhoto.id) {
          return {
            ...photo,
            isFavorite: !photo.isFavorite,
          };
        }
        return photo;
      });

      setPhotos(updatedPhotos);
      setSelectedPhoto({
        ...selectedPhoto,
        isFavorite: !selectedPhoto.isFavorite,
      });
    }
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
