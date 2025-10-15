import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const leftNavItems = [
    { name: 'HOME', path: '/' },
    { name: 'ASTRONOMICA', path: '/astronomica' },
    { name: 'TEAM', path: '/team' }
  ];
  
  const rightNavItems = [
    { name: 'GALLERY', path: '/gallery' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT US', path: '/contact' }
  ];
  
  return (
    <header className="header slide-in-down">
      <nav className="nav">
        <div className="nav-left">
          {leftNavItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className={`nav-link smooth-hover ${location.pathname === item.path ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <Link to="/" className="logo-container scale-in">
          <img src={logo} alt="AstroNITR Logo" className="logo smooth-hover" />
        </Link>
        
        <div className="nav-right">
          {rightNavItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className={`nav-link smooth-hover ${location.pathname === item.path ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
