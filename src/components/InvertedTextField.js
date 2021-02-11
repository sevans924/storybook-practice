
import styled from "styled-components";
import { invertedTheme } from "../utils";
import { typeScale } from "../utils";


const InvertedTextField = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: ${invertedTheme.textFieldBackground};
  border: none;
  border-radius: 0px;
  width: 500px;
  font-family: ${invertedTheme.textFieldFont};
  font-size: ${typeScale.header5};
  
`;

const InvertedPrimaryInput = styled(InvertedTextField)`
  color: ${invertedTheme.textFieldInput};

  &::placeholder {
    color: ${invertedTheme.textFieldInput};
    font-family: ${invertedTheme.textFieldFont};
  }
`

export const InvertedErrorInput = styled(InvertedTextField)`
  color: ${invertedTheme.textFieldErrorInput};
`

export const InvertedLabel = styled.p`
  color: ${invertedTheme.textFieldLabel};
  font-family: ${invertedTheme.textFieldFont};
  font-size: ${typeScale.header5};
`

export const InvertedErrorLabel = styled.p`
  color: ${invertedTheme.textFieldErrorLabel};
  font-family: ${invertedTheme.textFieldFont};
  font-size: ${typeScale.header5};
`

export default InvertedPrimaryInput;