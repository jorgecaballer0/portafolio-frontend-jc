import React from "react";
import Links from "./Links";
import HomeSocial from "./HomeSocial";
import PicProfile from "../../assets/img/perfil.png";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <>
      <section id="home" className="h-screen pt-16 overflow-hidden">
        <div className="container relative h-full mx-auto mt-3 text-center">
          <h4 className="text-xl text-textPrimary-main">Hola! Mi nombre es</h4>
          <h1 className="py-3 text-5xl font-semibold text-white">
            Jorge Caballero
          </h1>
          <h4 className="text-2xl text-textPrimary-colorLight">
            Desarrollador Frontend
          </h4>
          <Links />
          <HomeSocial />
          <div className="bg-gradient-to-b from-primary-main w-72 h-[25rem] absolute left-[calc(50%_-_9rem)] mt-14 rounded-t-full overflow-hidden py-3">
            <img src={PicProfile} alt="Profile" />
          </div>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Home;
