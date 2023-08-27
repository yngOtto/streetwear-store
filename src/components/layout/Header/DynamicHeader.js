import React, { useState, useEffect } from 'react';
import './DynamicHeader.css';

const messages = ['TRANSCENDING WORLDLY TROUBLES', 'ATTAINING A FORM OF EQUANIMITY THAT REMAINS IMPERVIOUS TO EXTERNAL PERTURBATIONS', '50% OFF!', 'LIMITED TIME ONLY!'];

function DynamicHeader() {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setCurrentMessage(messages[index]);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dynamic-header-tab">
      {currentMessage}
    </div>
  );
}

export default DynamicHeader;
