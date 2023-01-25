import React from "react";

import {
  Button,
  ProjectContainer,
  GridContainer,
  ProjectPic,
  PText,
  H2Text,
  ProjectGrid,
  ProjectHeader,
  HeaderText,
} from "./ProjectSection.styles";

import BusPic from "../../images/busTrackerPic.png";
import BankAppPic from "../../images/BankAppPic.png";
import PacMenPic from "../../images/pacMen.png";
import CommingSoonPic from "../../images/coming-soon.png";

const ProjectSection = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectHeader>Projects</ProjectHeader>
      <HeaderText>
        The Projects listed below are a few examples of my personal work and
        others that I've completed for MIT's professional course. To see my
        additonal projects, vist my Github Repo by clicking here.
      </HeaderText>
      <ProjectGrid>
        <GridContainer>
          <H2Text>3-Tier Bank App</H2Text>
          <ProjectPic src={BankAppPic} />
          <Button>DEMO</Button>
          <Button>Github</Button>
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
          <a
            href="https://foreverphoenix21.github.io/Real-Time-Bus-Tracking/"
            target="_blank"
            rel="noreferrer"
          eac>
            <Button>LIVE</Button>
          </a>
          <a
            href="https://github.com/ForeverPhoenix21/Real-Time-Bus-Tracking"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Github</Button>
          </a>
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
          <Button>LIVE</Button>
          <Button>Github</Button>
          <PText>
            The PacMen-Exercise creates Pacmen on the screen done through a
            function coded in JavaScript. The Pacmen can be set in motion by
            clicking the start Button.
          </PText>
        </GridContainer>
        <GridContainer>
          <H2Text>Other Projects</H2Text>
          <ProjectPic
            src={CommingSoonPic}
            alt=" Screenshot picture of The PacMen App "
          />
          <Button>Github</Button>
          <PText>
            Click below to see my other projects and live demos in my Repository
            on Github. Adding more text to see if the sizing
          </PText>
        </GridContainer>
        {/* <GridContainer>
          <H2Text>5</H2Text>
        </GridContainer>
        <GridContainer>
          <H2Text>6</H2Text>
        </GridContainer> */}
      </ProjectGrid>
    </ProjectContainer>
  );
};

export default ProjectSection;
