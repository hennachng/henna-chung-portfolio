
import React from "react";

const Footer = () => {
    return <div>
        <div class="absolute w-full py-2.5 items-center bottom-0 leading-4">
        <div className=" px-[30px] lg:px-[70px] z-60 h-[100px] lg:h-[70px] justify-center text-center text-3xl flex gap-x-10 font-bold z-10">
            <a
              className="font-vt cursor-pointer text-black"
              href="https://github.com/hennachng"
              target="_blank"
              rel="noreferrer" 
            >
             
              <h1>github</h1>
            </a>

            <a
              className="font-vt cursor-pointer text-black"
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
