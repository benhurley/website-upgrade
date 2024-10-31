import styled from "styled-components";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { gptData } from "./gptData";
import FeaturedImg from "../../img/featuredGolfgpt.webp";
import { SecondaryAnchorButton } from "../../components/Buttons/SecondaryLinkButton";
import { CardWithCTAs } from "../../components/CardWithCTAs";

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

const SpotlightWrapper = styled.div`
margin-bottom: 20px;
`

const SpotlightTitle = styled.h2`
margin-top: 0;
`

const SpotlightSubtitle = styled.p`
margin-top: -12px;
font-size: 18px;`

const SpotlightCTA = styled.a`
color: white;
text-decoration: none;

&:hover {
    text-decoration: underline;
}
`

const SpotlightImg = styled.img`
border-radius: 10px;
width: 100%;
max-width: 350px;
`

const SpotlightImgCaption = styled.p`
margin-top: -8px;
font-size: 12px;
font-style: italic;
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
                        <SpotlightWrapper>
                            <SpotlightTitle>
                                Spotlight:{" "}
                                <SpotlightCTA style={{color: '#38E8B0'}} href={gptData[0].url} target="_blank" rel="noopener noreferrer">
                                    GolfGPT
                                </SpotlightCTA>
                            </SpotlightTitle>
                            <SpotlightSubtitle>25,000+ conversations to-date</SpotlightSubtitle>
                            <SpotlightCTA href="https://chat.openai.com/gpts" target="_blank" rel="noopener noreferrer">
                                    <SpotlightImg src={FeaturedImg} />
                                </SpotlightCTA>
                                <SpotlightImgCaption>(
                                    <SpotlightCTA href="https://chat.openai.com/gpts" target="_blank" rel="noopener noreferrer">
                                        GPT Store
                                    </SpotlightCTA>
                                    {" "}screenshot from 2/16/24)
                                </SpotlightImgCaption>
                        </SpotlightWrapper>
                    </Col>
                    <Col>
                        <CardWithCTAs 
                            key='gpt-spotlight' 
                            item={gptData[0]} 
                            imageShape="round"
                            primaryCTAData={{
                                buttonText: "Try for Free",
                                url: gptData[0].subdomain,
                            }}
                            secondaryCTAData={{
                                buttonText: "ChatGPT+ Version",
                                url: gptData[0].url
                            }}
                        />
                    </Col>
                </Row>
            </FadeInComponent>
            <h2>My Chatbots</h2>
            <Grid>
                {gptData.slice(1).map((gpt, index) => (
                    <FadeInComponent key={index} timeout={index * 400}>
                        <CardWithCTAs
                            key={index}
                            item={gpt}
                            imageShape="round"
                            primaryCTAData={{
                                buttonText: "Try for Free",
                                url: gpt.subdomain,
                            }}
                            secondaryCTAData={{
                                buttonText: "ChatGPT+ Version",
                                url: gpt.url,
                            }}
                        />
                    </FadeInComponent>
                ))}
            </Grid>
            <FadeInComponent timeout={gptData.length * 400}>
                <LinkContainer>
                    <h2>Chatbot questions?</h2>
                    <SecondaryAnchorButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>send me an email</SecondaryAnchorButton>
                </LinkContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}