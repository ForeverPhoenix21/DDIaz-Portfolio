import React from "react";
import {
  LandingContainer,
  AsideLeft,
  AsideRight,
  LandingH1,
  LandingText,
} from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <LandingContainer>
      <AsideLeft>
        <LandingH1>FrontEnd Developer</LandingH1>
        <LandingText>This is the Left LandingContainer</LandingText>
      </AsideLeft>

    

      <AsideRight>
        <LandingText>This is the Right LandingContainer</LandingText>
      </AsideRight>
    </LandingContainer>
  );
};

export default LandingPage;
