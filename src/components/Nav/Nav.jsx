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
    <nav className="sm:mx-auto sm:py-2 sm:rounded-lg sm:px-4 fixed z-50 flex gap-3 px-8 py-3 -translate-x-1/2 bottom-4 bg-background-bgNav dark:bg-textPrimary-mainVariant w-max rounded-full left-1/2 backdrop-blur [&>a]:bg-transparent [&>a]:p-3 [&>a]:rounded-lg text-white dark:text-background-bgColor text-xl hover:[&>a]:bg-gradient-to-b from-primary-main hover:[&>a]:rounded-full [&>a]:transition-colors hover:[&>a>*]:text-textPrimary-colorLight dark:hover:[&>a>*]:text-white [&>a>*]:transition-colors active:[&>a>*]:text-primary-main">
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#skills">
        <BiBook />
      </a>
      <a href="#portafolio">
        <BiBriefcase />
      </a>
      <a href="#servicios">
        <RiServiceLine />
      </a>
      <a href="#contacto">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
