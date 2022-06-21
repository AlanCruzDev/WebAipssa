import clienteAxiosAuth from '../Config/axiosAuth';
import TokenHeader from '../Config/axiosHeader';
import {Types} from '../Reducers/Types';


export const iniciarSesion=(usuario, contra)=>{

    return async (dispatch)=>{
        try{

            const respuesta = await clienteAxiosAuth.get(`/auth/${usuario}/${contra}`);
            if(respuesta.status === 200){
                dispatch(Logeado(respuesta.data));
            }    
        }catch(e){

        }
    }
}
const Logeado=(datos)=>({
    type:Types.logeo,
    payload:datos
  });

