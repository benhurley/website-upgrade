import styled from "styled-components";
import { PrimaryLinkButton } from "../../components/Buttons/PrimaryLinkButton";
import { FadeInComponent } from "../../helpers/FadeInComponent";

const LinkContainer = styled.div`
margin: 70px 0px 70px 0px;
`

export const Domains = () => {
    return (
        <FadeInComponent>
            <h1>Domains For Sale</h1>
            <LinkContainer>
                <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href="mailto:webdevbyben@gmail.com?subject=Domain%20Inquiry%20for%20unchained.fyi">unchained.fyi</PrimaryLinkButton>
            </LinkContainer>
            <LinkContainer>
                <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href="https://sedo.com/member/dnmanagement.php4?language=us">voteforbezos.com</PrimaryLinkButton>
            </LinkContainer>
            <LinkContainer>
                <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href="mailto:webdevbyben@gmail.com?subject=Domain%20Inquiry%20for%20drinkingplaybook.com">drinkingplaybook.com</PrimaryLinkButton>
            </LinkContainer>
        </FadeInComponent>
    );
}