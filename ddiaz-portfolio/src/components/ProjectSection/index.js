import React from "react";

import {
  ProjectSectionContainer,
  PSectionText,
  LongTileContainerLeft,
  ShortTileContainerRight,
  ShortTileTextContainer,
  LongTileTextContainer,
  LongTileContainerRight,
  ShortTileContainerLeft,
  ShortTileImgContainer,
  SmallTilePic,
} from "./ProjectSection.styles";

import Project2Pic from "../../images/busTrackerPic.png";

const ProjectSection = () => {
  return (
    <ProjectSectionContainer>
      <PSectionText>This is the Section Container</PSectionText>
      <LongTileContainerLeft>
        <LongTileTextContainer></LongTileTextContainer>
      </LongTileContainerLeft>
      <ShortTileContainerRight>
        <ShortTileTextContainer>
          <h2>Project 2 </h2>
          <br></br>
          <PSectionText>
            The Real-Time-Bus-Tracking program is a project that uses the MTBA
            API, and Mapbox which actively tracks the busses on routes 1 and 7
            in Massachusetts, United States. 
          </PSectionText>
        </ShortTileTextContainer>
        <ShortTileImgContainer>
          <SmallTilePic src={Project2Pic} alt="Picture of Bus Tracking app" />
        </ShortTileImgContainer>
      </ShortTileContainerRight>
      <LongTileContainerRight>
        <LongTileTextContainer></LongTileTextContainer>
      </LongTileContainerRight>
      <ShortTileContainerLeft>
        <ShortTileTextContainer>
          <h2>Project 3</h2>
          <br></br>
          <PSectionText>Does this work. How far will this text  go</PSectionText>
        </ShortTileTextContainer>
        <ShortTileImgContainer>
          <SmallTilePic src={Project2Pic} alt="Picture of Bus Tracking app" />
        </ShortTileImgContainer>
      </ShortTileContainerLeft>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
