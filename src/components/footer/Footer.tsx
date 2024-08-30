import React from 'react';
import './footer.css'; // Importa o CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} My Portfolio</p>
        <p className="footer-links">
          <a href="/about" className="footer-link">About</a>
          |
          <a href="/contact" className="footer-link">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
