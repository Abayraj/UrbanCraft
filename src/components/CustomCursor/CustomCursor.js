import React, { useRef, useEffect } from 'react';
import './CustomCursor.css'; // Ensure this CSS file contains the necessary styles

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      cursor.style.top = `${e.pageY - 10}px`;
      cursor.style.left = `${e.pageX - 10}px`;
    };

    const handleMouseClick = () => {
      cursor.classList.add('expand');
      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
