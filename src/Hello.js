import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className='f1 tc'>
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

// another way of writing above code as a function
// const Hello = (props) => {
//     ender() {
//         return (
//           <div className='f1 tc'>
//             <h1>Hello World</h1>
//             <p>{props.greeting}</p>
//           </div>
//         );
// }

export default Hello;
