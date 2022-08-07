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
        to="/"
        onClick={() => setIsActive("/about")}
        className={isActive === "/" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="/"
        onClick={() => setIsActive("/skills")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiBook />
      </Link>
      <Link
        to="/"
        onClick={() => setIsActive("/servicios")}
        className={isActive === "/" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="/"
        onClick={() => setIsActive("/portafolio")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiBriefcase />
      </Link>
      <Link
        to="/"
        onClick={() => setIsActive("/contacto")}
        className={isActive === "/" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
