import React from "react";
import CV from "../../assets/pdf/jorgecaballero-cv.pdf";

const Links = () => {
  return (
    <div className="flex justify-center gap-5 mt-8 ">
      <a
        href={CV}
        className="inline-block px-5 py-3 font-bold transition-colors border rounded-lg cursor-pointer border-primary-main w-max text-primary-main bg-background-bgColor hover:bg-primary-main hover:text-background-bgColor hover:border-transparent"
      >
        Descargar CV 
      </a>
      <a
        href="#contacto"
        className="inline-block px-5 py-4 text-base font-bold transition-colors rounded-lg cursor-pointer text-background-bgColor w-max hover:text-white hover:bg-primary-main bg-primary-mainVariant hover:border-transparent"
      >
        Contactame
      </a>
    </div>
  );
};

export default Links;
