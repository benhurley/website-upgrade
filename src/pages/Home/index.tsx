import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryLinkButton } from '../../components/Buttons/PrimaryLinkButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import ReactCardFlip from 'react-card-flip';

const monkeHeadshot = require("../../img/smb.png");
const benHeadshot = require("../../img/ben.png");
const hand = require("../../img/hand.png");

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
border: 2px solid;
border-color: white;
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

const ShowMeButton = styled(SecondaryButton)`
margin-left: 10px;
`

const ReachOutButton = styled(PrimaryLinkButton)`
margin-right: 10px;
`

const Hand = styled.img`
height: 35px;
padding-left: 5px;
`

export const Home = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(true)
    }, 2000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(false)
    }, 3500)
  }, [])

  return (
    <FadeInComponent>
      <Container>
        <h1>Hey, it's Ben <Hand src={hand} alt="waiving hand" /></h1>
        <FadeInComponent>
          <AvatarContainer>
            <ReactCardFlip
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
                alt={"ben's solana monke business nft"}
                src={monkeHeadshot} onClick={() => setIsFlipped(!isFlipped)}
              />
            </ReactCardFlip>
          </AvatarContainer>
        </FadeInComponent>
        <Description>I create bespoke brand experiences, down to the smallest detail.</Description>
        <CTAContainer>
          <ReachOutButton href="mailto:webdevbyben@gmail.com">Contact Me</ReachOutButton>
          <ShowMeButton onClick={() => navigate("/portfolio")}>Portfolio</ShowMeButton>
        </CTAContainer>
      </Container>
    </FadeInComponent>
  )
}