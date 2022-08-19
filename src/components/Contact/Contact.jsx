import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
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
    <section id="contacto" className="pt-16">
      <h5>Datos de contacto</h5>
      <h2>Enviame un mensaje</h2>
      <div>
        <div>
          <h3>Escríbeme por cualquier consulta</h3>
          <article>
            <MdOutlineEmail />
            <h4>E-mail</h4>
            <h5>jorge.caballero.98@outlook.com</h5>
            <a
              href="mailto:jorge.caballero.98@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mensaje
              <AiOutlineArrowRight />
            </a>
          </article>
          <article>
            <FiInstagram />
            <h4>Instagram</h4>
            <h5>@jorgecaballer0_</h5>
            <a
              href="https://www.instagram.com/jorge.caballero98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mensaje
              <AiOutlineArrowRight />
            </a>
          </article>
          <article>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+54 9 11 2252-7693</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5491122527693&text=Hola! Me gustaría conocer más sobre tu trabajo."
              target="_blank"
              rel="noopener noreferrer"
            >
              Mensaje
              <AiOutlineArrowRight />
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Envíame tu idea para ayudarte!</h3>
          <div>
            <label for="">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresá tu nombre"
              required
            />
          </div>
          <div className="contact__form-div">
            <label for="">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresá tu e-mail"
              required
            />
          </div>
          <div>
            <label for="">Proyecto</label>
            <textarea
              name="message"
              columns="30"
              rows="10"
              placeholder="Ingresá tu proyecto o idea..."
              required
            ></textarea>
          </div>

          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
