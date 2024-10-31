import styled from "styled-components"
import { Link } from 'react-router-dom';

export const PrimaryAnchorButton = styled.a`
text-transform: uppercase;
text-decoration: none !important;
color: white;
border-radius: 100px;
padding: 20px 40px 20px 40px;
font-size: 14px;
cursor: pointer;
background: #000000;
border: 1px solid #43464B;
box-shadow: 4px 4px #43464B;
border-radius: 100px;
&:hover {
    background: #0c0d0c;
}
`

export const PrimaryLinkButton = styled(Link)`
text-transform: uppercase;
text-decoration: none !important;
color: white;
border-radius: 100px;
padding: 20px 40px 20px 40px;
font-size: 14px;
cursor: pointer;
background: #000000;
border: 1px solid #43464B;
box-shadow: 4px 4px #43464B;
border-radius: 100px;
&:hover {
    background: #0c0d0c;
}
`