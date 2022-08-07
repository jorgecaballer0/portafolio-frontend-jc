import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomeSocial = () => {
  return (
    <div>
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
