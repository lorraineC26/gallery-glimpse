import { useState, useEffect } from "react";

import "./styles/App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Membership from "./components/Membership";
import Confirmation from "./components/Confirmation";
import Footer from "./components/Footer";

import { catPhotos } from "./mock/photos";

function App() {
  const [page, setPage] = useState(document.location.pathname || "/");

  // Modal comments and favorite handlers
  const [photos, setPhotos] = useState(catPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
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

  // Page routing
  useEffect(() => {
    function handlePageLoad() {
      setPage(document.location.pathname);
    }
    window.addEventListener("popstate", handlePageLoad);

    return () => {
      window.removeEventListener("popstate", handlePageLoad);
    };
  }, []);

  function renderPage() {
    if (page === "/gallery-glimpse/" || page === "/gallery-glimpse/home")
      return <Home setPage={setPage} />;
    if (page === "/gallery-glimpse/gallery")
      return (
        <Gallery
          updateComments={updateComments}
          toggleFavorite={toggleFavorite}
          photos={photos}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      );
    if (page === "/gallery-glimpse/membership")
      return <Membership setPage={setPage} />;
    if (page === "/gallery-glimpse/confirmation") return <Confirmation />;
    return <p>404 - Page Not Found</p>;
  }

  // Theme switch handler
  const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme) {
    document.querySelector("body").setAttribute("data-theme", selectedTheme);
  }

  return (
    <>
      <NavBar setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
