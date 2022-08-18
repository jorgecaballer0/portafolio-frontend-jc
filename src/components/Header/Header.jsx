import React from "react";
import Logo from "../../assets/img/Bg-Logo/logo.ico";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="position: fixed top-0 left-0 w-full bg-background-bgColor z-50 shadow-md">
      <div className="flex justify-around items-center py-1 h-16">
        <Link to="/">
          <img className="w-14" src={Logo} alt="logo J|C" />
        </Link>
        <div>
          <BsMoon className="cursor-pointer text-white transition hover:text-primary-main  " />
        </div>
      </div>
    </header>
  );
};

export default Header;
