import React from 'react';
import './Header.css';
import Link from 'next/link';
import 'animate.css';
import { ThemeToggle } from '@/themes/themes-provide';

export default function Header() {
  return (
    <header className="bg-zinc-950   text-white p-4 ">
      <div className="w-full flex justify-between p-1.25 md:p-2.5">
        <h1 className="logo animate__animated animate__backInDown">
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Portfólio&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;Portfólio&nbsp;</span>
          </button>
        </h1>

        <nav>
          <ul className="ul-header  hidden md:flex space-x-4 mr-5 animate__animated animate__backInDown">
            <li id='home'>
              <Link href="#" className="hover:text-green-400 ">Home</Link>
            </li>
            <li id='about'>
              <Link href="#" className="hover:text-green-400 " >About</Link>
            </li>
            <li id='service'>
              <Link href="#" className="hover:text-green-400 " >Services</Link>
            </li>
            <li id='contact'>
              <Link href="#" className="hover:text-green-400 " >Contact</Link>
            </li>
            <li>
            <ThemeToggle/>
            </li>
          </ul>
          <ul id='uls' className='ul-header  md:hidden flex space-x-4 items-center pb-3 animate__animated animate__backInDown'>
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
