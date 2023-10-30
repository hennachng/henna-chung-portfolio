import React from "react";
import backgroundImg from "../assets/background.png";

const Home = () => {
  return (
    <div className="relative">
      <img
        className="w-full z-3 h-screen object-cover object-center"
        src={backgroundImg}
        alt="Background Cover"
      />
     <div class="absolute w-full py-2.5 items-center bottom-0 font-vt bg-gray-200 text-white text-xl text-center leading-4">HENNA CHUNG</div>
    </div>
  );
};

export default Home;
