import React from "react";
import CV from "../../assets/pdf/jorge-caballero-cv.pdf";
import { Link } from "react-scroll";

const Links = () => {
  return (
    <div className="flex justify-center gap-5 mt-8 sm:mt-4 sm:gap-3">
      <a
        href={CV}
        className="inline-block px-5 py-3 font-bold transition-colors border rounded-lg cursor-pointer border-primary-main w-max text-primary-main bg-background-bgColor hover:bg-primary-main hover:text-background-bgColor hover:border-transparent dark:bg-textPrimary-mainVariant dark:border-background-bgVariant dark:text-background-bgVariant dark:hover:text-white dark:hover:bg-background-bgColor"
      >
        Descargar CV
      </a>
      <Link
        to="contacto"
        spy={true}
        smooth={true}
        duration={300}
        className="inline-block px-5 py-4 text-base font-bold transition-colors rounded-lg cursor-pointer text-background-bgColor w-max hover:text-white hover:bg-primary-main bg-primary-mainVariant hover:border-transparent dark:text-textPrimary-mainVariant dark:bg-primary-main dark:hover:bg-primary-mainVariant dark:hover:text-white"
      >
        Contactame
      </Link>
    </div>
  );
};

export default Links;
