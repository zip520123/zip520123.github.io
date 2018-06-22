import React,{Component} from 'react';
import YoutubeFrame from './youtubeFrame';
import Footer from "./Footer.js"
import Card from "./Card.js"

class Main extends Component {
    constructor(props){
        super(props)
        console.log("Main constructor:" + props.page)
      }
    render(){
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

        let mainContent = <div class="mdl-grid portfolio-max-width">
                    {cardsList}
            </div>
        if (this.props.page == "youtube"){
            var videoIdList = ["cmlCuzn_mqI" , "z-NuxWkYtlI" ,"2yhhK_2HZzQ"]
            var videoTagList = []
            videoIdList.map((id)=>{
                const videoTag = <YoutubeFrame videoId={id} />
                videoTagList.push(videoTag)
            })
            mainContent = <div class="mdl-grid portfolio-max-width">
            {videoTagList}
            {/* <YoutubeFrame videoId="cmlCuzn_mqI"/>
            <YoutubeFrame videoId="z-NuxWkYtlI"/>
            <YoutubeFrame videoId="2yhhK_2HZzQ"/>  */}
            </div>
        }
        return (
        <main className="mdl-layout__content">
            {mainContent}

        <Footer />
        </main>)
        
    }
}
export default Main