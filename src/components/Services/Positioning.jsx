import React from "react";

const Positioning = () => {
  return (
    <article>
      <div className="p-8  sm:p-4 shadow-lg bg-primary-main dark:bg-background-bgColor rounded-b-3xl">
        <h3 className="font-extrabold text-center text-background-bgColor dark:text-white">
          Posicionamiento Web
        </h3>
      </div>
      <ul className="p-8 [&>li]:flex [&>li]:gap-4 [&>li]:mb-3 [&>li]:text-center dark:[&>li]:text-background-bgColor lg:[&>li]:text-start">
        <li>
          Posiciona tu sitio web para que todos los potenciales clientes puedan
          encontrarte facilmente.
        </li>
        <li>Mejor posicionamiento en las búsquedas de Google.</li>
        <li>
          Diferentes opciones para cubrir las necesidades de alojamiento en la
          nube de tu sitio web.
        </li>
        <li>Optimización de imágenes y palabras clave para SEO.</li>
      </ul>
    </article>
  );
};

export default Positioning;
