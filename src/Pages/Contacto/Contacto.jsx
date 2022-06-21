import React from "react";
import { Map } from "../../Components/Map/Map";
import contacto1 from "../../Img/labclinico-1_auto_x2.jpg";
import "./contacto.style.css";
import cardContacto from "../../Img/contacto2.png";

export const Contacto = () => {
  return (
    <>
      <div className="contactoimagen">
        <img src={contacto1} alt="contactoimagen" />
        <div className="texto__centro__contscto">
          <h2>Contacto</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-md-5 nopadding">
            <Map />
          </div>
          <div className="col-md-7 text-center mt-5">
            <div className="card mb-3" style={{maxWidth:'100%'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={cardContacto} alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <h2 className="card-title">¡PREGUNTA SIN COMPROMISO, ESPERAMOS TU LLAMADA!</h2>
                  <h3 className="mt-5">Mas Informacion Marquenos al:</h3>
                   <p><span>+52 (55) 42083099</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
