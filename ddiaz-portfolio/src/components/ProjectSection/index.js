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
  H2Text,
  ProjectGrid,
  ProjectHeader,
} from "./ProjectSection.styles";

import BusPic from "../../images/busTrackerPic.png";
import BankAppPic from "../../images/BankAppPic.png";

const ProjectSection = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>Projects</ProjectHeader>
      <ProjectGrid>
        <Container1>
          <H2Text>3-Tier Bank App</H2Text>
          <ProjectPic src={BankAppPic} />
          <PText>
            The Real-Time-Bus-Tracking program is a project that uses the MTBA
            API, and Mapbox which actively tracks the busses on routes 1 and 7
            in Massachusetts, United States.
          </PText>
        </Container1>
        <Container2>
          <H2Text>MTA Bus Tracker</H2Text>
          <ProjectPic
            src={BusPic}
            alt=" Screenshot picture of The Bus Tracker App "
          />
          <PText>
            The Real-Time-Bus-Tracking program is a project that uses the MTBA
            API, and Mapbox which actively tracks the busses on routes 1 and 7
            in Massachusetts, United States.
          </PText>
        </Container2>
        <Container3>
          <H2Text>3</H2Text>
        </Container3>
        <Container4>
          <H2Text>4</H2Text>
        </Container4>
        <Container5>
          <H2Text>5</H2Text>
        </Container5>
        <Container6>
          <H2Text>6</H2Text>
        </Container6>
      </ProjectGrid>
    </ProjectContainer>
  );
};

export default ProjectSection;
