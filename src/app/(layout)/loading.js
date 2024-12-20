import React from "react";
import "./LoadingStyle.css"
const SwingAnimation = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#00000027] backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="container_load">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default SwingAnimation;
