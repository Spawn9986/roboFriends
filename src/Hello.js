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