import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import './Header.css';  
import { useEffect } from 'react';

function Header() {
  const isDynamicHeaderVisible = useSelector(state => state.isDynamicHeaderVisible);
  const dynamicHeaderHeight = useSelector(state => state.dynamicHeaderHeight); 

  useEffect(() => {
    // update the top position based on the dynamic header's height
    const headerElement = document.querySelector('.header');
    if (headerElement) {
      headerElement.style.top = `${dynamicHeaderHeight}px`;
    }
  }, [dynamicHeaderHeight]);
  

  return (
    <header className="header" style={{ top: isDynamicHeaderVisible ? '50px' : '0' }}>
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
