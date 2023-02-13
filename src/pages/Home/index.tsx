import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import styled, { keyframes } from 'styled-components';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';

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
    transform: scale(1.03);
}
`

const Description = styled.h3`
margin: 0px 0px 20px 0px;
max-width: 700px;
margin-left: auto;
margin-right: auto;
padding: 0px 20px 0px 20px;
`

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  80% { transform: rotate(0deg); }
  85% { transform: rotate(2deg); }
  95% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
`;

const WigglingHeading = styled.h1`
  animation: ${wiggle} 10s;
  &:hover {
    animation: none;
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const [headshotSrc, setHeadshotSrc] = useState(benHeadshot);

  return (
    <FadeInComponent>
      <Container>
        <h1>Hey, it's Ben <Wave>👋</Wave></h1>
        <WigglingHeading>
          <AvatarContainer>
            <Image alt="headshot of ben" src={headshotSrc} onClick={() => headshotSrc === benHeadshot ? setHeadshotSrc(monkeHeadshot) : setHeadshotSrc(benHeadshot)} />
          </AvatarContainer>
        </WigglingHeading>
        <Description>I design and build interfaces that are easy to use and match your brand.</Description>
        <PrimaryButton onClick={() => navigate("/portfolio")}>Show Me</PrimaryButton>
      </Container>
    </FadeInComponent>
  )
}