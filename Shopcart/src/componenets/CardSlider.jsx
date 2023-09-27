import React, { useState, useEffect } from 'react';
import './CardSlider.css'
import btn1 from '../assets/Arrow2.png'
import btn2 from '../assets/Arrow1.png'

const CardSlider = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch product data from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Determine the indices of the cards to display within the screen width
  const screenWidth = 1025;
  const cardWidth = 310; // Fixed card width
  const maxCardsToShow = Math.floor(screenWidth / cardWidth);

  return (
    <div className="card-slider">
      <div
        className="slider-button left-arrow"
        onClick={handlePrev}
      >
        <img className='btn1' src={btn1} alt="Left Arrow" />
      </div>
      <div className="cards-container">
        {products.slice(currentIndex, currentIndex + maxCardsToShow).map((product, index) => (
          <div key={index} className="card">
            <img
              src={product.image}
              alt={product.title}
              style={{ maxHeight: '125px', maxWidth: '310px' }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
      <div
        className="slider-button right-arrow"
        onClick={handleNext}
      >
        <img className='btn2' src={btn2} alt="Right Arrow" />
      </div>
    </div>
  );
};

export default CardSlider;
