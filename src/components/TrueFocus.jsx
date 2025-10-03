import React, { useState, useEffect, useRef } from 'react';
import './TrueFocus.css';

const TrueFocus = ({
  sentence,
  manualMode = false,
  blurAmount = 5,
  borderColor = "#915EFF",
  animationDuration = 2,
  pauseBetweenAnimations = 1,
}) => {
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const words = sentence.split(' ');

  useEffect(() => {
    if (!manualMode) {
      startAnimation();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [manualMode, animationDuration, pauseBetweenAnimations]);

  const startAnimation = () => {
    setIsAnimating(true);
    let currentIndex = 0;

    const animate = () => {
      setActiveWordIndex(currentIndex);
      
      timeoutRef.current = setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        if (currentIndex === 0) {
          // Pause between full cycles
          setTimeout(() => {
            animate();
          }, pauseBetweenAnimations * 1000);
        } else {
          animate();
        }
      }, animationDuration * 1000);
    };

    animate();
  };

  const handleWordClick = (index) => {
    if (manualMode) {
      setActiveWordIndex(index);
    }
  };

  return (
    <div className="focus-container" style={{ '--border-color': borderColor }}>
      {words.map((word, index) => (
        <div
          key={index}
          className={`focus-word ${activeWordIndex === index ? 'active' : ''}`}
          style={{
            filter: activeWordIndex === index ? 'blur(0)' : `blur(${blurAmount}px)`,
            color: activeWordIndex === index ? '#ffffff' : '#666666',
          }}
          onClick={() => handleWordClick(index)}
        >
          {word}
          {activeWordIndex === index && (
            <div className="focus-frame">
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TrueFocus;