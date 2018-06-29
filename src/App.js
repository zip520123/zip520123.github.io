import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import Drawer from './Drawer.js'
import Main from './Main.js'
import YoutubeToolsPage from "./YoutubeToolsPage"

// import {LoggingButton , LoadingButton , GoogleButton} from './loginButton';
class App extends Component {
  constructor(props){
    super(props)
    this.state = { page : "main" }
    this.handleApp = this.handleApp.bind(this)
  }
  handleApp(herf){
    console.log("hanldeApp: " + herf)
    this.setState((prevState) => {
      var layout = document.querySelector('.mdl-layout');
      layout.MaterialLayout.toggleDrawer();
      return { page : herf }
    })
  }
  render() {
    console.log("app:" + this.state.page)
    const zip520123 = "zip520123"
    
   
                
            const bigCard = {id : 0 , title : "Youtube Replay Tools" , src : "https://lh3.googleusercontent.com/SNeG0GL9Pphg5kokb1wVn0VTE9LkJFL7IHXF3498C68JQIjft8RpPiybal63R8bPRQD2pwyqwXU0uqSmHPTBxq6QOvHI5FTotUfPqJwmaVxRdLMp7Pa5rXo8latFcEhG3sD4Fl6u8FrnsUdrTbPtVQv6DdgsvyVLzkuN0xCR7nh3BTgmmoKHPdeH_tRFgZTpSeGEIhToAaUyEB_NdeM4LX01HnwwxeLDi6k0QDm3w3qfV4RdksqWhs_A5qJ8Nxl_aOzMz9VGg0IGZh_v1V55oRAQdFXz_VuoM-5IZfeBQWRUZ24mA7C-U8j4J5syv4EXhy7_qHbbQvpFvBDi6S6ylHWSI1dJ05HCSN2MwyZ_iEQFkxzCZ2Sk5DvOVTw3iVWUGCGLCvl-MRob1Tdv7Tj8YR2vX0GdOgRCfMkBPr3CDhFVbHa6jteO7kSx28y1Ia9SOIxpzk5Da09R9h-tUGrcDIPc_KqEoDdKmn28zlTat7JFA-OC3VZc9-XqokB6Qz2BiiWWSF5e4GhoHAaa5BOAtO8QzNSw79QSKzqknxBpXxo6W1eOoy4Nc17ZuZRN8hkh0MUAF_JRh_AImcXmnGu1AdvZ-yP8NBPtWbiiYoDqJyf73L1ZufJu35QZAYG7qyBXzma-NLtbPO-nqQpxEc2_173yFLV-gXIQ=w1161-h653-no" , text : "My daughter" , href : ""}
            
            // videoTagList.push(<BigCard card={bigCard} />)
            var mainContent = <YoutubeToolsPage card={bigCard}/>

    return (
      <div className="App">
        
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
 
        
          <Header title={zip520123} />
          <Drawer title={zip520123} clickHandler={this.handleApp}/>
          
          <Main page={this.state.page} />
          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">zip520123's react lab</h1>
      </header> */}
        </div>
      </div>
        
        
    );
  }
}
export default App;
