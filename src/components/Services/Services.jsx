import React from "react";
import Design from "./Design";
import Positioning from "./Positioning";
import Maitenance from "./Maitenance";

const Services = () => {
  return (
    <section id="servicios" className="container mx-auto text-center p-28">
      <h5 className="my-2 text-sm font-bold text-center border-b border-gray-600  text-textPrimary-colorLight mx-[20%]">
        Servicios
      </h5>
      <h2 className="text-2xl font-semibold text-center text-primary-main">
        Que puedo ofrecer...
      </h2>
      <div className="grid grid-cols-3 gap-12 pt-16 [&>article]:bg-background-bgVariant [&>article]:rounded-b-3xl [&>article]:h-fit [&>article]:transition-all hover:[&>article]:bg-background-bgHover cursor-default [&>article]:border [&>article]:border-primary-main hover:[&>article]:border-transparent">
        <Design />
        <Positioning />
        <Maitenance />
      </div>
    </section>
  );
};

export default Services;
