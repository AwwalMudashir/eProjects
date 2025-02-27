import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true); // State to control navbar background

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Initialize the active item based on the current URL path
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const currentPath = location.pathname.replace('/', '') || 'home';
    setActiveItem(currentPath);

    // Check if the current path should have a dynamic transparent background
    const pagesWithTransparentBackground = ['home', 'about', 'history'];

    const handleScroll = () => {
      if (pagesWithTransparentBackground.includes(currentPath)) {
        setIsTransparent(window.scrollY === 0);
      } else {
        setIsTransparent(false);
      }
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);

    // Run initially to set the correct state
    handleScroll();

    // Cleanup listener on unmount or path change
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    navigate(`/${item === 'home' ? '' : item}`);
  };

  return (
    <div>
      <nav
        className={`nav ${isTransparent ? 'transparent' : 'black-bg'} ${
          isTransparent ? '' : 'shadow-custom'
        }`}
      >
        <img className='logo' onClick={() => navigate('/')} src="/logo1.png" alt="Mountain Hills Logo" />

        <ul className={`nav-lists ${isOpen ? 'open' : ''}`}>
          <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
            Home
          </li>
          <li className={`nav-item ${activeItem === 'history' ? 'active' : ''}`} onClick={() => handleItemClick('history')}>
            History
          </li>
          <li className={`nav-item ${activeItem === 'about' ? 'active' : ''}`} onClick={() => handleItemClick('about')}>
            About
          </li>
          <li className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')}>
            Contact
          </li>
        </ul>

        <div className='bar-t' onClick={toggleMenu}>
          {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
