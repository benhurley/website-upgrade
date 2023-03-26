import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryLinkButton } from '../../components/Buttons/PrimaryLinkButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import ReactCardFlip from 'react-card-flip';

const nftHeadshot = require("../../img/nft.png");
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
height: 200px;
width: 200px;
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
padding-left: 55px;
padding-right: 55px;
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
    }, 1500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(false)
    }, 3300)
  }, [])

  return (
    <FadeInComponent>
      <Container>
        <h1>Hey, it's Ben <Hand src={hand} alt="waiving hand" /></h1>
        <FadeInComponent>
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
        </FadeInComponent>
        <Description>I build and design websites.</Description>
        <CTAContainer>
          <ReachOutButton href="mailto:justbenfyi@pm.me">Email</ReachOutButton>
          <ShowMeButton onClick={() => navigate("/portfolio")}>Portfolio</ShowMeButton>
        </CTAContainer>
      </Container>
    </FadeInComponent>
  )
}