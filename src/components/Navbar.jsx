import React, {useState} from 'react';
import calendar from '../assets/calendar.svg'
import bell from '../assets/bell.svg'
import pic from '../assets/pic.png'



const Navbar = ({ toggleSidebar}) => {

  
  return (
    <header className='p-4 flex justify-between items-center bg-[#FAFAFA] border-b-2 border-[#E5EAEF]'>
      <section className='flex flex-row items-center justify-between w-2/3 gap-2'>
      <div className="flex flex-row items-center gap-2">
            <button type="button" className="md:hidden"
             onClick={() => toggleSidebar() }
             >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </button>
        <h1 className="font-jakarta-sans font-semibold text-sm md:text-2xl">Dashboard</h1>
        </div>
        <div className="flex items-center border rounded-3xl px-4 md:mr-28 py-1 w-40 md:w-2/5 md:h-[48px] bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="md:w-6 md:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md w-full focus:outline-none focus:border-transparent"
          />
        </div>
      </section>
    <section className='flex flex-row items-center gap-2'>
        <div className='flex flex-row items-center gap-2'>
            <img src={calendar} alt="" className='w-4'/>
            <p className='font-jakarta-sans font-normal hidden md:flex text-base'>November 15, 2023</p>
            <div className='border rounded-3xl border-[#DADDDD]  md:p-2'>
            <img src={bell} alt="" className='w-6'/>
            </div>
        </div>
        <div className='flex flex-row items-center border rounded-full border-[#DADDDD] md:px-2 md:gap-2'>
            <div className='text-right flex flex-row items-center gap-1'>
                <img src={pic} alt="" />
                <div className='hidden md:flex flex-col'>
                <p className='font-jakarta-sans font-normal text-base'>Justin Bergson</p>
                <p className='font-jakarta-sans font-normal text-[14px]'>Justin@gmail.com</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden md:flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

        </div>
    </section>
    </header>
  );
};

export default Navbar;
