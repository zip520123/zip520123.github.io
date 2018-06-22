import React, {Component} from 'react';
class Footer extends Component {
    handleClick = (e) => {
        // this.setState(prevState => ({
        //   isToggleOn: !prevState.isToggleOn
        // }));
        window.open(e,'_blank')
    
        console.log(e)
      }
    render(){

        return <div> <footer class="mdl-mini-footer">
        <div class="mdl-mini-footer__left-section">
            <div class="mdl-logo">Simple portfolio website</div>
        </div>
        <div class="mdl-mini-footer__right-section">
        <button class="mdl-mini-footer--social-btn social-btn social-btn__twitter" onClick={(e)=>this.handleClick("https://www.twitter.com")}>
              <span class="visuallyhidden">Twitter</span>
            </button>
            <button class="mdl-mini-footer--social-btn social-btn social-btn__blogger" onClick={(e)=>this.handleClick("https://www.facebook.com")}>
              <span class="visuallyhidden">Facebook</span>
            </button>
            <button class="mdl-mini-footer--social-btn social-btn social-btn__gplus" onClick={(e)=>this.handleClick("https://www.google.com")}>
              {/* <span class="visuallyhidden">Google Plus</span> */}
            </button>
            <ul class="mdl-mini-footer__link-list">
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy & Terms</a></li>
            </ul>
            {/* <a href="https://github.com/google/material-design-lite/blob/mdl-1.x/templates/blog/" target="_blank" id="view-source" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--accent mdl-color-text--white">View Source</a> */}
        </div>
        
    </footer>
    
    </div>
    }
}
export default Footer