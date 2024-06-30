// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../assets/images/PuckScouts_TransparentLogo.png'; // Adjust the path as needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="PuckScouts Logo" className="footer-logo" />
        <p className="footer-text">
          &copy; 2024 PuckScouts. All rights reserved.
          <br />
          Made with <span className="heart">&hearts;</span> in the great state of Michigan.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
