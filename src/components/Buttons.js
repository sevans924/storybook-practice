import styled from "styled-components";
import { defaultTheme } from "../utils";
import { typeScale } from "../utils";

const dropShadow = 'drop-shadow(0px 10px 7px rgba(0, 0, 255, 0.25));'
const tertiaryDropShadow = 'drop-shadow(0px 10px 4px rgba(0, 0, 255, 0.25));'


const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 50px;
  min-width: 75px;
  cursor: pointer;
  font-family: ${defaultTheme.buttonFont};
`;


const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: ${defaultTheme.textColorOnPrimary};

  &:hover {
    background-color: ${defaultTheme.primaryHover};
    border: none;
    color: ${defaultTheme.textPrimaryHover};
    filter: ${dropShadow}
  }

  &:focus {
    background: ${defaultTheme.primaryFocus};
    border: 1px solid ${defaultTheme.focusBorder};
    box-sizing: border-box;
    border-radius: 50px;
    color: ${defaultTheme.textPrimaryFocus};
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${defaultTheme.secondaryColor};  
  color: ${defaultTheme.textColorOnSecondary};
  border: 1px solid ${defaultTheme.secondaryBorder};
  box-sizing: border-box;

  &:hover {
    background-color: ${defaultTheme.secondaryHover}
    color: ${defaultTheme.textSecondaryHover}
    border: 1px solid ${defaultTheme.hoverBorder};
    filter: ${dropShadow};
  }

  &:focus {
    background: ${defaultTheme.secondaryFocus};
    border: 1px solid ${defaultTheme.focusBorder};
    box-sizing: border-box;
    border-radius: 50px;
    color: ${defaultTheme.textSecondaryFocus};
  }
  `

  export const LargeButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: ${defaultTheme.textColorOnPrimary};
    font-size: ${typeScale.header3};
    height: 65px;
    width: 150px;

    &:hover {
      background-color: ${defaultTheme.primaryHover};
      border: none;
      color: ${defaultTheme.textPrimaryHover};
      filter: ${dropShadow}
    }
  
    &:focus {
      background: ${defaultTheme.primaryFocus};
      border: 1px solid ${defaultTheme.focusBorder};
      box-sizing: border-box;
      border-radius: 50px;
      color: ${defaultTheme.textPrimaryFocus};
    }
  `

  export const SmallButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: ${defaultTheme.textColorOnPrimary};
    font-size: ${typeScale.helperText};
    height: 30px;
    width: 75px;

    &:hover {
      background-color: ${defaultTheme.primaryHover};
      border: none;
      color: ${defaultTheme.textPrimaryHover};
      filter: ${dropShadow}
    }
  
    &:focus {
      background: ${defaultTheme.primaryFocus};
      border: 1px solid ${defaultTheme.focusBorder};
      box-sizing: border-box;
      border-radius: 50px;
      color: ${defaultTheme.textPrimaryFocus};
    }
  `

  export const TertiaryButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${defaultTheme.tertiaryColor};
  font-family: ${defaultTheme.buttonFont};
  font-size: ${typeScale.header5};

  &:hover {
    filter: ${tertiaryDropShadow}
  }

  &:focus {
    color: ${defaultTheme.tertiaryFocus};
  }
`;

  export const Wrapper = styled.div`
   min-width: 500px;
   min-height: 300px;
   padding: 50px;
`

  export default PrimaryButton;

