import React from 'react'
import { assets } from '../assets/assets'
import { Phone } from 'react-feather'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
      <img className='w-full md:max-w-[360px]' src={assets.Contact} alt="" />
      <div className='flex flex-col justify-center items-start gap-4'>
        <p className='font-semibold text-lg text-gray-600'>Acropolis Institute of Technology and Research</p>
        <p className='font-semibold'>Deepanshu Sagore <br /> <span className='text-gray-500'>+91 6263364050</span></p>
        <p className='font-semibold'>Devansh Pipraiya <br /> <span className='text-gray-500'>+91 6260394222</span></p>
        <p className='font-semibold'>Harsh Verma <br /> <span className='text-gray-500'>+91 7489506285</span></p>
        <p className='font-semibold'>Hardeep Singh <br /> <span className='text-gray-500'>+91 9754227602</span></p>
      </div>
    </div>

    </div>
  )
}

export default Contact