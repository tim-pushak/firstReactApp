import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Header} from './App';

ReactDOM.render(
  <StrictMode>
    <App/>
    <Header/>
  </StrictMode>,
  document.getElementById('root')
); // these lines you must write on top of the file
