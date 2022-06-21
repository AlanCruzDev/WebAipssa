import { Types } from "../Reducers/Types";
import clienteAxiosAuth from "../Config/axiosAuth";
import {TokenHeader} from '../Config/axiosHeader';


export const AgregarMensaje = (data, token) => {
  return async (dispatch) => {
    try {
        TokenHeader(token);
        const resp = await clienteAxiosAuth.put(`whats/card`,data); 
        console.log(resp.data);
    } catch (e) {}
  };
};

export const seguridadToken=()=>{
  return async (dispatch)=>{
    try{
      const resp = await clienteAxiosAuth.get(`auth/${'sistemas'}/${'123456789'}`);
      dispatch({
        type:Types.seguridadchat,
        payload:resp.data
      })
    }catch(e){
    }
  }
}





