import React from "react";
import {
  // VideoBg,
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

// import Video from "../../videos/backGroundVideo.mp4";

const LandingPage = () => {
  return (
    <LandingContainer id = "home">
      <GridContainer>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <AsideLeft>
          <br></br>
          <TextContainer>
            <LandingH1>Let's Connect</LandingH1>
            <LandingText>
              This is the Left on how tho handle this text. The next few scentences will be what I have to say about myself
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
