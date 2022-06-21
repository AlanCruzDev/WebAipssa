import React from "react";
import people from "../../Img/undraw_manage_chats_re_0yoj.svg";
import { FcCallback } from "react-icons/fc";
import { Card } from "../../Components/Cards/card";
import videoSangre from "../../Videos/pexels-mart-production-7230299.mp4";
import preference from "../../Img/preferencias.png";
import {Carrusel} from '../../Components/Carrusel/carrusel';
import "./home.styles.css";

export const Home = () => {
  return (
    <>
      <section className="home__contenedor">
        <video loop autoPlay muted>
          <source src={videoSangre} type="video/mp4"/>
        </video>
        <div className="texto__izquerdahome">
          <h2>
            Software para Laboratorios
            <br />
            Clinicos
          </h2>
          <p>
            Ofrecemos solucion total a su laboratorio de analisi clinico,desde
            la recepcion hasta el proceso
            <br />
            de entrega de resultados, sus pacientes notaran un gran cambio a su
            servicio
          </p>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 contenedos__imganehome mt-5">
            <img src={people} alt="persona" />
          </div>
          <div className="col-md-6">
            <div className="textp__seccion_home">
              <p className="text-center mt-5">
                Hablanos para ayudarte a crecer tu laboratorio
              </p>
            </div>
            <div className="home__numero">
              <FcCallback size={55} />
              <p> +52 (55) 42083099</p>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="text-center main__titulo">
            <h2>Que Ofrecemos</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Card/>

            </div>

          </div>
        </div>
      </main>

      <section className="container-fluid">
        <div className="row">
          <div className="col-md-4 nopadding">
            <img src={preference} alt="preference" />
          </div>
          <div className="col-md-8">
            <div className="preference__texto__principal">
              <h1 className="text-center">¿POR QUE ESCOGER AIPSSA? </h1>
            </div>
            <div className="preference__texto__secundary">
              <p>
                Somos un Empresa de Analisis Clinico desarrollado bajo el
                concepto de mejora continua.Nuestra mision principal es
                satisfacer y exeder las expectativas de nuestros servicios con
                nuestro personal altamenta capacitado
              </p>
            </div>
            <div className="contenido__lista__perference">
              <ul>
                <li>Instalaciones comodas e eficientes</li>
                <li>Venta y comodato de equipos clinicos</li>
                <li>
                  Venta de reactivos para laboratorio clinico e investigacion
                </li>
              </ul>
              <ul>
                    <li>Soporte tecnico</li>
                    <li>Atencion a cliente</li>
                    <li>Capacitacion</li>
                  </ul>
            </div>
          </div>
        </div>
      </section>
        <div className="container-fluid unanse">
          <div className="row justify-content-center">
            <div className="col-md-12 ">
                <h3>¡UNETE A NOSOTROS, SE EL SIGUIENTE!</h3>
                <p>Trabajamos con laboratorios de toda parte del mundo</p>
                <Carrusel/>
            </div>
          </div>
        </div>
        <br />
    </>
  );
};
