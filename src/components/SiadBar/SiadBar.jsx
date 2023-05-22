import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import SmsIcon from '@mui/icons-material/Sms';
import MenuIcon from '@mui/icons-material/Menu';

function SiadBar() {
    const [open,setOpen]=useState(false)
  return (
    <div className={open ? "flex-2 h-fit bg-blue-700 sticky top-[50px] w-[180px] ease-in-out duration-300" : "flex-2 h-[100vh]  bg-blue-700 sticky top-[50px] w-[0px] ease-in-out duration-300"}>
      {!open ?<MenuIcon onClick={()=>setOpen(!open)} className='absolute  top-[10px] left-[10px] bg-blue-500 text-white rounded-lg cursor-pointer'/> : <CloseIcon className='absolute cursor-pointer text-white' onClick={()=>setOpen(!open)}/>}
       {open&& <div>
            <div className='mb-[10px] flex flex-col items-center'>
                <h3 className='text-gray-300 font-bold text-center text-xl'>Dashboard</h3>
                <ul className='text-white cursor-pointer py-10'>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <HomeIcon/>
                        Home
                    </li>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <TimelineIcon/>
                        Analyrisc
                    </li>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <TrendingUpIcon/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className='mb-[10px] flex flex-col items-center'>
                <h3 className='text-gray-300 font-bold text-center text-xl'>QuicMenu</h3>
                <ul className='text-white cursor-pointer py-10  '>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <SupervisorAccountIcon/>
                        Users
                    </li>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <Inventory2Icon/>
                        Products
                    </li>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <AttachMoneyIcon/>
                        Transactions
                    </li>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <SmsIcon/>
                        Message
                    </li>
                </ul>
            </div>
            <div className='mb-[10px] flex flex-col items-center'>
                <h3 className='text-gray-300 font-bold text-center text-xl'>Notifications</h3>
                <ul className='text-white cursor-pointer py-10'>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <EmailIcon/>
                        Email
                    </li>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <SmsFailedIcon/>
                        Fedback
                    </li>
                    <li className='p-[5px] hover:bg-gray-400 hover:rounded-lg duration-300'>
                        <TrendingUpIcon/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>}
    </div>
  )
}

export default SiadBar