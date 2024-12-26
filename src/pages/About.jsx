import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.About} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to MentorConnect, where we bridge the gap between mentors and mentees.
            Our mission is to foster meaningful connections and empower individuals through mentorship.
          </p>
          <p>
            We believe that mentorship is a powerful tool that can help individuals grow personally and professionally.
            Whether you are a student looking for guidance, a professional seeking career advice, or an entrepreneur looking to scale your business, we are here to help.Our platform provides a seamless way to find and connect with experienced mentors in various fields. We offer a wide range of mentorship programs tailored to meet your specific needs and goals.
            Join our community today and start your journey towards success with MentorConnect.
          </p>
          <b className=' text-gray-800'>Our Vision</b>
          <p>
            To create a world where everyone has access to quality mentorship and the opportunity to reach their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;