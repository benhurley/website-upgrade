import styled from "styled-components";
import { PrimaryLinkButton } from "../../components/Buttons/PrimaryLinkButton";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { SecondaryLinkButton } from "../../components/Buttons/SecondaryLinkButton";

const Container = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 64px;
max-width: 525px;
padding: 0px 20px;
`

const Description = styled.p`
display: flex;
justify-content: left;
margin-bottom: 24px;
font-size: 18px;
text-wrap: balance;
`;

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

const Subtitle = styled.h2`
margin-top: 64px;
`

export const About = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="About Me" size="h1" />
                <Container>
                    <Description>
                       2017 - First job at an ad giant, learned about the cloud (AWS).
                    </Description>
                    <Description>
                        2019 - Went into consulting to focus on building in AWS.
                    </Description>
                    <Description>
                        2019 - Consulting made me go frontend (kicking and screaming).
                    </Description>
                    <Description>
                        2020 - Ended up really enjoying frontend, joined a DTC startup.
                    </Description>
                    <Description>
                        2023 - Rebuilt most of their web app over 3 years.
                    </Description>
                    <Description>
                        2024 - Frontend specialist at large, tackling the gaming industry.
                    </Description>
                </Container>
            </FadeInComponent>
            <FadeInComponent>
            <Subtitle>Want to see my work?</Subtitle>
                <CTAContainer>
                    <WebsitesButton href="/websites">Websites</WebsitesButton>
                    <ChatbotsButton href="/chatbots">Chatbots</ChatbotsButton>
                </CTAContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}