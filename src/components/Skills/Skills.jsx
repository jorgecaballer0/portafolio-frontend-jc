import React from "react";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import {
  SiNodedotjs,
  SiMaterialui,
  SiBootstrap,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto text-center p-28">
      <h5 className="my-2 text-sm font-bold text-center border-b border-gray-600  text-textPrimary-colorLight mx-[20%]">
        Habilidades
      </h5>
      <h2 className="text-2xl font-semibold text-center text-primary-main">
        Tecnologías - Herramientas
      </h2>

      <div className="grid grid-cols-2 gap-8 pt-16">
        <div className="px-20 py-10 transition-colors rounded-lg cursor-default bg-background-bgVariant hover:bg-background-bgHover">
          <h4 className="mb-8 text-xl font-extrabold text-center text-primary-main">
            Frontend
          </h4>
          <div className="grid grid-cols-2 gap-y-8 gap-x-10 [&>article]:flex [&>article]:gap-4 [&>article]:items-center [&>article>svg]:text-2xl">
            <article>
              <DiHtml5 className="text-orange-600"/>
              <p>HTML</p>
            </article>
            <article>
              <DiCss3 className="text-blue-500"/>
              <p>CSS</p>
            </article>
            <article>
              <IoLogoJavascript className="text-yellow-400"/>
              <p>JavaScript</p>
            </article>
            <article>
              <DiReact className="text-cyan-400"/>
              <p>React</p>
            </article>
            <article>
              <SiBootstrap className="text-violet-500"/>
              <p>BootStrap</p>
            </article>
            <article>
              <SiMaterialui className="text-blue-600"/>
              <p>Material UI</p>
            </article>
            <article>
              <SiTailwindcss className="text-sky-400"/>
              <p>TailWind CSS</p>
            </article>
          </div>
        </div>

        <div className="px-20 py-10 transition-colors rounded-lg cursor-default bg-background-bgVariant hover:bg-background-bgHover">
          <h4 className="mb-8 text-xl font-extrabold text-center text-primary-main">
            Backend
          </h4>
          <div className="grid grid-cols-2 gap-y-8 gap-x-10 [&>article]:flex [&>article]:gap-4 [&>article]:items-center [&>article>svg]:text-2xl ">
            <article>
              <SiNodedotjs className="text-green-300"/>
              <p>Node Js</p>
            </article>
            <article>
              <SiFirebase className="text-yellow-500"/>
              <p>Firebase</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
