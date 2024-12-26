import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Icons from 'react-feather';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img src={assets.Logo} alt="Logo" className="w-32 cursor-pointer" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 flex items-center gap-2">
            <Icons.Home size={16} />
            HOME
          </li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/Mentors">
          <li className="py-1 flex items-center gap-2">
            <Icons.Users size={16} />
            ALL MENTORS
          </li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/About">
          <li className="py-1 flex items-center gap-2">
            <Icons.Info size={16} />
            ABOUT
          </li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/Contact">
          <li className="py-1 flex items-center gap-2">
            <Icons.Mail size={16} />
            CONTACT
          </li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
          token 
          ? <div className="flex items-center gap-2 cursor-pointer group relative">
                <img src={assets.Male} alt="Mentee" className="w-10 rounded-full" />
                <Icons.ChevronDown size={16} />
                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block z-50">
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 z-1000'>
                        <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer '>My Profile</p>
                        <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
          </div>
          : <button onClick={() => navigate('/Login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
        }
      </div>
    </div>
  );
}

export default Navbar;