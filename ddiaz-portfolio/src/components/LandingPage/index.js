import React from "react";
import {
  VideoBg,
  LandingContainer,
  AsideLeft,
  AsideRight,
  LandingH1,
  LandingText,
  ProfilePic,
  GridContainer,
  TextContainer,
} from "./LandingPage.styles";

import Pic from "../../images/DerekHS.jpeg";

import Video from "../../videos/backGroundVideo.mp4";

const LandingPage = () => {
  return (
    <LandingContainer>
      <GridContainer>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />

        <AsideLeft>
          <br></br>
          <TextContainer>
            <LandingH1>FrontEnd Developer</LandingH1>
            <LandingText>
              This is the Left LandingContainer....... and the extra
              textjdjdjdjjdjdj djdj ddjdj d
            </LandingText>
          </TextContainer>
        </AsideLeft>

        <AsideRight>
          {/* <LandingText>This is the Right LandingContainer</LandingText> */}
          <ProfilePic src={Pic} alt="HeadShotPicture" />
        </AsideRight>
      </GridContainer>
    </LandingContainer>
  );
};

export default LandingPage;
