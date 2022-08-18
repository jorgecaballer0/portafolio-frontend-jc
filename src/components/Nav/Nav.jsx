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
        href="#1"
        onClick={() => setIsActive("/")}
        className={isActive === "/" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#1"
        onClick={() => setIsActive("/about")}
        className={isActive === "/" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#1"
        onClick={() => setIsActive("/skills")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#1"
        onClick={() => setIsActive("/servicios")}
        className={isActive === "/" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#1"
        onClick={() => setIsActive("/portafolio")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiBriefcase />
      </a>
      <a
        href="#1"
        onClick={() => setIsActive("/contacto")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
