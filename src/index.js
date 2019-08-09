import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './NameForm'
//import Welcome from './Welcome';
//import App from './App';
//import Comment from './Comment';
//import * as serviceWorker from './serviceWorker';

// function Clock(props) {
//     return (
//       <div>
//         <h2>Test Clock!</h2>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
// }

//Example of clock
//function tick() {
   // ReactDOM.render(<Clock />, document.getElementById('root'));
//}
//setInterval(tick, 1000);

// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];    

ReactDOM.render(<NameForm />, document.getElementById('root'));

//ReactDOM.render(<Welcome name="Sarah Duterte" value="Inday Leni"/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
