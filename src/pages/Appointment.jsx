import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { CheckCircle, Info } from 'react-feather';
import { use } from 'react';

const Appointment = () => {
  const { id } = useParams();
  const { Mentors, CurrencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  const [menInfo, setMenInfo] = useState(null);
  const [menSlots,setMenSlots] = useState([]);
  const [slotIndex,setSlotIndex] = useState(0);
  const [slotTime,setSlotTime] = useState('');

  const fetchMenInfo = async () => {
    const menInfo = Mentors.find(men => men.id === id);
    setMenInfo(menInfo);
  };

  const getAvailableSlots = async () => {
    setMenSlots([])

    let today = new Date()

    for(let i=0;i<7;i++){
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        timeSlots.push({
          dateTime : new Date(currentDate),
          time : formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setMenSlots((prev) => ([...prev, timeSlots]))
    }
  }



  useEffect(() => {
    fetchMenInfo();
  }, [id, Mentors]);

  useEffect(() => {
    getAvailableSlots();
  },[menInfo])

  useEffect(() => {
    console.log(menSlots)
  },[menSlots])

return menInfo && (
    <div>
      {/* Mentor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={menInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
          {/* DETAILS OF THE MENTOR */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {menInfo.name} <CheckCircle size={20} color='green' />
          </p>
          <div>
            <p className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              {menInfo.degree} and Sepecializes in {menInfo.speciality}
            </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{menInfo.experience}</button>
          </div>
          {/* ABOUT MENTOR */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium mt-3 text-gray-900'>
              About <Info size={16} />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{menInfo.about} </p>
          </div>
          {/* FEE */}
          <p className='text-gray-500 font-medium mt-4'>
            Appointment Fee :<span className='text-gray-600'> {CurrencySymbol}{menInfo.fee} </span>
          </p>
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Select a suitable time slot for the appointment</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            menSlots.length > 0 && menSlots.map((item,index) => (
              <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' :'border border-gray-200' }`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {menSlots.length && menSlots[slotIndex].map((item,index) => (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white':'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className='bg-primary text-white text:sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>
    </div>
  );
};

export default Appointment;