import React,{useEffect} from 'react'
import './Auth.Styles.css';
import useForm from '../Hooks/useForm';
import {useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {iniciarSesion} from '../Actions/auth.action';

export const Auth = () => {

  const dispatch = useDispatch();
  const navegate = useNavigate();
  const { token } = useSelector((state) => state.auth);
    


  const[values,handleInputChange]=useForm({
    usser:'',
    password:''
  });

  const{usser,password}=values;


  useEffect(()=>{
    if(token){
      navegate('/aipssa/panel');
    }
  },[token]);


  const VerificarUser=(e)=>{
    e.preventDefault();
    dispatch(iniciarSesion(usser,password));
  }

  return (
    <div className="fondo">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="formulario fondo__login">
            <form className="login-form" onSubmit={VerificarUser}>
              <h3 className="text-center mt-3 titlo__login">Bienvenido</h3>
              <div className="form-group mt-3">
                <label className="campo">Usuario</label>
                <input 
                  type="text" 
                  className="form-control input-text"
                  name="usser"
                  value={usser}
                  onChange={handleInputChange}
                  />
              </div>
              <div className="form-group mt-3">
                <label className="campo">Contraseña</label>
                <input 
                  type="password" 
                  className="form-control 
                  input-text"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  />
              </div>
              <div className="mt-5 text-center">
                <button type="submit" className="btn btn-primary w-75 btn-lg">
                  Acceso
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
