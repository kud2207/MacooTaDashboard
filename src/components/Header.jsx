import React from "react";
import { GoBell } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  // Récupérer les données du localStorage
  const adminEmail = localStorage.getItem("adminEmail");

  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-b-lg">
      <div>
        {/* <h1 className="text-xs">Welcome Back!</h1>
        <p className="text-xl font-semibold text-red-600">Member To MacoTa'a</p> */}
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-600 ">
            <GoBell size={28} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
              +9
            </span>
          </button>
          <div className="flex items-center space-x-2">
            <FaUserCircle size={28} />
            {adminEmail && <span className="text-sm">{adminEmail}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
