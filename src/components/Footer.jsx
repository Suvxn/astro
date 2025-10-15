import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/Footer.css';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/astronitr/' },
    { name: 'X (Twitter)', icon: <FaXTwitter />, url: 'https://twitter.com/' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/school/national-institute-of-technology-rourkela/' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo-section">
            <img src={logo} alt="AstroNITR Logo" className="footer-logo" />
            <div className="footer-text">
              <h2 className="footer-main-text">
                <span className="astro-text">ASTRO</span>
                <span className="nitr-text">NITR</span>
              </h2>
            </div>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-icon"
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
