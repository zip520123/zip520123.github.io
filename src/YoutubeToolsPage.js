import React, { Component } from 'react';
import YoutubeFrame from './youtubeFrame';
import { FormGroup , ControlLabel ,FormControl } from 'react-bootstrap';

class YoutubeToolsPage extends Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: "",
        videoIdList: ["cmlCuzn_mqI" , "z-NuxWkYtlI" ,"2yhhK_2HZzQ","GIKmtqjlvuA"]
            };
      }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

      
    render(){

        var videoIdList = this.state.videoIdList
            var youtubeiFrameList = []
            
            var topInputText = <form>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>輸入video id 之後會產生重複播放youtube嵌入元件,例如：J_QQkBrzUIc 
                  </ControlLabel>
            <ControlLabel>
                  A input video id to generate youtube embed frame with autoreplay value, example: J_QQkBrzUIc</ControlLabel>
              
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="輸入video id, example: J_QQkBrzUIc"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              
            </FormGroup>
          </form>
           
        let id = this.state.value
        let youtubeHost = "https://www.youtube.com/watch?v="
        
        let i = 0
        while (i<id.length && i< youtubeHost.length) {
            if (youtubeHost[i] != id[i]) {
                break
            }
            i+=1
        }
        if (i == youtubeHost.length) {
            id = id.substring(i)
        }
        
        if (id != "") {
            const videoTag = <YoutubeFrame videoId={id} />
            youtubeiFrameList.push(videoTag)
            
        } else {
            videoIdList.map((id)=>{
                const videoTag = <YoutubeFrame videoId={id} />
                youtubeiFrameList.push(videoTag)
            })
        }    

        return (
            
            <React.Fragment>
                {topInputText}
                {youtubeiFrameList}
            </React.Fragment>
        );
    }
}
export default YoutubeToolsPage;