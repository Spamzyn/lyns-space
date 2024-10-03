import React from 'react';
import { assets } from '../assets';

const About = () => {
  return (
    <div className='flex justify-center mt-5'>
      <div className='w-[90%] flex flex-col gap-y-5'>
        <h1 className="font-medium text-3xl border-b pb-4">About Us</h1>

        <h1 className='sm:text-7xl text-2xl font-bold'>
          We're passionate about helping you find your perfect wig
        </h1>

        <div className='mt-5'>
          <img src={assets.aboutImg} alt="Wig styling" className='rounded-md w-full' />
        </div>

        <p className='sm:text-3xl font-light'>
          At our wig store, we believe that everyone deserves to feel confident and beautiful. Our passion for wigs goes beyond just selling them – we're dedicated to helping you find the perfect style that enhances your natural beauty and boosts your confidence. From natural-looking everyday wigs to bold and adventurous styles, we offer a wide range of high-quality wigs to suit every taste and need. Whether you're new to wigs or a seasoned wearer, our expert team is here to guide you through the selection process and provide tips on wig care and styling.
        </p>
      </div>
    </div>
  );
};

export default About;
