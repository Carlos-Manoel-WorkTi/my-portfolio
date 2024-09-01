
import Link from "next/link";
import Button_explorer from "@/components/button_explorer/Button_explorer";
import ScrollingAuto from "@/components/scrolling/Scrolling";
import 'animate.css';
import ServeEffect from "@/components/serverEffect/ServeEffect";
import Bg from "@/components/bg/bg";
import FieldContact from "@/components/fieldContact/FieldContact";



export default function Home() {
  const getGreeting = () => {
    const hours = new Date().getHours();   
    if (hours >= 0 && hours < 6) {
      return 'Boa Madrugada';
    } else if (hours >= 6 && hours < 12) {
      return 'Bom Dia';
    } else if (hours >= 12 && hours < 18) {
      return 'Boa Tarde';
    } else {
      return 'Boa Noite';
    }
  };


  return (
    <>
    <main className="flex  flex-col items-center  overflow-x- main">
      <Bg/>
        <div className="w-full flex justify-between items-center p-5 py-2 containerTyping">
          <h2 className="typing-container text-white text-6xl mt-10 sm:mt-1 max-w-max msgInit">
          {getGreeting()}
          </h2>
          <span className=" text-white devMsg z-10">
              <div className="card">
                <div className="loader">
                  <p>&lt;DEV</p>
                  <div className="words">
                    <span className="word">eveloper/&gt;</span> 
                    <span className="word">front-end/&gt;</span>
                    <span className="word">back-end/&gt;</span>
                    <span className="word">full-stack/&gt;</span>
                    <span className="word">eveloper/&gt;</span>
                    <span className="word">OPS/&gt;</span>

                  </div>
                </div>
              </div>
            </span> 
      </div>
      <div className="ct w-full text-white h-20 pt-5 pl-6 py-4 animate__animated animate__slideInLeft animate__delay-1s">
        <h4 className="flex items-center inf-full">
          Olá, meu nome é
          <strong className="flex items-center  ml-2 inf-name italic ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-5 w-5 mr-2">
              <path d="M9.2467 3C9.65074 6.17905 12.5275 9.00324 15.6934 9.5C12.5275 9.99676 9.65074 12.8209 9.24669 16C8.84265 12.8209 6.16589 9.99676 3 9.5C6.16589 9.00324 8.84265 6.19877 9.2467 3.01971M17.3 20L17.2329 19.5924C17.0448 18.4504 16.1496 17.5552 15.0076 17.3671L14.6 17.3L15.0076 17.2329C16.1496 17.0448 17.0448 16.1496 17.2329 15.0076L17.3 14.6L17.3671 15.0076C17.5552 16.1496 18.4504 17.0448 19.5924 17.2329L20 17.3L19.5924 17.3671C18.4504 17.5552 17.5552 18.4504 17.3671 19.5924L17.3 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
            </svg>
            Carlos
          </strong>,
        </h4>
        <h4 className="inf-full">
        Confira meu portfólio para ver meus <Link href={"/projects"} className="border-b border-green-500 ">projetos</Link>.
      
          </h4>
          </div>

    <div className="p-4  w-full flex justify-between items-center  mt-8    animate__animated animate__rollIn animate__delay-1s" id="btn_explorer" >
      <Link className="ml-3" href={"/projects"}><Button_explorer/></Link>
    </div>
    
    <ScrollingAuto/>  
    <section className="containerSecond">
      <ServeEffect/>
    </section>
    </main>
    <FieldContact/>
    </>
  );
}

