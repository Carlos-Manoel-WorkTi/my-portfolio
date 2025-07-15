'use client'

export default function getTimeCurrent() {
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
  console.log(getGreeting());
  console.log('getTimeCurrent function called');
  
  return (
    <h2 className="typing-container text-white text-6xl mt-10 sm:mt-1 max-w-max msgInit">
          {getGreeting()}
    </h2>
  )
}