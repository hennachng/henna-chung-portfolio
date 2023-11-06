import React from "react";
import backgroundImg from "../assets/homebackground.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="relative">
      <img
        className="w-full z-3 h-screen object-cover object-center"
        src={backgroundImg}
        alt="Background Cover"
      />
      <div className="w-full h-screen absolute top-0 left-0">


        <div className="max-w-[1000px] m-auto h-full w-full flex flex-col justify-center items-center ">
          <div className="z-10 rounded-xl lg:p-[150px] p-[25px]">
              <h1 className="sm:text-8xl z-40 font-vt text-4xl font-bold text-black/80">
                Henna Chung.
              </h1>
              <h2 className="flex sm:text-5xl font-vt text-2xl pt-4 text-black/80">
                I'm a(n)
                <TypeAnimation
                  sequence={[
                    "Undergraduate S",
                    1000,
                    "Aspiring Software Engineer",
                    2000,
                    "Croffle Connoisseur",
                    100,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "lem", paddingLeft: "5px" }}
                />
              </h2>
              <div className="text-black/80 font-vt">
                Developed and Brought to you by ReactJS, TailwindCSS, and bits of Framer Motion
              </div>
              <div className="justify-center text-center font-vt text-black text-xl flex gap-x-8 font-bold z-10">
                seattle, wa
              
            </div>
            {/* <div class="z-20 w-[500px] h-[500px] bg-purple-200 mix-blend-multiply filter blur-2xl opacity-70 "></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
