import React, { useState } from 'react';
import Sidebar from './pages/Sidebar';
import Navbar from './pages/Navbar';
import StudentSection from './pages/StudentSection';
import DashboardSection from './pages/DashboardSection';
import ChaptersSection from './pages/ChaptersSection';
import HelpSection from './pages/HelpSection';
import ReportSection from './pages/ReportSection';
import SettingSection from './pages/SettingSection';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState('Students'); // Set 'Students' as default
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu); 
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar
        onMenuClick={handleMenuClick}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div
        className={`flex-1 p-4 mt-16 transition-all duration-300 ${isSidebarOpen ? 'ml-[260px]' : 'ml-2'}`}
      >
        <Navbar />

        {/* Main Content Area */}
        <div className="bg-white  p-2 mt-1 h-[calc(100%-0px)]">
          {selectedMenu === 'Students' && <StudentSection />}
          {selectedMenu === 'Dashboard' && <DashboardSection />}
          {selectedMenu === 'Chapters' && <ChaptersSection />}
          {selectedMenu === 'Help' && <HelpSection />}
          {selectedMenu === 'Reports' && <ReportSection />}
          {selectedMenu === 'Settings' && <SettingSection />}
        </div>
      </div>
    </div>
  );
};

export default App;
