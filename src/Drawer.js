import React, {Component} from 'react';
import logo from './logo.svg';
class Atag extends Component {
  constructor(props){
    super(props)
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.drawerOnClick(this.props.href)
    
  }
  render(){
    return <a className="mdl-navigation__link nounderline" href={this.props.href} onClick={e => this.handleClick(e)}>{this.props.name}</a>
  }
}
class Drawer extends Component {
    constructor(props){
      super(props)
      // this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (href) => {
      this.props.clickHandler(href);
      console.log(href)
    }
    
    render(){
        return <div className="mdl-layout__drawer">

        <img src={logo} className="App-logo" alt="logo" />
        
        <span className="mdl-layout-title">{this.props.title}</span>
        <nav className="mdl-navigation">
        <div class="mdl-layout-spacer"></div>
          <Atag name="Home" href="main" drawerOnClick={this.handleClick} />
          <Atag name="Youtube" href="youtube" drawerOnClick={this.handleClick} />
          {/* <a className="mdl-navigation__link nounderline" href="main">Home</a>
          <a className="mdl-navigation__link nounderline" href="https://github.com/zip520123/zip520123.github.io/tree/reMaster/src">GitHub source</a>
          
          <a className="mdl-navigation__link nounderline" href="youtube" onClick= {(e) => this.handleClick(e)} >Youtube Page</a> */}
        </nav>
        
      </div>
    }
}
export default Drawer