import styled from "styled-components";
import { Card } from "../../components/Card";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { projectData } from "./projectData";
import { SecondaryAnchorButton } from "../../components/Buttons/SecondaryLinkButton";
import { workData } from "./workData";

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
                <SlideInText text="Websites" size="h1" />
            </FadeInComponent>
            <FadeInComponent timeout={250}>
                <h2>Featured</h2>
            </FadeInComponent>
            <Grid>
                {workData.map((project, index) => (
                    <FadeInComponent key={index} timeout={index * 400}>
                        <Card
                            key={index}
                            item={project}
                        />
                    </FadeInComponent>
                ))}
            </Grid>
            <br />
            <FadeInComponent timeout={workData.length * 400}>
                <h2>My Projects</h2>
            </FadeInComponent>
            <Grid>
                {projectData.map((project, index) => (
                    <FadeInComponent key={index} timeout={(workData.length * 400) + (index * 400)}>
                        <Card
                            key={index}
                            item={project}
                        />
                    </FadeInComponent>
                ))}
            </Grid>
            <FadeInComponent timeout={((workData.length * 400) + (projectData.length * 400))}>
                <LinkContainer>
                    <h2>Website questions?</h2>
                    <SecondaryAnchorButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>send me an email</SecondaryAnchorButton>
                </LinkContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}