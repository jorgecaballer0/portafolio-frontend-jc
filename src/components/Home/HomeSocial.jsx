import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomeSocial = () => {
  return (
    <div className="absolute left-16 flex flex-col items-center gap-5 bottom-32 after:w-[2px] after:h-7 after:bg-primary-main dark:after:bg-background-bgColor hover:[&>a]:text-white [&>a]:transition-colors [&>a]:text-lg">
      <a
        href="https://www.linkedin.com/in/jorgecaballero98/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="transition-colors text-primary-main hover:text-white dark:hover:text-background-bgColor dark:text-gray-600" />
      </a>
      <a
        href="https://github.com/jorgecaballero98"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="transition-colors text-primary-main hover:text-white dark:hover:text-background-bgColor dark:text-gray-600" />
      </a>
      <a
        href="mailto:jorge.caballero.98@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="transition-colors text-primary-main hover:text-white dark:hover:text-background-bgColor dark:text-gray-600" />
      </a>
    </div>
  );
};

export default HomeSocial;
