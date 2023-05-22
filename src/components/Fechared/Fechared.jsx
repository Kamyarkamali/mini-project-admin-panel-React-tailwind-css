import React from 'react'

//Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Fechared() {
  return (
    <div className='flex text-[12px] text-center items-center ml-[50px] gap-5 sm:text-[20px] sm:justify-around  lg:justify-around'>
        <div className='shadow-lg bg-yellow-400 rounded-lg hover:scale-105 duration-300'>
        <div>
            <span>Revanue</span>
            <div className='flex justify-center items-center gap-1'>
                <span className="font-bold">2,415</span>
                <span>-11.4 <KeyboardArrowDownIcon  className='text-red-600'/></span>
            </div>
        </div>
        <span className="text-[11px] text-gray-400 sm:text-xl md:text-xl lg-text-xl">Compared to last month</span>
    </div>

    <div className='shadow-lg  bg-red-400 text-white rounded-lg hover:scale-105 duration-300'>
        <div>
            <span>Sales</span>
            <div className='flex justify-center items-center gap-1'>
                <span className="font-bold">2,415</span>
                <span>-11.4 <KeyboardArrowDownIcon className='text-red-600'/></span>
            </div>
        </div>
        <span className="text-[11px] text-gray-400 sm:text-xl">Compared to last month</span>
    </div>

    <div className='shadow-lg m-[20px]  bg-green-500 text-white font-bold rounded-lg hover:scale-105 duration-300'>
        <div>
            <span>Cost</span>
            <div className='flex justify-center items-center gap-1'>
                <span className="font-bold">2,415</span>
                <span>+11.4 <KeyboardArrowUpIcon className='text-green-500'/></span>
            </div>
        </div>
        <span className="text-[11px] sm:text-xl text-blue-600">Compared to last month</span>
    </div>
    </div>
  )
}

export default Fechared