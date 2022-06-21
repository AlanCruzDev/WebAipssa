import React, { useState, useEffect } from "react";
import { useCounter } from "./useCounter";

const data = {
  number: "",
  message: "",
};

export const useChat = () => {
  const { increment, reset, count } = useCounter();
  const [textoasistente, setasistente] = useState(
    "Hola, Para ayudarte Proporciona un numero celular"
  );

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const guardarMensaje = (mensaje) => {
    if (count === 0) {
      data.number = mensaje;
      increment();
      cambiarMensaje("Dijite un Mensaje");
    } else {
      data.message = mensaje;
      reset();
      //dispatch(AgregarMensaje(data, token));
      console.log(data);
    }
  };
  const LimpliarInput = (clase) => {
    document.getElementById(clase).value = "";
  };
  const cambiarMensaje = (mensaje) => {
    setasistente(mensaje);
  };

  return {
    guardarMensaje,
    LimpliarInput,
    textoasistente,
  };
};
