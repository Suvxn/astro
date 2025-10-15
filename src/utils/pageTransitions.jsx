import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Particle component for the space effect
const Particle = ({ x, y, size, delay }) => (
  <motion.div
    className="fixed pointer-events-none rounded-full bg-white"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
      boxShadow: '0 0 10px 2px rgba(100, 200, 255, 0.8)'
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
      x: [`${Math.random() * 40 - 20}px`, `${Math.random() * 80 - 40}px`],
      y: [`${Math.random() * 40 - 20}px`, `${Math.random() * 80 - 40}px`]
    }}
    transition={{
      duration: 1.5,
      delay: delay,
      ease: 'easeInOut',
      repeat: 0
    }}
  />
);

// Overlay for the transition effect
const TransitionOverlay = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{
          clipPath: [
            'circle(0% at 50% 50%)',
            'circle(25% at 50% 50%)',
            'circle(100% at 50% 50%)',
            'circle(25% at 50% 50%)',
            'circle(0% at 50% 50%)'
          ]
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
          times: [0, 0.2, 0.5, 0.8, 1]
        }}
      >
        {/* Generate random particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle
            key={i}
            x={Math.random() * 100}
            y={Math.random() * 100}
            size={Math.random() * 3 + 1}
            delay={i * 0.05}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

export const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleEnd = () => {
      setTimeout(() => setIsTransitioning(false), 1000);
    };

    // You can listen to route changes here if needed
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <>
      <TransitionOverlay isVisible={isTransitioning} />
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            staggerChildren: 0.1
          }
        }}
        exit={{
          opacity: 0,
          x: -100,
          scale: 0.95,
          transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }
        }}
        onAnimationStart={() => setIsTransitioning(true)}
        onAnimationComplete={() => setIsTransitioning(false)}
        className="page-transition-wrapper"
      >
        {children}
      </motion.div>
    </>
  );
};
