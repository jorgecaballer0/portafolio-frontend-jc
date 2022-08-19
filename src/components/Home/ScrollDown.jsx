import React from "react";
import { BsMouse } from "react-icons/bs";

const ScrollDown = () => {
  return (
    <div className="absolute flex flex-col items-center gap-5 text-sm font-extrabold -right-10 bottom-32 after:w-1 after:h-6 after:bg-primary-main hover:[&>a]:text-white [&>a]:transition-colors ">
      <a href="#about" className="flex gap-2 py-10 -rotate-90">
        <BsMouse className="text-xl rotate-90" />
        <span className="">Scroll Down</span>
      </a>
    </div>
  );
};

export default ScrollDown;
