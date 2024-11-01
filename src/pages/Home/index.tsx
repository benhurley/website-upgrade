import React from 'react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { PrimaryLinkButton } from '../../components/Buttons/PrimaryLinkButton';
import { SecondaryLinkButton } from '../../components/Buttons/SecondaryLinkButton';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import ReactCardFlip from 'react-card-flip';
import { SlideInText } from '../../helpers/SlideInText';

import artHeadshot from "../../img/me.webp";
import artHeadshotReversed from "../../img/me-reversed.webp";
import hand from "../../img/hand.webp";

const waveAnimation = keyframes`
  0% { transform: rotate( 0.0deg) }
 10% { transform: rotate(14.0deg) scale(1.3); }  /* The following five values can be played with to make the waving more or less extreme */
 20% { transform: rotate(-8.0deg) scale(1.3); }
 30% { transform: rotate(14.0deg) scale(1.3); }
 50% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
100% { transform: rotate( 0.0deg) }
`;

const WaveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wave = styled.div`
  animation-delay: 1.75s;
  animation-name: ${waveAnimation};
  animation-duration: 2.25s;
  transform-origin: 70% 70%;
  display: inline-block;
`;

const Hand = styled.img`
height: 35px;
padding-left: 10px;
`

const Container = styled.div`
overflowX: hidden;
`

const AvatarContainer = styled.div`
margin-bottom: 20px;
`

const Image = styled.img`
border-radius: 100%;
height: 150px;
width: 150px;
cursor: pointer;
border: 2px solid;
border-color: white;
`

const CTAContainer = styled.div`
margin-top: 10px;
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
padding-left: 45px;
padding-right: 45px;
`

export const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <FadeInComponent>
      <Container>
        <FadeInComponent timeout={500}>
          <WaveContainer>
            <SlideInText text="Hey, it&apos;s Ben" size="h1" />
            <FadeInComponent timeout={1000}>
              <Wave><Hand width={35} height={45} src={hand} alt="waiving hand" /></Wave>
            </FadeInComponent>
          </WaveContainer>
        </FadeInComponent>
        <AvatarContainer>
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
        </AvatarContainer>
        <h2>I build Websites & AI Chatbots</h2>
        <CTAContainer>
          <WebsitesButton to="/websites">Websites</WebsitesButton>
          <ChatbotsButton to="/chatbots">Chatbots</ChatbotsButton>
        </CTAContainer>
      </Container>
    </FadeInComponent>
  )
}