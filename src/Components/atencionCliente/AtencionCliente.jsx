import React, { useEffect, useState} from "react";
import "./atencioncliente.style.css";
import { FaWhatsapp} from "react-icons/fa";
import {Chat} from '../Chat/Chat';


export const AtencionCliente = () => {
  
  const [visible, setvisible] = useState(false);
  

  useEffect(()=>{
    return()=>{
      setvisible(false);
    }
  },[]);


  const showchatclient = () => {
    setvisible(true);
  };
  const closeChat=()=>{
    setvisible(false);
  }

  const drawchatsmall=()=>{
    return(
      <div className="btn-cliente" onClick={() => showchatclient()}>
        <FaWhatsapp className="icon-cliente" />
      </div>
    );
  }
  return (
    <div className="bodycliente">
      {(visible === false) 
        ? (drawchatsmall()) 
        : (<Chat
            closeChat={closeChat}
          />)}
    </div>
  );
};
