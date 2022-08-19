/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/img/Bg-Logo/logo.ico";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full shadow-md position: bg-background-bgColor">
      <div className="flex items-center justify-around h-16 py-1">
        <a href="#">
          <img className="w-14" src={Logo} alt="logo J|C" />
        </a>
        <div>
          <BsMoon className="text-white transition cursor-pointer hover:text-primary-main " />
        </div>
      </div>
    </header>
  );
};

export default Header;
