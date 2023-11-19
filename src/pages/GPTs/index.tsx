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

const Text = styled.p`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
`

export const GPTs = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="My GPTs" size="h1" />
            </FadeInComponent>
            <Text>If you are a ChatGPT Plus subscriber, you can use access any of my custom GPTs for free. Enjoy!</Text>
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