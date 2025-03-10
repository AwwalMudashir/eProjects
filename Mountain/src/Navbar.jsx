import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './navbar.css';
import VisitorCounter from './VisitorCounter';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const currentPath = location.pathname.replace('/', '') || 'home';
    setActiveItem(currentPath);

    const pagesWithTransparentBackground = ['home', 'about', 'history', 'contact','hazards-sheltering'];
    const handleScroll = () => {
      if (pagesWithTransparentBackground.includes(currentPath)) {
        setIsTransparent(window.scrollY === 0);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <nav className={`nav ${isTransparent ? 'transparent' : 'bg-[#8b4513]'} ${isTransparent ? '' : 'shadow-custom'}`}>
        <div className='flex'>

        <img className='logo' onClick={() => navigate('/')} src="/logo1.webp" alt="Mountain Hills Logo" />
        <VisitorCounter/>
        </div>
        <ul className={`nav-lists ${isOpen ? 'open' : ''}`}>
          <li>
            <div className={`nav-item-container ${activeItem === 'home' ? 'active' : ''}`}>
              <Link to={'/'} className={`nav-item links text-[white] ${isTransparent ? '' : 'hover:text-[black]'} `} onClick={() => handleItemClick('home')}>
                Home
              </Link>
            </div>
          </li>
          <li>
            <div className={`nav-item-container ${activeItem === 'history' ? 'active' : ''}`}>
              <Link to={'/history'} className={`nav-item links text-[white] ${isTransparent ? '' : 'hover:text-[black]'} `} onClick={() => handleItemClick('history')}>
                History
              </Link>
            </div>
          </li>
          <li>
            <div className={`nav-item-container ${activeItem === 'gallery' ? 'active' : ''}`}>
              <Link to={'/gallery'} className={`nav-item links text-[white] ${isTransparent ? '' : 'hover:text-[black]'} `} onClick={() => handleItemClick('gallery')}>
                Gallery
              </Link>
            </div>
          </li>
          <li>
            <div className={`nav-item-container ${activeItem === 'about' ? 'active' : ''}`}>
              <Link to={'/about'} className={`nav-item links text-[white] ${isTransparent ? '' : 'hover:text-[black]'} `} onClick={() => handleItemClick('about')}>
                About
              </Link>
            </div>
          </li>
          <li>
            <div className={`nav-item-container ${activeItem === 'contact' ? 'active' : ''}`}>
              <Link to={'/contact'} className={`nav-item links text-[white] ${isTransparent ? '' : 'hover:text-[black] border-[black]'} `} onClick={() => handleItemClick('contact')}>
                Contact
              </Link>
            </div>
          </li>
        </ul>
        <div className='bar-t' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <div className={`${isTransparent ? '' : 'text-[white]'}`}><i className="fa-solid fa-xmark"></i></div> : <div className={`${isTransparent ? '' : 'text-[white]'}`}><i className="fa-solid fa-bars"></i></div>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
