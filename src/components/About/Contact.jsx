import React from "react";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <Link
      to="contacto"
      spy={true}
      smooth={true}
      duration={300}
      className="flex items-center justify-center px-5 py-3 m-auto font-bold transition-colors border rounded-lg cursor-pointer border-primary-main w-max text-primary-main bg-background-bgColor hover:bg-primary-main hover:text-white hover:border-transparent dark:bg-textPrimary-mainVariant dark:border-background-bgVariant dark:text-background-bgVariant dark:hover:text-white dark:hover:bg-background-bgVariant"
    >
      Contactame
    </Link>
  );
};

export default Contact;
