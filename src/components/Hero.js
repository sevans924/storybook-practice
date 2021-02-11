import styled from "styled-components";
import { defaultTheme } from "../utils";
import { typeScale } from "../utils";


 const Hero = styled.section`
display: flex;
justify-content: center;
align-items: left;
flex-direction: column;
padding 0px;
width: 100%;
height: 75vh; 
overflow: hidden;
background-size: cover !important;
background: url(hero-pic.jpg) no-repeat center center scroll;
font-family: ${defaultTheme.heroLogoFont};
font-size: ${typeScale.hero};
color: ${defaultTheme.heroTextColor};
border: 1px solid ${defaultTheme.heroBorderColor};
`
;

export default Hero;