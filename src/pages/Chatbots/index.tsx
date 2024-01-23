import styled from "styled-components";
import { Card } from "../../components/Card";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { gptData } from "./gptData";

const Grid = styled.div`
    max-width: 1050px;
    margin: 20px auto 40px;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const IframeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledIframe = styled.iframe`
  border: none;
  border-radius: 20px;
  flex: 1;
  padding: 10px;
  width: 100%; // Adjusts iframe width to the parent container
  min-height: 400px; // Set a minimum height
  margin: 10px;
`;

const Text = styled.p`
    margin: 20px;
`

export const Chatbots = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Chatbots" size="h1" />
            </FadeInComponent>
            <Text>Try my most popular AI bots below (requires a free <a target="_blank" rel="noopener noreferrer" href="https://pmfm.ai/">pmfm.ai</a> account)</Text>
            <IframeContainer>
                <StyledIframe title="vinobot" src="https://paymeformyai.com/embed/Vinobot?nologin=true" />
                <StyledIframe title="mechanic-mate" src="https://paymeformyai.com/embed/MechanicMate?nologin=true" />
                <StyledIframe title="game-genius" src="https://paymeformyai.com/embed/GameGenius?nologin=true" />
            </IframeContainer>
            <Text>If you are a ChatGPT Plus subscriber, you can use any of my custom GPTs for free. Enjoy!</Text>
            <Grid>
                {gptData.map((gpt, index) => (
                    <FadeInComponent key={index} timeout={index * 400}>
                        <Card
                            key={index}
                            item={gpt}
                            imageShape="square"
                        />
                    </FadeInComponent>
                ))}
            </Grid>
        </FadeInComponent>
    );
}