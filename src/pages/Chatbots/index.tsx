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

const Text = styled.p`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
`

export const Chatbots = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Chatbots" size="h1" />
            </FadeInComponent>
            <Text>Try my most popular AI bots below (requires a free <a target="_blank" rel="noopener noreferrer" href="https://pmfm.ai/">pmfm.ai</a> account)</Text>
            <Grid>
                <IframeWithLoading title="vinobot" src="https://paymeformyai.com/embed/Vinobot" />
                <IframeWithLoading title="mechanic-mate" src="https://paymeformyai.com/embed/MechanicMate" />
                <IframeWithLoading title="game-genius" src="https://paymeformyai.com/embed/GameGenius" />
            </Grid>
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