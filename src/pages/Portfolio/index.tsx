import styled from "styled-components";
import { Card } from "../../components/Card";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { projectData } from "./projectData";

const Grid = styled.div`
    max-width: 1050px;
    margin: 20px auto 40px;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Portfolio = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Dev Portfolio" size="h1" />
            </FadeInComponent>
            <Grid>
                {projectData.map((project, index) => (
                    <FadeInComponent key={index} timeout={index * 400}>
                        <Card
                            key={index}
                            href={project.url}
                            imgAlt={project.imgAlt}
                            imgUrl={project.imgUrl}
                            title={project.title}
                            description={project.description}
                            skills={project.skills}
                        />
                    </FadeInComponent>
                ))}
            </Grid>
        </FadeInComponent>
    );
}