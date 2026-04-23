import React, { useEffect, useRef } from 'react'
import ScrollReveal from "scrollreveal"
import photo from "../images/intro2.png"


const Intro = () => {
  const titleRef = useRef(null);
  const titlRef = useRef(null);
 useEffect(() => {
    ScrollReveal().reveal(titlRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
     ScrollReveal().reveal(titleRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
  })

  return (
    <div className='w-full bg-[#2A4E8D] pt-4 px-28 xl:px-0'>
      <div ref={titleRef} className='flex px-20 items-center h-[600px] md:h-[500px] nb:h-[400px] xl:px-12 justify-between nb:px-5'>
        <div  className='flex flex-col w-[50%] items-start gap-3 xl:gap-4 md:w-[100%]'>
          <h1 className='font-bold text-[60px] ms:text-[26px] mm:text-[22px] ms:leading-[30px] nb:text-[30px] xl:text-[48px] leading-[65px] text-[#CEA92F] max-w-[650px] md:text-[40px] md:leading-[40px]'>
            Fotihova Khalilova Shakhzoda Dilmurodovna
          </h1>
          <p className='font-medium text-[23px] text-white leading-[30px] max-w-[580px] md:font-light md:text-[15px] md:leading-[22px]'>
            Maktabgacha Ta`lim Pedagogi  <br /> Oliy Toifadagi Pedagog <br />Libos Dizayneri
          </p>
        </div>

        <div className='max-w-[500px]'>
          <img src={photo} alt="" width={500} className='max-w-[650px] w-[90%] md:w-[100%] md:max-w-[400px] md:max-h-[420px] transform transition-transform duration-300 hover:scale-105' />
        </div>
      </div>
    </div>
  );
}

export default Intro;
