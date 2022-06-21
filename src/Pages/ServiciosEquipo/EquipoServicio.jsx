import React, { useEffect, useRef } from 'react'
import './equipo.style.css';
import contacto from '../../Img/Mantenimiento/mantenimiento.jpg';
import { Cardising } from '../../Components/CardDising/Cardising';
import ScrollToTop from '../../Hooks/useScroll';


export const EquipoServicio = () => {


    return (
        <ScrollToTop>
            <div>
                <div className="contactoimagen">
                    <img src={contacto} alt="contactoimagen" />
                    <div className="texto__centro">
                        <div class="glitch" data-text="GLITCH EFFECT">Servicios
                            <p className='text-center title__equipo'>Conoce nuestro servicios</p>
                        </div>
                    </div>
                </div>
                <div className='container cuerpo__equipoServicio'>
                    <div className='card card__equipo'>
                        
                        <div className='card-body'>
                            <Cardising />
                        </div>
                    </div>
                </div>
            </div>


        </ScrollToTop>
    );
}
