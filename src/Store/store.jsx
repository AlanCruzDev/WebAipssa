import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../Reducers/auth.reducer';
import chatantencionReducer from '../Reducers/chatantencion.reducer';
import chatClienteReducer from '../Reducers/chatCliente.reducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth:authReducer,
    chatCliente:chatClienteReducer,
    chatatencion:chatantencionReducer
});

export const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ));