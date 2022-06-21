import {Types} from './Types';

const initialState ={
    token:'',
    rol:''
}
export default function(state=initialState,action){

    switch(action.type){
        
        case Types.logeo:
            localStorage.setItem('0',JSON.stringify(action.payload.Token));
        return{
            ...state,
            token:action.payload.Token,
            rol:action.payload.Acces
        }
        default:
            return state;

    }
}

