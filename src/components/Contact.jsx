import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope, FaPhone, FaClock, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import blackHoleVideo from '../assets/images/black-hole.mp4';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FaLocationDot />,
      title: "Location",
      details: "NIT Rourkela, Odisha, India",
      description: "National Institute of Technology Rourkela"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "astronitr@nitrkl.ac.in",
      description: "Send us your cosmic queries"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 9876543210",
      description: "Call us for immediate assistance"
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      details: "Mon - Fri: 9:00 AM - 5:00 PM",
      description: "We're here to help during these hours"
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/astronitr/', color: '#E4405F' },
    { name: 'X (Twitter)', icon: <FaXTwitter />, url: 'https://twitter.com/', color: '#1DA1F2' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/school/national-institute-of-technology-rourkela/', color: '#0A66C2' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/', color: '#FF0000' },
    { name: 'Email', icon: <FaEnvelope />, url: 'mailto:astronitr@nitrkl.ac.in', color: '#6C63FF' }
  ];

  // Replace with your real embed targets
  const instagramEmbedUrl = 'https://www.instagram.com/p/Cx6Q9D4pO3K/embed';
  const linkedinEmbedUrl = 'https://www.linkedin.com/embed/feed/update/urn:li:share:7052330000000000000';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Background */}
      <div className="contact-background">
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

      {/* Animated Background Elements */}
      <div className="contact-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`contact-particle particle-${i % 5}`}></div>
        ))}
      </div>

      <div className="contact-content">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title slide-in-down">
            {'CONTACT US'.split('').map((letter, index) => (
              <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                {letter}
              </span>
            ))}
          </h1>
          <p className="contact-subtitle slide-in-up">
            Reach out to us and let's explore the cosmos together
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-main">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <h2 className="section-title slide-in-left">Get in Touch</h2>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="contact-card slide-in-up smooth-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-icon">{info.icon}</div>
                  <h3 className="card-title">{info.title}</h3>
                  <p className="card-details">{info.details}</p>
                  <p className="card-description">{info.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title slide-in-right">Send us a Message</h2>
            <form className="contact-form slide-in-up" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
                <label className="form-label">Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
                <label className="form-label">Email</label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="form-input"
                  required
                />
                <label className="form-label">Subject</label>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
                <label className="form-label">Message</label>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="btn-spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <p>Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Media Section - Redesigned */}
        <div className="social-section">
          <h2 className="section-title slide-in-left">Connect with Us</h2>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-card slide-in-up smooth-hover"
                target="_blank"
                rel="noreferrer"
                style={{ '--social-color': social.color, animationDelay: `${index * 0.1}s` }}
              >
                <div className="social-icon-wrapper">
                  {social.icon}
                </div>
                <span className="social-name">{social.name}</span>
                <div className="social-hover-effect"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Previews (Embeds) - Redesigned */}
        <div className="embed-section">
          <h2 className="section-title slide-in-right">Latest From Our Socials</h2>
          <div className="embeds-grid">
            <div className="embed-card instagram-card slide-in-left smooth-hover">
              <div className="embed-header">
                <div className="embed-icon">
                  <FaInstagram />
                </div>
                <h3>Instagram</h3>
              </div>
              <div className="embed-content">
                <iframe
                  title="Instagram Embed"
                  src={instagramEmbedUrl}
                  allowTransparency
                  frameBorder="0"
                  scrolling="no"
                  className="social-iframe"
                />
              </div>
            </div>
            <div className="embed-card linkedin-card slide-in-right smooth-hover">
              <div className="embed-header">
                <div className="embed-icon">
                  <FaLinkedin />
                </div>
                <h3>LinkedIn</h3>
              </div>
              <div className="embed-content">
                <iframe
                  title="LinkedIn Embed"
                  src={linkedinEmbedUrl}
                  height="480"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="social-iframe"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2 className="section-title slide-in-left">Find Us</h2>
          <div className="map-container slide-in-up smooth-hover">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <h3>NIT Rourkela Campus</h3>
              <p>Rourkela, Odisha, India</p>
              <div className="map-coordinates">
                <span>22.2535° N, 84.9014° E</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
