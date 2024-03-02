import React, { useContext } from 'react'
import PrintData from './PrintData'
import UserContext from '../context/UserContext'

function Data() {

  const {objArr} = useContext(UserContext);

  return (
    <div className='w-[1080px] mx-auto border-2 p-5'>
        <div className='flex justify-between text-[25px] list-none border-b-2 border-[black]'>
          <li className=''>Name</li>
          <li>Email</li>
          <li>Text</li>
        </div>
      {
        objArr.map((item , index) =>(
            <PrintData key={index} item={item}/>
        ))
      }
    </div>
  )
}

export default Data