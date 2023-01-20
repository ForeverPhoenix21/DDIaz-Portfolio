import React from "react";
import {
  AboutMeContainer,
  AboutMeText,
  GridContainer,
  H2Text,
  TextContainer,
} from "./AboutMe.styles";

const AboutMe = () => {
  return (
    <AboutMeContainer id="about">
      <GridContainer>
        <TextContainer>
          <H2Text>
            I Create tailored websites for small businesses and start-ups to
            help them reach bigger audiences
          </H2Text>
          <H2Text></H2Text>
          <AboutMeText>
            Did you hear that? They've shut down the main reactor. We'll be
            destroyed for sure. This is madness! We're doomed! There'll be no
            escape for the Princess this time. What's that? Artoo! Artoo-Detoo,
            where are you? At last! Where have you been?They're heading in this
            direction. Just Luke. And I am See-Threepio, human-cyborg relations,
            and this is my counterpart, Artoo-Detoo. Hello. You got a lot of
            carbon scoring here.
          </AboutMeText>
        </TextContainer>
      </GridContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
