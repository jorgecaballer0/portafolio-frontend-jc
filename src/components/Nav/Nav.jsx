/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";

const Nav = () => {
  return (
    <nav className="fixed z-50 flex gap-3 px-4 py-6 -translate-x-1/2 bottom-4 bg-background-bgNav w-max rounded-full left-1/2 backdrop-blur [&>a]:bg-transparent [&>a]:p-3 [&>a]:rounded-lg text-white text-lg  hover:[&>a]:bg-background-bgNavHover hover:[&>a]:rounded-full [&>a]:transition-all hover:[&>a>*]:text-primary-mainVariant [&>a>*]:transition-colors active:[&>a>*]:text-emerald-500">
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#skills">
        <BiBook />
      </a>
      <a href="#servicios">
        <RiServiceLine />
      </a>
      <a href="#portafolio">
        <BiBriefcase />
      </a>
      <a href="#contacto">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
