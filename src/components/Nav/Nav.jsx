import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isActive, setIsActive] = useState("/");

  return (
    <nav>
      <Link
        to="/"
        onClick={() => setIsActive("/")}
        className={isActive === "/" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="/about"
        onClick={() => setIsActive("/about")}
        className={isActive === "/" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="/skills"
        onClick={() => setIsActive("/skills")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiBook />
      </Link>
      <Link
        to="/servicios"
        onClick={() => setIsActive("/servicios")}
        className={isActive === "/" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="/portafolio"
        onClick={() => setIsActive("/portafolio")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiBriefcase />
      </Link>
      <Link
        to="/contacto"
        onClick={() => setIsActive("/contacto")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
