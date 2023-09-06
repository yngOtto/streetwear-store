import React from 'react';
import './LandingPage.css';

// import ProductCard from '../products/ProductCard/ProductCard'; // If you have a ProductCard component for individual products

const LandingPage = () => {
  // You can fetch or hardcode featured products here
  
  return (
    <div className="landing-page" style={{ backgroundColor: '#121212', color: 'white' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>FALL_01 
          DROPPING SOON
        </h1>
        {/* Add more content or images */}
      </section>
      
      {/* Featured Products */}
      <section className="new-arrivals">
        <h2>new arrivals .-</h2>
        {/* Map through your featured products and render ProductCard components */}
      </section>
      
      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>Define your style with our unique and timeless streetwear.</p>
      </section>
    </div>
  );
};

export default LandingPage;
