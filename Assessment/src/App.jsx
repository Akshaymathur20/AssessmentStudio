import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-100 h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-4 ml-[260px]">
        {/* Navbar */}
        <Navbar />
        
        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg mt-16 p-16 h-[calc(100%-40px)]">
          {/* Add your page-specific content here */}
          <h1 className="text-gray-700 text-xl font-semibold">Content Area</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
