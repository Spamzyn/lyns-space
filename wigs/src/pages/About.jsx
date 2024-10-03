import React from 'react';
import { assets } from '../assets';

const About = () => {
  return (
    <div className='flex justify-center mt-5'>
      <div className='w-[90%] flex flex-col gap-y-5'>
        {/* About Section Heading */}
        <h1 className="font-medium text-3xl border-b pb-4">About</h1>

        {/* Intro Heading */}
        <h1 className='sm:text-7xl text-2xl font-bold'>
          We’re a community passionate about wigs, styles, and creativity
        </h1>

        {/* About Image */}
        <div className='mt-5'>
          <img src={assets.aboutImg} alt="Wig styling" className='rounded-md w-full' />
        </div>

        {/* About Description */}
        <p className='sm:text-3xl font-light'>
          Our love for wigs goes beyond just wearing them. We explore the world of wig-making, styling, and maintaining hairpieces with creativity and care. From sleek everyday looks to bold and adventurous styles, we believe wigs allow for limitless self-expression. Whether you're new to wigs or a seasoned pro, we provide a place to share, learn, and create wig recipes that enhance your beauty and boost your confidence.
        </p>
      </div>
    </div>
  );
};

export default About;
