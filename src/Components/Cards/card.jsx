import React from "react";
import "./card.style.css";
import card1 from "../../Img/card1.jpg";
import card2 from "../../Img/card2.jpg";
import card3 from "../../Img/card3.png";
import { FcRight } from "react-icons/fc";
import {Link} from 'react-router-dom';


export const Card = () => {
  return (
    <div className="contenedor__card mt-5">
      <div className="card__main">
        <img src={card1} alt="tarjeta1" />
        <h4>
          Administra y organiza
          <br />
          tu laboratorio
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa
          architecto vero. Vitae nobis debitis atque eligendi eius illo
          voluptate, dolorem aperiam nemo perspiciatis ratione a rerum, ea nam
          rem?
        </p>
        <div className="btn__card">
          <a href="https://www.cyberlab.com.mx">Leer mas</a>
          <div className="btn__icono">
            <FcRight size={35} />
          </div>
        </div>
      </div>
      <div className="card__main">
        <img src={card2} alt="tarjeta1" />
        <h4>
          Interfaces para Equipos de
          <br />
          analisis clinicos
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa
          architecto vero. Vitae nobis debitis atque eligendi eius illo
          voluptate, dolorem aperiam nemo perspiciatis ratione a rerum, ea nam
          rem?
        </p>
        <div className="btn__card">
          <a href="#">Leer mas</a>
          <div className="btn__icono">
            <FcRight size={35} />
          </div>
        </div>
      </div>
      <div className="card__main">
        <img src={card3} alt="tarjeta1" />
        <h4>
          Servicio y mantenimiento
          <br />
          de equipos
        </h4>
        <p>
          Nuestro Equipo especializado proporciona respuestas rapidas y especificas
          a sus necesidades.
        </p>
        <div className="btn__card">
          <Link to={'/servicio/mantenimiento'}>Leer mas</Link>
          <div className="btn__icono">
            <FcRight size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};
