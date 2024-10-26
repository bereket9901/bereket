import { useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import imageOne from '../assets/me3.jpg';
import imageTwo from '../assets/me4.jpg';
import imageThree from '../assets/me5.jpg';
import imageFour from '../assets/me6.jpg';
import imageFive from '../assets/me7.jpg';
import imageSix from '../assets/me8.jpg';
const CircularText = () => {
  const text = "♡ getting married ♡ Praise Jesus";

  useEffect(() => {
    const str = text;
    const textContainer = document.getElementById("circular-text");

    for (let i = 0; i < str.length; i++) {
      let span = document.createElement('span');
      span.innerHTML = str[i];
      textContainer.appendChild(span);
      span.style.transform = `rotate(${11 * i}deg)`;  // Adjust rotation per character
    }
  }, [text]);
  const handelGetDirections = () => {
    window.open("https://www.google.com/maps/place/Zetseat+Apostolic+Reformation+Church+%7C+Sarbet+%7C+%E1%8B%98%E1%8C%B8%E1%8A%A0%E1%89%B5+%E1%89%B8%E1%88%AD%E1%89%BD+%7C+%E1%88%B3%E1%88%AD+%E1%89%A4%E1%89%B5/@9.0000197,38.6942655,12z/data=!4m6!3m5!1s0x164b8425e0b5bd1d:0xad83b9dfadb755c4!8m2!3d8.9904208!4d38.7426275!16s%2Fg%2F1ptx_trd7?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D");
  }
  return (
    <>
      <header>
        <nav className='flex gap-20 justify-center p-3 text-lg main-text'>
          <a href='#save-the-date'>When & Where</a>
          <a href='#gallery'>Gallery</a>
        </nav>
      </header>
      <main>
        <section className="section-landing text-center">
          <div className="main-text sm:flex justify-center sm:gap-5">
            <h3 className="lg:text-7xl text-6xl drop-shadow-lg">Bereket</h3>
            <h3 className="text-red-500 lg:text-8xl text-8xl drop-shadow-lg">&</h3>
            <h3 className="lg:text-7xl text-6xl drop-shadow-lg">Salem</h3>
          </div>
          <div className="flex justify-center h-screen circle-div">
            <p id="circular-text" className="relative w-[150px] h-[150px] animate-spin-slow z-20"></p>
          </div>
        </section>
        <section id='save-the-date' className='text-center'>
          <h2 className='text-6xl text-center mt-32 sacramento-regular'>Save the Date</h2>
          <h2 className='text-sm uppercase text-yellow-100 text-center lexend-regular px-20 py-2'>Saturday November 02,2024 1:00PM(7:00L.T)</h2>
          <h2 className='text-sm uppercase  text-yellow-100 text-center lexend-regular px-20 pb-10'><IoLocationOutline className='inline' size={20} /> Zetseat Church Sarbet Next to Oromia Offices</h2>
          <button onClick={handelGetDirections} className='button-89 mb-32'>Get Directions</button>
        </section>
        <section id='gallery'>
          <h2 className='text-6xl text-center sacramento-regular mb-10'>Gallery</h2>
          <div className='mt-10 px-5'>
            <img src={imageThree} className='rounded-3xl' alt='photo' />
            <img src={imageTwo} className='rounded-3xl my-10' alt='photo' />
          </div>
          <div className='flex flex-col gap-10 px-5'>
            <img src={imageOne} className='rounded-3xl' alt='photo' />
            <img src={imageFour} className='rounded-3xl' alt='photo' />
            <img src={imageFive} className='rounded-3xl' alt='photo' />
            <img src={imageSix} className='rounded-3xl' alt='photo' />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default CircularText;
