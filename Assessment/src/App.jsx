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
  const [selectedMenu, setSelectedMenu] = useState(null); // Track selected menu item

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu); // Set the menu item when clicked
  };

  return (
    <div className="bg-gray-100 h-screen flex">
      {/* Sidebar */}
      <Sidebar onMenuClick={handleMenuClick} />

      <div className="flex-1 p-4 ml-[260px]">
        <Navbar />
        <div className="bg-white rounded-lg shadow-lg mt-16 p-8 h-[calc(100%-40px)]">
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
