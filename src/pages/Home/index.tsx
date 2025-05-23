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
import Marquee from "react-fast-marquee";

import BonobosLogo from "../../img/bonobos.webp";
import DailyHarvestLogo from "../../img/dailyharvest.webp";
import RockstarLogo from "../../img/rockstarLogo.webp";
import ttmLogo from "../../img/ttmLogo.webp";
import nippiesLogo from "../../img/nippiesLogo.webp";
import smokebroLogo from "../../img/smokebroLogo.webp";

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
  animation-delay: 2.25s;
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
margin-bottom: 6rem;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 1rem;
`

const ChatbotsButton = styled(SecondaryLinkButton)`
`

const WebsitesButton = styled(PrimaryLinkButton)`
`

const Subtitle = styled.h2`
font-size: 20px;
margin-bottom: 1rem;
`

const MarqueeWrapper = styled.div`
cursor: pointer;
display: block;
margin: auto;
max-width: 50rem;
`

const Logo = styled.img<{ height: number }>`
  margin: 0 2.25rem;
  height: ${({ height }) => (`${height}px`)};
`;

export const Home = () => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [shouldPlay, setShouldPlay] = useState(true);

  return (
    <FadeInComponent>
      <Container>
        <FadeInComponent timeout={500}>
          <WaveContainer>
            <SlideInText text="Hey, I&apos;m Ben" size="h1" />
            <FadeInComponent timeout={1500}>
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
        <Subtitle>Your Friendly Design Engineer</Subtitle>
        <CTAContainer>
          <WebsitesButton to="/websites">My Websites</WebsitesButton>
          <ChatbotsButton to="/chatbots">My Chatbots</ChatbotsButton>
        </CTAContainer>
        <FadeInComponent>
          <MarqueeWrapper onClick={() => setShouldPlay(!shouldPlay)}>
            <Marquee
              autoFill
              play={shouldPlay}
              pauseOnClick
              gradient
              gradientColor='black'
              gradientWidth={'10px'}
              speed={50}
              delay={3.5}
            >
              <Logo alt="rockstar games logo" src={RockstarLogo} height={35} />
              <Logo alt="the nippies logo" src={nippiesLogo} height={35} />
              <Logo alt="to the moon logo" src={ttmLogo} height={40} />
              <Logo alt="bonobos logo" src={BonobosLogo} height={30} />
              <Logo alt="daily harvest logo" src={DailyHarvestLogo} height={40} />
              <Logo alt="smokebro logo" src={smokebroLogo} height={30} />
            </Marquee>
          </MarqueeWrapper>
        </FadeInComponent>
      </Container>
    </FadeInComponent>
  )
}