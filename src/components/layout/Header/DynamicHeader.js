import React, { useState, useEffect } from 'react';
import './DynamicHeader.css';

const messages = ['transcending wordly troubles', 'attaining a form of equanimity that remains impervious to external perturbations', '50% Off!', 'Limited Time Only!'];

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
