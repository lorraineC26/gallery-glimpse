import { useState, useEffect } from "react";

import "./styles/App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Membership from "./components/Membership";

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

  return (
    <>
      <NavBar setPage={setPage} />
      <main>{renderPage()}</main>
    </>
  );
}

export default App;
