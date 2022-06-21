import clienteAxiosAuth from "./axiosAuth";


export const TokenHeader =(token)=>{
    if(token){
      clienteAxiosAuth.defaults.headers.common['Authorization'] = token;
    }else{
      delete clienteAxiosAuth.defaults.headers.common['Authorization'];
    }
  }