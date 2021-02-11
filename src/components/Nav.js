import styled from "styled-components";
import { defaultTheme } from "../utils";


const Nav = styled.div`
width: 1200px;
height: 200px;
padding: 50px;
border: 1px solid black;
`

export const LogoDiv = styled.div`
background-color: ${defaultTheme.navBackground}; 
width: 300px;
height: 150px;
padding: none;
float:left;
`

export const ButtonDiv = styled.div`
background-color: ${defaultTheme.navBackground}; 
text-align: center;
width: 600px;
height: 100px;
padding: none;
float:right;
`



export default Nav;