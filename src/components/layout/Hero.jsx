import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  const slides = [
    { image: "./src/assets/Slide_img/slide1.webp" },
    { image: "./src/assets/Slide_img/slide2.webp" },
    { image: "./src/assets/Slide_img/slide3.webp" },
    { image: "./src/assets/Slide_img/slide4.webp" },
    { image: "./src/assets/Slide_img/slide5.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative max-w-[90%] mx-auto mt-10 h-[700px] overflow-hidden rounded-3xl shadow-xl">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={`slide-${idx}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-bold font-plusB drop-shadow-lg">
          Welcome to Event Booking
        </h1>
        <h2 className="text-white text-lg md:text-2xl mt-4 font-playwrite drop-shadow-md">
          Find the perfect events for any occasion — from Concerts to Workshops
        </h2>

        {/* Search Bar */}
        <form className="flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-md px-4 py-2 mt-10 w-full max-w-xl hover:shadow-lg transition-all">
          <IoSearch size={22} className="text-gray-700 mr-3" />
          <input
            type="text"
            placeholder="Search for events"
            className="flex-grow bg-transparent focus:outline-none text-gray-900 placeholder-gray-500 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
