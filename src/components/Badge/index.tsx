import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

export type BadgeProps = {
    name: string,
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

const Text = styled.span`
display: inline-block;
`

export const Badge = ({ name }: BadgeProps) => {
    const description = name === ("Lead Dev") ? "I lead development of major features" : name === "Design" ? "I designed portions of this site." : name === "Creator" ? "I built this site from scratch." : name === "Dev" ? "I added features to this site." : null;
    return (
        <Container>
            <BadgeWrapper>
            <Tooltip title={description} placement="top" arrow>
                <StyledBadge>
                    <Text>{name}</Text>
                </StyledBadge>
            </Tooltip>
            </BadgeWrapper>
        </Container>
    )
}
