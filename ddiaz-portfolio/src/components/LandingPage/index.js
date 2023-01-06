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
        <LandingH1>This is the Right LandingContainer</LandingH1>
      </AsideRight>
    </LandingContainer>
  );
};

export default LandingPage;
