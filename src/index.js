import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css'; // when importing from non JS file
import Hello from './Hello'; // when importing from file
import 'tachyons'; // when importing from dependencies
/* import App from './App'; */
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Hello greeting={'Hello React Ninja'}/>
);


