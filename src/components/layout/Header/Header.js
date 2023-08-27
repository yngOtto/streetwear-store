import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">serenity beyond</h1>
      <div className="header-nav">
        <input type="text" placeholder="Search" className="search-bar" />
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <div className="header-icons">
          <span className="account-icon">👤</span>
          <span className="cart-icon">🛒</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
