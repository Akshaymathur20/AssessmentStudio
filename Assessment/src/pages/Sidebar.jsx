import React, { useState } from 'react';
import DashboardIcon from '../assets/icons/dashboard.svg';
import StudentsIcon from '../assets/icons/students.svg';
import ChaptersIcon from '../assets/icons/chapters.svg';
import HelpIcon from '../assets/icons/help.svg';
import ReportsIcon from '../assets/icons/Report.svg';
import SettingsIcon from '../assets/icons/setting.svg';
import Logo from '../assets/logo.png'; // Import the logo

const Sidebar = ({ onMenuClick }) => {
  const [activeMenu, setActiveMenu] = useState(null); // State to track the active menu item

  const menuItems = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Students', icon: StudentsIcon },
    { name: 'Chapters', icon: ChaptersIcon },
    { name: 'Help', icon: HelpIcon },
    { name: 'Reports', icon: ReportsIcon },
    { name: 'Settings', icon: SettingsIcon },
  ];

  const handleClick = (name) => {
    setActiveMenu(name); // Set the active menu when clicked
    onMenuClick(name); // Pass the selected menu item to the parent component
  };

  return (
    <div className="fixed left-0 top-0 w-[260px] h-full bg-white p-4 shadow-lg">
      {/* Logo Section */}
      <div className="mb-14 mt-4 ml-2 flex">
        <img src={Logo} alt="Logo" className="w-20 h-auto" />
      </div>

      {/* Menu Items */}
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.name)} 
            className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer 
              ${activeMenu === item.name ? 'bg-gray-200' : 'hover:bg-gray-200'}`}           >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <span className="text-md">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
