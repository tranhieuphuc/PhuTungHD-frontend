"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 bg-red-700 text-white p-4 rounded-full shadow-lg transition-all transform
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        hover:bg-red-800 hover:scale-110 duration-300`}
      aria-label="Go to top"
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        transition: "opacity 0.3s, transform 0.3s",
      }}
    >
      <FaArrowUp size={22} />
    </button>
  );
};

export default GoToTop;