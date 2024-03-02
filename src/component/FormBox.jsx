
import { useContext} from 'react';
import ButtonBox from './ButtonBox'
import UserContext from '../context/UserContext';

function FormBox(){

    const {objArr,setObjArr} = useContext(UserContext)

    function onsubmit(event)
    {
        event.preventDefault();
    
        let newobj = {Name : event.target[0].value , Email : event.target[1].value , Text : event.target[2].value}

        let newarr = [...objArr , newobj];
        setObjArr(newarr);

        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
    }
  return (
    <div className='w-[1080px] mx-auto flex '>
        <div className='w-[50%] mt-6'>
            <div className='flex gap-4'>
                <ButtonBox text="VIA SUPPORT CHAT" />
                <ButtonBox text="VIA CALL" />
            </div>
            <button className='border-[1px] border-[black] text-center py-[8px] w-[83%] rounded-lg mt-4 hover:bg-slate-800 duration-500 hover:text-[white]'>VIA EMAIL FORM</button>
            <form onSubmit={onsubmit}>
            <div className='flex flex-col w-[80%] relative mt-6 '>
                <label className='absolute left-5 -top-3 bg-[white] px-2'>Name</label>
                <input type="text" className='border-[1px] border-[black] rounded-md py-[12px]'/>
            </div>
            <div className='flex flex-col w-[80%] relative mt-6 '>
                <label className='absolute left-5 -top-3 bg-[white] px-2'>Email</label>
                <input type="text" className='border-[1px] border-[black] rounded-md py-[12px]'/>
            </div>
            <div className='flex flex-col w-[80%] relative mt-6 '>
                <label className='absolute left-5 -top-3 bg-[white] px-2'>Text</label>
                <textarea className='border-[1px] border-[black] rounded-md py-[12px] h-[100px]'/>
            </div>
            <div className='text-end w-[80%] mt-4'>
                <ButtonBox text="SUBMIT BUTTON" />
            </div>

            </form>
            
        </div>
        <div className='w-[50%]'>
            <img src="page.svg" alt="load image"/>
        </div>
    </div>
  )
}

export default FormBox;