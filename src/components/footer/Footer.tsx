import React from 'react';
import './footer.css'; // Importa o CSS
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} Carlos Manoel</p>
        <p className="footer-links">
          <Link href="/" className="footer-link">Início</Link> |
          <Link href="/about" className="footer-link">Sobre</Link> |
          <Link href="/projects" className="footer-link">Projetos</Link> |
          <Link href="/contacts" className="footer-link">Contato</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
