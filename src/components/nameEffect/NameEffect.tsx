// src/NameEffect.js
import React from 'react';
import './NameEffect.css';

const NameEffect = () => {
  return (
    (
        <div className="loader">
          <svg height="0" width="0" viewBox="0 0 100 100" className="absolute">
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="2"
                x2="0"
                y1="62"
                x1="0"
                id="b"
              >
                <stop stopColor="#0369a1"></stop>
                <stop stopColor="#67e8f9" offset="1.5"></stop>
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="0"
                y1="64"
                x1="0"
                id="c"
              >
                <stop stopColor="#0369a1"></stop>
                <stop stopColor="#22d3ee" offset="1"></stop>
                <animateTransform
                  repeatCount="indefinite"
                  keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                  keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                  dur="8s"
                  values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                  type="rotate"
                  attributeName="gradientTransform"
                ></animateTransform>
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="2"
                x2="0"
                y1="62"
                x1="0"
                id="d"
              >
                <stop stopColor="#38bdf8"></stop>
                <stop stopColor="#075985" offset="1.5"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
            width="100"
            height="100"
            className="inline-block"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="8"
              stroke="url(#b)"
              d="M 20,20 L 80,20 
              L 80,27 L 27,27 L 27,50
              L 70,50 L 70,57 
              L 25,57 L 25,80 
              L 80,80 L 80,87 L 20,87 Z"
              className="dash"
              id="D"
              pathLength="360"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          
            viewBox="0 0 100 100"
            width="100"
            height="100"
            className="inline-block"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="12"
              stroke="url(#d)"
              d="M 20,20 L 50,80 L 80,20"
              className="dash"
              id="E"
              pathLength="360"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
            width="100"
            height="100"
            className="inline-block"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="11"
              stroke="url(#c)"
              d="M 50,15  
              A 35,35 0 0 1 85,50  
              A 35,35 0 0 1 50,85  
              A 35,35 0 0 1 15,50  
              A 35,35 0 0 1 50,15 Z"
              className="spin"
              id="V"
              pathLength="360"
            ></path>
          </svg>
        </div>));
}

export default NameEffect;
