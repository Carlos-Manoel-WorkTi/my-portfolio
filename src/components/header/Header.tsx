import React from 'react';
import './Header.css';
import ActiveLink from './activeLink/ActiveLink';
import 'animate.css';
import { ThemeToggle } from '@/themes/themes-provide';


export default function Header() {
  return (
    <header className="  text-white p-2 pl-4  relative w-[100%] z-10">
      <div className="w-full flex justify-between p-1.25 md:p-2.5 items-center">
        <h1 className="logo animate__animated animate__backInDown">
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Portfólio&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;Portfólio&nbsp;</span>
          </button>
        </h1>
  
        <nav>
          <ul className="ul-header gap-4 items-center  hidden md:flex space-x-4 mr-5 animate__animated animate__backInDown">
            <li id='home' className='fw'>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li id='about' className='fw'>
              <ActiveLink href="/about">About</ActiveLink>
            </li>
            <li id='service' className='fw'>
              <ActiveLink href="/projects">Projects</ActiveLink>
            </li>
            <li id='contact' className='fw'>
              <ActiveLink href="/contacts"  >Contact</ActiveLink>
            </li>
            <li className='pl-4 fw'>
            <ThemeToggle/>
            </li>
          </ul>
          <ul id='uls' className='ul-header  md:hidden flex space-x-4 items-center  animate__animated animate__backInDown'>
            <li className='mr-8'>

            <ThemeToggle/> 
            </li>
            <li >
            <label className="hamburger">
              <input type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line" d="M7 16 27 16" />
              </svg>
            </label>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
}
