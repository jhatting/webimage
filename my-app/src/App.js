import React, { useState } from "react";
import "./App.css";

const images = [
  "https://kenzielynne.s3.us-east-2.amazonaws.com/video/video1.jpg",
  "https://kenzielynne.s3.us-east-2.amazonaws.com/video/video2.jpg",
  "https://kenzielynne.s3.us-east-2.amazonaws.com/video/video3.jpg",
  "https://kenzielynne.s3.us-east-2.amazonaws.com/video/video1.jpg",
  "https://kenzielynne.s3.us-east-2.amazonaws.com/video/video2.jpg",
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
