import styled from "styled-components";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { SecondaryLinkButton } from "../../components/Buttons/SecondaryLinkButton";

const LinkContainer = styled.div`
margin: 70px 0px 70px 0px;
`

export const Contact = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Contact" size="h1" />
            </FadeInComponent>
                <FadeInComponent timeout={400}>
                    <LinkContainer>
                    <SecondaryLinkButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>send me an email</SecondaryLinkButton>
                    </LinkContainer>
                </FadeInComponent>
        </FadeInComponent>
    );
}