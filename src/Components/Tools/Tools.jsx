import React from 'react'
import './tools.css';

export const Tools = () => {

    const cerrarSesion=()=>{
        alert('Cerramos Sesion')
    }



  return (
    <div className='tools'>
        <div className='tools__menu'>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item list-group-item-action listaLetra' onClick={()=> cerrarSesion()}>Cerrar Sesion</li>
            </ul>
        </div>
    </div>
  )
}
