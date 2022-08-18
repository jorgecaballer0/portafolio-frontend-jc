import React from "react";
import PicProfile from "../../assets/img/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section>
      <h5>Introducción</h5>
      <h2>Sobre Mí</h2>
      <div>
        <div>
          <div>
            <img src={PicProfile} alt="profile" />
          </div>
        </div>

        <div>
          <div>
            <article>
              <FaAward />
              <h5>Experiencia</h5>
              <p>Dev. Jr - 7 meses de práctica</p>
            </article>
            <article>
              <FiUsers />
              <h5>Soporte</h5>
              <p>Online 24/7</p>
            </article>
            <article>
              <VscFolderLibrary />
              <h5>Proyectos</h5>
              <p>6 Completados</p>
            </article>
          </div>
          <p>
            Tengo 23 años, vivo en Bs. As, Argentina y me especializo como
            desarrollador Frontend Jr.
            <br />
            Estudié en Coderhouse pero sigo aprendiendo más en otras plataformas
            y actualmente me encuentro en búsqueda de mi primer trabajo IT.
            <br />
            Soy una persona autodidacta, apasionada por el desarrollo web y la
            tecnología, siempre estoy buscando nuevos desafíos y reforzando mis
            habilidades.
          </p>
          <a href="#1">
            <button>Contacto</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
