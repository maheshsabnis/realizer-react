import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Impoprted App Module as Component
 import reportWebVitals from './reportWebVitals';
import MainReduxComponent from './reduxapp/mainreduxcomponent';
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
     <MainReduxComponent></MainReduxComponent>      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
