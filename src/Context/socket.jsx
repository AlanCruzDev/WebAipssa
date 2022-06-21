import React from 'react';
import { useSocket } from '../Hooks/useSocket';
import proyectSocket from './socketContext';

const SocketState = (props) => {
  const {socket,online}=useSocket('http://192.168.1.131:5200');

  // Aqui implemetamos el chat para recibir el mensaje



  const sendMessage = (message) => {
    socket.emit('message', message);
  }







  return ( 
    <proyectSocket.Provider
      value={{
        socket,
        online,
        sendMessage
      }}
    >
      {props.children}
    </proyectSocket.Provider>
   );
}
 
export default SocketState;