import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { CSSTransition } from 'react-transition-group';
import {
  Grid,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
