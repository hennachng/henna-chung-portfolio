import React from "react";
import backgroundImg from "../assets/background.png";

const About = () => {
  return <div className="h-screen w-screen bg-pink-100">
     <img
        className="w-full h-screen object-cover object-center"
        src={backgroundImg}
        alt="Background Cover"
      />
  </div>;
};

export default About;
