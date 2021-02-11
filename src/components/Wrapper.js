import styled from "styled-components";
import { invertedTheme } from "../utils";



const Wrapper = styled.div`
min-width: 500px;
min-height: 300px;
padding: 50px;
`

export const InvertedWrapper = styled.div`
   background-color: ${invertedTheme.primaryColor}; 
   min-width: 500px;
   min-height: 300px;
   padding: 50px;
`

export default Wrapper;