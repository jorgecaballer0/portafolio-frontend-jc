import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e45q5u3",
        "template_2zmf5d9",
        form.current,
        "XjKoiwc8zx7kn_fN0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-9">
      <h3 className="text-xl font-extrabold text-center text-textPrimary-mainVariant">
        Envíame tu idea para ayudarte!
      </h3>
      <div className="relative h-16 mb-8">
        <label
          for=""
          className="absolute left-0 z-10 p-[0.2rem] text-sm border-2 border-primary-main rounded-lg -top-4 bg-background-bgColor dark:bg-slate-500 dark:text-textPrimary-mainVariant  dark:border-background-bgColor"
        >
          Nombre
        </label>
        <input
          type="text"
          name="name"
          placeholder="Ingresá tu nombre"
          required
          className="absolute top-0 left-0 w-full h-full p-4 border-2 rounded-lg outline-none resize-none text-textPrimary-colorLight bg-transparent border-primary-main dark:border-background-bgColor focus:bg-background-bgVariant dark:focus:bg-textPrimary-mainVariant dark:focus:text-background-bgColor transition-colors focus:text-white focus:border-primary-mainVariant focus:outline-none z-[1] "
        />
      </div>
      <div className="relative h-16 mb-8">
        <label
          for=""
          className="absolute left-0 z-10 p-[0.2rem] text-sm border-2 border-primary-main rounded-lg -top-4 bg-background-bgColor  dark:bg-slate-500 dark:text-textPrimary-mainVariant dark:border-background-bgColor"
        >
          E-mail
        </label>
        <input
          type="email"
          name="email"
          placeholder="Ingresá tu e-mail"
          required
          className="absolute top-0 left-0 w-full h-full p-4 border-2 rounded-lg outline-none resize-none text-textPrimary-colorLight bg-transparent  border-primary-main dark:border-background-bgColor focus:bg-background-bgVariant focus:border-primary-mainVariant focus:outline-none z-[1] focus:text-white dark:focus:bg-textPrimary-mainVariant dark:focus:text-background-bgColor transition-colors"
        />
      </div>
      <div className="relative h-44">
        <label
          for=""
          className="absolute left-0 z-10 p-[0.2rem] text-sm border-2 border-primary-main rounded-lg -top-4 bg-background-bgColor  dark:bg-slate-500 dark:text-textPrimary-mainVariant  dark:border-background-bgColor"
        >
          Proyecto
        </label>
        <textarea
          name="message"
          columns="30"
          rows="10"
          placeholder="Ingresá tu proyecto o idea..."
          required
          className="absolute top-0 left-0 w-full h-full p-4 border-2 rounded-lg outline-none resize-none text-textPrimary-colorLight bg-transparent  border-primary-main dark:border-background-bgColor focus:bg-background-bgVariant focus:border-primary-mainVariant focus:outline-none z-[1] focus:text-white dark:focus:bg-textPrimary-mainVariant dark:focus:text-background-bgColor transition-colors"
        ></textarea>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center p-5 mx-auto text-sm font-bold transition-colors rounded-lg cursor-pointer text-background-bgColor w-max hover:text-white hover:bg-primary-main bg-primary-mainVariant hover:border-transparent dark:text-textPrimary-mainVariant dark:bg-primary-main dark:hover:bg-primary-mainVariant dark:hover:text-white"
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default Form;
