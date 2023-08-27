import React, { useState, useEffect } from 'react';
import './DynamicHeader.css';

const messages = ['TRANSCENDING WORLDLY TROUBLES', 'ATTAINING A FORM OF EQUANIMITY THAT REMAINS IMPERVIOUS TO EXTERNAL PERTURBATIONS', 'SPEND 500DKK MORE FOR FREE SHIPPING', 'LIMITED TIME ONLY!'];

function DynamicHeader() {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [opacity, setOpacity] = useState(1);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        index = (index + 1) % messages.length;
        setCurrentMessage(messages[index]);

        setOpacity(1);
      }, 2000); 
      
    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dynamic-header-tab">
      <span style={{ opacity: opacity, transition: 'opacity 2s ease-in-out' }}>
        {currentMessage}
      </span>
    </div>
  );
}

export default DynamicHeader;
