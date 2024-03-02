import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Navbar() {

  const {showstore , setShowStore} = useContext(UserContext);
  function handalstoreData()
  {
    setShowStore((prev) => !prev);
  }
  return (
    <div className='w-[1280px] mx-auto flex justify-between py-4'>
         <div className='flex gap-2'>
            <div>
            <img src="https://i.pinimg.com/736x/46/d9/98/46d9985ea3beb170f2ca7e0bb69dc428.jpg" alt="" className='w-[30px] h-[30px]' />
            </div>
            <div>
                <h1 className='text-[red] text-[20px]'>SARVESH</h1>
            </div>
            
            
         </div>
         <div>
            <ul className='flex gap-5'>
                <button className={`border-2 border-[black] bg-slate-700 py-2 px-4 mr-6 rounded-xl text-[20px] text-[white] hover:bg-slate-950`}
                onClick={handalstoreData}
                >{`${showstore ? "Hide Store Data" : "Show Store Data"}`}</button>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
         </div>
    </div>
  )
}

export default Navbar