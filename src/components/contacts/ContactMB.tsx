import React from 'react';
import './ContactMB.css'; 

export default function ContactMB() {
  return (
    <div className="group">
      <h1>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-7 h-7 text-gray-800"
        >
          <path
            d="M5 7h14M5 12h14M5 17h14"
            strokeWidth={2}
            strokeLinecap="round"
            stroke="currentColor"
          />
        </svg>
      </h1>
      
      <a href="#" className="icon-link">
        <svg
          className="text-[#cc39a4] hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            className="opacity-0 group-hover:opacity-100"
            fill="currentColor"
            fillRule="evenodd"
            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      
      {/* Repita o <a> com seus respectivos ícones SVG aqui */}
    </div>
  );
}
