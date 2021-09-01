import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px) lg:h-[600px] xl:h-[650px] 2xl:h-[750px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold mt-3 hover:shadow-xl active:scale-90 transition duration-140">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Hero;
