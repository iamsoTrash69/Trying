import React, { useContext } from 'react'
import { use } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function TopMentors() {
    const navigate = useNavigate()
    const { Mentors } = useContext(AppContext) 
  return (
    <div className=' flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Mentors to Book</h1>
        <p className='w-1/3 text-center text-sm'>Here are some of the Top Mentors</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 sm:px-0'>
            {Mentors.slice(0,8).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item.id}`)} key={index} className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50 ' src={item.image} alt={item.id} />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/mentors'); scroll(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default TopMentors