import React, { useState, useEffect } from 'react';

import {SideBar} from '../../Components/Sidebar/SideBar';

import {ContenedorChats} from './ContenedorChats';


export const Chat = () => {

  return (
    <div className='contenedor'>
      {/*
        (usermensajes !== undefined && usermensajes !== 0)
        ? <ContenedorChats
            id={usermensajes}
        />
        : null*/
      }
      <ContenedorChats
            id={1}
        />
      <SideBar/>
    </div>
  )
}
