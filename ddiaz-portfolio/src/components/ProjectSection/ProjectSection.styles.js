import styled from "styled-components";

export const ProjectSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(32, 50px);
`;

export const PSectionText = styled.p``;



// The start of the Long Tile Container styles
export const LongTileContainerLeft = styled.div`
  border: 1px red dotted;
  grid-column: 1 / 2;
  grid-row: 2 / 22;
  height: auto;
  width: auto;
  margin-left: 50px;
  background-color: lightblue;

  /* @media screen and (max-width: 960px) {
    width: 100%;
    max-width: 340px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 270px;
    min-width: 270px;
    align-self: center;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 250px;
    margin: 2% auto;
    transition: 0.8s all ease;
  } */
`;

export const LongTileContainerRight = styled.div`
  border: 1px red dotted;
  grid-column: 2 / 3;
  grid-row: 12 / 32;
  height: auto;
  width: auto;
  margin-right: 50px;
  background-color: lightblue;
  /* 
@media screen and (max-width: 960px) {
    width: auto;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 600px) {
    width: auto;
    transition: 0.8s all ease;
  } */
`;

// Start of the Short Tile Containers styles

export const ShortTileContainerRight = styled.div`
  border: 1px red dotted;
  grid-column: 2 / 3;
  grid-row: 2 / 12;
  height: auto;
  width: auto;
  /* max-width: 500px; */
  margin-right: 50px;
  background-color: lightblue;

  /* @media screen and (max-width: 960px) {
    width: 100%;
    height: 500px;
    max-width: 340px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 270px;
    min-width: 270px;
    align-self: center;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 250px;
    margin: 2% auto;
    transition: 0.8s all ease;
  } */
`;

export const ShortTileContainerLeft = styled.div`
  border: 1px red dotted;
  grid-column: 1 / 2;
  grid-row: 22 / 32;
  height: auto;
  width: auto;
  /* max-width: 500px; */
  margin-left: 50px;
  background-color: lightblue;

  /* @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 600px) {
    width: auto;
    transition: 0.8s all ease;
  } */
`;

// Start of the Tile Text Container styles

export const LongTileTextContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 50px;
border: 1px purple solid;

`;

export const ShortTileTextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
border: 1px purple solid;
`;
