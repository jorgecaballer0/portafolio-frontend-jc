import React from "react";
import { BsMouse } from "react-icons/bs";

const ScrollDown = () => {
  return (
    <div className="absolute flex flex-col items-center gap-5 text-sm font-extrabold right-2 bottom-32 after:w-[2px] after:h-7 after:bg-primary-main">
      <a href="#about" className="flex gap-2 py-10 -rotate-90">
        <span className="text-primary-main ">Scroll Down</span>
        <BsMouse className="text-xl rotate-90 text-primary-main" />
      </a>
    </div>
  );
};

export default ScrollDown;
