const { Chrono } = require("react-chrono")
import styled from "styled-components";


const TimeLineContainerStyle = styled.div`
    align-items: center; 
    justify-content: center;
    width: auto;
    margin: auto 10%;
    @media (max-width: 768px) {
        margin: auto 5%;
    }
`


const Roadmap = () => {

    return (
        <TimeLineContainerStyle>
            <Chrono
            items={[
                {
                title: "JUL 2022 - JUL 2025",
                cardTitle: "Started Bachelor of Data Science at QUT",
                url: "http://google.com",
                cardSubtitle:
                    "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
                cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
                },
            ]}
            mode="VERTICAL"
            disableToolbar = {true}
            highlightCardsOnHover = {true}
            scrollable = {true}
            cardWidth = {900} 
            />
        </TimeLineContainerStyle>
    )

}

export default Roadmap;