import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Contacto } from "../../Pages/Contacto/Contacto";
import { Home } from "../../Pages/Home/Home";
import { NavBar } from "../../Components/NavBar/Navbar";
import {AtencionCliente} from '../../Components/atencionCliente/AtencionCliente';
import {EquipoServicio} from '../../Pages/ServiciosEquipo/EquipoServicio';
import { Footer } from "../../Pages/Footer/Footer";


export const RouterHome = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicio/mantenimiento" element={<EquipoServicio />} />
        
      </Routes>
      <Footer/>
      <AtencionCliente/>
    </>
  );
};
