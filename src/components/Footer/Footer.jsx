/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import LOGO from "../../assets/img/Bg-Logo/logo.ico";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const date = new Date();
  function formatoFecha(fecha, formato) {
    const map = {
      mm: fecha.getMonth() + 1,
      yyyy: fecha.getFullYear(),
    };
    return formato.replace(/mm|yyyy/gi, (matched) => map[matched]);
  }

  return (
    <footer className="py-6 text-base text-center position:relative bg-primary-mainVariant">
      <div className="flex justify-center mx-auto mt-4 -mb-4">
        <a href="#" className="rounded-full bg-background-bgColor">
          <img src={LOGO} alt="Logo" className="w-48" />
        </a>
      </div>
      <ul className="flex flex-wrap justify-center gap-8 mx-auto mt-8 font-medium hover:[&>li>a]:text-white hover:[&>li>a]:transition-colors">
        <li>
          <a href="#portafolio">
            <p>Portafolio</p>
          </a>
        </li>
        <li>
          <a href="#about">
            <p>Sobre mí</p>
          </a>
        </li>
      </ul>
      <article className="flex flex-col items-center justify-center mb-16">
        <div className="flex justify-center gap-4 my-6 [&>a]:bg-background-bgColor [&>a]:p-2 [&>a]:rounded-xl hover:[&>a]:bg-background-bgVariant hover:[&>a]:text-white [&>a]:transition-colors">
          <a
            href="https://api.whatsapp.com/send?phone=5491122527693&text=Hola! Me gustaría conocer más sobre tu trabajo."
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>

          <a href="https://twitter.com/Jlc98_" target="_blank" rel="noreferrer">
            <IoLogoTwitter />
          </a>
        </div>
        <p className="text-textPrimary-colorLight">
          Ultima actualización: {formatoFecha(date, "mm/yyyy")}
        </p>
      </article>
    </footer>
  );
};

export default Footer;
