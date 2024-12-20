import React from "react";
import { IoSearch } from "react-icons/io5";


const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat bg-center w-full min-h-[900px]">
      <div className="container">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-[80px] text-white text-center font-bold">Make your interior more minimalistic & modern</h2>
            <p className="text-[#FFFFFF] text-[24px] text-center font-serif">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
            <form action="" className="min-w-[344px] h-[56px] bg-[#FFFFFF26] rounded-[42px] border border-[#FFFFFF99] backdrop-blur-sm outline-none flex items-center pr-1">
                <input type="text" placeholder="Search..." className="bg-transparent flex-1 h-full indent-3 border-none select-none outline-none text-white placeholder:text-white"/>
                <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#E58411] text-white"><IoSearch /></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
