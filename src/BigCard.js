import React,{Component} from 'react';
class BigCard extends Component {
    constructor(props){
        super(props)
        
    }
    render(){
        
        return  <div class="mdl-cell  mdl-cell--12-col mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src={this.props.card.src} border="0" alt="" />
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">{this.props.card.title}</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        {this.props.card.text}
                    </div>
                    <div class="mdl-grid portfolio-copy">
                        <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>
                        <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                            <p>
                            We don’t have right to judge we don’t understand.
                            </p>
                        </div>
                        <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Is the shadow in the moonlight inevitable?</h3>

                        <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                            <p>
                            If you stop forward simply because you don’t have right to judge you don’t understand.
You eventually stay where you’re forever.
                            </p>
                        </div>
                    </div>
                </div>
    }
}
export default BigCard