import React from "react";
import backgroundImg from "../assets/aboutbackground.png";

const About = () => {
  return <div className="h-screen w-screen bg-pink-100">
    <img
      className="w-full h-screen object-cover object-center"
      src={backgroundImg}
      alt="Background Cover"
    />
      <div className="w-full h-screen absolute top-10 left-0 ">
        <div className="fixed m-auto h-full w-full flex flex-col justify-center items-center ">
          <div class="absolute w-[500px] h-[500px] bg-[#fb6f92] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob z-0"></div>
          <div class="absolute w-[500px] h-[500px] bg-[#dedbd2] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 z-0"></div>
          <div class="z-1 absolute w-[500px] h-[500px] bg-[#ffb703] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
    </div>
  </div>;
};

export default About;
