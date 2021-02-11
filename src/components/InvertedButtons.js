import styled from "styled-components";
import { invertedTheme } from "../utils";
import { typeScale } from "../utils";

const dropShadow = 'drop-shadow(0px 10px 7px rgba(0, 0, 255, 0.25));'

 const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 50px;
  min-width: 75px;
  cursor: pointer;
  font-family: ${invertedTheme.buttonFont};
`;


 const InvertedPrimaryButton = styled(Button)`
  background-color: ${invertedTheme.primaryColor};
  border: 1px solid ${invertedTheme.primaryBorder};
  color: ${invertedTheme.textColorOnPrimary};

  &:hover {
    background-color: ${invertedTheme.primaryHover};
    border: none;
    color: ${invertedTheme.textPrimaryHover};
    filter: ${dropShadow}
  }

  &:focus {
    background: ${invertedTheme.primaryFocus};
    border: 1px solid ${invertedTheme.focusBorder};
    box-sizing: border-box;
    border-radius: 50px;
    color: ${invertedTheme.textPrimaryFocus};
  }
`;

export const InvertedSecondaryButton = styled(Button)`
  background: ${invertedTheme.secondaryColor};  
  border: 1px solid ${invertedTheme.secondaryBorder};
  color: ${invertedTheme.textColorOnSecondary};
  box-sizing: border-box;

  &:hover {
    background-color: ${invertedTheme.secondaryHover}
    color: ${invertedTheme.textSecondaryHover}
    border: 1px solid ${invertedTheme.focusBorder};
    filter: ${dropShadow};
  }

  &:focus {
    background: ${invertedTheme.secondaryFocus};
    border: 1px solid ${invertedTheme.focusBorder};
    box-sizing: border-box;
    border-radius: 50px;
    color: ${invertedTheme.textSecondaryFocus};
  }
  `

  export const InvertedLargeButton = styled(Button)`
    background-color: ${invertedTheme.primaryColor};
    border: 1px solid ${invertedTheme.primaryBorder};
    color: ${invertedTheme.textColorOnPrimary};
    font-size: ${typeScale.header3};
    height: 65px;
    width: 150px;

    &:hover {
      background-color: ${invertedTheme.primaryHover};
      border: none;
      color: ${invertedTheme.textPrimaryHover};
      filter: ${dropShadow}
    }
  
    &:focus {
      background: ${invertedTheme.primaryFocus};
      border: 1px solid ${invertedTheme.focusBorder};
      box-sizing: border-box;
      border-radius: 50px;
      color: ${invertedTheme.textPrimaryFocus};
    }
  `

  export const InvertedSmallButton = styled(Button)`
    background-color: ${invertedTheme.primaryColor};
    border: 1px solid ${invertedTheme.primaryBorder};
    color: ${invertedTheme.textColorOnPrimary};
    font-size: ${typeScale.helperText};
    height: 30px;
    width: 75px;
    align-items: center;
    text-align: center;

    &:hover {
      background-color: ${invertedTheme.primaryHover};
      border: none;
      color: ${invertedTheme.textPrimaryHover};
      filter: ${dropShadow}
    }
  
    &:focus {
      background: ${invertedTheme.primaryFocus};
      border: 1px solid ${invertedTheme.focusBorder};
      box-sizing: border-box;
      border-radius: 50px;
      color: ${invertedTheme.textPrimaryFocus};
    }
  `

  export const InvertedTertiaryButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${invertedTheme.tertiaryColor};
  border: none;
  background-color: transparent;
  font-family: ${invertedTheme.buttonFont};
  font-size: ${typeScale.header5};


  &:hover {
    filter: ${dropShadow}
  }

  &:focus {
    color: ${invertedTheme.tertiaryFocus};
  }
`;


export default InvertedPrimaryButton;
