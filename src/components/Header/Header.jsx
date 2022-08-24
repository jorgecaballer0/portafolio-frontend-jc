/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/Bg-Logo/logo.ico";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [headerShadow, setHeaderShadow] = useState(false);
  const [theme, setTheme] = useState(false);

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

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(!theme);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className={headerShadow ? "header active" : "header"}>
      <div className="flex items-center justify-between sm:px-[5%] h-16 py-1 px-[20%]">
          {/* {
            headerShadow ? <img alt="ACA VA EL LOGO"/> : ""
          } */}
          <img
            className="transition-colors w-14 dark:border dark:rounded-full dark:bg-background-bgColor"
            src={Logo}
            alt="logo J|C"
            onClick={scrollToTop}
          />
        <div onClick={changeTheme}>
          {theme ? (
            <BsMoon className="text-xl transition-all cursor-pointer hwill-change-scroll hover:animate-pulse text-background-bgColor hover:text-primary-main" />
          ) : (
            <BsSun className="text-xl text-white transition-all cursor-pointer will-change-scroll hover:text-yellow-500 hover:animate-pulse" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
