import React, { Component } from 'react';
import YoutubeFrame from './youtubeFrame';
class YoutubeToolsPage extends Component {
    
    render(){

        var videoIdList = ["cmlCuzn_mqI" , "z-NuxWkYtlI" ,"2yhhK_2HZzQ","FZ5xLNErPMU"]
            var videoTagList = []
            videoIdList.map((id)=>{
                const videoTag = <YoutubeFrame videoId={id} />
                videoTagList.push(videoTag)
            })

        
        return (
            videoTagList
        );
    }
}
export default YoutubeToolsPage;