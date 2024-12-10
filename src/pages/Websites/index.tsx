import styled from "styled-components";
import { Card } from "../../components/Card";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { projectData } from "./projectData";
import { SecondaryAnchorButton } from "../../components/Buttons/SecondaryLinkButton";
import { workData } from "./workData";
import SocialClubLogo from "../../img/socialclub.webp";
import SouthwestLogo from "../../img/southwest.webp";

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

const LogoSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 2rem;
flex-wrap: wrap;
`

const Logo = styled.img`
margin: 0 1rem 1rem;
`

export const Websites = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Websites" size="h1" />
            </FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Public Showcase" size="h2" />
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
            <FadeInComponent timeout={500}>
                <SlideInText text="Confidential" size="h2" />
            </FadeInComponent>
            <LogoSection>
                <FadeInComponent timeout={500}>
                    <Logo alt="social club logo" src={SocialClubLogo} width={250} />
                </FadeInComponent>
                <FadeInComponent timeout={500}>
                    <Logo alt="southwest logo" src={SouthwestLogo} width={250} />
                </FadeInComponent>
            </LogoSection>
            <FadeInComponent timeout={750}>
                <SlideInText text="Side Projects" size="h2" />
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
                    <SecondaryAnchorButton rel="noopener noreferrer" target="_blank" href={'mailto:justbenfyi@pm.me'}>send me an email</SecondaryAnchorButton>
                </LinkContainer>
            </FadeInComponent>
        </FadeInComponent>
    );
}