import React, { useState, useEffect } from 'react';
import pic2 from '../assets/images/pic2.jpg';
import astronaut from '../assets/images/astronaut.png';
import logo from '../assets/images/logo.png';
import blackHoleVideo from '../assets/images/black-hole.mp4';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Sample gallery images with metadata
  const galleryImages = [
    {
      id: 1,
      src: pic2,
      title: 'Cosmic Nebula',
      category: 'space',
      description: 'A stunning view of cosmic nebula with swirling colors',
      date: '2024-01-15'
    },
    {
      id: 2,
      src: astronaut,
      title: 'Space Explorer',
      category: 'astronaut',
      description: 'An astronaut exploring the vast cosmos',
      date: '2024-01-20'
    },
    {
      id: 3,
      src: logo,
      title: 'AstroNITR Logo',
      category: 'logo',
      description: 'The official AstroNITR logo design',
      date: '2024-01-10'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop',
      title: 'Galaxy Cluster',
      category: 'space',
      description: 'A distant galaxy cluster millions of light years away',
      date: '2024-01-25'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop',
      title: 'Space Station',
      category: 'station',
      description: 'International Space Station orbiting Earth',
      date: '2024-01-30'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Mars Rover',
      category: 'rover',
      description: 'Mars exploration rover on the red planet',
      date: '2024-02-01'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop',
      title: 'Telescope View',
      category: 'telescope',
      description: 'Deep space view through powerful telescope',
      date: '2024-02-05'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
      title: 'Space Launch',
      category: 'launch',
      description: 'Rocket launch into the cosmos',
      date: '2024-02-10'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1464822759844-d150baecb7b3?w=800&h=600&fit=crop',
      title: 'Aurora Borealis',
      category: 'aurora',
      description: 'Northern lights dancing in the sky',
      date: '2024-02-15'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      title: 'Satellite View',
      category: 'satellite',
      description: 'Earth view from satellite perspective',
      date: '2024-02-20'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop',
      title: 'Space Shuttle',
      category: 'shuttle',
      description: 'Space shuttle mission in progress',
      date: '2024-02-25'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      title: 'Mission Control',
      category: 'control',
      description: 'Mission control center operations',
      date: '2024-03-01'
    }
  ];

  const categories = ['all', 'space', 'astronaut', 'logo', 'station', 'rover', 'telescope', 'launch', 'aurora', 'satellite', 'shuttle', 'control'];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = galleryImages.filter(image => {
    const matchesFilter = filter === 'all' || image.category === filter;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateImage('prev');
        if (e.key === 'ArrowRight') navigateImage('next');
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="gallery-page">
      {/* Background Video */}
      <div className="gallery-background">
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

      {/* Particle Effects */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 5}`}></div>
        ))}
      </div>

      <div className="gallery-content">
        {/* Header */}
        <div className="gallery-header">
          <h1 className="gallery-title">
            {'GALLERY'.split('').map((letter, index) => (
              <span key={index} className="wave-letter">
                {letter}
              </span>
            ))}
          </h1>
          <p className="gallery-subtitle">
            Explore the wonders of space through our cosmic collection
          </p>
        </div>

        {/* Controls */}
        <div className="gallery-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="search-icon">🔍</div>
          </div>
          
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading cosmic wonders...</p>
            </div>
          ) : (
            filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image)}
              >
                <div className="image-container">
                  <img src={image.src} alt={image.title} className="gallery-image" />
                  <div className="image-overlay">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                    <span className="image-date">{image.date}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>‹</button>
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>›</button>
            
            <div className="lightbox-image-container">
              <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-image" />
            </div>
            
            <div className="lightbox-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <span className="lightbox-date">{selectedImage.date}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
