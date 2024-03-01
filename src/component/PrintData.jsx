import React from 'react'

function PrintData({item}) {
  return (
    <div className='flex justify-between list-none border-b-2 border-[gray] py-4 text-[20px]'>
        <li>{item.Name}</li>
        <li>{item.Email}</li>
        <li>{item.Text}</li>
    </div>
  )
}

export default PrintData