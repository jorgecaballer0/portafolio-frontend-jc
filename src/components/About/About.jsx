import React from "react";
// import PicProfile from "../../assets/img/about.jpg";
import Cards from "./Cards";
import Contact from "./Contact";

const About = () => {
  return (
    <section
      id="about"
      className="container p-24 w-full mx-auto text-center sm:p-[4.5rem] md:p-20"
    >
      <h5 className="my-2 text-sm font-bold text-center border-b border-gray-600  text-textPrimary-colorLight mx-[20%] dark:text-gray-700">
        Introducción
      </h5>
      <h2 className="text-2xl font-semibold text-center text-primary-main dark:text-background-bgColor">
        Sobre Mí
      </h2>

      <div className="flex pt-20 lg:gap-24 sm:pt-10 sm:flex-col sm:gap-12 md:gap-16 md:flex-col">
        <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary-main md:max-h-[320px] sm:max-h-[320px] sm:bg-none sm:-mb-16 md:bg-none md:-mb-20 h-80">
          <div className="overflow-hidden transition-transform rotate-12 sm:rotate-0 md:rotate-0 rounded-2xl hover:rotate-0">
            {/* <img src={PicProfile} alt="profile" className="object-contain mx-auto sm:max-h-72 md:max-h-72 rounded-2xl"/> */}
          </div>
        </div>

        <div className="flex flex-col gap-14 sm:gap-6">
          <Cards />
          <ul className="text-justify sm:text-center md:text-center text-textPrimary-mainVariant dark:text-background-bgColor">
            <li>
              Tengo 23 años, vivo en Argentina y actualmente me especializo como
              <span className="font-bold"> desarrollador Frontend</span>.
            </li>
            <li>
              Realicé cursos en <span className="font-bold"> Coderhouse</span>{" "}
              pero sigo aprendiendo más en otras plataformas, actualmente me
              encuentro en búsqueda de mi primer trabajo IT.
            </li>
          </ul>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default About;
