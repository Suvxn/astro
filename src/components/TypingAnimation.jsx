import React, { useState, useEffect } from 'react';
import '../styles/TypingAnimation.css';

const TypingAnimation = ({ 
  text = "Welcome to AstroNITR, the epitome of astronomical exploration at NIT Rourkela. As the official astronomical society, we bring together passionate students to explore the mysteries of the cosmos through research, observation, and discovery.",
  speed = 50,
  delay = 1000,
  showCursor = true,
  cursorBlinkSpeed = 500
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    // Start typing after delay
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      return;
    }

    const typingTimer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(typingTimer);
  }, [isTyping, currentIndex, text, speed]);

  useEffect(() => {
    if (!showCursor) return;

    const cursorTimer = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorTimer);
  }, [showCursor, cursorBlinkSpeed]);

  return (
    <div className="typing-animation">
      <p className="typing-text">
        {displayText}
        {showCursor && (
          <span className={`typing-cursor ${showCursorState ? 'visible' : 'hidden'}`}>
            |
          </span>
        )}
      </p>
    </div>
  );
};

export default TypingAnimation;
