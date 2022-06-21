import {Types} from './Types';

const initialState = {
    listaUsuario:null
};
export default function(state = initialState, action){

    switch(action.type){
        
        case Types.listaUsuarios:
            return{
                ...state,
                listaUsuario:action.payload
            }
        default:
            return state;
    }

}

