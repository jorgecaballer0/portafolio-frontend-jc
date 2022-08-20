/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/Bg-Logo/logo.ico";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  const [headerShadow, setHeaderShadow] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setHeaderShadow(true);
    } else {
      setHeaderShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header className={headerShadow ? "header active" : "header"}>
      <div className="flex items-center justify-between h-16 py-1 px-[20%]">
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
