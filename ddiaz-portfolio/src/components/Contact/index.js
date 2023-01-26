import React from "react";
import {
  ContactContainer,
  GridContainer,
  H1Text,
  PText,
  BGImage,
} from "./Contact.styles";

import WavePic from "../../images/DigitalWave.png"

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <BGImage src={WavePic} alt="3d rendering of nodes "/>
      <GridContainer>
        <H1Text>This is the Landing Page</H1Text>
        <PText>
          Let's Connect! Please connect with me through Email or one of the
          social channels below. Cheers!
        </PText>
      </GridContainer>
    </ContactContainer>
  );
};

export default Contact;
