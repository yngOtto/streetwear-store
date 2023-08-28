import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

function Header() {
  return (
    <header className="header">
      <div className="background"></div>
      <h1 className="header-title">serenity beyond</h1>
      <div className="header-nav">
        <nav className="nav-links">
          <Link to="/">home</Link>
          <Link to="/collections">collections</Link>
          <Link to="/about">about us</Link>
          <Link to="/contact">contact us</Link>
          <Link to="/cart">cart</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
