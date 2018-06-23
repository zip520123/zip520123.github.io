import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import Drawer from './Drawer.js'
import Main from './Main.js'


// import {LoggingButton , LoadingButton , GoogleButton} from './loginButton';
class App extends Component {
  constructor(props){
    super(props)
    this.state = { page : "main" }
    this.handleApp = this.handleApp.bind(this)
  }
  handleApp(herf){
    console.log("hanldeApp: " + herf)
    this.setState({ page : herf })
  }
  render() {
    console.log("app:" + this.state.page)
    const zip520123 = "zip520123"
 
    return (
      <div className="App">
        
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header title={zip520123} />
          <Drawer title={zip520123} clickHandler={this.handleApp}/>
          
          <Main page={this.state.page} />
          
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
