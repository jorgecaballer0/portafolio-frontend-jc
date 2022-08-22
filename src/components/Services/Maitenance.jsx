import React from "react";

const Maitenance = () => {
  return (
    <article>
      <div className="p-8 shadow-lg sm:p-4 md:py-6 bg-primary-main dark:bg-background-bgColor rounded-b-3xl">
        <h3 className="font-extrabold text-center text-background-bgColor dark:text-white">
          Mantenimiento Web
        </h3>
      </div>

      <ul className="p-8 [&>li]:flex sm:[&>li]:text-sm md:[&>li]:text-base [&>li]:gap-4 [&>li]:mb-3 [&>li]:text-center dark:[&>li]:text-background-bgColor lg:[&>li]:text-start sm:[&>li]:text-justify md:[&>li]:text-justify">
        <li>
          Realizo mantenimiento web a cualquier tipo de sitio web para evitar
          que falle y tener este siempre en óptimas condiciones.
        </li>
        <li>
          Actualización de contenido y diseño según tus gustos y necesidades
          para tu sitio web.
        </li>
        <li>Mejoras en la interfaz de usuario.</li>
        <li>Adaptabilidad a cualquier dispositivo.</li>
        <li>Actualizaciones constantes de las tecnologías utilizadas.</li>
      </ul>
    </article>
  );
};

export default Maitenance;
