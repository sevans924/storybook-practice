
import styled from "styled-components";
import { defaultTheme } from "../utils";
import { typeScale } from "../utils";


 const TextField = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: ${defaultTheme.textFieldBackground};
  border: none;
  border-radius: 0px;
  width: 500px;
  font-family: ${defaultTheme.textFieldFont};
  font-size: ${typeScale.header5};
  
`;

const PrimaryInput = styled(TextField)`
  color: ${defaultTheme.textFieldInput};

  &::placeholder {
    color: ${defaultTheme.textFieldInput};
    font-family: ${defaultTheme.textFieldFont};
  }
`

export const ErrorInput = styled(TextField)`
  color: ${defaultTheme.textFieldErrorInput};
`

export const Label = styled.p`
  color: ${defaultTheme.textFieldLabel};
  font-family: ${defaultTheme.textFieldFont};
  font-size: ${typeScale.header5};
`

export const ErrorLabel = styled.p`
  color: ${defaultTheme.textFieldErrorLabel};
  font-family: ${defaultTheme.textFieldFont};
  font-size: ${typeScale.header5};
`

export default PrimaryInput;