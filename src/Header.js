import React, { Component } from 'react';
import profile from './profile.JPG'
class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
      const divStyle = {
        backgroundImage: 'url(' + profile + ')',
        
      };
        return (
        <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
          <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div style={divStyle} class="portfolio-logo"></div>
                    <span class="mdl-layout__title">Simple portfolio website</span>
                </span>
            </div>
      </header>)
    }
}
export default Header