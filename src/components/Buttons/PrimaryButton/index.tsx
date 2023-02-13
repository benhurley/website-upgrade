import styled from "styled-components"

export const PrimaryButton = styled.button`
text-transform: uppercase;
background: white;
color: black;
border-radius: 100px;
border: none;
padding: 20px 40px 20px 40px;
font-size: 14px;
font-family: 'Kdam Thmor Pro', sans-serif;
cursor: pointer;
box-shadow: 5px 5px gray;
&:hover {
    transform: scale(1.03);
    transition: transform 0.5s ease;
}
`
