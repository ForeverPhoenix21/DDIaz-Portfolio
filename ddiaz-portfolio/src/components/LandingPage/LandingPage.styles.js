import styled from "styled-components";

export const LandingH1 = styled.h1`
  /* color: whitesmoke; */
  background: none;
`;

export const LandingText = styled.p`
  /* color: whitesmoke; */
  background: none;
`;

export const TextContainer = styled.div`
margin: 10% 20%;

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
  /* align-self: center; */
  /* justify-self: center; */
`;

// The Right Landing Page container

export const AsideRight = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 10%;
  max-width: 600px;
  max-height: 900px;
  /* width: 100%;
  height: 100%; */
  text-align: center;
`;

export const ProfilePic = styled.img`
  /* border: 1px dotted blue; */
  height: 100%;
  width: 100%;
  /* max-width: 450px;
  max-height: 450px; */
  align-self: center;
  border-radius: 50%;
`;
