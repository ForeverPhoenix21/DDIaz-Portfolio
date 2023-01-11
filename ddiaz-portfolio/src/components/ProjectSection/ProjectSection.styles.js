import styled from "styled-components";

export const PSectionH2 = styled.h2`
color: white;
`


export const PSectionText = styled.p`
color:white;
`;


export const ProjectSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(32, 50px);
  background-color: black;
`;

// The start of the Long Tile Container styles
export const LongTileContainerLeft = styled.div`
  border: 1px red dotted;
  grid-column: 1 / 2;
  grid-row: 2 / 20;
  height: auto;
  width: auto;
  margin-left: 20px;
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
  grid-row: 11 / 29;
  height: auto;
  width: auto;
  margin-right: 20px;
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
  grid-row: 2 / 11;
  height: auto;
  width: auto;
  margin-right: 20px;
  background-color: lightblue;

  display: grid;
  grid-template-columns: 1fr 50%;
  grid-template-rows: 1fr;

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
  grid-row: 20 / 29;
  height: auto;
  width: auto;
  /* max-width: 500px; */
  margin-left: 20px;
  background-color: lightblue;

  display: grid;
  grid-template-columns: 1fr 50%;
  grid-template-rows: 1fr;

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
  grid-column: 2;
  grid-row: 1;
  text-align: center;
  align-self: center; 
  /* The Styling Below is for the Text inside the container */
  grid-column: 1;
  height: auto;
  width: auto;
  line-height: 1.5rem;
  margin:10px;
  border: 1px purple solid;
`;

export const ShortTileImgContainer = styled.div`
grid-column: 2;
grid-row: 1;

/* width: auto; */
align-self: center;
margin:10px;
/* border: 1px red solid; */
`
// Image Styling

export const LargeTilePic = styled.img`
/* height: 100%; */
width: 100%;
`

export const SmallTilePic = styled.img`
height: 300px;
width: 100%;
max-width: fit-content;
border-radius: 10%;
`