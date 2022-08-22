import React from "react";
import { FaAward } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex items-center justify-center">
      <article className="px-32 py-8 transition-colors rounded-lg cursor-default sm:px-20 sm:py-4 bg-background-bgVariant hover:bg-background-bgHover text-textPrimary-colorLight dark:bg-textPrimary-mainVariant dark:text-background-bgColor dark:hover:bg-textPrimary-main">
        <FaAward className="mx-auto text-2xl text-primary-main" />
        <h5 className="my-1 text-base font-bold text-textPrimary-main">Experiencia</h5>
        <p className="my-1 text-sm">Dev. Jr - 8 meses de práctica</p>
      </article>
    </div>
  );
};

export default Cards;
