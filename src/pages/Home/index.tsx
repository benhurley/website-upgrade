import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import styled, { keyframes } from 'styled-components';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { SecondaryLinkButton } from '../../components/Buttons/SecondaryLinkButton';

const benHeadshot = require("../../img/ben.png");
const monkeHeadshot = require("../../img/smb.png");

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
  animation-delay: 3s;
  animation-name: ${waveAnimation};
  animation-duration: 2.5s;
  transform-origin: 70% 70%;
  display: inline-block;
  padding-left: 5px;
`;

const Container = styled.div`
overflowX: hidden;
`

const AvatarContainer = styled.div`
margin-bottom: 20px;
`

const Image = styled.img`
border-radius: 100%;
height: 200px;
cursor: pointer;
border: 2px solid;
border-color: white;
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

export const Home = () => {
  const navigate = useNavigate();
  const [headshotSrc, setHeadshotSrc] = useState(benHeadshot);

  return (
    <FadeInComponent timeout={500}>
      <Container>
        <h1>Hey, it's Ben <Wave>👋</Wave></h1>
        <AvatarContainer>
          <Image alt="headshot of ben" src={headshotSrc} onClick={() => headshotSrc === benHeadshot ? setHeadshotSrc(monkeHeadshot) : setHeadshotSrc(benHeadshot)} />
        </AvatarContainer>
        <Description>I create interfaces that closely match your design system.</Description>
        <CTAContainer>
          <ShowMeButton onClick={() => navigate("/portfolio")}>Show Me</ShowMeButton>
          <ReachOutButton href="mailto:webdevbyben@gmail.com">Reach Out</ReachOutButton>
        </CTAContainer>
      </Container>
    </FadeInComponent>
  )
}