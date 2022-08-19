import React from "react";
import { portafolio } from "../../utils/portafolio";
import { AiOutlineArrowRight } from "react-icons/ai";

const Portafolio = () => {
  return (
    <section id="portafolio" className="pt-16">
      <h5>Portfolio</h5>
      <h2>Últimos Proyectos</h2>

      <div className="grid grid-cols-3 gap-8">
        {portafolio.map(({ id, image, title, github, liveDemo }) => {
          return (
            <article
              key={id}
              className="p-5 transition-all border-transparent bg-background-bgVariant rounded-3xl hover:bg-background-bgHover"
            >
              <div className="overflow-hidden rounded-3xl">
                <img src={image} alt={title} />
              </div>
              <h3 className="my-5 text-center text-white">{title}</h3>
              <div className="flex flex-col items-start gap-4 [&>a]:flex [&>a]:items-center [&>a]:gap-2 hover:[&>a]:translate-x-1 [&>a]:transition-all ">
                <a href={liveDemo} rel="noreferrer noopener" target="_blank">
                  Ir al sitio
                  <AiOutlineArrowRight />
                </a>
                <a href={github} rel="noreferrer noopener" target="_blank">
                  Repositorio
                  <AiOutlineArrowRight />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
