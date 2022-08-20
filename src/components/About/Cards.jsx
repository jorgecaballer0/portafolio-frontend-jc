import React from "react";
import { FaAward } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex items-center justify-center">
      <article className="py-8 transition-colors rounded-lg cursor-default px-36 bg-background-bgVariant hover:bg-background-bgHover text-textPrimary-colorLight dark:bg-textPrimary-mainVariant dark:text-background-bgColor dark:hover:bg-textPrimary-main">
        <FaAward className="mx-auto text-2xl text-primary-main" />
        <h5 className="my-1 text-base font-bold">Experiencia</h5>
        <p className="my-1 text-sm">Dev. Jr - 8 meses</p>
      </article>
    </div>
  );
};

export default Cards;
