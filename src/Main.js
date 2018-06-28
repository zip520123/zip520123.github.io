import React,{Component} from 'react';

import Footer from "./Footer.js"
import Card from "./Card.js"
import BigCard from "./BigCard.js"
import TodoApp from "./Todo.js"
import YoutubeToolsPage from "./YoutubeToolsPage"
class Main extends Component {
    constructor(props){
        super(props)
        console.log("Main constructor:" + props.page)
      }
    render(){
        var mainContent;
        
        if (this.props.page == "main"){
            const cards = [
                {id : 0 , title : "DK" , src : "https://lh3.googleusercontent.com/-iPgLlmcWrUDzkIBwAsYaRM3NUexInn38KwohhwnmVZTi_2p-5jGuyr_C_Tf_MTs9tfr1Kxp-_OtyZBRVhZdVEAnNN9e8InVZbV0ZwVoNGmFjeMGzyCtffy0EpatlE0MaOBMBQvD-Q=w2400" , text : "My daughter" , href : ""},
                {id : 1 , title : "Witch" , src : "https://lh3.googleusercontent.com/SRUxNPYUn9MWqGRBqzC29hNj6wFjT_sTRLlLO5C8PZ3PU7cL-qcgMybg8ZYkbMPttFdq2g2yhgW2qB7xHjv8rQjMIibBm5if7JSQapfl9586xwNGFwQfP4TwqauLXp-rXnzNIfIQTQ=w2400" , text : "My daughter" , href : ""},
                {id : 2 , title : "Unknow" , src : "https://lh3.googleusercontent.com/du0qytDogXpt4G64VshflYk3LJRyzoJhREMYURiqsRPx8xucqDw1PhTDnumDJow0Jme9dUT8VlowoV_bzcZyorG5zXa9yx8OuRaMgf8jqrScuNxy37ip_aj9q_R3HFPHTOkEOYYAKA=w2400" , text : "Unknow person=3=" , href : ""}
            ]
            var cardsList = []
           
    
            cards.map((card)=>{
                const cardTag = <Card card={card}/>
                cardsList.push(cardTag)
            })
            const bigCard = {id : 0 , title : "DK" , src : "https://lh3.googleusercontent.com/SNeG0GL9Pphg5kokb1wVn0VTE9LkJFL7IHXF3498C68JQIjft8RpPiybal63R8bPRQD2pwyqwXU0uqSmHPTBxq6QOvHI5FTotUfPqJwmaVxRdLMp7Pa5rXo8latFcEhG3sD4Fl6u8FrnsUdrTbPtVQv6DdgsvyVLzkuN0xCR7nh3BTgmmoKHPdeH_tRFgZTpSeGEIhToAaUyEB_NdeM4LX01HnwwxeLDi6k0QDm3w3qfV4RdksqWhs_A5qJ8Nxl_aOzMz9VGg0IGZh_v1V55oRAQdFXz_VuoM-5IZfeBQWRUZ24mA7C-U8j4J5syv4EXhy7_qHbbQvpFvBDi6S6ylHWSI1dJ05HCSN2MwyZ_iEQFkxzCZ2Sk5DvOVTw3iVWUGCGLCvl-MRob1Tdv7Tj8YR2vX0GdOgRCfMkBPr3CDhFVbHa6jteO7kSx28y1Ia9SOIxpzk5Da09R9h-tUGrcDIPc_KqEoDdKmn28zlTat7JFA-OC3VZc9-XqokB6Qz2BiiWWSF5e4GhoHAaa5BOAtO8QzNSw79QSKzqknxBpXxo6W1eOoy4Nc17ZuZRN8hkh0MUAF_JRh_AImcXmnGu1AdvZ-yP8NBPtWbiiYoDqJyf73L1ZufJu35QZAYG7qyBXzma-NLtbPO-nqQpxEc2_173yFLV-gXIQ=w1161-h653-no" , text : "My daughter" , href : ""}
            const bigCardTag = <BigCard card={bigCard} />
            
            mainContent = bigCardTag
        }
        if (this.props.page == "youtube"){
            
            mainContent = <YoutubeToolsPage />
            
            {/* <YoutubeFrame videoId="cmlCuzn_mqI"/>
            <YoutubeFrame videoId="z-NuxWkYtlI"/>
            <YoutubeFrame videoId="2yhhK_2HZzQ"/>  */}
            
        }
        if (this.props.page == "todo") {
            mainContent = <TodoApp />
        }
        return (
        <main className="mdl-layout__content">
            <div class="mdl-grid portfolio-max-width">
                {mainContent}
            </div>
        <Footer />
        </main>)
        
    }
}
export default Main