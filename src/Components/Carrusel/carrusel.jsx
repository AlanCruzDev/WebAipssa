import React from "react";
import './carrusel.style.css';
import {Lista} from './lista';
import {items} from './Data';

export const Carrusel = () => {


const sacaData =()=>{
    const data = items.map((item,index)=>{
        return(
            <Lista
                key={index}
                laboratorio={item.src}
            />
        )
    });
    return data;
}
  return (
    <div className="slider">
      <div className="slide-track">
         {sacaData()}
      </div>
    </div>
  );
};
