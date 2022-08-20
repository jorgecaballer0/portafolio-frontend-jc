import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

const ContactLinks = () => {
  return (
    <div className="flex flex-col gap-6 [&>article]:p-5 [&>article]:transition-all [&>article]:rounded-lg [&>article]:bg-background-bgVariant hover:[&>article]:bg-background-bgHover [&>article>h5]:py-1 [&>article>h5]:text-textPrimary-mainVariant [&>article>h5]:font-extrabold">
      <h3 className="w-2/3 text-xl font-extrabold text-center text-textPrimary-mainVariant">
        Escríbeme en mis redes
      </h3>

      <article className="flex flex-col w-2/3 items-center justify-center gap-2 my-3 text-sm [&>a]:text-primary-main hover:[&>a]:translate-x-1 [&>a]:transition-all dark:bg-textPrimary-mainVariant dark:text-gray-700 dark:hover:bg-textPrimary-main">
        <BsGithub className="text-2xl" />

        <h4>Github</h4>
        <a
          className="flex items-center gap-2"
          href="https://github.com/jorgecaballero98"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir al Perfil
          <AiOutlineArrowRight />
        </a>
      </article>

      <article className=" dark:bg-textPrimary-mainVariant dark:text-gray-700 dark:hover:bg-textPrimary-main flex flex-col w-2/3 items-center justify-center gap-2 my-3 text-sm hover:[&>a]:translate-x-1 [&>a]:transition-all [&>a]:text-primary-main ">
        <BsLinkedin className="text-2xl" />

        <h4>LinkedIn</h4>
        <a
          className="flex items-center gap-2"
          href=" https://www.linkedin.com/in/jorgecaballero98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir al Perfil
          <AiOutlineArrowRight />
        </a>
      </article>

      <article className=" dark:bg-textPrimary-mainVariant dark:text-gray-700 dark:hover:bg-textPrimary-main flex flex-col w-2/3 items-center justify-center gap-2 my-3 text-sm hover:[&>a]:translate-x-1 [&>a]:transition-all [&>a]:text-primary-main ">
        <FiInstagram className="text-2xl" />
        <h4>Instagram</h4>
        <a
          className="flex items-center gap-2"
          href="https://www.instagram.com/jorgecaballer0_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir al Perfil
          <AiOutlineArrowRight />
        </a>
      </article>
    </div>
  );
};

export default ContactLinks;
