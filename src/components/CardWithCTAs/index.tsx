import styled from 'styled-components';
import { frameworkMap } from '../../helpers/frameworkMap';
import { PrimaryAnchorButton } from '../Buttons/PrimaryLinkButton';
import { SecondaryAnchorButton } from '../Buttons/SecondaryLinkButton';

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
text-decoration: underline;
text-decoration-color: black;
color: white;
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
`

const Role = styled.p`
display: inline-block;
padding: 0 0.5rem;
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

const CTAWrapper = styled.div`
display: block;
margin: 2rem 0;
`

const CTAContainer = styled.div`
margin-top: 40px;
margin-bottom: -10px;
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
        subdomain?: string,
    },
    imageShape?: 'square' | 'rectangle' | 'round'
    primaryCTAData?: {
        buttonText: string,
        url?: string,
    },
    secondaryCTAData?: {
        buttonText: string,
        url?: string,
    },
}

export const CardWithCTAs = ({ item, imageShape = 'rectangle', primaryCTAData, secondaryCTAData }: cardProps) => {
    const { imgUrl, imgAlt, title, description, role, framework } = item;
    return (
        <Container data-testid="card">
            {role && framework && <RoleContainer>
                <a href={frameworkMap[framework].url} target="_blank" rel="noopener noreferrer">
                    <Framework title={framework} src={frameworkMap[framework].imgUrl} alt={framework} />
                </a>
                <Role>{role}</Role>
            </RoleContainer>}
                {imageShape === 'square' && <ImageSquare src={imgUrl} alt={imgAlt} />}
                {imageShape === 'rectangle' && <ImageRectangle src={imgUrl} alt={imgAlt} />}
                {imageShape === 'round' && <ImageRound src={imgUrl} alt={imgAlt} />}
                <Title>{title}</Title>
                <Description>{description}</Description>
                <CTAContainer>
                    {primaryCTAData?.url &&
                        <CTAWrapper>
                            <PrimaryAnchorButton target="_blank" rel="noopener noreferrer" href={primaryCTAData.url} >{primaryCTAData?.buttonText}</PrimaryAnchorButton>
                        </CTAWrapper>}
                    {secondaryCTAData?.url &&
                        <CTAWrapper>
                            <SecondaryAnchorButton target="_blank" rel="noopener noreferrer" href={secondaryCTAData?.url}>{secondaryCTAData?.buttonText}</SecondaryAnchorButton>
                        </CTAWrapper>}
                </CTAContainer>
        </Container>
    );
}