import React, { Component } from 'react';
import { Button , ButtonToolbar } from 'react-bootstrap';
class TButton extends React.Component {

  handleClick() {
    this.props.onClick(this.props.type);
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  render(){
    return (<Button key={this.props.type} bsStyle={this.props.type} onClick={this.handleClick}>{this.props.type}</Button>)
  }
}
class ButtonBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {clickText: "No one click"}
      this.handle1Click = this.handle1Click.bind(this)
    }
    handle1Click(button) {
        this.setState(prevState => {
          return {clickText : button} 
        });
      }
    render() {
      const clickText = this.state.clickText;
      const list = ["primary","success","info","warning","danger","link"];
      const buttonList = list.map((name)=> <TButton type={name} onClick={this.handle1Click}>{name}</TButton> );

      return (
                <ButtonToolbar>
                   {buttonList}
  <p>{clickText} click</p>
  
 </ButtonToolbar>
      )
    }
  }
  export default ButtonBar;