import styled from "styled-components";
import { Card } from "../../components/Card";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { gptData } from "./gptData";
import IframeWithLoading from "../../helpers/IframeWithLoading";

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
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledIframe = styled(IframeWithLoading)`
  flex: 1;
  border: none;
  margin: 10px;
  width: 100%;
  min-height: 300px;
  margin: 10px 0px;
  @media (max-width: 768px) {
    width: 90%;
  }
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
            <Text>Try my most popular AI bots below:</Text>
            <IframeContainer>
                <StyledIframe title="vinobot" src="https://pmfm.ai/embed/Vinobot?nologin=true" />
                <StyledIframe title="mechanic-mate" src="https://pmfm.ai/embed/MechanicMate?nologin=true" />
                <StyledIframe title="game-genius" src="https://pmfm.ai/embed/GameGenius?nologin=true" />
            </IframeContainer>
            <Text>If you are a ChatGPT Plus subscriber, you can also use any of my custom GPTs below:</Text>
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