import React, { useState } from "react";
import "./App.css";

const images = [
  "https://via.placeholder.com/500x400.png?text=Image+1",
  "https://example.com/image2.png",
  "https://example.com/image3.jpg",
  "https://example.com/image4.png",
  "https://example.com/image5.jpg",
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={handlePrevSlide}>
        &lt;
      </button>
      <button className="carousel-next" onClick={handleNextSlide}>
        &gt;
      </button>
    </div>
  );
}

export default App;
