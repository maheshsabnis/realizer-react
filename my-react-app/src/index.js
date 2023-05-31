import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Impoprted App Module as Component
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "James William Bond";
// CReate a root in index.html where the
// React component will be mounted and rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
// App COmponent will be rendered (Generating HTMl Dynamically based on Data and Events)
{/* The App is a Child of the React DOM Root 
   Here an actorname is dynamicall generated property
   that is bound to 'name' declaration
*/}
root.render(
  <React.StrictMode>
    <App actorname={name}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();