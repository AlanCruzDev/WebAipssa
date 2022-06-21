import React from 'react'
import './chat.css'
import cliente from '../../Img/sidebarIcono/perfil.png';

export const ListaChats = ({id,socketId}) => {


  const seleccionChat=(id,socketId)=>{
    alert(socketId);
  }
  return (
    <div className='contenedor__lista' onClick={()=> seleccionChat(id,socketId)}>
        <div className='icono__user'>
            <img src={cliente} />
        </div>
        <h2>usuario: {id}</h2>
    </div>
  )
}
