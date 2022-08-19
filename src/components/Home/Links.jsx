import React from "react";
import CV from "../../assets/pdf/jorgecaballero-cv.pdf";

const Links = () => {
  return (
    <div className="flex justify-center gap-5 mt-8 ">
      <a
        href={CV}
        className="inline-block px-5 py-3 font-bold transition-colors border rounded-lg cursor-pointer w-max text-textPrimary-main bg-background-bgColor hover:bg-background-bgVariant hover:text-white hover:border-current"
      >
        Descargar CV
      </a>
      <a
        href="#contacto"
        className="inline-block px-5 py-4 font-bold transition-colors rounded-lg cursor-pointer w-max hover:text-white hover:bg-primary-main bg-primary-mainVariant text-white hover:border-transparent text-base"
      >
        Contactame
      </a>
    </div>
  );
};

export default Links;
