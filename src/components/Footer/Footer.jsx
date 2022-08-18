import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import LOGO from "../../assets/img/Bg-Logo/logo.ico";

const Footer = () => {
  return (
    <footer className="position:relative bg-primary-mainVariant py-8 text-center text-base my-24">
      <div className="max-w-xs mx-auto bg-background-bgColor rounded-full ">
        <a href="#1">
          <img src={LOGO} alt="Logo" />
        </a>
      </div>

      <ul>
        <li>
          <a href="#1">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#1">
            <span>Portafolio</span>
          </a>
        </li>
        <li>
          <a href="#1">
            <span>Testimonios</span>
          </a>
        </li>
      </ul>
      <div>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a
          href="https://github.com/jorgecaballero98"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jorgecaballero98/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/jorge.caballero98"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Jlc98_" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>
      <div>
        <small>&copy; Jorge Caballero - Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
