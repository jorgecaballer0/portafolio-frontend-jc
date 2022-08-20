import React from "react";

const Maitenance = () => {
  return (
    <article>
      <div className="p-8 shadow-lg bg-primary-main rounded-b-3xl">
        <h3 className="font-extrabold text-center text-background-bgColor">
          Mantenimiento Web
        </h3>
      </div>
      
      <ul className="p-8 [&>li]:flex [&>li]:gap-4 [&>li]:mb-3 [&>li]:text-center ">
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
