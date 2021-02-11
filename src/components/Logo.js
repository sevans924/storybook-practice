import styled from "styled-components";
import { defaultTheme } from "../utils";
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
  font-family: ${defaultTheme.logoFont};
`;

 const PrimaryLogo = styled(Logo)`
  background-color: ${defaultTheme.primaryLogoBackground};
  border: 1px solid ${defaultTheme.primaryLogoBorder};
  color: ${defaultTheme.primaryLogoTextColor};
  
  &:hover {
  filter: ${dropShadow};
  text-shadow: ${dropShadow};
  }
`;

export const SecondaryLogo = styled(Logo)`
  background: ${defaultTheme.secondaryLogoBackground};  
  color: ${defaultTheme.secondaryLogoTextColor};
  border: 1px solid ${defaultTheme.secondaryLogoBorder};
  box-sizing: border-box;
  
  
  &:hover {
    filter: ${dropShadow};
    text-shadow: ${dropShadow};
    }

  `



export default PrimaryLogo;