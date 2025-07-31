import React from "react";
import logo from "../assets/logo.png";
import logotext from "../assets/logo-text.png";
import baricon from "../assets/bar-icon.svg";
import search from "../assets/search-normal.svg";
import messages from "../assets/messages.svg";
import notifications from "../assets/notifications.svg";
import setting from "../assets/setting.svg";
import navadmin from "../assets/nav-admin.jpg";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-lg/2 px-3 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-16 h-16 flex" />
            <img src={logotext} alt="Logo Text" className="h-12 w-auto" />

            <img
              src={baricon}
              alt="Menu Icon"
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          <div className="relative">
            <button className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ">
              <img src={search} alt="Search Icon" className="w-full h-full cursor-pointer" />
            </button>
            <input
              type="text"
              placeholder="Search Here"
              className="pl-9 pr-4 py-2 w-72 h-12 border border-transparent rounded-xl text-sm placeholder-[#3A643B8D] font-medium focus:outline-none focus:ring-1 focus:ring-transparent focus:border-transparent bg-[#3A643B1D]"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <div className="w-6 h-6 ">
              <img
                src={messages}
                alt="Messages Icon"
                className="w-full h-full"
              />
            </div>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </div>

          <div className="relative cursor-pointer">
            <div className="w-6 h-6 ">
              <img
                src={notifications}
                alt="Notifications Icon"
                className="w-full h-full"
              />
            </div>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </div>

          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="text-right">
              <h4 className="text-sm font-medium text-[#28643B]">
                Liam Michael
              </h4>
              <h5 className="text-xs text-[#28643B80] font-medium">Admin</h5>
            </div>
            <img
              src={navadmin}
              alt="Admin Avatar"
              className="w-10 h-10 rounded-xl"
            />
          </div>
          <img
            src={setting}
            alt="Settings Icon"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
