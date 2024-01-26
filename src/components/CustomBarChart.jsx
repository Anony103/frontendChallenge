import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', month: 24000 },
  { name: 'Feb', month: 16000 },
  { name: 'Mar', month: 19000 },
  { name: 'Apr', month: 27000 },
  { name: 'May', month: 19000 },
  { name: 'Jun', month: 45000 },
  { name: 'Jul', month: 19000 },
  { name: 'Aug', month: 20000 },
  { name: 'Sep', month: 32000 },
  { name: 'Oct', month: 18000 },
  { name: 'Nov', month: 16000 },
  { name: 'Dec', month: 20080 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;

    return (
      <div className="relative">
        <div className="font-jakarta-sans text-3 px-[15px] rounded-lg py-[5px] bg-black text-white">
          <p className="label">{`${value}`}</p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-style-solid border-width-0 border-color-transparent border-t-5 border-black"></div>
        </div>
      </div>
    );
  }

  return null;
};


const CustomBarChart = () => {
  const yAxisTicks = [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex-2 px-5 py-4 border-2 border-[#EDF2F7] shadow-sm rounded-2xl w-full lg:w-3/5 bg-white">
      <div className=" text-gray-500 flex flex-row items-center justify-between md:px-2 mb-4">
        <h1 className='font-jakarta-sans text-[#26282C] font-semibold text-[12px] md:text-[18px] font-medium'>Sales Trends</h1>
        <div className='flex items-center md:gap-2'>
          <label htmlFor="dropdown" className='text-[#3A3F51] font-jakarta-sans text-[12px] md:text-[14px]'>Sort by:</label>
          <select id="dropdown" value={selectedOption} onChange={handleChange} className="font-jakarta-sans font-normal border border-[#E1DFDF] text-[12px] py-2 md:px-2 rounded-3xl focus:outline-none">
            <option value="option1">Monthly</option>
            <option value="">Yearly</option>
            <option value="option2">Weekly</option>
            <option value="option3">Daily</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width="100%" height={1000} data={data} barCategoryGap={15} barGap={5}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34CAA5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#34CAA5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" className='font-jakarta-sans text-[14px] font-semibold text-[#525252]'/>
          <YAxis ticks={yAxisTicks} className='font-jakarta-sans text-[12px] font-semibold text-[#525252]'/>
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={<CustomTooltip />}
          />
          <Legend />
          <Bar dataKey="month" fill="rgb(52,202,165,0.1)" radius={[30, 30, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
