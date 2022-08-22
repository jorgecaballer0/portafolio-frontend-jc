import React from "react";

const Design = () => {
  return (
    <article>
      <div className="p-8 shadow-lg sm:p-4 bg-primary-main dark:bg-background-bgColor rounded-b-3xl">
        <h3 className="font-extrabold text-center text-background-bgColor dark:text-white">
          Diseño Web
        </h3>
      </div>

      <ul className="p-8 [&>li]:flex [&>li]:gap-4 [&>li]:mb-3 [&>li]:text-center lg:[&>li]:text-start dark:[&>li]:text-background-bgColor">
        <li>
          Puedo diseñar todo tipo de páginas web, para tu emprendimiento o
          empresa.
        </li>
        <li>Desarrollo de interfaz de usuario.</li>
        <li>Desarrollo de páginas web.</li>
        <li>
          Aplicación web adaptada a tus necesidades, de fácil acceso y manejo.
        </li>
        <li>Diseño y maquetación de tu sitio web.</li>
        <li>
          Tu sitio web será atractivo y responsive, apto para cualquier
          dispositivo.
        </li>
      </ul>
    </article>
  );
};

export default Design;
