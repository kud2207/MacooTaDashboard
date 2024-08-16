import React, { useState } from "react";

// ICONS //
import { LuBox, LuUser, LuMessageSquare } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { TbShoppingCartPlus } from "react-icons/tb";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/produits", name: "Produit", icon: TbShoppingCartPlus },
    { id: 3, path: "/members", name: "Members", icon: TbUsers },
    { id: 4, path: "/messages", name: "Messages", icon: LuMessageSquare },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
  ];
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen boder-r pt-8 px-4 bg-white">
      <div className="mb-8">
        <Link to="/">
          <div className="text-red-500 text-2xl font-serif font-bold">
            <div className="sm:hidden">M</div>
            <span className="hidden sm:block">MaCoTa'a</span>
          </div>
          <div>
            <BsCart4 size={30} className="text-sky-700" />
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          <span>dev to </span> <span className="hidden md:flex">GetWays</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
