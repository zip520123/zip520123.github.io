import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeFrame from './youtubeFrame';
import { Nav,Navbar,NavItem ,MenuItem ,NavDropdown} from 'react-bootstrap';
// import ButtonBar  from './moduleA';

// import {LoggingButton , LoadingButton , GoogleButton} from './loginButton';
class App extends Component {
  constructor(props){
    super(props)
    console.log("App constructor")
  }
  render() {
    const zip520123 = "zip520123's home"
    return (
      <div className="App">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header class="mdl-layout__header mdl-layout__header--transparent">
          
            <div class="mdl-layout__header-row">
              <span class="mdl-layout-title">{zip520123}</span>
              <div class="mdl-layout-spacer"></div>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                          mdl-textfield--floating-label mdl-textfield--align-right">
                <label class="mdl-button mdl-js-button mdl-button--icon"
                      for="fixed-header-drawer-exp">
                  <i class="material-icons">search</i>
                </label>
                <div class="mdl-textfield__expandable-holder">
                  <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
                </div>
              </div>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">{zip520123}</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="https://github.com/zip520123/zip520123.github.io/tree/reMaster/src">GitHub source</a>
              
              <a className="mdl-navigation__link" href="https://google.com">Google</a>
            </nav>
          </div>
          <main className="mdl-layout__content">
          <img src={logo} className="App-logo" alt="logo" />  
          <YoutubeFrame videoId="cmlCuzn_mqI"/>
          <YoutubeFrame videoId="z-NuxWkYtlI"/>
          </main>
        </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">zip520123's react lab</h1>
      </header> */}
        
        

      </div>
    );
  }
}
export default App;
