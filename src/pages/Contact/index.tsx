import styled from "styled-components";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { SecondaryLinkButton } from "../../components/Buttons/SecondaryLinkButton";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

import artHeadshot from "../../img/me.webp";
import artHeadshotReversed from "../../img/me-reversed.webp";

const LinkContainer = styled.div`
margin: 50px 0px 70px 0px;
`

const Image = styled.img`
border-radius: 100%;
height: 150px;
width: 150px;
cursor: pointer;
border: 2px solid;
border-color: white;
`

export const Contact = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Contact" size="h1" />
            </FadeInComponent>
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
            <FadeInComponent timeout={400}>
                <LinkContainer>
                    <SecondaryLinkButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>send me an email</SecondaryLinkButton>
                </LinkContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}