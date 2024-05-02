import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='windowBlock'>
      <h1>Window Size</h1>
      <div>
        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>
      </div>
    </div>
  );
};

export default WindowSize;