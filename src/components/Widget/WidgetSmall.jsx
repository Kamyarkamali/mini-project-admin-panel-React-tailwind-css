import React from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility';
const userImage="https://th.bing.com/th/id/OIP.RVrOPD5JrRGgryrmR6bLKAAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7";

function WidgetSmall() {
  return (
    <div className='flex-1 p-[20px] shadow-md'>
        <span className="text-gray-600 ml-7 text-xl">New Join Members</span>
        <ul>
            <li className='flex items-center mt-[20px] justify-between'>
                <img className='w-[30px] h-[30px] rounded-[50%] object-cover' src={userImage} alt="/" />
                <div className='flex sm:gap-[20px]'>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>Kamyar Kamali</span>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>FrontEnd Developer</span>
                </div>
                <button className="bg-blue-400 text-red-600 p-[5px] rounded-lg">
                <VisibilityIcon/>
                </button>
            </li>
        </ul>

        <ul>
            <li className='flex items-center mt-[20px] justify-between'>
                <img className='w-[40px] rounded-[50%] object-cover' src={userImage} alt="/" />
                <div className='flex gap-[20px]'>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>Kamyar Kamali</span>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>FrontEnd Developer</span>
                </div>
                <button className="bg-blue-400 text-red-600 p-[5px] rounded-lg">
                <VisibilityIcon/>
                </button>
            </li>
        </ul>

        <ul>
            <li className='flex items-center mt-[20px] justify-between'>
                <img className='w-[40px] rounded-[50%] object-cover' src={userImage} alt="/" />
                <div className='flex gap-[20px]'>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>Kamyar Kamali</span>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>FrontEnd Developer</span>
                </div>
                <button className="bg-blue-400 text-red-600 p-[5px] rounded-lg">
                <VisibilityIcon/>
                </button>
            </li>
        </ul>

        <ul>
            <li className='flex items-center mt-[20px] justify-between'>
                <img className='w-[40px] rounded-[50%] object-cover' src={userImage} alt="/" />
                <div className='flex gap-[20px]'>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>Kamyar Kamali</span>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>FrontEnd Developer</span>
                </div>
                <button className="bg-blue-400 text-red-600 p-[5px] rounded-lg">
                <VisibilityIcon/>
                </button>
            </li>
        </ul>

        <ul>
            <li className='flex items-center mt-[20px] justify-between'>
                <img className='w-[40px] rounded-[50%] object-cover' src={userImage} alt="/" />
                <div className='flex gap-[20px]'>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>Kamyar Kamali</span>
                    <span className='text-[12px] sm:text-[14px] md:text-[14px]'>FrontEnd Developer</span>
                </div>
                <button className="bg-blue-400 text-red-600 p-[5px] rounded-lg">
                <VisibilityIcon/>
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSmall