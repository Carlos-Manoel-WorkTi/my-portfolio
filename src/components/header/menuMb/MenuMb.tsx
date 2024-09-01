
'use client'
import Link from "next/link"
import "./MenuMb.css"
import React, { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from "@/themes/themes-provide"
import { useTheme } from 'next-themes';

export default function MenuMb() {
    const [isActiveMenu, setActiveMenu] = useState<boolean>(false);
    const [animationClass, setAnimationClass] = useState<string>('animate__fadeOutRight');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { setTheme, resolvedTheme } = useTheme();
    const isDarkMode = resolvedTheme === 'dark';
  
    const menuRef = useRef<HTMLUListElement>(null);

    const handleThemeToggle = () => {
      setTheme(isDarkMode ? 'light' : 'dark');
    };

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
      };

    const alterState = () => {
        !isActiveMenu && toggleMenu();
        if (isActiveMenu) {
            setAnimationClass('animate__fadeOutRight');
            setTimeout(() => {
                setActiveMenu(false);
            }, 1000); 
        } else {
            setActiveMenu(true);
            setAnimationClass('animate__fadeInRight');
        }
    };

    const handleMenuItemClick = () => {
        setIsOpen(false);
        setAnimationClass('animate__fadeOutRight');
        setTimeout(() => {
            setActiveMenu(false);
        }, 1000);
    };

    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                if (isActiveMenu) {
                    setIsOpen(false);
                    setAnimationClass('animate__fadeOutRight');
                    setTimeout(() => {
                        setActiveMenu(false);
                    }, 1000);
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isActiveMenu]);

    return (
    <>
        <label className="hamburger relative z-20" >
            <input type="checkbox" onChange={alterState} checked={isOpen}/>
            <svg viewBox="0 0 32 32" className="custom-svg">
            <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
            </svg>
        </label>
        {
          
          isActiveMenu &&  
           ( 
            <ul ref={menuRef}  className={`menu-options animate__animated ${animationClass}`}>
             
                <li>
                <Link href="/" onClick={handleMenuItemClick}><span className="nav-link">Inicio</span>   
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="16"  
                        viewBox="0 0 24 24"
                        width="16" 
                        focusable="false"
                        aria-hidden="true"
                        className="my-icon ic" 
                    >
                        <path d="M12 4.44l7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32l-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path>
                    </svg>
                    </Link>
                </li>
                <li>
                <Link href="/about" onClick={handleMenuItemClick}><span className="nav-link">Meu perfil</span>
                        
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        aria-hidden="true"
                        className="my-icon ic" // Adicione a classe para estilização
                    >
                        <path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path>
                    </svg>
                </Link>

                </li>
                <li>
                <Link href="/projects" onClick={handleMenuItemClick}><span className="nav-link">Meus projetos</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill="none"
                            viewBox="0 0 64 64"
                            className="my-icon-project ic" // Adicionando a classe para estilização
                        >
                            <path
                            className="path-1"
                            d="M55 51H9a3.003 3.003 0 00-3 3v5a3.003 3.003 0 003 3h46a3.004 3.004 0 003-3v-5a3.004 3.004 0 00-3-3zm1 8a1.001 1.001 0 01-1 1H9a1.001 1.001 0 01-1-1v-5a1.001 1.001 0 011-1h46a1.001 1.001 0 011 1v5zm-1-28H9a3.003 3.003 0 00-3 3v11a3.003 3.003 0 003 3h46a3.004 3.004 0 003-3V34a3.004 3.004 0 00-3-3zm1 14a1.001 1.001 0 01-1 1H9a1.001 1.001 0 01-1-1V34a1.001 1.001 0 011-1h46a1.001 1.001 0 011 1v11zM55 2H9a3.003 3.003 0 00-3 3v20a3.003 3.003 0 003 3h46a3.004 3.004 0 003-3V5a3.003 3.003 0 00-3-3zm1 23a1.001 1.001 0 01-1 1H9a1.001 1.001 0 01-1-1V5a1 1 0 011-1h46a1.001 1.001 0 011 1v20z"
                            ></path>
                            <path
                            className="path-2"
                            d="M35.879 8.629L29.5 15.008l-1.379-1.38a3 3 0 00-4.242 4.243l3.5 3.5a3.013 3.013 0 004.242 0l8.5-8.5a3 3 0 00-4.242-4.242zm2.828 2.828l-8.5 8.5a1.025 1.025 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414l2.086 2.086a.998.998 0 001.414 0l7.086-7.086a1 1 0 011.414 1.414z"
                            ></path>
                        </svg>
                </Link>
                </li>
                <li>

                <Link href="/contact" onClick={handleMenuItemClick}><span className="nav-link">Entre em contato</span>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="my-icon-contact ic" // Adicione a classe para estilização
                    >
                        <g clipPath="url(#clip0_225_57)">
                        <path
                            d="M17 21.63H5a3 3 0 01-3-3v-8a1 1 0 00-2 0v8a5 5 0 005 5h12a1 1 0 000-2zm4-18H7a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm-.41 2l-5.88 5.88a1.002 1.002 0 01-1.42 0L7.41 5.63h13.18zm1.41 11a1 1 0 01-1 1H7a1 1 0 01-1-1V7l5.88 5.88a3 3 0 004.24 0L22 7v9.63z"
                        ></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_225_57">
                            <path fill="#ffffff0" d="M0 0H24V24H0z"></path>
                        </clipPath>
                        </defs>
                    </svg>
                </Link>
                </li>
                <li  >
                    <span  className="nav-link" id="tema-link" onClick={handleThemeToggle}>Escolha o tema</span>
                    <div id="theme-icon">
                        <ThemeToggle/>
                    </div>
                </li>
            </ul>) 
          
        }
    </>
    )
}
