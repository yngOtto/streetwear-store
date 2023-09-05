import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';  

function Header() {
//const cartItems = useSelector((state) => state.cart.cartItems);


  return (
    <header className="header">
      <div className="background"></div>
      <h1 className="header-title">serenity beyond</h1>
      <div className="header-nav">
        <nav className="nav-links">
          <Link to="/">home</Link>
          <Link to="/new-arrivals">new arrivals</Link>
          <Link to="/collections">collections</Link>
          <Link to="/about">about us</Link>
          <Link to="/contact">contact us</Link>
        </nav>
        <div className="cart-icon">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />

          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
