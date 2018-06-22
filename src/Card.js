import React,{Component} from 'react';
import logo from "./logo.svg";
class Card extends Component {
    constructor(props){
        super(props)
        console.log(this.props.card.src)
    }
    render(){
        
        return  <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src={this.props.card.src} border="0" alt="" />
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">{this.props.card.title}</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        {this.props.card.text}
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent nounderline" href={this.props.card.href}>Read more</a>
                    </div>
                </div>
    }
}
export default Card