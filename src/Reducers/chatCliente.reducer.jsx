import { Types } from "./Types";

const initialState = {
  mensaje: [],
  token:null,
  usser:null
};
export default function (state = initialState, action) {
  switch (action.type) {
    case Types.agregarmensaje:
      return {
        ...state,
        mensaje: [...state.mensaje, action.payload],
      };
    
      case Types.seguridadchat:
        return{
          ...state,
          token: action.payload.token,
          usser: action.payload.usser
        }
    default:
      return state;
  }
}
