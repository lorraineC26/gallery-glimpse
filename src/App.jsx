import { useState, useEffect } from "react";

import "./styles/App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState(document.location.pathname || "/");

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
    if (page === "/" || page === "/home") return <Home setPage={setPage} />;
    if (page === "/gallery") return <Gallery />;
    if (page === "/membership") return <Membership />;
    return <p>404 - Page Not Found</p>;
  }

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
