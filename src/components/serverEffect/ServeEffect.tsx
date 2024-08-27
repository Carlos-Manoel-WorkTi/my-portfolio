'use client';

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import './serveEffect.css';
import Link from 'next/link';

export default function ServeEffect() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
    });
  }, []);


  const infRef = useRef<HTMLDivElement | null>(null);  // Type the ref as HTMLDivElement or null
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const currentInfRef = infRef.current; // Save the current ref value

    if (currentInfRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(currentInfRef); // Use the saved ref value here
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(currentInfRef);

      return () => {
        observer.unobserve(currentInfRef); // Cleanup using the saved ref value
      };
    }
  }, []);

  return (
    <>
      <div className="container_SevMini" data-aos="zoom-in-down"> 
      <div className='groupServ' >

        <div className="SevMini">
          <svg
            width="74"
            height="90"
            viewBox="0 0 74 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M40 76.5L72 57V69.8615C72 70.5673 71.628 71.2209 71.0211 71.5812L40 90V76.5Z"
              fill="#396CAA"
              />
            <path
              d="M34 75.7077L2 57V69.8615C2 70.5673 2.37203 71.2209 2.97892 71.5812L34 90V75.7077Z"
              fill="#395aac"
            />
            <path d="M34 76.5H40V90H34V76.5Z" fill="#396CAA" />
            <path
              d="M3.27905 55.593L35.2806 37.5438C36.3478 36.9419 37.6522 36.9419 38.7194 37.5438L70.721 55.593C71.7294 56.1618 71.7406 57.6102 70.7411 58.1945L39.2712 76.593C37.8682 77.4133 36.1318 77.4133 34.7288 76.593L3.25887 58.1945C2.25937 57.6102 2.27061 56.1618 3.27905 55.593Z"
              fill="#163C79"
              stroke="#396CAA"
            />
            <path
              d="M40 79L72 60V70.4001C72 71.1151 71.6183 71.7758 70.9987 72.1329L40 90V79Z"
              fill="#173D7A"
            />
            <path d="M34 79L3 61V71.5751L34 90V79Z" fill="#0665B2" />
            <path
              id="strobe_color1"
              d="M58 72.5L60.5 71V74L58 75.5V72.5Z"
              fill="#FF715E"
            />
            <path
              id="strobe_color2"
              d="M63 69.5L65.5 68V71L63 72.5V69.5Z"
              fill="#17e300b4"
            />
            <path d="M68 66.5L70.5 65V68L68 69.5V66.5Z" fill="#FF715E" />
            <path
              d="M40 58.5L72 39V51.8615C72 52.5673 71.628 53.2209 71.0211 53.5812L40 72V58.5Z"
              fill="#396CAA"
              />
            <path
              d="M34 57.7077L2 39V51.8615C2 52.5673 2.37203 53.2209 2.97892 53.5812L34 72V57.7077Z"
              fill="#396DAC"
            />
            <path d="M34 58.5H40V72H34V58.5Z" fill="#396CAA" />
            <path
              d="M3.27905 37.593L35.2806 19.5438C36.3478 18.9419 37.6522 18.9419 38.7194 19.5438L70.721 37.593C71.7294 38.1618 71.7406 39.6102 70.7411 40.1945L39.2712 58.593C37.8682 59.4133 36.1318 59.4133 34.7288 58.593L3.25887 40.1945C2.25937 39.6102 2.27061 38.1618 3.27905 37.593Z"
              fill="#163C79"
              stroke="#396CAA"
            />
            <path
              d="M40 61L72 42V52.4001C72 53.1151 71.6183 53.7758 70.9987 54.1329L40 72V61Z"
              fill="#173D7A"
            />
            <path d="M34 61L3 43V53.5751L34 72V61Z" fill="#0665B2" />
            <path d="M58 54.5L60.5 53V56L58 57.5V54.5Z" fill="#FF715E" />
            <path d="M63 51.5L65.5 50V53L63 54.5V51.5Z" fill="black" />
            <path
              id="strobe_color1"
              d="M63 51.5L65.5 50V53L63 54.5V51.5Z"
              fill="#FF715E"
              />
            <path d="M68 48.5L70.5 47V50L68 51.5V48.5Z" fill="#FF715E" />
            <path
              d="M40 40.5L72 21V33.8615C72 34.5673 71.628 35.2209 71.0211 35.5812L40 54V40.5Z"
              fill="#396CAA"
            />
            <path
              d="M34 39.7077L2 21V33.8615C2 34.5673 2.37203 35.2209 2.97892 35.5812L34 54V39.7077Z"
              fill="#396DAC"
            />
            <path d="M34 40.5H40V54H34V40.5Z" fill="#396CAA" />
            <path
              d="M3.27905 19.593L35.2806 1.54381C36.3478 0.941872 37.6522 0.941872 38.7194 1.54381L70.721 19.593C71.7294 20.1618 71.7406 21.6102 70.7411 22.1945L39.2712 40.593C37.8682 41.4133 36.1318 41.4133 34.7288 40.593L3.25887 22.1945C2.25937 21.6102 2.27061 20.1618 3.27905 19.593Z"
              fill="#124E89"
              stroke="#396CAA"
            />
            <path
              d="M40 43L72 24V34.4001C72 35.1151 71.6183 35.7758 70.9987 36.1329L40 54V43Z"
              fill="#173D7A"
              />
            <path d="M34 43L3 25V35.5751L34 54V43Z" fill="#0665B2" />
            <path d="M68 30.5L70.5 29V32L68 33.5V30.5Z" fill="#FF715E" />
            <path
              id="strobe_color3"
              d="M58 36.5L60.5 35V38L58 39.5V36.5Z"
              fill="#FF715E"
              />
            <path d="M63 33.5L65.5 32V35L63 36.5V33.5Z" fill="#FF715E" />
            <path
              d="M20.1902 22.0719C18.8101 21.3026 18.8252 19.3119 20.2168 18.5636L36.1054 10.0189C37.2884 9.3827 38.7116 9.3827 39.8946 10.0189L55.7832 18.5636C57.1748 19.3119 57.1899 21.3026 55.8098 22.0719L40.4345 30.6429C38.9211 31.4865 37.0789 31.4865 35.5655 30.6429L20.1902 22.0719Z"
              fill="#396CAA"
            />
            <path
              d="M11 52.755C11 51.9801 11.8432 51.4997 12.5098 51.8947L23.5196 58.419C24.1273 58.7792 24.5 59.4332 24.5 60.1396V60.245C24.5 61.0199 23.6568 61.5003 22.9902 61.1053L11.9804 54.581C11.3727 54.2208 11 53.5668 11 52.8604V52.755Z"
              fill="#396CAA"
            />
            <mask
              id="mask0_2_176"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="11"
              y="51"
              width="14"
              height="11"
            >
              <path
                d="M11 52.755C11 51.9801 11.8432 51.4997 12.5098 51.8947L23.5196 58.419C24.1273 58.7792 24.5 59.4332 24.5 60.1396V60.245C24.5 61.0199 23.6568 61.5003 22.9902 61.1053L11.9804 54.581C11.3727 54.2208 11 53.5668 11 52.8604V52.755Z"
                fill="#396CAA"
              />
            </mask>
            <g mask="url(#mask0_2_176)">
              <path
                d="M11.5 52.7417C11.5 51.9803 12.3349 51.5138 12.9833 51.9128L23.5482 58.4143C24.1397 58.7783 24.5 59.4231 24.5 60.1176V61.5L12.4598 54.4195C11.8651 54.0698 11.5 53.4315 11.5 52.7417V52.7417Z"
                fill="#163874"
                />
            </g>
            <mask
              id="mask1_2_176"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="19"
              y="9"
              width="38"
              height="23"
            >
              <path
                d="M20.1902 22.0719C18.8101 21.3026 18.8252 19.3119 20.2168 18.5636L36.1054 10.0189C37.2884 9.3827 38.7116 9.3827 39.8946 10.0189L55.7832 18.5636C57.1748 19.3119 57.1899 21.3026 55.8098 22.0719L40.4345 30.6429C38.9211 31.4865 37.0789 31.4865 35.5655 30.6429L20.1902 22.0719Z"
                fill="#396CAA"
              />
            </mask>
            <g mask="url(#mask1_2_176)">
              <path
                d="M18 21.3115L36.167 11.9451C37.3171 11.3521 38.6829 11.3521 39.833 11.9451L58 21.3115L40.3567 30.7405C38.8841 31.5275 37.1159 31.5275 35.6433 30.7405L18 21.3115Z"
                fill="#173D7A"
              />
            </g>
            <path
              d="M37.447 21.565L35 19.9799L37.6941 18.66L40.141 20.245L37.447 21.565Z"
              fill="#FF715E"
              />
            <path
              d="M48.9738 30.8646L47.0741 29.7745L49.1792 28.684L51.0789 29.7741L48.9738 30.8646Z"
              fill="#173E7B"
              />
            <path
              d="M52.0661 29.0093L50.1635 27.9242L52.2657 26.8282L54.1682 27.9133L52.0661 29.0093Z"
              fill="#173E7B"
              />
            <path
              id="strobe_led1"
              d="M55.1521 27.1464L53.2538 26.054L55.3602 24.9661L57.2585 26.0586L55.1521 27.1464Z"
              fill="#3A6DAB"
              />
          </svg>
        </div>
        <div className="Ghost">
          <svg
            width="60"
            height="36"
            viewBox="0 0 60 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M1.96545 19.4296C0.643777 18.6484 0.658726 16.7309 1.99242 15.9705L28.0186 1.12982C29.2467 0.429534 30.7533 0.429533 31.9814 1.12982L58.0076 15.9704C59.3413 16.7309 59.3562 18.6484 58.0346 19.4296L32.5442 34.4962C30.9749 35.4238 29.0251 35.4238 27.4558 34.4962L1.96545 19.4296Z"
              fill="rgb(31, 37, 47)"
            />
          </svg>
        </div>
      </div>


          <div className='div-connector'>
          <svg id="connector" xmlns="http://www.w3.org/2000/svg" width="683" height="157" fill="none" viewBox="0 0 683 157">
            <g>
              <path
                id="back"
                fill="none"
                stroke="rgb(78, 82, 89, 0.2)"
                strokeWidth="3"
                d="M20 9L2.31.786C1.352.234 0 1.016 0 2.12v17.76c0 1.105 1.353 1.886 2.31 1.334L20 13V9zm654 38l8.214-17.69c.552-.957-.229-2.31-1.334-2.31h-17.76c-1.105 0-1.886 1.353-1.334 2.31L670 47h4zM18 13h70V9H18v4zm92 22v96h4V35h-4zm26 122h512v-4H136v4zm538-26V45h-4v86h4zm-26 26c14.359 0 26-11.641 26-26h-4c0 12.15-9.85 22-22 22v4zm-538-26c0 14.359 11.641 26 26 26v-4c-12.15 0-22-9.85-22-22h-4zM88 13c12.15 0 22 9.85 22 22h4c0-14.36-11.641-26-26-26v4z"
              ></path>
              <path
                id="front"
                fill="none"
                stroke="rgb(78, 82, 89)"
                strokeWidth="3"
                strokeDasharray="48, 144"
                strokeDashoffset="192"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 9L2.31.786C1.352.234 0 1.016 0 2.12v17.76c0 1.105 1.353 1.886 2.31 1.334L20 13V9zm654 38l8.214-17.69c.552-.957-.229-2.31-1.334-2.31h-17.76c-1.105 0-1.886 1.353-1.334 2.31L670 47h4zM18 13h70V9H18v4zm92 22v96h4V35h-4zm26 122h512v-4H136v4zm538-26V45h-4v86h4zm-26 26c14.359 0 26-11.641 26-26h-4c0 12.15-9.85 22-22 22v4zm-538-26c0 14.359 11.641 26 26 26v-4c-12.15 0-22-9.85-22-22h-4zM88 13c12.15 0 22 9.85 22 22h4c0-14.36-11.641-26-26-26v4z"
              ></path>
            </g>
          </svg>
        
          <svg id="connector2" xmlns="http://www.w3.org/2000/svg" width="289" height="270" fill="none" viewBox="0 0 289 270">
            <g>
              <path
                id="back2"
                fill="none"
                stroke="rgb(78, 82, 89, 0.2)"
                strokeWidth="4"
                strokeLinejoin="bevel"
                d="M2 234v0c0 9.251 7.5 16.75 16.75 16.75h24.875A8.375 8.375 0 0152 259.125v0a8.375 8.375 0 008.375 8.375H198c13.255 0 24-10.745 24-24V208c0-13.255 10.745-24 24-24h17c13.255 0 24-10.745 24-24V49c0-13.255-10.745-24-24-24v0c-13.255 0-24-10.745-24-24V0"
              ></path>
              <path
                id="front2"
                fill="none"
                stroke="rgb(78, 82, 89)"
                strokeWidth="4"
                strokeLinejoin="bevel"
                strokeDasharray="48, 144"
                strokeDashoffset="192"
                d="M2 234v0c0 9.251 7.5 16.75 16.75 16.75h24.875A8.375 8.375 0 0152 259.125v0a8.375 8.375 0 008.375 8.375H198c13.255 0 24-10.745 24-24V208c0-13.255 10.745-24 24-24h17c13.255 0 24-10.745 24-24V49c0-13.255-10.745-24-24-24v0c-13.255 0-24-10.745-24-24V0"
              ></path>
            </g>
          </svg>

          </div>


     
          <div id="inf" ref={infRef}>
          <div className="border-screen">
          <ul className={`terminal ${isInView ? 'in-view' : ''}`}>
            <li>
              <span className="icon-inf">$</span> Bem-vindo ao meu portfólio
            </li>
            <li>
              <span className="icon-inf">$</span> Carregando recursos
              <span id="dot1" className="dot">.</span>
              <span id="dot2" className="dot">.</span>
              <span id="dot3" className="dot">.</span>
            </li>
            <li className="lm">
              <span className="icon-inf">$</span> Olá, sou Carlos. Prazer em conhecê-lo.
            </li>
            <li className="lm">
              Estou no curso de <span className='curso'>&quot;Análise</span>
            </li>
            <li><span className='curso'>e Desenvolvimento de Sistemas&quot;.</span> </li>
            <li id="ab"   >
              <span className="icon-inf">$</span> Mais sobre mim, clique em: <Link href="/about">
              <button className="signupBtn">
  ver mais
  <span className="arrow">
     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(44, 182, 120)"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
  </span>
</button>
              </Link>
            </li>
          </ul>

          </div>
        </div>
      </div>
    </>
  )
}
