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
} from "./ProjectSection.styles";

const ProjectSection = () => {
  return (
    <ProjectSectionContainer>
      <PSectionText>This is the Section Container</PSectionText>
      <LongTileContainerLeft>
        <LongTileTextContainer></LongTileTextContainer>
      </LongTileContainerLeft>
      <ShortTileContainerRight>
        <ShortTileTextContainer></ShortTileTextContainer>
      </ShortTileContainerRight>
      <LongTileContainerRight>
        <LongTileTextContainer></LongTileTextContainer>
      </LongTileContainerRight>
      <ShortTileContainerLeft>
        <ShortTileTextContainer></ShortTileTextContainer>
      </ShortTileContainerLeft>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
