import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
const NavBar = () => {
    const [open, setOpen] =useState(true)
    return (

       <div className={`text-2xl block ease-in duration-500 ${open ? 'mb-[200px]' : 'mb-[20px]'}`}>
         <div className='md:hidden'>
            {
                open ? <XCircleIcon onClick={()=>setOpen(!open)} className='h-10 w-20'/> :<Bars3Icon onClick={()=>setOpen(!open)} className='h-10 w-20'/>
            }
             
             
        </div>
        
        <div className={`md:static md:flex justify-between md:py-4 absolute bg-red-500 text-white ease-in duration-500 px-20 py-10 mb-20  ${open ? 'left-[0px]' : 'left-[-700px]'}`}>
        <div>
        <h1 className="text-green-500 lg:text-3xl md:text-2xl md:block hidden  font-bold">
            OPTIMIZED BRAIN
        </h1>
        </div>
           <div>
            <Link className='block  md:inline-block mr-5' to='/home'>Home</Link>
           <Link className='block md:inline-block mr-5' to='/quiz'>Quiz</Link>
            <Link className='sm:block  md:inline-block mr-5' to='/quizChart'>Quiz Chart</Link>
            <Link className='block  md:inline-block mr-5' to='/blog'>Blogs</Link>
           </div>
        </div>
       </div>
    );
};

export default NavBar;