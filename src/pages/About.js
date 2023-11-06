import React from "react";
import backgroundImg from "../assets/homebackground.jpg";

const About = () => {
  return (
    <div className="h-screen w-screen bg-pink-100">
      <img
        className="w-full h-screen object-cover object-center"
        src={backgroundImg}
        alt="Background Cover"
      />
      <div className="w-full h-screen absolute top-10 left-0 ">
        <div className="fixed m-auto h-full w-full flex flex-col justify-center items-center ">
          <div className="w-full h-screen absolute top-0 left-0">
            <div className="max-w-[1000px] m-auto h-full w-full flex flex-col justify-center items-center ">
        
                <h1 className="font-vt"> Hi, welcome to my page! I am Henna Chung, an undergraduate studying Computer Science with 
                  a Data Science Concentration at the Paul G. Allen School of CSE.
                  
                  If i were a color 3: Yellow 2: Dark Blue, 1: light blue 2: Beige, 3: Light Purple </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
