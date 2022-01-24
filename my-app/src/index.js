import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('root')
); // these lines you must write on top of the file
