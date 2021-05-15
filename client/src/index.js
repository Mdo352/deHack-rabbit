import React, { Suspense } from 'react';
//import React from 'react'; -> already declared
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18next';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


ReactDOM.render( 
    <Suspense fallback={(<div>Loading ~~~~~</div>)}>
        <App />
    </Suspense>
         ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Sytnax to write render ^
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );