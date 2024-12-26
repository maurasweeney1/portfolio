import "./App.css";
import React, { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
