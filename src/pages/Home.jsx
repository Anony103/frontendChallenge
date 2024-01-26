import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import BarChart from '../components/CustomBarChart';
import Wiget from '../components/Wiget';
import Table from '../components/Table';
import SaleReport from '../components/SaleReport';

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Before toggle:", isSidebarOpen);
    setSidebarOpen(!isSidebarOpen);
    console.log("After toggle:", isSidebarOpen);
  };

  return (
    <div className='flex overflow-x-hidden bg-[#FAFAFA]'>
       <div className='bg-your-color'>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>
      <div className='w-full'>
      <Navbar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className='flex flex-col lg:flex-row p-5 mx-auto gap-6'>
        <BarChart/>
        <Wiget/>
        </div>
        <div className='flex flex-col md:flex-row p-5 mx-auto gap-6 '>
          <Table/>
          <SaleReport/>
        </div>
      </div>
    </div>
  );
};

export default Home;
