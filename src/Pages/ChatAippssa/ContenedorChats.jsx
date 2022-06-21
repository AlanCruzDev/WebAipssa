import React,{useEffect} from "react";
import "./chat.css";
import { AiOutlineSend } from "react-icons/ai";
import {ChatAsistente} from './ChatAsistente';


export const ContenedorChats = ({ id }) => {



  const enviarMensaje = () => {};

  return (
    <main>
      <div className="chatcuerpoContenedor">
        <div className="chat_contenedorContenedor">
          <ChatAsistente/>
          <ChatAsistente/>
          <ChatAsistente/>
          <ChatAsistente/>
          <ChatAsistente/>
          <ChatAsistente/>
          <ChatAsistente/>
          <ChatAsistente/>
        </div>
        <div className="chat__footerContenedor">
          <textarea placeholder="Escribe Aqui..." className="txt__chatpanel"></textarea>
          <button className="btn__send" onClick={() => enviarMensaje()}>
            <AiOutlineSend size={20} />
          </button>
        </div>
      </div>
    </main>
  );
};
