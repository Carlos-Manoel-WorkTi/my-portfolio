import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-4 text-center border-t border-gray-700">
      <div className="relative z-10">
        <p className="mb-2">&copy; {new Date().getFullYear()} My Portfolio</p>
        <p>
          <a href="/about" className="text-blue-400 hover:underline mx-2">About</a>
          |
          <a href="/contact" className="text-blue-400 hover:underline mx-2">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
