import styled from "styled-components";

export const LandingH1 = styled.h1``;

export const LandingText = styled.p``;

export const LandingContainer = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
  height: 800px;
  background-color: red;
`;

// The left Landing page container
export const AsideLeft = styled.div`
  border: 1px dotted red;
  grid-column: 2/ 6;
  grid-row: 3 /9;
  /* height: 400px; */
  width: 90%;
  text-align: center;
  background-color: white;
`;

// The Right Landing Page container

export const AsideRight = styled.div`
  border: 1px solid red;
  grid-column: 6 /10;
  grid-row: 3 /9;
  /* height: 400px; */
  margin-left: 10%;
  text-align: center;
  background-color: white;
`;
