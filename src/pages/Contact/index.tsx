import styled from "styled-components";
import { PrimaryLinkButton } from "../../components/Buttons/PrimaryLinkButton";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";

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
                    <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>Send me an email</PrimaryLinkButton>
                    </LinkContainer>
                </FadeInComponent>
        </FadeInComponent>
    );
}