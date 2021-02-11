import styled from "styled-components";
import { invertedTheme } from "../utils";
import { typeScale } from "../utils";

const dropShadow = 'drop-shadow(0px 10px 4px rgba(0, 0, 255, 0.25))';


const Logo = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.logo};
  border-radius: 0px;
  width: 225px;
  height: 100px;
  left: 168px;
  top: 180px;
  cursor: pointer;
  font-family: ${invertedTheme.logoFont};
`;


 const InvertedPrimaryLogo = styled(Logo)`
  background-color: ${invertedTheme.primaryLogoBackground};
  border: 1px solid ${invertedTheme.primaryLogoBorder};
  color: ${invertedTheme.primaryLogoTextColor};

  &:hover {
    filter: ${dropShadow};
    text-shadow: ${dropShadow};
    }
`;

export const HeroLogo = styled(Logo)`
width: 100px;
background-color: ${invertedTheme.primaryLogoBackground};
border: none;
color: ${invertedTheme.primaryLogoTextColor};

&:hover {
  filter: ${dropShadow};
  text-shadow: ${dropShadow};
  }
`


export default InvertedPrimaryLogo;