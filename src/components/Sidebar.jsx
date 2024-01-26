import React from 'react';
import vector from '../assets/Vector.svg'
import menu from '../assets/menu.svg'
import graph from '../assets/graph.svg'
import box from '../assets/box.svg'
import setting from '../assets/setting.svg'
import sun from '../assets/sun.svg'
import info from '../assets/info.svg'
import moon from '../assets/moon.svg'
import ing from '../assets/ing.svg'
import setting1 from '../assets/setting1.svg'
import out from '../assets/out.svg'


const Sidebar = ({ isSidebarOpen }) => {
  const sidebarClasses = isSidebarOpen ? "" : "hidden md:flex";
  return (
    <section className={`bg-[#F7F8FA] border-r border-[#EBECF2] text-white h-screen w-20 flex flex-col items-center justify-between py-2 transition-all duration-300 ${sidebarClasses}`}>
      <section className='flex flex-col items-center'>
        <div className="p-4">
        <img src={vector} alt="" className='w-10 h-10' />
        </div>
      <nav className="p-4 flex flex-col items-center gap-5">
        <ul className='flex flex-col gap-5'>
          <li className="">
            <a href="#" className="text-white hover:text-gray-400">
            <img src={menu} alt="" className='w-10 h-10' />
            </a>
          </li>
          <li className="">
            <a href="#" className="text-white hover:text-gray-400">
            <img src={graph} alt="" className='w-10 h-10' />
            </a>
          </li>
          <li className="">
            <a href="#" className="text-white hover:text-gray-400">
            <img src={box} alt="" className='w-10 h-10' />
            </a>
          </li>
          <li className="">
            <a href="#" className="text-white hover:text-gray-400">
            <img src={setting} alt="" className='w-10 h-10' />
            </a>
          </li>
          <li className="">
            <a href="#" className="text-white hover:text-gray-400">
            <img src={info} alt="" className='w-10 h-10' />
            </a>
          </li>
        </ul>
        <ul className='flex flex-col items-center bg-white py-2 px-2 gap-4 rounded-3xl'>
        <li >
            <a href="#" className="text-white hover:text-gray-400">
            <img src={sun} alt="" className='w-[30px] h-[30px]' />
            </a>
          </li>
          <li >
            <a href="#" className="text-white hover:bg-blue">
            <img src={moon} alt="" className='w-[30px] h-[30px]' />
            </a>
          </li>
        </ul>
      </nav>
      </section>
      <nav>
      <ul className='flex flex-col items-center'>
      <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-400">
            <img src={ing} alt="" className='w-10 h-10' />
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-400">
            <img src={setting1} alt="" className='w-10 h-10' />
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-400">
            <img src={out} alt="" className='w-10 h-10' />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};


export default Sidebar;