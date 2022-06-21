import React from "react";
import './carrusel.style.css';

export const Lista = ({  laboratorio }) => {
  return (
    <div className="slide">
      <img src={laboratorio} height="100" width="250" alt="" />
    </div>
  );
};
