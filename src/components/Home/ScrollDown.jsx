import React from "react";

const ScrollDown = () => {
  return (
    <div className="absolute flex flex-col items-center gap-5 text-sm font-extrabold right-2 bottom-32 after:w-[2px] after:h-7 after:bg-primary-main dark:after:bg-background-bgColor sm:hidden">
      <a href="#about" className="flex gap-2 py-10 -rotate-90">
        <span className="transition-colors text-primary-main hover:text-white dark:hover:text-background-bgColor dark:text-gray-600">
          Deslizar abajo
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
