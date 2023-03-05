import styled from 'styled-components';

type BadgeProps = {
    text: string,
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
font-size: 12px;
font-weight: bold;
padding: 3px 15px;
border-radius: 20px;
text-decoration: none;
margin-bottom: 5px;
`

const Circle = styled.div`
display: inline-block;
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${props => props.color};
margin-right: 10px;
text-decoration: none;
`

const Text = styled.span`
display: inline-block;
`

export const Badge = ({ text }: BadgeProps) => {
    const badgeColor = text.includes("Contributor") ? "#90ee90" : text === "Creator" ? "#add8e6" : "#ffdab9";
    return (
        <Container>
            <BadgeWrapper>
                <StyledBadge>
                    <Circle color={badgeColor} />
                    <Text>{text}</Text>
                </StyledBadge>
            </BadgeWrapper>
        </Container>
    )
}
