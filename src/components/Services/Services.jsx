import React from "react";
import Design from "./Design";
import Positioning from "./Positioning";
import Maitenance from "./Maitenance";

const Services = () => {
  return (
    <section id="servicios" className="container mx-auto text-center p-28 sm:p-[4.5rem] md:p-20">
      <h5 className="my-2 text-sm font-bold text-center border-b border-gray-600  text-textPrimary-colorLight mx-[20%]  dark:text-gray-700">
        Servicios
      </h5>
      <h2 className="text-2xl font-semibold text-center text-primary-main dark:text-background-bgColor">
        Que puedo ofrecer...
      </h2>
      <div
        className="
      grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 md:gap-8 md:pt-10 sm:gap-6 sm:pt-8 gap-12 pt-16 cursor-default 
      [&>article]:bg-background-bgColor
      dark:[&>article]:bg-textPrimary-mainVariant
      [&>article]:rounded-b-3xl 
      [&>article]:h-fit 
      [&>article]:transition-all 
      hover:[&>article]:bg-background-bgHover
      dark:hover:[&>article]:bg-textPrimary-main
      [&>article]:border 
      [&>article]:border-primary-main
      dark:[&>article]:border-textPrimary-colorLight
      hover:[&>article]:border-transparent 
      dark:hover:[&>article]:border-textPrimary-main
      "
      >
        <Design />
        <Positioning />
        <Maitenance />
      </div>
    </section>
  );
};

export default Services;
