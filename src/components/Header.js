import React from "react";
// importing components
import MobileNav from "./MobileNav";
// importing link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
   
      <div className="flex flex-col lg:flex-row  w-full justify-between">
        <Link to={"/"} className="lg:hidden font-vt text-black py-6 text-5xl">
        HENNA CHUNG
        </Link>
        <nav className="w-screen text-3xl hidden lg:flex gap-x-12 font-semibold">
          <Link to={"/"} className="text-black font-vt hover:text-[#696c6d] transition">
            @home
          </Link>
          <Link to={"/about"} className="text-black font-vt hover:text-[#696c6d] transition">
            about
          </Link>
          <Link to={"/portfolio"} className="text-black font-vt hover:text-[#696c6d] transition">
            portfolio
          </Link>
        </nav>
      </div>
        <MobileNav/>
    </div>
  );
};

export default Header;
