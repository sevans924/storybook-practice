import styled from "styled-components";
import { invertedTheme } from "../utils";


const InvertedNav = styled.div`
width: 1200px;
height: 200px;
padding: 50px;
background-color: ${invertedTheme.navBackground}; 
border: 1px solid white;
`

export const InvertedLogoDiv = styled.div`
background-color: ${invertedTheme.navBackground}; 
width: 300px;
height: 150px;
padding: none;
float:left
`

export const InvertedButtonDiv = styled.div`
background-color: ${invertedTheme.navBackground}; 
text-align: center;
width: 600px;
height: 100px;
padding: none;
float:right;
`

export default InvertedNav;