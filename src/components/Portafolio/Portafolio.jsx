import React from "react";
import { portafolio } from "../../utils/portafolio";
import { AiOutlineArrowRight } from "react-icons/ai";

const Portafolio = () => {
  return (
    <section>
      <h5>Portfolio</h5>
      <h2>Últimos Proyectos</h2>

      <div>
        {portafolio.map(({ id, image, title, github, liveDemo }) => {
          return (
            <article key={id}>
              <div>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div>
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
