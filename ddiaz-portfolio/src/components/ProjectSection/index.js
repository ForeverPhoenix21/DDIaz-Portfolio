import React from "react";

import {
  ProjectContainer,
  GridContainer,
  ProjectPic,
  PText,
  H2Text,
  ProjectGrid,
  ProjectHeader,
} from "./ProjectSection.styles";

import BusPic from "../../images/busTrackerPic.png";
import BankAppPic from "../../images/BankAppPic.png";
import PacMenPic from "../../images/pacMen.png";

const ProjectSection = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>Projects</ProjectHeader>
      <ProjectGrid>
        <GridContainer>
          <H2Text>3-Tier Bank App</H2Text>
          <ProjectPic src={BankAppPic} />
          <PText>
            The Real-Time-Bus-Tracking program is a project that uses the MTBA
            API, and Mapbox which actively tracks the busses on routes 1 and 7
            in Massachusetts, United States.
          </PText>
        </GridContainer>
        <GridContainer>
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
        </GridContainer>
        <GridContainer>
          <H2Text>PacMen</H2Text>
          <ProjectPic
            src={PacMenPic}
            alt=" Screenshot picture of The PacMen App "
          />
          <PText>
            The PacMen-Exercise creates Pacmen on the screen done through a
            function coded in JavaScript. The Pacmen can be set in motion by
            clicking the start button.
          </PText>
        </GridContainer>
        <GridContainer>
          <H2Text>4</H2Text>
        </GridContainer>
        <GridContainer>
          <H2Text>5</H2Text>
        </GridContainer>
        <GridContainer>
          <H2Text>6</H2Text>
        </GridContainer>
      </ProjectGrid>
    </ProjectContainer>
  );
};

export default ProjectSection;
