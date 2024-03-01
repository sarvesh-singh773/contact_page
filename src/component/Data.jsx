import React from 'react'
import PrintData from './PrintData'

function Data({obj}) {
  return (
    <div className='w-[1080px] mx-auto border-2 p-5'>
        <div className='flex justify-between text-[25px] list-none border-b-2 border-[black]'>
          <li className=''>Name</li>
          <li>Email</li>
          <li>Text</li>
        </div>
      {
        obj.map((item , index) =>(
            <PrintData key={index} item={item}/>
        ))
      }
    </div>
  )
}

export default Data