import styled from "styled-components";
import { PrimaryLinkButton } from "../../components/Buttons/PrimaryLinkButton";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { SecondaryLinkButton } from "../../components/Buttons/SecondaryLinkButton";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

import artHeadshot from "../../img/me.webp";
import artHeadshotReversed from "../../img/me-reversed.webp";

const Container = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 32px;
max-width: 525px;
padding: 0px 20px;
`

const Description = styled.p`
display: flex;
justify-content: left;
margin-bottom: 24px;
font-size: 18px;
text-wrap: balance;
`;

const CTAContainer = styled.div`
margin-top: 16px;
margin-bottom: 48px;
display: inline-block;
line-height: 78px;
`

const ChatbotsButton = styled(SecondaryLinkButton)`
margin-left: 10px;
margin-right: 10px;
`

const WebsitesButton = styled(PrimaryLinkButton)`
margin-left: 10px;
margin-right: 10px;
`

const Subtitle = styled.h2`
margin-top: 64px;
`

const Image = styled.img`
border-radius: 100%;
height: 150px;
width: 150px;
cursor: pointer;
border: 2px solid;
border-color: white;
`


export const About = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="About Me" size="h1" />
                <ReactCardFlip
                    infinite
                    isFlipped={isFlipped}
                    flipDirection="horizontal"
                    flipSpeedFrontToBack={2}
                    flipSpeedBackToFront={2}
                >
                    <Image
                        alt="ben's ai-generated profile picture (front)"
                        src={artHeadshot} onClick={() => setIsFlipped(!isFlipped)}
                    />
                    <Image
                        alt="ben's ai-generated profile picture (back)"
                        src={artHeadshotReversed} onClick={() => setIsFlipped(!isFlipped)}
                    />
                </ReactCardFlip>
                <Container>
                    <Description>
                        Got my first job at an Ad giant, learned about "the cloud".
                    </Description>
                    <Description>
                        Went into consulting to focus on building in AWS.
                    </Description>
                    <Description>
                        Consulting made me go frontend (kicking and screaming).
                    </Description>
                    <Description>
                        Ended up really liking frontend, actually.
                    </Description>
                    <Description>
                        Joined a startup & rebuilt their site over several years.
                    </Description>
                    <Description>
                        Currently tackling the gaming industry.
                    </Description>
                </Container>
            </FadeInComponent>
            <FadeInComponent>
                <Subtitle>Want to see my work?</Subtitle>
                <CTAContainer>
                    <WebsitesButton href="/websites">Websites</WebsitesButton>
                    <ChatbotsButton href="/chatbots">Chatbots</ChatbotsButton>
                </CTAContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}