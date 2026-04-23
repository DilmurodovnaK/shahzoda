

import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal"
import pedagogg from "../images/pedagogg.jpg";
import pedagog2 from "../images/pedagog2.jpg";

const Blog1 = () => {
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
  const cards = [
    {
      imgSrc: pedagogg, // Local image file
      alt: "Hollywood Sign on The Hill",
      title: "Card title",
      text: "Maktabgacha Ta`lim Muassasasidagi Ta`lim Jarayoni",
    },
    {
      imgSrc: pedagog2, // Local image file
      alt: "Palm Springs Road",
      title: "Card title",
      text: "2024-Yil YEOJU Universitetidagi Bitiruv Marosimi",
    },
  ];

  return (
    <div className="w-full px-28 pt-5 xl:px-0 bg-black">
      <div ref={titlRef} className="px-20 xl:px-12 nb:px-5">
        <h2 className="font-bold text-[30px] text-[#F7EF8A] text-center">Pedagog</h2>
        <div className="flex justify-center sm:flex-col sm:items-center gap-4 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#71162c] border border-[#F7EF8A] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={card.imgSrc}
                alt={card.alt}
                layout="responsive"
                width={500}
                height={200}
                className="object-cover w-[100%]"
              />
              <div className="p-4">
                <p className="font-medium text-lg text-[#F7EF8A] text-center">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog1;
