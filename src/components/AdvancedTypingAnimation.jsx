import React, { useState, useEffect } from 'react';
import '../styles/TypingAnimation.css';

const AdvancedTypingAnimation = ({ 
  sequences = [
    {
      text: "Welcome to AstroNITR,",
      speed: 80,
      pause: 500
    },
    {
      text: " the epitome of astronomical exploration at NIT Rourkela.",
      speed: 60,
      pause: 800
    },
    {
      text: " As the official astronomical society, we bring together passionate students",
      speed: 50,
      pause: 600
    },
    {
      text: " to explore the mysteries of the cosmos through research, observation, and discovery.",
      speed: 40,
      pause: 0
    }
  ],
  delay = 1000,
  showCursor = true,
  cursorBlinkSpeed = 500,
  deleteSpeed = 20
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    const currentSequence = sequences[currentSequenceIndex];
    const currentSpeed = isDeleting ? deleteSpeed : currentSequence.speed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentCharIndex < currentSequence.text.length) {
          setDisplayText(prev => prev + currentSequence.text[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Finished typing current sequence
          setTimeout(() => {
            if (currentSequenceIndex < sequences.length - 1) {
              setIsDeleting(true);
            }
          }, currentSequence.pause);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          // Finished deleting, move to next sequence
          setIsDeleting(false);
          setCurrentSequenceIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      }
    }, currentSpeed);

    return () => clearTimeout(timer);
  }, [
    isTyping, 
    currentCharIndex, 
    displayText, 
    currentSequenceIndex, 
    isDeleting, 
    sequences, 
    deleteSpeed
  ]);

  useEffect(() => {
    if (!showCursor) return;

    const cursorTimer = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorTimer);
  }, [showCursor, cursorBlinkSpeed]);

  return (
    <div className="typing-animation advanced">
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

export default AdvancedTypingAnimation;
