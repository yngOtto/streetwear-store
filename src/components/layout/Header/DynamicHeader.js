import React, { useState, useEffect } from 'react';
import './DynamicHeaderTab.css';

const messages = ['Welcome!', 'New Arrivals!', '50% Off!', 'Limited Time Only!'];

function DynamicHeaderTab() {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setCurrentMessage(messages[index]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dynamic-header-tab">
      {currentMessage}
    </div>
  );
}

export default DynamicHeaderTab;
