import React, { Component } from 'react'; // same as import React, React.component from 'react'
import './Hello.css';

class Hello extends Component {
    render() {
        return (
        //inserting tachyons classes
        <div className='f1 tc'> 
            <h1>Hello World</h1>
            <p>{this.props.greeting}</p>
        </div>
        );
    }
}

//same as

/* const Hello = (props) =>  {
    return (
        //inserting tachyons classes
        <div className='f1 tc'> 
            <h1>Hello World</h1>
            <p>{props.greeting}</p>
        </div>
        );
} */

export default Hello;

//index.js

//import React from 'react';
//import ReactDOM from 'react-dom/client'; 
//import './index.css'; // when importing from non JS file
//import Hello from './Archive/Hello'; // when importing from file
//import 'tachyons'; // when importing from dependencies
/* import App from './App'; */
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
 // <Hello greeting={'Hello React Ninja'}/>
//);