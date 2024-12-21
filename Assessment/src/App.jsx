import React from 'react';
import Sidebar from './pages/Sidebar';
import Navbar from './pages/Navbar';
import MainSection from './pages/MainSection';

const App = () => {
  return (
    <div className="bg-gray-100 h-screen flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-[260px]">
        <Navbar />
        <div className="bg-white rounded-lg shadow-lg mt-16 p-8 h-[calc(100%-40px)]">
          <MainSection/>
        </div>
      </div>
    </div>
  );
};

export default App;
