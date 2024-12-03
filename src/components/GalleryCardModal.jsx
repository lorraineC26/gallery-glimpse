import { useRef, useEffect } from "react";
import "../styles/GalleryCardModal.css";
import closeIcon from "../assets/close.svg";

const GalleryCardModal = ({ isModalOpen, handleModalClose, selectedPhoto }) => {
  const modalRef = useRef(null);

  const { title, src, alt, description, dateUploaded, isFavorite, comments } =
    selectedPhoto;

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current.showModal();
      modalRef.current.focus();
    } else {
      modalRef.current.close();
    }
  }, [isModalOpen]);

  return (
    <dialog className="modal" ref={modalRef} onClose={handleModalClose}>
      <button
        className="modal__close"
        onClick={handleModalClose}
        aria-label="Close"
      >
        <img src={closeIcon} alt="close icon" />
      </button>

      <h3 className="modal__title">{title}</h3>
      <img src={src} alt={alt} className="modal__pic" />
      <p className="modal__date">Uploaded: {dateUploaded}</p>
      <p className="modal__description">{description}</p>

      {/* Fav Toggler */}
      <button onClick={() => console.log("fav")} className="modal__fav-toggle">
        {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
      </button>

      {/* Comments Section */}

      {/* Comment Form */}
      <form
        className="modal__comment-form"
        onSubmit={() => console.log("submit")}
      >
        <label htmlFor="comment" className="modal__label">
          Drop some feelings:
        </label>
        <textarea
          name="comment"
          placeholder="So iconic..."
          required
          className="modal__input"
        ></textarea>
        <button type="submit" className="modal__btn-submit">
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default GalleryCardModal;
