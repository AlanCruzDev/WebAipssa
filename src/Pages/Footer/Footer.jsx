import React from "react";
import "./footer.style.css";
import { FaFacebookF,FaYoutube } from "react-icons/fa";

export const Footer = () => {



  return (
    <footer className="foooter__aipssa">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="http://www.aipssa.com.mx/imagenes/logoAipssa.png"
              alt="logoAipssa"
              className="__logo__footer"
            />
            <h2 className="footer__h2">Aipssa</h2>
            <p className="footer__parrafo mt-5">
              Somos un laboratorio que proporciona servicios de control de
              calidad con equipos e instalaciones de punta para dar servicios
              con capacidad y experencia.
            </p>
          </div>

          <div className="col-md-6">
            <div className="contenedor__redessociales">
              <h1 className="text-white">Nuestras Redes Sociales</h1>
                <a className="icon__facebook" href="https://www.facebook.com/aipssa/?ref=page_internal">
                  <FaFacebookF className="icon-cliente" />
                </a>
                <a className="icon__facebook" style={{background:'#FF0000'}} href="https://www.youtube.com/channel/UCupXsR1P_1JgIQEhozjqeDA">
                  <FaYoutube className="icon-cliente" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
