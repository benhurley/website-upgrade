import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

export type BadgeProps = {
    name: string,
    color: string,
}
const Container = styled.div`
display: table-cell;
padding-left: 12px;
`

const BadgeWrapper = styled.div`
display: inline-flex;
align-items: center;
`

const StyledBadge = styled.div`
background-color: #43464B;
color: white;
font-size: 10px;
font-weight: bold;
padding: 3px 10px;
border-radius: 20px;
text-decoration: none;
margin-bottom: 5px;
`

const Circle = styled.div`
display: inline-block;
width: 8px;
height: 8px;
border-radius: 50%;
background-color: ${props => props.color};
margin-right: 5px;
text-decoration: none;
`

const Text = styled.span`
display: inline-block;
`

export const Badge = ({ name, color }: BadgeProps) => {
    const description = name === ("Founding Dev") ? "I built this site from scratch." : name === "Design" ? "I designed parts of this site." : name === "Dev" ? "I added functionality to this site." : null;
    return (
        <Container>
            <BadgeWrapper>
            <Tooltip title={description} placement="top" arrow>
                <StyledBadge>
                    <Circle color={color} />
                    <Text>{name}</Text>
                </StyledBadge>
            </Tooltip>
            </BadgeWrapper>
        </Container>
    )
}
