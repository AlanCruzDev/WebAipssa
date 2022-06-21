import React from "react";
import "./cardDising.style.css";
import equipo1 from "../../Img/Mantenimiento/equipo1.jpeg";
import equipo2 from "../../Img/Mantenimiento/equipo2.jpeg";
import { Video } from "../Video/Video";

export const Cardising = () => {
  return (
    <section className="container">
      <div className="row p-5">
        <div className="col-md-4">
          <h1 className="text-center cardding__titulo">Marcas y Equipos</h1>
          <p className="cardding__subtitulo">
            Equipos de laboratorios de las marcas más reconocidas en el mercado,
            especializadas en resolver las necesidades específicas de diversas
            industrias.
          </p>
        </div>
        <div className="col-md-8">
          <img src={equipo1} alt="marca equipo" />
        </div>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-md-8">
          <img src={equipo2} alt="marca equipo" />
        </div>
        <div className="col-md-4">
          <h1 className="text-center cardding__titulo">
            Servicio Técnico Especializado
          </h1>
          <p className="cardding__subtitulo">
            Personal altamente capacitado especializado en la instalación,
            servicio técnico y mantenimiento de equipos para laboratorio.
          </p>
        </div>
      </div>
      
      <div className="video__contenedor mt-5">
        <Video url={"https://youtu.be/NNQ5kakP9PA"} estilos={"video__equipo"} />
        <Video
          url={"https://www.youtube.com/watch?v=f_Ldib6-pmU"}
          estilos={"video__equipo__izq¨"}
        />
      </div>
    </section>
  );
};
