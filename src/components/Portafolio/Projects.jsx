import React from "react";
import { portafolio } from "../../utils/portafolio";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-10 pt-10 sm:grid-cols-1 sm:gap-4">
      {portafolio.map(({ id, image, title, github, liveDemo }) => {
        return (
          <article
            key={id}
            className="p-5 transition-all border-transparent sm:p-3 bg-background-bgVariant rounded-3xl hover:bg-background-bgHover dark:text-background-bgColor dark:bg-textPrimary-mainVariant dark:hover:bg-textPrimary-main"
          >
            <div className="overflow-hidden rounded-3xl">
              <img src={image} alt={title} />
            </div>
            <h3 className="my-5 text-lg font-extrabold text-center text-white">
              {title}
            </h3>
            <div className="flex flex-col items-start gap-4 [&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>a>svg]:transition-colors [&>a>svg]:duration-200 [&>a]:text-textPrimary-main hover:[&>a]:text-primary-main [&>a]:transition-transform hover:[&>a]:translate-x-2 [&>a]:dark:text-background-bgColor dark:hover:[&>a]:text-primary-main [&>a]dark:transition-transform">
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
  );
};

export default Projects;
