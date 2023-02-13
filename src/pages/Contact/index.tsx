import styled from "styled-components";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { PrimaryLinkButton } from "../../components/Buttons/PrimaryLinkButton";

const Title = styled.h1`
margin-bottom: 50px;
`
export const Contact = () => {
    return (
        <FadeInComponent>
            <Title>Contact</Title>
            <PrimaryLinkButton href="mailto:webdevbyben@gmail.com">Email Me</PrimaryLinkButton>
        </FadeInComponent>
    );
}