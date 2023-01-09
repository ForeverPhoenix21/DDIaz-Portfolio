import React from "react";
import {
  LandingContainer,
  AsideLeft,
  AsideRight,
  LandingH1,
  LandingText,
  ProfilePic
} from "./LandingPage.styles";

import Pic from '../../images/pic.jpeg'


const LandingPage = () => {
  return (
    <LandingContainer>
      <AsideLeft>
        <LandingH1>FrontEnd Developer</LandingH1>
        <LandingText>This is the Left LandingContainer</LandingText>
      </AsideLeft>

      <AsideRight>
        {/* <LandingText>This is the Right LandingContainer</LandingText> */}
        <ProfilePic src={Pic} alt="HeadShotPicture" />
      </AsideRight>
    </LandingContainer>
  );
};

export default LandingPage;
