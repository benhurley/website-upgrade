import { Link } from "react-router-dom"
import styled from "styled-components"

export const SecondaryAnchorButton = styled.a`
text-transform: capitalize;
 padding: 8px 16px;
 margin: 0;
 position: relative;
 top: 0;
 left: 0;
 
 font-size: 100%;
 font-weight: 700;
 line-height: inherit;
 letter-spacing: inherit;
 white-space: nowrap;
 text-decoration: none;
 
 background-color: black;
 color: white;
 
 border: 1.5px solid white;
 border-radius: 0.5rem;
 
 box-shadow: 4px 4px #43464B;
 cursor: pointer;
 user-select: none;
`

export const SecondaryLinkButton = styled(Link)`
text-transform: capitalize;
 padding: 8px 16px;
 margin: 0;
 position: relative;
 top: 0;
 left: 0;
 
 font-size: 100%;
 font-weight: 700;
 line-height: inherit;
 letter-spacing: inherit;
 white-space: nowrap;
 text-decoration: none;
 
 background-color: black;
 color: white;
 
 border: 1.5px solid white;
 border-radius: 0.5rem;
 
 box-shadow: 4px 4px #43464B;
 cursor: pointer;
 user-select: none;
 transition: all 75ms cubic-bezier(0.4, 0, 0.2, 1);
   &:hover {
    transform: translate(2px, 2px);
  }
`
