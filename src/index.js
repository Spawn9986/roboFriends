import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css'; // when importing from non JS file
import Card from './Card'; // when importing from file
import 'tachyons'; // when importing from dependencies
/* import App from './App'; */
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Card />
);


