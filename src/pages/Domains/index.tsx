import styled from "styled-components";
import { PrimaryLinkButton } from "../../components/Buttons/PrimaryLinkButton";
import { FadeInComponent } from "../../helpers/FadeInComponent";

const LinkContainer = styled.div`
margin: 70px 0px 70px 0px;
`

const domainData = [
    {
        name: "unchained.fyi",
        href: "https://sedo.com/search/?keyword=unchained.fyi&synonyms=false&safe_search=1&kws=right",
    },
    {
        name: "voteforbezos.com",
        href: "https://sedo.com/search/?keyword=voteforbezos.com&synonyms=false&safe_search=1&kws=right",
    },
    {
        name: "drinkingplaybook.com",
        href: "https://sedo.com/search/?keyword=drinkingplaybook.com&synonyms=false&safe_search=1&kws=right",
    },
]

export const Domains = () => {
    return (
        <FadeInComponent>
            <h1>Domains For Sale</h1>
            {domainData.map((domain, index) => (
                <FadeInComponent key={index} timeout={index * 400}>
                    <LinkContainer>
                        <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href={domain.href}>{domain.name}</PrimaryLinkButton>
                    </LinkContainer>
                </FadeInComponent>
            ))}
        </FadeInComponent>
    );
}