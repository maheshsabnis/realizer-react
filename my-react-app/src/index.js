import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* Import types for Redux */

import {createStore} from 'redux';

import {Provider} from 'react-redux';

import reducers from './reduxapp/reducers/appreducers';


// Impoprted App Module as Component
 import reportWebVitals from './reportWebVitals';
import MainReduxComponent from './reduxapp/mainreduxcomponent';

/* define store */
// SImulate the Redux in browser
const enhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let appStore = createStore(reducers,enhancer);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
   {
      /* The Store is loaded at application level and hence
       the reducers will also be in executing condition because the
       reducers is passed to store.

       SO when any component under the Provider, dispatches an action
       the reducer will listen to its 
      */
   }
   <Provider store={appStore}> 
     <MainReduxComponent></MainReduxComponent>    
   </Provider>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
