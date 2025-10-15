import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './utils/pageTransitions.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Team from './components/Team.jsx';
import Gallery from './components/Gallery.jsx';
import Astronomica from './components/Astronomica.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import VideoBackground from './components/VideoBackground.jsx';
import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Hero />
          </PageTransition>
        } />
        <Route path="/team" element={
          <PageTransition>
            <Team />
          </PageTransition>
        } />
        <Route path="/gallery" element={
          <PageTransition>
            <Gallery />
          </PageTransition>
        } />
        <Route path="/astronomica" element={
          <PageTransition>
            <Astronomica />
          </PageTransition>
        } />
        <Route path="/blogs" element={
          <PageTransition>
            <Blog />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <VideoBackground />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
