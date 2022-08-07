import React from "react";
import Logo from "../../assets/img/Bg-Logo/logo.ico";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={Logo} alt="logo J|C" />
        </Link>
        <div>
          <BsMoon />
        </div>
      </div>
    </header>
  );
};

export default Header;
