import React from "react";

import {
  ProjectContainer,
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  ProjectPic,
  PText,
} from "./ProjectSection.styles";

import BusPic from "../../images/busTrackerPic.png";
import BankAppPic from "../../images/BankAppPic.png";

const ProjectSection = () => {
  return (
    <ProjectContainer>
      <Container1>
        <h2>3-Tier Bank App</h2>
        <ProjectPic src={BankAppPic} />
        <PText>
          The Real-Time-Bus-Tracking program is a project that uses the MTBA
          API, and Mapbox which actively tracks the busses on routes 1 and 7 in
          Massachusetts, United States.
        </PText>
      </Container1>
      <Container2>
        <h2>MTA Bus Tracker</h2>
        <ProjectPic
          src={BusPic}
          alt=" Screenshot picture of The Bus Tracker App "
        />
        <PText>
          The Real-Time-Bus-Tracking program is a project that uses the MTBA
          API, and Mapbox which actively tracks the busses on routes 1 and 7 in
          Massachusetts, United States.
        </PText>
      </Container2>
      <Container3>
        <h2>3</h2>
      </Container3>
      <Container4>
        <h2>4</h2>
      </Container4>
      <Container5>
        <h2>5</h2>
      </Container5>
      <Container6>
        <h2>6</h2>
      </Container6>
    </ProjectContainer>
  );
};

export default ProjectSection;
