import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const ContactLinks = () => {
  return (
    <div className="flex flex-col gap-5 [&>article]:p-5 [&>article]:transition-all [&>article]:rounded-lg [&>article]:bg-background-bgVariant hover:[&>article]:bg-background-bgHover [&>article>h5]:py-1 [&>article>h5]:text-textPrimary-mainVariant [&>article>h5]:font-extrabold">
      <h3 className="w-2/3 text-xl font-extrabold text-center text-textPrimary-mainVariant">
        Escríbeme por cualquier consulta
      </h3>
      <article className="flex flex-col w-2/3 items-center justify-center gap-2 mt-3 text-sm hover:[&>a]:translate-x-1 [&>a]:transition-all [&>a]:text-primary-main ">
        <MdOutlineEmail className="text-2xl" />
        <h4>E-mail</h4>
        <h5>jorge.caballero.98@outlook.com</h5>
        <a
          className="flex items-center gap-2"
          href="mailto:jorge.caballero.98@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mensaje
          <AiOutlineArrowRight />
        </a>
      </article>
      <article className="flex flex-col w-2/3 items-center justify-center gap-2 mt-3 text-sm [&>a]:text-primary-main hover:[&>a]:translate-x-1 [&>a]:transition-all">
        <FiInstagram className="text-2xl" />
        <h4>Instagram</h4>
        <h5>@jorgecaballer0_</h5>
        <a
          className="flex items-center gap-2"
          href="https://www.instagram.com/jorge.caballero98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mensaje
          <AiOutlineArrowRight />
        </a>
      </article>
      <article className="flex flex-col w-2/3 items-center justify-center gap-2 mt-3 text-sm hover:[&>a]:translate-x-1 [&>a]:transition-all [&>a]:text-primary-main ">
        <BsWhatsapp className="text-2xl" />
        <h4>Whatsapp</h4>
        <h5>+54 9 11 2252-7693</h5>
        <a
          className="flex items-center gap-2"
          href="https://api.whatsapp.com/send?phone=5491122527693&text=Hola! Me gustaría conocer más sobre tu trabajo."
          target="_blank"
          rel="noopener noreferrer"
        >
          Mensaje
          <AiOutlineArrowRight />
        </a>
      </article>
    </div>
  );
};

export default ContactLinks;
