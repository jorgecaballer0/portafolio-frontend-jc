import React from "react";
import CV from "../../assets/pdf/jorgecaballero-cv.pdf";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <a href={CV}>Descargar CV</a>
      <Link to="/contacto">Contactame</Link>
    </div>
  );
};

export default Links;
