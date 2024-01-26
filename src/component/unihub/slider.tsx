import React, { useState } from 'react';
import image1 from '../../images/slide-image-1.png';
import image2 from '../../images/slide-image-2.png';
import image3 from '../../images/slide-image-3.png';
import image4 from '../../images/slide-image-4.png';
import image5 from '../../images/slide-image-5.png';
import './unihub.scss';

const images = [image1, image2, image3, image4, image5];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide} className="slider-button prev-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.1213 10.5H21V13.5H8.1213L13.0606 18.4393L10.9393 20.5606L2.37866 12L10.9393 3.43933L13.0606 5.56065L8.1213 10.5Z" fill="#999999"/>
          </svg>
        </button>
        <div className="slider-dots">
          {images.map((_, index) => (
            <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
          ))}
        </div>
        <button onClick={nextSlide} className="slider-button next-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.478 13.557H2.92429V10.443H15.478L10.6633 5.31595L12.7311 3.11401L21.0757 12L12.7311 20.886L10.6633 18.6841L15.478 13.557Z" fill="#999999"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;