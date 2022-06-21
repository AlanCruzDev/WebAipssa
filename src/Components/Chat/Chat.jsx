import React, { useEffect, useState } from "react";
import "./chat.styles.css";
import { BsXLg } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ChatAsistente } from "./ChatAsistente";
import { ChatCliente } from "./ChatCliente";
import {
  AgregarMensaje,
  seguridadToken,
} from "../../Actions/chatcliente.action";
import { scrollChat } from "../../Middelware/AccionesScroll";
import {useChat} from '../../Hooks/useChat';

export const Chat = ({ closeChat }) => {
  
  const dispatch = useDispatch();
  const { chatCliente } = useSelector((state) => state);
  const {guardarMensaje,LimpliarInput,textoasistente} = useChat();
  
  // sacamos los mensajes del usuario
  const { mensaje, token } = chatCliente;

  useEffect(() => {
    dispatch(seguridadToken());
  }, []);

  useEffect(() => {
    if (mensaje.length > 0) {
      scrollChat("txtMensaje", ".chat_contenedor");
    }
  }, [mensaje]);

  const enviarMensaje = () => {
    var mensaje = document.getElementById("txtMensaje").value;
    if (mensaje.toString() === "") {
      return;
    }
    guardarMensaje(mensaje); 
    LimpliarInput("txtMensaje")
  };
  
  return (
    <div className="chatcuerpo">
      <div className="cabezera__chat">
        <BsXLg size={22} className="icono__chat" onClick={() => closeChat()} />
        <div className="chat__header">
          <p>Atencion a Cliente</p>
        </div>
      </div>
      <div className="chat_contenedor">
        <ChatAsistente mensaje={textoasistente} />
        {mensaje.length > 0
          ? mensaje.map((valor, index) => (
              <ChatCliente key={index} mensajerevice={valor} />
            ))
          : null}
      </div>
      <div className="chat__footer">
        <textarea
          placeholder="Escribe Aqui..."
          id="txtMensaje"
          className="chatcliente"
        ></textarea>
        <button className="btn__send" onClick={() => enviarMensaje()}>
          <AiOutlineSend size={20} />
        </button>
      </div>
    </div>
  );
};
