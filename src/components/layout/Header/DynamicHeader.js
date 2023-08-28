import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux'; 
import './DynamicHeader.css';

const messages = [
  'TRANSCENDING WORLDLY TROUBLES',
  'ATTAINING A FORM OF EQUANIMITY THAT REMAINS IMPERVIOUS TO EXTERNAL PERTURBATIONS',
  'SPEND 500DKK FOR FREE SHIPPING'
];

function DynamicHeader() {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [opacity, setOpacity] = useState(1);
  const [show, setShow] = useState(true);
  const headerRef = useRef(null); // access the DOM element
  const dispatch = useDispatch(); 
  let index = 0;

  // gunction to handle scroll events
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerHeight = headerRef.current.offsetHeight;
    const isHeaderVisible = currentScrollPos < headerHeight;
    setShow(isHeaderVisible);

    // update redux state to control the visibility of the main Header
    dispatch({ type: 'SET_DYNAMIC_HEADER_VISIBILITY', payload: isHeaderVisible });
  };

  useEffect(() => {
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    dispatch({ type: 'SET_DYNAMIC_HEADER_HEIGHT', payload: headerHeight });

    window.addEventListener('scroll', handleScroll);

    // logic for message rotation
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        index = (index + 1) % messages.length;
        setCurrentMessage(messages[index]);
        setOpacity(1);
      }, 2000);
    }, 7000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={headerRef} className={`dynamic-header-tab ${show ? '' : 'hide'}`}>
      <span style={{ opacity: opacity, transition: 'opacity 2s ease-in-out' }}>
        {currentMessage}
      </span>
    </div>
  );
}

console.log("DynamicHeader rendered");
export default DynamicHeader;
