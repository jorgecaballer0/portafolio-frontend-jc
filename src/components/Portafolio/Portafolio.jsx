import React from "react";
import Projects from "./Projects";

const Portafolio = () => {
  return (
    <section id="portafolio" className="container pt-24 mx-auto text-center px-28 sm:p-[4.5rem]">
      <h5 className="my-2 text-sm font-bold text-center border-b border-gray-600  text-textPrimary-colorLight mx-[20%] dark:text-gray-700">
        Portfolio
      </h5>
      <h2 className="text-2xl font-semibold text-center text-primary-main dark:text-background-bgColor">
        Últimos Proyectos
      </h2>
      <Projects />
    </section>
  );
};

export default Portafolio;
