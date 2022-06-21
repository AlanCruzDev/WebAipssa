import React from 'react';
import {Router} from '../../Router/Routers.jsx';
import {Provider} from 'react-redux';
import {store} from '../../Store/store.jsx';

function App() {
  return (
    <Provider store={store}>  
        <Router/>
    </Provider>
  );
}

export default App;
