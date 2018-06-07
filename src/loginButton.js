import React from 'react';
import { Button } from 'react-bootstrap';
class LoggingButton extends React.Component {
    handleClick = () => {
      console.log('this is: others', this , this.props.others);
    }
    render() {
      const { 
        variant,
        content,
        ...others
      } = this.props;
      
      return (
        <button onClick={(e) => this.handleClick(e)}>
          hello world {content} {variant}
        </button>
      );
    }
  }
class LoadingButton extends React.Component {
constructor(props, context) {
  super(props, context);

  this.handleClick = this.handleClick.bind(this);

  this.state = {
    isLoading: false
  };
}

handleClick() {
  // this.setState({ isLoading: !this.state.isLoading });
  this.setState((prevState , props) => {
    return {isLoading: !prevState.isLoading};
  });
  console.log('this : ' , this.state.isLoading);
  // This probably where you would have an `ajax` call
  // setTimeout(() => {
  //   this.setState({ isLoading: false });
  // }, 2000);

}

render() {
  const { isLoading } = this.state;

  return (
    <Button
      bsStyle="primary"
      // disabled={isLoading}
      // onClick={!isLoading ? this.handleClick : null}
      onClick={this.handleClick}
    >
      {isLoading ? 'Loading...' : 'Loading state'}
    </Button>
  );
}
}
class GoogleButton extends React.Component {
  constructor(props,content) {
    super(props,content);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClick: false
    }
  }
  handleClick (){
    this.setState((prevState , props) => {
      console.log('click!');
      return {isClick : !prevState.isClick};
    });
  }
  render(){
    const {isClick} = this.state;
    const buttonColorRed = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised";
    const fab = 'mdl-button--fab';
    const colored = `${buttonColorRed} mdl-button--colored`;
    const icon = "material-icons mdl-badge mdl-badge--overlap ";
    const badge = `♥`;

    return (
      <div>
    <button class={isClick ? buttonColorRed : colored} onClick={this.handleClick}>
    {isClick ? 'click' : 'isNotClick'}
    </button>
    <div class={icon} data-badge={isClick ? badge : null}>account_box</div>  
    </div>
  );
  }
}
// export default LoggingButton;
export { LoggingButton, LoadingButton , GoogleButton}