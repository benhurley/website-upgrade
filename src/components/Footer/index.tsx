import styled from "styled-components"
import { FadeInComponent } from "../../helpers/FadeInComponent"

const Container = styled.div`
width: 100%;
position: fixed;
background: black;
bottom: 0px;
font-size: 10px
`

export const Footer = () => {
    return (
        <FadeInComponent>
            <Container>
                <p>2025, Created with ♥ by Ben.</p>
            </Container>
        </FadeInComponent>
    )
}