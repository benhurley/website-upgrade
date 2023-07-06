import styled from 'styled-components';

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
    transform: scale(1.02);
    transition: transform 0.5s ease;
}
`

const Image = styled.img`
border-radius: 10px;
width: 275px;
height: 125px;
`;

const Title = styled.h2`
margin-top: 10px;
margin-bottom: 10px;
font-family: 'Kdam Thmor Pro', sans-serif;
text-decoration: underline;
text-decoration-color: black;
`;

const Description = styled.p`
font-size: 16px;
line-height: 1.2;
font-family: 'Kdam Thmor Pro', sans-serif;
text-decoration: underline;
text-decoration-color: black;
`;

const Role = styled.p`
padding: 1px 10px;
border-radius: 50px;
width: fit-content;
text-decoration: underline;
text-decoration-color: #43464B;
background-color: #43464B;
color: white;
font-size: 12px;
margin-top: -10px;
`;

type cardProps = {
    href: string,
    imgUrl: string,
    imgAlt: string,
    title: string,
    description: string,
    role: string,
}

export const Card = ({ href, imgUrl, imgAlt, title, description, role }: cardProps) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href}>
            <Container data-testid="card">
                <Role>{role}</Role>
                <Image src={imgUrl} alt={imgAlt} />
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Container>
        </a>);
}