'use client'

export default function GetTimeCurrent() {
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
  
  return getGreeting()
}
