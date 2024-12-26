import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Mentors = () => {

  const { speciality } = useParams()

  const { Mentors } = useContext(AppContext)
  const [filterMen, setFilterMen] = useState([])
  const navigate = useNavigate()


  console.log(speciality)
  const applyFilter = () => {
    if(speciality){
      setFilterMen(Mentors.filter(men => men.speciality === speciality))
    }else{
      setFilterMen(Mentors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[Mentors,speciality])

  return (
    <div>
      <p className=' text-gray-600'>Browse through the Mentors.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === 'Data Science' ? navigate('/Mentors'):navigate('/Mentors/Data Science')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Data Science" ?" bg-indigo-100 text-black" :"Data Science"}`}>Data Science</p>
          <p onClick={()=> speciality === 'Web Development' ? navigate('/Mentors'):navigate('/Mentors/Web Development')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Web Development" ?" bg-indigo-100 text-black" :"Web Development"}`}>Web Development</p>
          <p onClick={()=> speciality === 'Machine Learning' ? navigate('/Mentors'):navigate('/Mentors/Machine Learning')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Machine Learning" ?" bg-indigo-100 text-black" :"Machine Learning"}`}>Machine Learning</p>
          <p onClick={()=> speciality === 'Cyber Security' ? navigate('/Mentors'):navigate('/Mentors/Cyber Security')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Cyber Security" ?" bg-indigo-100 text-black" :"Cyber Security"}`}>Cyber Security</p>
          <p onClick={()=> speciality === 'Artificial Intelligence' ? navigate('/Mentors'):navigate('/Mentors/Artificial Intelligence')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Artificial Intelligence" ? "bg-indigo-100 text-black":"Artificial Intelligence"}`}>Artificial Intelligence</p>
        </div>
      <div className='w-full grid grid-cols-4 onClick={=>} gap-4 gap-y-6'>
      {
        filterMen.map((item,index)=>(
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
      ))
      }
      </div>
    </div>
    </div>
  )
}

export default Mentors