import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import LOGO from "../../assets/img/Bg-Logo/logo.ico";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/">
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/portafolio">
            <span>Portafolio</span>
          </Link>
        </li>
        <li>
          <Link to="/testimonios">
            <span>Testimonios</span>
          </Link>
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
