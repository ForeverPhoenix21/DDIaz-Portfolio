import styled from "styled-components";

export const LandingH1 = styled.h1`
  /* color: whitesmoke; */
  background: none;
`;

export const LandingText = styled.p`
  /* color: whitesmoke; */
  background: none;
`;

export const LandingContainer = styled.div`
  margin-top: 10px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 2fr;
  grid-template-rows: 50% 1fr;
`;

// Video Container Styling
export const ContainerBG = styled.div`

`;

export const VideoBg = styled.video`
grid-column:1 / span 2 ;
grid-row: 1/ span 2;
  width: 100%;
  height: 100%;
  /* position: fixed; */
  z-index: -1;
  /* -o-object-fit: cover;
  object-fit: cover; */

  opacity: 0.2;
`;

// The left Landing page container
export const AsideLeft = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

// The Right Landing Page container

export const AsideRight = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 10%;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const ProfilePic = styled.img`
  /* border: 1px dotted blue; */
  height: 100%;
  width: 100%;
  max-width: fit-content;
  align-self: center;
  border-radius: 50%;
`;
