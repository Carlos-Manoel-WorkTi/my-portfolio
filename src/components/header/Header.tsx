import React from 'react';
import './Header.css';
import Link from 'next/link';
import 'animate.css';

export default function Header() {
  return (
    <header className="bg-zinc-950   text-white p-4 ">
      <div className="w-full flex justify-between p-1.25 md:p-2.5">
        <h1 className="logo animate__animated animate__backInDown">
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Portfolio&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;Portfolio&nbsp;</span>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
