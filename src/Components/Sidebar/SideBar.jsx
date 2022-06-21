import React,{useEffect} from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import './sidebar.css';
import cliente from '../../Img/sidebarIcono/programador.png';
import {ListaChats} from '../../Pages/ChatAippssa/ListaChats';
import {useDispatch,useSelector} from 'react-redux';
import {chatsActivos} from '../../Actions/chatAsistente.action';
import {useComponentVisible} from '../../Hooks/useComponentVisible';
import {Tools} from '../Tools/Tools';


export const SideBar = () => {

  const {ref,isComponentVisible,setIsComponentVisible}=useComponentVisible(true);
  const dispatch = useDispatch();
  const {listaUsuario}= useSelector((state)=>state.chatatencion);

  useEffect(()=>{
    dispatch(chatsActivos());
  },[listaUsuario]);


  const abrirVentaAcciones=()=>{
    setIsComponentVisible(true);
  }
  
  return (
    <div id="sidebar" ref={ref}>
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={cliente} />
          <h3>Beta</h3>
        </div>
        <div className="acciones__barralateral">
            <BiDotsVerticalRounded size={30} className='icono__accion_barralateral' onClick={()=> abrirVentaAcciones()}/>
        </div>
      </div>
      <div className="sidebar__menu">
        {(listaUsuario !== null)
          ? (
                listaUsuario.map((valor,index)=>(
                  <ListaChats
                    key={index}
                    id={valor.id}
                    socketId={valor.socketId}
  
                  />
                ))
            )
          : null        
        }
      </div>
      {(isComponentVisible) ? (<Tools/>) : null}
    </div>
  )
}
