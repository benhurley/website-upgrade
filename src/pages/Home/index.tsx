import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { SecondaryLinkButton } from '../../components/Buttons/SecondaryLinkButton';
import { FadeInComponent } from '../../helpers/FadeInComponent';

const monkeHeadshot = require("../../img/smb.png");
const benHeadshot = require("../../img/ben.png");
const hand = require("../../img/hand.png");

const waveAnimation = keyframes`
  0% { transform: rotate( 0.0deg) }
 10% { transform: rotate(14.0deg) scale(1.3); }  /* The following five values can be played with to make the waving more or less extreme */
 20% { transform: rotate(-8.0deg) scale(1.3); }
 30% { transform: rotate(14.0deg) scale(1.3); }
 40% { transform: rotate(-4.0deg) scale(1.3); }
 50% { transform: rotate(10.0deg) scale(1.3); }
 60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
100% { transform: rotate( 0.0deg) }
`;

const Wave = styled.div`
  animation-delay: 1s;
  animation-name: ${waveAnimation};
  animation-duration: 2.5s;
  transform-origin: 70% 70%;
  display: inline-block;
`;

const Container = styled.div`
overflowX: hidden;
`

const AvatarContainer = styled.div`
margin-bottom: 20px;
`

const Image = styled.img`
border-radius: 100%;
height: 175px;
width: 175px;
cursor: pointer;
&:hover {
  transform: scale(1.02);
  transition: transform 0.5s ease;
}
`

const Description = styled.h3`
max-width: 700px;
margin-left: auto;
margin-right: auto;
padding: 10px 10px 20px 10px;
`

const CTAContainer = styled.div`
display: inline-block;
`

const ShowMeButton = styled(PrimaryButton)`
margin-right: 10px;
`

const ReachOutButton = styled(SecondaryLinkButton)`
margin-left: 10px;
`

const Hand = styled.img`
height: 35px;
padding-left: 5px;
`

export const Home = () => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(benHeadshot);

  return (
    <FadeInComponent>
      <Container>
        <h1>Hey, it's Ben <Wave><Hand src={hand} alt="waiving hand" /></Wave></h1>
        <AvatarContainer>
          <Image 
            alt={imgSrc === benHeadshot ? "headshot of ben" : "ben's solana monke business nft"} 
            src={imgSrc} onClick={() => imgSrc === benHeadshot ? setImgSrc(monkeHeadshot) : setImgSrc(benHeadshot)} 
          />
        </AvatarContainer>
        <Description>I create bespoke brand experiences, down to the smallest detail.</Description>
        <CTAContainer>
          <ShowMeButton onClick={() => navigate("/portfolio")}>Portfolio</ShowMeButton>
          <ReachOutButton href="mailto:webdevbyben@gmail.com">Contact Me</ReachOutButton>
        </CTAContainer>
      </Container>
    </FadeInComponent>
  )
}