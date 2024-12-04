import { useRef, useEffect, useState } from "react";
import "../styles/GalleryCardModal.css";
import closeIcon from "../assets/close.svg";

const GalleryCardModal = ({
  isModalOpen,
  handleModalClose,
  selectedPhoto,
  updateComments,
  toggleFavorite,
}) => {
  const modalRef = useRef(null);

  const { title, src, alt, description, dateUploaded, isFavorite, comments } =
    selectedPhoto;

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim()) {
      updateComments(newComment);
      setNewComment("");
    } else {
      alert("Please enter a comment first");
    }
  };

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

      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <img src={src} alt={alt} className="modal__pic" />
        <p className="modal__date">Uploaded: {dateUploaded}</p>
        <p className="modal__description">{description}</p>

        {/* Fav Toggler */}
        <button onClick={toggleFavorite} className="modal__fav-toggle">
          {isFavorite ? "🤍 Remove from Fav" : "❤️ Add to Fav"}
        </button>

        {/* Comments Section */}
        <div className="modal__comments">
          <h4>Comments</h4>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="modal__comment">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p className="modal__no-comments">
              No comments yet. Be the first to leave a comment!
            </p>
          )}
        </div>

        {/* Comment Form */}
        <form className="modal__comment-form" onSubmit={handleCommentSubmit}>
          <label htmlFor="comment" className="modal__label">
            Drop some feelings:
          </label>
          <textarea
            id="comment"
            name="comment"
            placeholder="So iconic..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="modal__input"
            required
          ></textarea>
          <button type="submit" className="modal__btn-submit">
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default GalleryCardModal;
