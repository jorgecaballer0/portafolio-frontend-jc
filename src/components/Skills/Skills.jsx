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
    <section>
      <h5>Habilidades</h5>
      <h2>Tecnologías</h2>
      <div>
        <div>
          <h3>Frontend</h3>
          <div>
            <article>
              <DiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article>
              <DiCss3 />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article>
              <IoLogoJavascript />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article>
              <DiReact />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article>
              <SiBootstrap />
              <div>
                <h4>BootStrap</h4>
              </div>
            </article>
            <article>
              <SiMaterialui />
              <div>
                <h4>Material UI</h4>
              </div>
            </article>
            <article>
              <SiTailwindcss />
              <div>
                <h4>TailWind CSS</h4>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3>Backend</h3>
          <div>
            <article>
              <SiNodedotjs />
              <div>
                <h4>Node Js</h4>
              </div>
            </article>
            <article>
              <SiFirebase />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
