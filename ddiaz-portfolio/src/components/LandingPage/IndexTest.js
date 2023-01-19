import React from "react";
import {
  ContainerBG,
  VideoBg,
  LandingContainer,
  AsideLeft,
  AsideRight,
  LandingH1,
  LandingText,
  ProfilePic,
} from "./LandingPage.styles";

import Pic from "../../images/DerekHS.jpeg";

import Video from "../../videos/backGroundVideo.mp4";

const LandingPage = () => {
  return (
    <LandingContainer>
      <ContainerBG>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </ContainerBG>
      <AsideLeft>
        <br></br>
        <LandingH1>FrontEnd Developer</LandingH1>
        <LandingText>This is the Left LandingContainer....... and the extra textjdjdjdjjdjdj djdj ddjdj d</LandingText>
      </AsideLeft>

      <AsideRight>
        {/* <LandingText>This is the Right LandingContainer</LandingText> */}
        <ProfilePic src={Pic} alt="HeadShotPicture" />
      </AsideRight>
    </LandingContainer>
  );
};

export default LandingPage;
