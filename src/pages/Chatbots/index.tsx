import styled from "styled-components";
import { Card } from "../../components/Card";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { gptData } from "./gptData";
import FeaturedImg from "../../img/featuredGolfgpt.webp";
import { SecondaryLinkButton } from "../../components/Buttons/SecondaryLinkButton";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  max-width: 1000px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const Grid = styled.div`
    max-width: 1050px;
    margin: 20px auto 40px;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const SpotlightTitle = styled.h3`
`

const SpotlightCTA = styled.a`
color: white;
text-decoration: none;

&:hover {
    text-decoration: underline;
}
`

const SpotlightImg = styled.img`
margin-top: 20px;
border-radius: 10px;
width: 100%;
max-width: 350px;
`

const SpotlightImgCaption = styled.p`
margin-top: -8px;
font-size: 12px;
`

const LinkContainer = styled.div`
  display: inline-grid;
  margin: 16px;
`;

export const Chatbots = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Chatbot Portfolio" size="h1" />

                <Row>
                    <Col>
                        <SpotlightTitle>
                            Featured by {" "}
                            <SpotlightCTA href="https://openai.com" target="_blank" rel="noopener noreferrer">
                                Open AI
                            </SpotlightCTA>
                            <SpotlightCTA href="https://chat.openai.com/gpts" target="_blank" rel="noopener noreferrer">
                                <SpotlightImg src={FeaturedImg} />
                            </SpotlightCTA>
                            <SpotlightImgCaption>(
                                <SpotlightCTA href="https://chat.openai.com/gpts" target="_blank" rel="noopener noreferrer">
                                    GPT Store
                                </SpotlightCTA>
                                {" "}screenshot from 2/16/24)
                            </SpotlightImgCaption>
                        </SpotlightTitle>
                    </Col>
                    <Col>
                        <Card key='gpt-spotlight' item={gptData[0]} imageShape="round" />
                    </Col>
                </Row>
            </FadeInComponent>
            <Grid>
                {gptData.slice(1).map((gpt, index) => (
                    <FadeInComponent key={index} timeout={index * 400}>
                        <Card
                            key={index}
                            item={gpt}
                            imageShape="round"
                        />
                    </FadeInComponent>
                ))}
            </Grid>
            <FadeInComponent timeout={gptData.length * 400}>
                <LinkContainer>
                    <h2>Chatbot questions?</h2>
                    <SecondaryLinkButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>Email Me</SecondaryLinkButton>
                </LinkContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}