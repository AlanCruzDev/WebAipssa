import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Auth} from '../../Auth/Auth';
import {Chat} from '../../Pages/ChatAippssa/ChatLayout';
import {PrivateRoute} from '../PrivateRouter';

export const RouterAuth = () => {
  return (
    <>
      <Routes>
        <Route path='/acceso' element={<Auth/>}/>
        <Route path='/panel' element={
          <PrivateRoute>
              <Chat/>
          </PrivateRoute>
        }/>
        
      </Routes>
    </>
  )
}
