import styled from "styled-components";
import { Card } from "../../components/Card";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { projectData } from "./projectData";
import { SecondaryLinkButton } from "../../components/Buttons/SecondaryLinkButton";

const Grid = styled.div`
    max-width: 1050px;
    margin: 20px auto 40px;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const LinkContainer = styled.div`
  display: inline-grid;
  margin: 16px;
`;

export const Websites = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Website Portfolio" size="h1" />
            </FadeInComponent>
            <Grid>
                {projectData.map((project, index) => (
                    <FadeInComponent key={index} timeout={index * 400}>
                        <Card
                            key={index}
                            item={project}
                        />
                    </FadeInComponent>
                ))}
            </Grid>
            <FadeInComponent timeout={projectData.length * 400}>
                <LinkContainer>
                    <h2>Website questions?</h2>
                    <SecondaryLinkButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>send me an email</SecondaryLinkButton>
                </LinkContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}