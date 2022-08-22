import React from "react";
import ContactLinks from "./ContactLinks";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contacto" className="container mx-auto text-center p-28 sm:p-[4.5rem] md:p-20">
      <h5 className="my-2 text-sm font-bold text-center border-b border-gray-600  text-textPrimary-colorLight mx-[20%] dark:text-gray-700">
        Datos de contacto
      </h5>
      <h2 className="text-2xl font-semibold text-center text-primary-main dark:text-background-bgColor">
        Enviame un mensaje
      </h2>

      <div className="grid w-4/5 grid-cols-2 pt-10 mx-auto md:w-full sm:grid-cols-1 sm:w-full md:grid-cols-3">
        <ContactLinks />
        <p className="py-4 text-xl font-extrabold text-center text-white">O...</p>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
