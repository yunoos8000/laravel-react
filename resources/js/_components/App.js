import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import Routes  from './Routes';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        {/* <Login/> */}
            <Routes />
            {/* <h1> Helooo</h1> */}
        </div>
    </BrowserRouter>
  );
}

export default App;
