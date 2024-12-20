import React from 'react';
import DashboardIcon from '../assets/icons/dashboard.svg';
import StudentsIcon from '../assets/icons/students.svg';
import ChaptersIcon from '../assets/icons/chapters.svg';
import HelpIcon from '../assets/icons/help.svg';
import ReportsIcon from '../assets/icons/Report.svg';
import SettingsIcon from '../assets/icons/setting.svg';
import Logo from '../assets/logo.png'; // Import the logo

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Students', icon: StudentsIcon },
    { name: 'Chapters', icon: ChaptersIcon },
    { name: 'Help', icon: HelpIcon },
    { name: 'Reports', icon: ReportsIcon },
    { name: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="fixed left-0 top-0 w-[248px] h-full bg-gray-100 p-4 shadow-lg">
      {/* Logo Section */}
      <div className="mb-14 mt-4 ml-2 flex">
        <img src={Logo} alt="Logo" className="w-20 h-auto" />
      </div>

      {/* Menu Items */}
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <span className="text-md">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
