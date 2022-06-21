import React from "react";
import "./chat.styles.css";
import { FcAssistant} from "react-icons/fc";
export const ChatAsistente = ({mensaje}) => {

  return (
    <div className="chatMessage-asistente">
      <div className="iconocchar">
        <FcAssistant size={28} />
      </div>
      <p>
          {mensaje}
      </p>
    </div>
  );
};
