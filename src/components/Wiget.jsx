import React from 'react';
import { report } from '../../data';

const Widget = () => {
  return (
    <div className='flex flex-col w-[100%] lg:w-2/5 md:flex-row flex-wrap gap-4'>
      {report.map((item, index) => (
        <div className="flex flex-col w-full md:w-[48%] px-8 py-4 border-2 border-[#EDF2F7] shadow-sm rounded-2xl bg-white w-full gap-2.5" key={index}>
          <div className="flex flex-row justify-between items-center">
            <div>
              <img src={item.icon} alt="" />
            </div>
            <div>
              <img src={item.status} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className=" font-jakarta-sans font-medium text-[18px] text-gray-500">{item.title}</span>
            <span className="font-jakarta-sans text-[24px] font-semibold text-[#3A3F51]">{item.sign}{item.amount}</span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-row items-center px-2 py-2 rounded-3xl gap-2" style={{ backgroundColor: `rgba(${item.backgroundColor}, 0.12)` }} >
                <img src={item.status1} alt="" />
                <span className="text-xs font-jakarta-sans font-medium" style={{color:`${item.color}`}}>23.5%</span>
              </div>
              <p className='text-[14px] font-jakarta-sans font-normal text-[#606060]'>vs. previous month</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Widget;
