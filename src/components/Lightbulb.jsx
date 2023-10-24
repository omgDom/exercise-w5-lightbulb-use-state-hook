import React, { useState } from 'react';

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [light, setLight] = useState(false);

  const toggleLight = () => {
    setLight((prevLight) => !prevLight);
  };

  return (
    <div className={`lightbulb-container ${light ? 'on' : 'off'}`} onClick={toggleLight}>
      {light ? 'on' : 'off'}
      <div className={`lightbulb ${light ? 'on' : 'off'}`}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};

