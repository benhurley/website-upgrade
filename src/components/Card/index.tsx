import styled from 'styled-components';
import { frameworkMap } from '../../helpers/frameworkMap';

const Container = styled.div`
  width: 275px;
  min-height: 300px;
  padding: 28px;
  margin: auto;
  position: relative;
  top: 0;
  left: 0;

  background-color: black;
  color: white;
  
 border: 1.5px solid white;
  border-radius: 1rem;
  
 box-shadow: 8px 8px #43464B;
  transition: all 75ms cubic-bezier(0.4, 0, 0.2, 1);
   cursor: pointer;

  &:hover {
    transform: translate(2px, 2px);
  }

  &:active {
    transform: translate(3px, 3px);
  }
`;

const ImageRectangle = styled.img`
  border-radius: 0.375rem;
  width: 275px;
  height: 125px;
`;

const ImageSquare = styled.img`
  border-radius: 0.375rem;
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
  text-decoration: underline;
  text-decoration-color: black;
  color: white;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.2;
text-decoration: underline;
  text-decoration-color: black;
  color: white;
`;

const RoleContainer = styled.div`
  display: table;
  align-items: center;
  margin-top: -22px;
  margin-bottom: 4px;
`;

const Role = styled.p`
  display: inline-block;
  padding: 0 0.5rem;
  border-radius: 0.375rem;
  width: fit-content;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 4px 4px #43464B;
`;

const Framework = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  margin-right: 1rem;
`;

// Rest of the component remains the same

type cardProps = {
    item: {
        url: string,
        imgUrl: string,
        imgAlt: string,
        title: string,
        description: string,
        role?: string,
        framework?: string,
        subdomain?: string,
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