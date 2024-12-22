import React from "react";

import HelpIcon from '../assets/icons/help.svg'
import MessageIcon from '../assets/icons/message.svg'
import VectorIcon from '../assets/icons/Vector.svg'
import NotificationIcon from '../assets/icons/Notification.svg'
import UserIcon from '../assets/icons/Avatar.svg'
import SearchIcon from '../assets/icons/Search.svg'

const Navbar = () => {
  return (
    <div className="fixed top-5 left-[262px] right-0 flex justify-between items-center h-12 px-4 ">
      {/* Search Your Course */}
      <div className="flex items-center w-[590px] h-full bg-white rounded-tl-lg px-4 py-3">
        
      <img
          src={SearchIcon}
          alt="Search Icon"
          className="w-4 h-4 mr-3" 
        />
        <input
          
          type="text"
          placeholder="Search your course"
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Notification Icons and User Info */}
      <div className="flex items-center space-x-14">
        <img
          src={HelpIcon}
          alt="Help"
          className="w-6 h-6 cursor-pointer"
        />
        <div className="relative">
        <img
          src={MessageIcon}
          alt="Message"
          className="w-6 h-6 cursor-pointer"
        />
       <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full"></span>
        </div>
        <img
          src={VectorIcon}
          alt="Vector"
          className="w-6 h-6 cursor-pointer"
        />
        <div className="relative">
        <img
          src={NotificationIcon}
          alt="Notification"
          className="w-6 h-6 cursor-pointer"
        />
       <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full"></span>
        </div>

        {/* User Avatar */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={UserIcon}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-xl font-medium mr-2 ">Adeline H.Dancy</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
