import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {RouterHome} from '../Router/RouterHome/RouterHome';
import {BootWhats} from '../Pages/BootWhats/BootWhats';
import {PrivateRoute} from './PrivateRouter';


export const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/aipssa/boot' element={
                    <PrivateRoute>
                            <BootWhats/>
                    </PrivateRoute>
                }/>
                <Route path='/*' element={<RouterHome/>}/>   
            </Routes>

            
        </BrowserRouter>
    );
}



