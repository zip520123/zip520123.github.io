import React, { Component } from 'react';
class YoutubeFrame extends Component {
    render(){
        const videoId = 'cmlCuzn_mqI';
        const src = `http://www.youtube.com/embed/${videoId}?loop=1&amp;playlist=${videoId}`;
        return (
        <iframe width="560" height="315" src={src} frameborder="0" allowfullscreen></iframe>
        );
    }
}
export default YoutubeFrame;

