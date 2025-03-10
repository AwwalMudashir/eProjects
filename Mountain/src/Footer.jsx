import React from 'react'
import './footer.css'

const Footer = () => {
  return (
      <footer className='w-full px-4 md:px-8'>
        <div className="footer-content">
            <div className="footer-section f1">
                <div className="footer-logo">
                    <img src="/logo1.png" className=' ' alt="Alpine Ascents" />
                </div>
            </div>

            <div className="footer-section">
                <h4 className='text-[white]'>Alpine Ascents</h4>
                <p className="footer-description mb-[20px]">Exploring the majesty of mountains and sharing the rich history of mountaineering with enthusiasts worldwide.</p>
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#history">History</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4 className='text-[white]'>Contact Info</h4>
                <ul className="contact-info">
                    <li><i className="fas fa-map-marker-alt"></i> 123 Mountain View, Alpine City</li>
                    <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                    <li><i className="fas fa-envelope"></i> info@alpineascents.com</li>
                </ul>
                <div className="social-links">
                    <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                </div>
            </div>

          
        </div>
        <div className="footer-bottom">
            <p className="copyright text-center">©2024 ALPINE ASCENTS ALL RIGHTS RESERVED</p>
        </div>
    </footer>
  )
}

export default Footer
