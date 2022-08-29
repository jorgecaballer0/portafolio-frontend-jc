/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="sm:mx-auto sm:py-2 sm:rounded-lg sm:px-4 fixed z-50 flex gap-3 px-8 py-3 -translate-x-1/2 bottom-4 bg-background-bgNav dark:bg-textPrimary-mainVariant w-max rounded-full left-1/2 backdrop-blur [&>a]:bg-transparent [&>a]:p-3 [&>a]:rounded-lg text-white dark:text-background-bgColor text-xl [&>a]:transition-colors hover:[&>a>*]:text-textPrimary-colorLight dark:hover:[&>a>*]:text-white [&>a>*]:transition-colors hover:[&>a]:cursor-pointer">
      <Link
        activeClass="text-primary-mainVariant scale-125 transition-all"
        to="home"
        spy={true}
        smooth={true}
        offset={-50}
        duration={300}
      >
        <AiOutlineHome />
      </Link>
      <Link
        activeClass="text-primary-mainVariant scale-125 transition-all"
        to="about"
        spy={true}
        smooth={true}
        duration={300}
      >
        <AiOutlineUser />
      </Link>
      <Link
        activeClass="text-primary-mainVariant scale-125 transition-all"
        to="skills"
        spy={true}
        smooth={true}
        duration={300}
      >
        <BiBook />
      </Link>
      <Link
        activeClass="text-primary-mainVariant scale-125 transition-all"
        to="portafolio"
        spy={true}
        smooth={true}
        duration={300}
      >
        <BiBriefcase />
      </Link>
      <Link
        activeClass="text-primary-mainVariant scale-125 transition-all"
        to="servicios"
        spy={true}
        smooth={true}
        duration={300}
      >
        <RiServiceLine />
      </Link>
      <Link
        activeClass="text-primary-mainVariant scale-125 transition-all"
        to="contacto"
        spy={true}
        smooth={true}
        duration={300}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
