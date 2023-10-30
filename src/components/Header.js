import React from "react";
// importing components
import MobileNav from "./MobileNav";
// importing link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
   
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link to={"/"} className="text-[#696c6d] hover:text-black transition">
            Home
          </Link>
          <Link to={"/about"} className="text-[#696c6d] hover:text-black transition">
            About
          </Link>
          <Link to={"/portfolio"} className="text-[#696c6d] hover:text-black transition">
            Portfolio
          </Link>
        </nav>
        <MobileNav/>
      </div>
    </div>
  );
};

export default Header;
