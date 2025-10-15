import React, { useState, useEffect } from 'react';
import blackHoleVideo from '../assets/images/black-hole.mp4';
import '../styles/Blog.css';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const GOOGLE_FORM_URL = 'https://forms.gle/your-blog-form';

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Space Exploration",
      excerpt: "Exploring the latest advancements in space technology and what they mean for humanity's journey to the stars.",
      content: "Space exploration has entered a new era of innovation and discovery. From reusable rockets to advanced propulsion systems, we're witnessing unprecedented progress in our ability to reach beyond Earth...",
      author: "Dr. Sarah Johnson",
      date: "2024-03-15",
      category: "space-tech",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Stellar Night 2024: A Cosmic Success",
      excerpt: "Recapping our most successful Stellar Night event with over 2500 space enthusiasts joining us under the stars.",
      content: "The 2024 Stellar Night event exceeded all expectations, bringing together space enthusiasts from across the region for an unforgettable night of celestial observation...",
      author: "Alex Chen",
      date: "2024-03-10",
      category: "events",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Capturing the Cosmos: Astrophotography Techniques",
      excerpt: "Master the art of astrophotography with our comprehensive guide to capturing stunning images of celestial objects.",
      content: "Astrophotography combines the technical precision of photography with the wonder of astronomy. Here's everything you need to know to capture breathtaking images of the night sky...",
      author: "Priya Sharma",
      date: "2024-03-08",
      category: "photography",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Understanding Black Holes: The Universe's Mysteries",
      excerpt: "Dive deep into the fascinating world of black holes and their role in shaping our universe.",
      content: "Black holes represent some of the most extreme and mysterious objects in our universe. Their incredible gravitational pull challenges our understanding of physics...",
      author: "Dr. Raj Patel",
      date: "2024-03-05",
      category: "astronomy",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Mars Mission Updates: Perseverance Rover's Latest Discoveries",
      excerpt: "Latest findings from NASA's Perseverance rover and what they reveal about Mars' ancient past.",
      content: "The Perseverance rover continues to make groundbreaking discoveries on the Red Planet, providing new insights into Mars' geological history and potential for past life...",
      author: "Marcus Rodriguez",
      date: "2024-03-02",
      category: "research",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Telescope Buying Guide: Choosing Your First Stargazing Companion",
      excerpt: "Everything you need to know to select the perfect telescope for your astronomical journey.",
      content: "Choosing your first telescope can be overwhelming with so many options available. This comprehensive guide will help you make an informed decision...",
      author: "Emma Thompson",
      date: "2024-02-28",
      category: "astronomy",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=400&fit=crop",
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleSubmitBlog = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="blog-page">
      {/* Background */}
      <div className="blog-background">
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

      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`floating-element floating-${i % 6}`}></div>
        ))}
      </div>

      <div className="blog-content">
        {/* Header */}
        <div className="blog-header">
          <h1 className="blog-title">
            {'BLOG'.split('').map((letter, index) => (
              <span key={index} className="wave-letter">
                {letter}
              </span>
            ))}
          </h1>
          <p className="blog-subtitle">
            Discover the latest insights, discoveries, and stories from the cosmos
          </p>
        </div>

        {/* Controls removed per request */}

        {/* Featured Posts */}
        {!isLoading && featuredPosts.length > 0 && (
          <div className="featured-section">
            <h2 className="section-title">Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="featured-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="card-overlay">
                      <span className="category-badge">{post.category}</span>
                      <span className="featured-badge">Featured</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <div className="card-meta">
                      <div className="author-info">
                        <span className="author">{post.author}</span>
                        <span className="date">{post.date}</span>
                      </div>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {!isLoading && regularPosts.length > 0 && (
          <div className="posts-section">
            <h2 className="section-title">Latest Articles</h2>
            <div className="posts-grid">
              {regularPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="post-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="post-overlay">
                      <span className="category-badge">{post.category}</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-meta">
                      <div className="author-info">
                        <span className="author">{post.author}</span>
                        <span className="date">{post.date}</span>
                      </div>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Your Blog Section */}
        <div className="blog-submit-section">
          <h2 className="submit-title">Submit Your Blog</h2>
          <p className="submit-description">
            Have an astronomy story, event recap, or research insight? Share it with the community!
          </p>
          <button className="submit-btn" onClick={handleSubmitBlog}>
            Submit via Google Form
          </button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading cosmic articles...</p>
          </div>
        )}

        {/* No Results */}
        {!isLoading && blogPosts.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No articles found</h3>
            <p>Check back later for new articles</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
