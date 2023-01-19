import styled from "styled-components";

export const LandingH1 = styled.h1`
  /* color: whitesmoke; */
  background: none;
  text-align: center;
  /* padding-left: 20%; */
`;

export const LandingText = styled.p`
  /* color: whitesmoke; */
  background: none;
  text-align: center;
  /* padding-left: 20%; */

`;

export const TextContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  line-height: 2rem;
  /* text-align: center; */
`;

export const LandingContainer = styled.div`
  margin-top: 10px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 2fr;
  grid-template-rows: 50% 1fr;
  max-height: 600px;
`;



// Video Container Styling
export const ContainerBG = styled.div``;

export const VideoBg = styled.video`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  width: 100%;
  height: 100%;
  z-index: -1;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.2;
`;

// The left Landing page container
export const AsideLeft = styled.div`
  grid-column: 1;
  grid-row: 1;
  /* text-align: center; */
  margin-left: 20%;
  padding-right: 5%;
`;

// The Right Landing Page container

export const AsideRight = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 5%;
  align-self: center;
  justify-self: start;
  max-width: 600px;
  max-height: 900px;
`;

export const ProfilePic = styled.img`
  /* border: 1px dotted blue; */
  height: auto;
  width: 100%;
  align-self: center;
  border-radius: 50%;
`;
