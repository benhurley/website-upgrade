import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryLinkButton } from '../../components/Buttons/PrimaryLinkButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import ReactCardFlip from 'react-card-flip';
import { SlideInText } from '../../helpers/SlideInText';

const nftHeadshot = require("../../img/nft.png");
const benHeadshot = require("../../img/ben.png");

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

const CTAContainer = styled.div`
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
        <FadeInComponent timeout={750}>
          <SlideInText text="Hey, it&apos;s Ben" size="h1" />
        </FadeInComponent>
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
        <FadeInComponent timeout={1750}>
          <SlideInText text="I build and design websites" size="h3" delay={1000} />
        </FadeInComponent>
        <CTAContainer>
          <FadeInComponent timeout={3000}>
            <ReachOutButton href="mailto:justbenfyi@pm.me">Email</ReachOutButton>
          </FadeInComponent>
          <FadeInComponent timeout={3500}>
            <ShowMeButton onClick={() => navigate("/portfolio")}>Portfolio</ShowMeButton>
          </FadeInComponent>
        </CTAContainer>
      </Container>
    </FadeInComponent>
  )
}