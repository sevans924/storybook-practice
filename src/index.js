import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  LargeButton,
  SmallButton, 
  TertiaryButton,
} from "./components/Buttons";
import InvertedPrimaryButton, {
  InvertedSecondaryButton,
  InvertedLargeButton,
  InvertedSmallButton,
  InvertedTertiaryButton,
} from "./components/InvertedButtons";
import Wrapper, { InvertedWrapper } from "./components/Wrapper";
import PrimaryLogo, { SecondaryLogo } from "./components/Logo";
import InvertedPrimaryLogo, { HeroLogo } from "./components/InvertedLogo";
import PrimaryInput, { ErrorInput, Label, ErrorLabel } from "./components/TextField";
import InvertedPrimaryInput, { InvertedErrorInput, InvertedLabel, InvertedErrorLabel } from "./components/InvertedTextField";
import Hero from "./components/Hero";
import Nav, {LogoDiv, ButtonDiv} from "./components/Nav";
import InvertedNav, {InvertedLogoDiv, InvertedButtonDiv} from "./components/InvertedNav";



const App = () => (
  
  <div>
    <Wrapper>
      <h1>Default Theme</h1>
      <h2>Header</h2>
      <Nav>
        <LogoDiv>
          <SecondaryLogo>UP/hill</SecondaryLogo>
        </LogoDiv>
        <ButtonDiv>
          <TertiaryButton>Shop</TertiaryButton>
          <TertiaryButton>Blog</TertiaryButton>
          <TertiaryButton>Location</TertiaryButton>
          <TertiaryButton>Contact Us</TertiaryButton>
        </ButtonDiv>
      </Nav>
      <h2>Hero</h2>
      <Hero>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
       <polygon fill="#CCB1B3" className="polygon1" points="0,100 0,100 45,0 0,0" stroke="white" stroke-width="0.25px"/>
       <text x="15" y="30" text-anchor="middle" fill="white" font-size="18" >UP</text>
      </svg>
      </Hero>
      <h2>Buttons</h2>
    <PrimaryButton>Submit</PrimaryButton>
    <SecondaryButton>Submit</SecondaryButton>
    <LargeButton>Submit</LargeButton>
    <SmallButton>Submit</SmallButton>
    <TertiaryButton>Submit</TertiaryButton>
    <br></br>
    <h2>Logo</h2>
    <PrimaryLogo>UP/hill</PrimaryLogo>
    <SecondaryLogo>UP/hill</SecondaryLogo>
    <br></br>
    <h2>Text Fields</h2>
    <Label>Label</Label>
    <PrimaryInput></PrimaryInput>
    <br></br>
    <Label>Label</Label>
    <PrimaryInput placeholder="Content"></PrimaryInput>
    <br></br>
    <ErrorLabel>Label</ErrorLabel>
    <ErrorInput placeholder="Content"></ErrorInput>
    <ErrorLabel>Input is invalid</ErrorLabel>
    <br></br>
    </Wrapper>
   
    <InvertedWrapper >
      <h1>Inverted Theme</h1>
      <h2>Header</h2>
      <InvertedNav>
        <InvertedLogoDiv>
          <InvertedPrimaryLogo>UP/hill</InvertedPrimaryLogo>
        </InvertedLogoDiv>
        <InvertedButtonDiv>
          <InvertedTertiaryButton>Shop</InvertedTertiaryButton>
          <InvertedTertiaryButton>Blog</InvertedTertiaryButton>
          <InvertedTertiaryButton>Location</InvertedTertiaryButton>
          <InvertedTertiaryButton>Contact Us</InvertedTertiaryButton>
        </InvertedButtonDiv>
      </InvertedNav>
    <h2>Buttons</h2>
    <InvertedPrimaryButton>Submit</InvertedPrimaryButton>
    <InvertedSecondaryButton>Submit</InvertedSecondaryButton>
    <InvertedLargeButton>Submit</InvertedLargeButton>
    <InvertedSmallButton>Submit</InvertedSmallButton>
    <InvertedTertiaryButton>Submit</InvertedTertiaryButton>
    <br></br>
    <h2>Logo</h2>
    <InvertedPrimaryLogo>UP/hill</InvertedPrimaryLogo>
    <h2>Text Fields</h2>
    <InvertedLabel>Label</InvertedLabel>
    <InvertedPrimaryInput></InvertedPrimaryInput>
    <br></br>
    <InvertedLabel>Label</InvertedLabel>
    <InvertedPrimaryInput placeholder="Content"></InvertedPrimaryInput>
    <br></br>
    <InvertedErrorLabel>Label</InvertedErrorLabel>
    <InvertedErrorInput placeholder="Content"></InvertedErrorInput>
    <InvertedErrorLabel>Input is invalid </InvertedErrorLabel>
    </InvertedWrapper>
    
  </div>

);

ReactDOM.render(<App />, document.querySelector("#root"));