import React from "react";
import Projects from "./Projects";

const Portafolio = () => {
  return (
    <section id="portafolio" className="container mx-auto text-center p-28">
      <h5 className="my-2 text-sm font-bold text-center border-b border-gray-600  text-textPrimary-colorLight mx-[20%]">
        Portfolio
      </h5>
      <h2 className="text-2xl font-semibold text-center text-primary-main">
        Últimos Proyectos
      </h2>
      <Projects />
    </section>
  );
};

export default Portafolio;
