import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { PrimaryLinkButton } from '../../components/Buttons/PrimaryLinkButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import ReactCardFlip from 'react-card-flip';
import { SlideInText } from '../../helpers/SlideInText';
import { FadeInSpin } from '../../helpers/FadeInSpin';

const nftHeadshot = require("../../img/nft.png");
const benHeadshot = require("../../img/ben.png");
const hand = require("../../img/hand.png");

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

const ShowMeButton = styled(SecondaryButton)`
margin-left: 10px;
margin-right: 10px;
`

const ReachOutButton = styled(PrimaryLinkButton)`
margin-left: 10px;
margin-right: 10px;
padding-left: 55px;
padding-right: 55px;
`

export const Home = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <FadeInComponent>
      <Container>
        <FadeInComponent timeout={500}>
          <WaveContainer>
            <SlideInText text="Hey, it&apos;s Ben" size="h1" />
            <FadeInComponent timeout={1000}>
              <Wave><Hand src={hand} alt="waiving hand" /></Wave>
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
              alt={"headshot of ben"}
              src={benHeadshot} onClick={() => setIsFlipped(!isFlipped)}
            />
            <Image
              alt={"ben's solana nft profile picture"}
              src={nftHeadshot} onClick={() => setIsFlipped(!isFlipped)}
            />
          </ReactCardFlip>
        </AvatarContainer>
        <FadeInComponent timeout={2400}>
          <SlideInText text="I build and design websites" size="h3" delay={2400} />
        </FadeInComponent>
        <CTAContainer>
          <FadeInSpin timeout={3200} startDegrees='-25'>
            <ReachOutButton href="mailto:justbenfyi@pm.me">Email</ReachOutButton>
          </FadeInSpin>
          <FadeInSpin timeout={3600} startDegrees='25'>
            <ShowMeButton onClick={() => navigate("/portfolio")}>Portfolio</ShowMeButton>
          </FadeInSpin>
        </CTAContainer>
      </Container>
    </FadeInComponent>
  )
}