import clienteAxiosSocket from "./axiosSocket";


const TokenHeader =(token)=>{
    if(token){
        clienteAxiosSocket.defaults.headers.common['Authorization'] = token;
    }else{
      delete clienteAxiosSocket.defaults.headers.common['Authorization'];
    }
  }
  export default TokenHeader;