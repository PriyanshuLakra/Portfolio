import React from "react";
import pic from "../../public/Lakra3.jpg";
import ButtonR from "./ButtonR"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 py-3">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hi , I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
          Hello, I am Priyanshu Lakra, a dedicated web developer with a deep passion for the MERN Stack. With a solid foundation in IT, I aim to craft meaningful and visually captivating software solutions that make a lasting impact.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.instagram.com/priyanshu_lakra001/?next=%2Fproud.mp%2Ffeed%2F" target="_blank">
                      <FaSquareInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/priyanshu-lakra-067422229/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/Priyanshu_Lakra007/" target="_blank">
                    <img src="../../public/leetcode-svgrepo-com.svg" className="w-6 h-6 text-2xl cursor-pointer" />
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">View My Resume</h1>
                <div className="flex space-x-5">
                <div >
                  <ButtonR />
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[360px] md:h-[360px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
