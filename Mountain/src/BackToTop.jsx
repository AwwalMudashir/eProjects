import React, { useState, useEffect } from "react";
import "./App.css";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 300px (adjust as needed)
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`s-back-to-top ${showButton ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default BackToTop;
