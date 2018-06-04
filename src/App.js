import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonBar  from './moduleA';
import YoutubeFrame from './youtubeFrame';
import {LoggingButton , LoadingButton , GoogleButton} from './loginButton';
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonBar content="aaa" variant="bbbb" />
        <GoogleButton />

        <YoutubeFrame />

        {/* <LoggingButton content="aaa" variant="bbbb" c="c" d="d"/>
        <LoadingButton /> */}

      </div>
    );
  }
}
export default App;
