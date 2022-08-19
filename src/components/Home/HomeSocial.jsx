import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomeSocial = () => {
  return (
    <div className="absolute left-2 flex flex-col items-center gap-5 bottom-32 after:w-1 after:h-6 after:bg-primary-main hover:[&>a]:text-white [&>a]:transition-colors [&>a]:text-lg">
      <a
        href="https://www.linkedin.com/in/jorgecaballero98/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/jorgecaballero98"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:jorge.caballero.98@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail />
      </a>
    </div>
  );
};

export default HomeSocial;
