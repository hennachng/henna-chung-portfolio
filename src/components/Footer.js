
import React from "react";

const Footer = () => {
  return <div>
    <div class="absolute w-full bottom-0">
      <div className="lg:-rotate-90 px-[30px] lg:fixed lg:bottom-[130px] lg:right-0 lg:px-0 z-60 h-[100px] lg:h-[70px] justify-center text-center text-3xl flex gap-x-10 font-bold z-10">
        <a
          className="font-vt cursor-pointer hover:text-[#696c6d] text-black"
          href="https://github.com/hennachng"
          target="_blank"
          rel="noreferrer"
        >

          <h1>github</h1>
        </a>
        <a
          className="font-vt cursor-pointer hover:text-[#696c6d] text-black"
          href="https://www.linkedin.com/in/hennachung/"
          target="_blank"
          rel="noreferrer"
        >
          <h1>linkedin</h1>
        </a>
      </div>
    </div>
  </div>;
};

export default Footer;
