import { Link } from "react-router-dom"
import styled from "styled-components"

export const SecondaryAnchorButton = styled.a`
text-transform: uppercase;
text-decoration: none !important;
color: black;
background: white;
border-radius: 100px;
border: 1px solid #43464B;
padding: 20px 40px 20px 40px;
font-size: 14px;
font-family: 'Kdam Thmor Pro', sans-serif;
cursor: pointer;
box-shadow: 4px 4px #43464B;
&:hover {
    background: #e5e5e5;
}
`

export const SecondaryLinkButton = styled(Link)`
text-transform: uppercase;
text-decoration: none !important;
color: black;
background: white;
border-radius: 100px;
border: 1px solid #43464B;
padding: 20px 40px 20px 40px;
font-size: 14px;
font-family: 'Kdam Thmor Pro', sans-serif;
cursor: pointer;
box-shadow: 4px 4px #43464B;
&:hover {
    background: #e5e5e5;
}
`
