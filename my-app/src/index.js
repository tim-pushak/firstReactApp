import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const elem = <h2 className="vasya">Hello World!</h2>; //or 
// const elem = React.createElement('h1', {className: 'vasya'}, 'Hello World!'); //but this too large

const text = 'Hello World!';

const elem = (
  <div>
    <h2 className='vasya'>Текст: {text}</h2>
    <input type="text" />
    <button>Click</button> 
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
); // these lines you must write on top of the file
