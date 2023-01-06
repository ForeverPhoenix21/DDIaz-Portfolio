import styled from "styled-components";

export const LandingH1 = styled.h1``;

export const LandingText = styled.p``;

export const LandingContainer = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(10,10%);
  grid-template-rows: repeat(10, 10%);
  height: 800px;
`;

// The left Landing page container
export const AsideLeft = styled.div`
  
  border: 1px dotted red;
  grid-column: 3/ 6;
  height: 400px;
  text-align: center;
`;

// The Right Landing Page container

export const AsideRight = styled.div`
  border: 1px solid red;
  grid-column: 6 /9;
  height: 400px;
  text-align: center;
`;
