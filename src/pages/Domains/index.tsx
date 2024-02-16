import styled from "styled-components";
import { PrimaryLinkButton } from "../../components/Buttons/PrimaryLinkButton";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { domainData } from "./domainData";
import { SecondaryLinkButton } from "../../components/Buttons/SecondaryLinkButton";

const Grid = styled.div`
margin-left: auto;
margin-right: auto;
max-width: 1000px;
`

const LinkContainer = styled.div`
  display: inline-grid;
  margin: 16px;
`;

export const Domains = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Domains For Sale" size="h1" />
            </FadeInComponent>
            <Grid>
                {domainData.map((domain, index) => (
                    <FadeInComponent key={index} timeout={index * 400}>
                        <LinkContainer>
                            <PrimaryLinkButton rel="noopener noreferrer" target="_blank" href={domain.href}>{domain.name}</PrimaryLinkButton>
                        </LinkContainer>
                    </FadeInComponent>
                ))}
            </Grid>
            <FadeInComponent timeout={domainData.length * 400}>
                <LinkContainer>
                    <h2>Domain questions?</h2>
                    <SecondaryLinkButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>Email Me</SecondaryLinkButton>
                </LinkContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}