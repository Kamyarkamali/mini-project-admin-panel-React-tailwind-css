import React from 'react'

//Icons
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function TopBar() {
  return (
    <div className='w-full h-[50%] bg-white p-[5px] sticky top-0 z-[999]'>
        <div className='flex h-[100%] px-20 items-center justify-between'>
            <div>
                <span className='font-bold text-2xl text-blue-800'>Admin</span>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-cente relative'>
                    <NotificationsNoneIcon/>
                    <span className='absolute bottom-3 bg-red-600/80 p-[3px] text-sm rounded-[50%] text-white right-0'>2</span>
                </div>
                <div className='flex items-cente relative'>
                    <LanguageIcon/>
                </div>
                <div className='flex items-cente relative'>
                    <SettingsIcon/>
                </div>
                <img className='w-[40px] rounded-[50%]' src="https://th.bing.com/th/id/OIP.sJOWnEQo3N-4bHyGjKIFIAHaHK?w=175&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default TopBar