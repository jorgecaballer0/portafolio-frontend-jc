import React from "react";
import Links from "./Links";
import HomeSocial from "./HomeSocial";
import PicProfile from "../../assets/img/perfil.png";
import { Link } from "react-router-dom";
import { BsMouse } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div>
        <h4>Hola! Mi nombre es</h4>
        <h1>Jorge Caballero</h1>
        <h4>Desarrollador Frontend</h4>
        <Links />
        <HomeSocial />
        <div>
          <img src={PicProfile} alt="Profile" />
        </div>
        <Link to="/about">
          <BsMouse />
          <span>Scroll Down</span>
        </Link>
      </div>
    </>
  );
};

export default Home;
