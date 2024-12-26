import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    Name: 'Adolf Hitler',
    Image: assets.Male,
    Email: 'hitleradolf@gmail.com',
    Phone: '9876543210',
    Gender: 'Male',
    Dob: '20-04-89',
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text:sm'>

      <img className='w-36 rounded' src={userData.Image} alt="" />

      {
        isEdit
          ? <input className='bg-gray-100 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.Name} onChange={e => (setUserData(prev => ({ ...prev, Name: e.target.value })))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.Name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 my-3 text-neutral-700'>
          <p className='font-medium'>Email Id : </p>
          <p className='text-blue-500'>{userData.Email}</p>
          <p className='font-medium'>Phone : </p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52' type="number" value={userData.Phone} onChange={e => (setUserData(prev => ({ ...prev, Phone: e.target.value })))} />
              : <p className='text-blue-400'>{`+91 ${userData.Phone}`}</p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 my-3 text-neutral-700'>
          <p className='font-medium'>Gender : </p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev,Gender: e.target.value}))} value={userData.Gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-400'>{userData.Gender}</p>
          }
          <p className='font-medium'>Birthday : </p>
          {
            isEdit
            ? <input className='bg-gray-100 max-w-52' type="date" value={userData.Dob} onChange={e => (setUserData(prev => ({ ...prev, Dob: e.target.value })))} />
            : <p className='text-gray-400'>{userData.Dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
      {
        isEdit
        ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save</button>
        : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
      }
      </div>
    </div>
  )
}

export default MyProfile