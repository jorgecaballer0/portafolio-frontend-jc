import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";

const Nav = () => {
  const [isActive, setIsActive] = useState("/");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setIsActive("#home")}
        className={isActive === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setIsActive("#about")}
        className={isActive === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setIsActive("#skills")}
        className={isActive === "#skills" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#servicios"
        onClick={() => setIsActive("#servicios")}
        className={isActive === "#servicios" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portafolio"
        onClick={() => setIsActive("#portafolio")}
        className={isActive === "#portafolio" ? "active" : ""}
      >
        <BiBriefcase />
      </a>
      <a
        href="#contacto"
        onClick={() => setIsActive("#contacto")}
        className={isActive === "#contacto" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
