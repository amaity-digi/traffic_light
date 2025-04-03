import React, { useState, useEffect } from 'react';
import '../style.css';

const TrafficLights = () => {
  const [activeLight, setActiveLight] = useState('red');

  const handleLight = () => {
    let timer;
    console.log('activeLight', activeLight);
    if (activeLight === 'red') {
      timer = setTimeout(() => {
        setActiveLight('yellow');
      }, 4000);
    } else if (activeLight === 'yellow') {
      timer = setTimeout(() => {
        setActiveLight('green');
      }, 2000);
    } else if (activeLight === 'green') {
      timer = setTimeout(() => {
        setActiveLight('red');
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    handleLight();
  }, [activeLight]);

  return (
    <div className="lightContainer">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
      ></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
      ></div>
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
      ></div>
    </div>
  );
};

export default TrafficLights;
