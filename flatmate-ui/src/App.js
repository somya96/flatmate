import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import { addAuthentication } from './session';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default addAuthentication(App);
