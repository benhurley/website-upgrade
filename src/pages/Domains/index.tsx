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
                <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href="https://sedo.com/search/?keyword=unchained.fyi&synonyms=false&safe_search=1&kws=right">unchained.fyi</PrimaryLinkButton>
            </LinkContainer>
            <LinkContainer>
                <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href="https://sedo.com/search/?keyword=voteforbezos.com&synonyms=false&safe_search=1&kws=right">voteforbezos.com</PrimaryLinkButton>
            </LinkContainer>
            <LinkContainer>
                <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href="https://sedo.com/search/?keyword=drinkingplaybook&synonyms=false&safe_search=1&kws=right">drinkingplaybook.com</PrimaryLinkButton>
            </LinkContainer>
        </FadeInComponent>
    );
}