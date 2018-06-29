import React, { Component } from 'react';
import YoutubeFrame from './youtubeFrame';
import BigCard from "./BigCard.js"
import { Forms , FormGroup , ControlLabel ,FormControl ,HelpBlock} from 'react-bootstrap';
class YoutubeToolsPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, **world**!' ,
        videoIdList: ["cmlCuzn_mqI" , "z-NuxWkYtlI" ,"2yhhK_2HZzQ","FZ5xLNErPMU"]
            };
      }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }
    
      
    render(){
        
        var videoIdList = this.state.videoIdList
            var youtubeiFrameList = []
            
            var topInputText = <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp portfolio-contact">
                
                        
                            
                            <form className="centerform">
                                <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationState()}
                                >
                                <ControlLabel>Working example with validation</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Validation is based on string length.</HelpBlock>
                                </FormGroup>
                            </form>
                                {/* <h2 class="mdl-card__title-text">YoutubeId:</h2> */}
                                {/* <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input" type="text" id="sample1" />
                                    <label class="mdl-textfield__label" for="sample1">YoutubeId:</label>
                                </div> */}
                            
                        
                
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
                            Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                        </p>
                    </div>
                    
                </div>
            </div>
            // videoTagList.push(topInputText)
            // const bigCard = {id : 0 , title : "Youtube Replay Tools" , src : "https://lh3.googleusercontent.com/SNeG0GL9Pphg5kokb1wVn0VTE9LkJFL7IHXF3498C68JQIjft8RpPiybal63R8bPRQD2pwyqwXU0uqSmHPTBxq6QOvHI5FTotUfPqJwmaVxRdLMp7Pa5rXo8latFcEhG3sD4Fl6u8FrnsUdrTbPtVQv6DdgsvyVLzkuN0xCR7nh3BTgmmoKHPdeH_tRFgZTpSeGEIhToAaUyEB_NdeM4LX01HnwwxeLDi6k0QDm3w3qfV4RdksqWhs_A5qJ8Nxl_aOzMz9VGg0IGZh_v1V55oRAQdFXz_VuoM-5IZfeBQWRUZ24mA7C-U8j4J5syv4EXhy7_qHbbQvpFvBDi6S6ylHWSI1dJ05HCSN2MwyZ_iEQFkxzCZ2Sk5DvOVTw3iVWUGCGLCvl-MRob1Tdv7Tj8YR2vX0GdOgRCfMkBPr3CDhFVbHa6jteO7kSx28y1Ia9SOIxpzk5Da09R9h-tUGrcDIPc_KqEoDdKmn28zlTat7JFA-OC3VZc9-XqokB6Qz2BiiWWSF5e4GhoHAaa5BOAtO8QzNSw79QSKzqknxBpXxo6W1eOoy4Nc17ZuZRN8hkh0MUAF_JRh_AImcXmnGu1AdvZ-yP8NBPtWbiiYoDqJyf73L1ZufJu35QZAYG7qyBXzma-NLtbPO-nqQpxEc2_173yFLV-gXIQ=w1161-h653-no" , text : "My daughter" , href : ""}
            
            // videoTagList.push(<BigCard card={bigCard} />)
            videoIdList.map((id)=>{
                const videoTag = <YoutubeFrame videoId={id} />
                youtubeiFrameList.push(videoTag)
            })

            
        
            
        return (
            
            <React.Fragment>
                {topInputText}
                {youtubeiFrameList}
            </React.Fragment>
        );
    }
}
export default YoutubeToolsPage;