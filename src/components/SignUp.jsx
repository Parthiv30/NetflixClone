import React from "react";
import { ChevronRight } from "lucide-react";
import netflixLogo from "../assets/netflix.png";
import { NavLink } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="relative h-screen  bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center h-full  text-center space-y-6  ">
        <div className=" flex flex-col gap-8 justify-center items-center">
          <h1 className="text-4xl w-[75%] font-bold">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-lg sm:text-xl">
            Starts at ₹149. Cancel at any time.
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 text-black py-4 rounded-md border-2 focus:outline-none bg-transparent"
            />
            <NavLink className="w-full sm:w-auto h-full bg-red-600 hover:bg-red-700 text-white text-nowrap font-bold py-1.5 px-6 rounded-md flex justify-center items-center">
              Get Started <ChevronRight className="stroke-[4px]" />
            </NavLink>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 ">
        <img
          src={netflixLogo}
          className="w-40 mx-20 my-10"
          alt="Netflix Logo"
        />
        <NavLink to='/homepage' ><button className="bg-red-600 hover:bg-red-700 text-white py-2  rounded-md w-20 mx-20">
          Sign In</button>
        </NavLink>
      </header>
    </div>
  );
}
