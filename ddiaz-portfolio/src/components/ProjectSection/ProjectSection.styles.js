import styled from "styled-components";

export const ProjectHeader = styled.h1`
  /* color: whitesmoke; */
  font-size: 2rem;
  display: flex;
  margin-left: 10%;
  margin-top: 5%;
  @media screen and (max-width: 480px) {
    /* margin: 5% 10%; */
    transition: 1s all ease;
  }
`;

export const HeaderText = styled.p`
  /* color: whitesmoke; */
  font-size: 1rem;
  display: flex;
  margin: 5% 10%;
  max-width: 850px;
  line-height: 1.5rem;
`;
export const PText = styled.p`
  margin: auto 10px;
  line-height: 1.5rem;
  /* color: whitesmoke; */
`;

export const H2Text = styled.h2`
  /* color: whitesmoke; */
  margin: 20px;
`;

export const ProjectContainer = styled.div`
padding-bottom: 5%;
  /* padding: 5%; */
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(400px, auto);
  /* grid-auto-flow: dense; */
  /* margin: 5% 10% 10%; */
  /* grid-gap: 8%; */
  min-width: 350px;
  border: 1px red dotted;
`;

export const GridContainer = styled.div`
  /* border: 1px red dotted; */
  margin: 5%;
  text-align: center;
  /* background-color: rgba(4, 25, 39); */
  box-shadow: 0.2em 0 1em rgba(4, 25, 39, 0.9);
`;

export const ProjectPic = styled.img`
  width: 350px;
  max-width: 100%;
  max-height: 200px;
  margin: 10px auto;
  box-shadow: 0.5em 0 1em rgba(4, 25, 39, 0.5);
`;
