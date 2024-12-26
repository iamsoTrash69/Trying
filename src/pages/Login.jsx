import React, { useState } from 'react'

const Login = () => {


  const [state, setState] = useState('Sign Up')

  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  const [Name,setName] = useState('')


  const onSubmitHandler = async (event) =>{
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibolc'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Sign Up" : "Log in"} to Book Appointment </p>
        {
          state === 'Sign Up' && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.Name)} value={Name} />
        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setEmail(e.target.Email)} value={Email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setPassword(e.target.Password)} value={Password} />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === 'Sign Up' 
          ? <p>Already a User? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login Here</span></p>
          : <p>New User? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Sign Up Here</span></p>}
      </div>
    </form>
  )
}

export default Login