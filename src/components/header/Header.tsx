import React from 'react';
import './Header.css';
import ActiveLink from './activeLink/ActiveLink';
import 'animate.css';
import { ThemeToggle } from '@/themes/themes-provide';
import MenuMb from './menuMb/MenuMb';
import Link from 'next/link';


export default function Header() {
  return (
    <header className="  text-white p-2 pl-4  relative w-[100%] z-10">
      <div className="w-full flex justify-between p-1.25 md:p-2.5 items-center">
        <h1 className="logo animate__animated animate__backInDown">
          <Link href={"/"}>
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Portfólio&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;Portfólio&nbsp;</span>
          </button>
          </Link>
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
          <ul id='uls' className='ul-header  md:hidden flex space-x-4 items-center  animate__animated animate__backInDown z-'>
            <li className='mr-8 fws'>

            <ThemeToggle/> 
            </li>
            <li className='fws'>
              <MenuMb/>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
}
