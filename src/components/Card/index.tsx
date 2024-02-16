import styled from 'styled-components';
import { frameworkMap } from '../../helpers/frameworkMap';

const Container = styled.div`
width: 275px;
min-height: 300px;
padding: 28px;
margin: auto;
background-color: black;
color: white;
height: auto;
border: 1px solid;
border-color: #43464B;
border-radius: 30px;
box-shadow: 8px 8px #43464B;
&:hover {
    background: #0c0d0c;
}
`

const ImageRectangle = styled.img`
border-radius: 10px;
width: 275px;
height: 125px;
`;

const ImageSquare = styled.img`
border-radius: 10px;
width: 250px;
height: 250px;
`;

const ImageRound = styled.img`
border-radius: 50%;
width: 175px;
height: 175px;
`;

const Title = styled.h2`
margin-top: 10px;
margin-bottom: 10px;
font-family: 'Kdam Thmor Pro', sans-serif;
text-decoration: underline;
text-decoration-color: black;
color: white;
`;

const Description = styled.p`
font-size: 16px;
line-height: 1.2;
font-family: 'Kdam Thmor Pro', sans-serif;
text-decoration: underline;
text-decoration-color: black;
color: white;
`;

const RoleContainer = styled.div`
display: table;
align-items: center;
margin-top: -22px;
margin-bottom: 4px;
`

const Role = styled.p`
display: inline-block;
padding: 1px 12px;
border-radius: 50px;
width: fit-content;
text-decoration-color: #F5F5F5;
background-color: #F5F5F5;
color: black;
font-size: 11px;
box-shadow: 2px 2px #43464B;
`;

const Framework = styled.img`
display: inline-block;
vertical-align: middle;
width: 22px;
margin-right: 8px;
`

type cardProps = {
    item: {
        url: string,
        imgUrl: string,
        imgAlt: string,
        title: string,
        description: string,
        role?: string,
        framework?: string,
    },
    imageShape?: 'square' | 'rectangle' | 'round'
}

export const Card = ({ item, imageShape = 'rectangle' }: cardProps) => {
    const { url, imgUrl, imgAlt, title, description, role, framework } = item;
    return (
        <Container data-testid="card">
            {role && framework && <RoleContainer>
                <a href={frameworkMap[framework].url} target="_blank" rel="noopener noreferrer">
                    <Framework src={frameworkMap[framework].imgUrl} alt={framework} />
                </a>
                <Role>{role}</Role>
            </RoleContainer>}
            <a target="_blank" rel="noopener noreferrer" href={url}>
                {imageShape === 'square' && <ImageSquare src={imgUrl} alt={imgAlt} />}
                {imageShape === 'rectangle' && <ImageRectangle src={imgUrl} alt={imgAlt} />}
                {imageShape === 'round' && <ImageRound src={imgUrl} alt={imgAlt} />}
                <Title>{title}</Title>
                <Description>{description}</Description>
            </a>
        </Container>
    );
}