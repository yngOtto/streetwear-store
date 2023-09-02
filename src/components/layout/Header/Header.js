import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import './Header.css';  

function Header() {



  return (
    <header className="header">
      <div className="background"></div>
      <h1 className="header-title">placeholder</h1>
      <div className="header-nav">
        <nav className="nav-links">
          <Link to="/">home</Link>
          <Link to="/new-arrivals">new arrivals</Link>
          <Link to="/collections">collections</Link>
          <Link to="/about">about us</Link>
          <Link to="/contact">contact us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
