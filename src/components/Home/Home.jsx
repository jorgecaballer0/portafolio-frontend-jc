import React from "react";
import Links from "./Links";
import HomeSocial from "./HomeSocial";
import PicProfile from "../../assets/img/profile-pic-cv-bg.png";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <>
      <section id="home" className="h-screen overflow-hidden lg:pt-12 sm:pt-10 md:pt-11">
        <div className="container relative h-full mx-auto text-center">
          <h4 className="text-lg font-semibold text-textPrimary-main dark:text-gray-600">Hola! Mi nombre es</h4>
          <h1 className="py-3 text-4xl font-semibold text-white border-b border-primary-main dark:border-primary-mainVariant mx-[30%] dark:text-background-bgColor">
            Jorge Caballero
          </h1>
          <h4 className="text-xl font-semibold text-textPrimary-colorLight dark:text-gray-700">
            Desarrollador Frontend
          </h4>
          <Links />
          <HomeSocial />
          <div className="bg-gradient-to-b from-primary-main to-background-bgColor dark:to-slate-300 w-72 h-[25rem] absolute left-[calc(50%_-_9rem)] mt-24 sm:mt-10 rounded-t-full overflow-hidden py-7">
            <img src={PicProfile} alt="Profile" />
          </div>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Home;
