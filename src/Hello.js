import React, { Component } from 'react'; // same as import React, React.component from 'react'
import './Hello.css';

class Hello extends Component {
    render() {
        return (
        {/* inserting tachyons classes */}
        <div className='f1 tc'> 
            <h1>Hello World</h1>
            <p>Welcome to React</p>
        </div>
        );
    }
}

export default Hello;