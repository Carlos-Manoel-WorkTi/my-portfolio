'use client'
import React, { useState } from 'react';
import './ContactMB.css'; 

export default function ContactMB() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <aside id='container-aside'>
    <ul className={`menu ${isActive ? 'active' : ''}`}>
        <div className="menuToggle" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon-contact-s'>
                <path d="M12 2V22M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <li className="item-0">
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        </li>
        <li className="item-1">
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        </li>
        <li className="item-2">
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        </li>
        {/* <li className="item-3">
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        </li>
        <li className="item-4">
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        </li> */}
        {/* <li className="item-5">
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        </li> */}
        <li className="item-6">
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        </li>
        <li className="item-7">
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  className='icon-contact-s' >
            <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        </li>
    </ul>
  </aside>
  );
}
