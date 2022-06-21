import clienteAxiosSocket from '../Config/axiosSocket';
import {Types} from '../Reducers/Types';
import TokenHeader from '../Config/axiosHeaderSocket';


export const chatsActivos =()=>{
    return async(dispatch) =>{
        try{
            const token = JSON.parse(localStorage.getItem("0"));
            TokenHeader(token);
            const respuesta = await clienteAxiosSocket.get('/chat');
            if(respuesta.status === 200){
                dispatch({
                    type:Types.listaUsuarios,
                    payload:respuesta.data
                })
            }
        }catch(e){}
    }
}
