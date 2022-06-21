import React from "react";
import { FcAssistant } from "react-icons/fc";
import './chat.css'

export const ChatAsistente = () => {
  return (
    <div className="chatMessage-asistente">
      <div className="iconocchar">
        <FcAssistant size={28} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quas
        obcaecati rem consectetur expedita reiciendis consequatur repellat
        aperiam neque minima. Illo saepe ipsum magnam sed est eaque dolorem,
        sapiente distinctio?
      </p>
    </div>
  );
};
