import styled from 'styled-components';
import { Badge, BadgeProps } from '../Badge';

const Container = styled.div`
width: 275px;
padding: 24px;
margin: auto;
background-color: black;
color: white;
height: auto;
border: 1px solid;
border-color: #43464B;
border-radius: 30px;
box-shadow: 8px 8px #43464B;
&:hover {
    transform: scale(1.02);
    transition: transform 0.5s ease;
}
`

const Image = styled.img`
border-radius: 10px;
width: 250px;
margin-top: 10px;
border: solid 1px;
border-color: #43464B;
`;

const Title = styled.h2`
margin-bottom: 10px;
font-family: 'Kdam Thmor Pro', sans-serif;
text-decoration: underline;
text-decoration-color: black;
`;

const Description = styled.p`
font-size: 16px;
padding-left: 23px;
padding-right: 23px;
line-height: 1.2;
font-family: 'Kdam Thmor Pro', sans-serif;
text-decoration: underline;
text-decoration-color: black;
`;

type cardProps = {
    href: string,
    imgUrl: string,
    imgAlt: string,
    title: string,
    description: string,
    badges: BadgeProps[],
}

export const Card = ({ href, imgUrl, imgAlt, title, description, badges }: cardProps) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href}>
            <Container data-testid="card">
                {badges.map((badge) => 
                    <Badge name={badge.name} />
                )}
                <Image src={imgUrl} alt={imgAlt} />
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Container>
        </a>);
}