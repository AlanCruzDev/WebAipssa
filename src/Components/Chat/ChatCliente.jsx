import React from "react";

import "./chat.styles.css";
import { FcBusinessman} from "react-icons/fc";
export const ChatCliente = ({mensajerevice}) => {

  return (
    <div className="chatMessage-cliente">
      <div className="iconocchar">
        <FcBusinessman size={28} />
      </div>
      <p>
          {mensajerevice}
      </p>
    </div>
  );
};
