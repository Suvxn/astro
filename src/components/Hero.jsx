import React from 'react';
import astronaut from '../assets/images/astronaut.png';
import blackHoleVideo from '../assets/images/black-hole.mp4';
import TypingAnimation from './TypingAnimation';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-background">
        <video 
          className="background-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={blackHoleVideo} type="video/mp4" />
        </video>
        <div className="background-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title slide-in-down">ASTRONITR</h1>
        <div className="hero-description slide-in-up">
          <TypingAnimation 
            text="Welcome to AstroNITR, the epitome of astronomical exploration at NIT Rourkela. As the official astronomical society, we bring together passionate students to explore the mysteries of the cosmos through research, observation, and discovery."
            speed={30}
            delay={2000}
            showCursor={true}
            cursorBlinkSpeed={600}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
