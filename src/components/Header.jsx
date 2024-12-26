import React from 'react';
import * as Icons from 'react-feather';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* LEFT SIDE */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl font-semi-bold text-white leading-tight md:leading-tight lg:leading-tight'>
          Book Appointments <br /> With Trusted Mentors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <Icons.Search  size={25} />
          <p>Simply browse through our extensive list of Trusted Mentors, <br className='hidden sm:block' /> Schedule your appointments for free.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book Appointment <Icons.ChevronDown size={25} /></a>
      </div>
      {/* RIGHT SIDE  */}
      <div className='md:w-1/2 relative'>
        <img className = 'w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.GOM} alt="GOM"/>
      </div>
    </div>
  );
}

export default Header;