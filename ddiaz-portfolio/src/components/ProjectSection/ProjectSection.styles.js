import styled from "styled-components";

export const ProjectHeader = styled.h1`
  /* color: whitesmoke; */
  font-size: 2rem;
  display: flex;
  margin-left: 10%;
  /* margin-top: 10%; */
  @media screen and (max-width: 480px) {
    margin: 10%;
    transition: 1s all ease;
  }
`;

export const HeaderText = styled.p`
  /* color: whitesmoke; */
  font-size: 1rem;
  display: flex;
  margin:5% 10%;
  max-width: 850px;
  line-height: 1.5rem;
  @media screen and (max-width: 480px) {
    margin: 10%;
    transition: 1s all ease;
  }
`;
export const PText = styled.p`
  margin: auto 10px;
  line-height: 1.5rem;
  color: whitesmoke;
`;

export const H2Text = styled.h2`
  color: whitesmoke;
  margin: 20px;
`;

export const ProjectContainer = styled.div`
  /* background-color: #041927; */
  padding-top: 5%;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: minmax(400px, auto);
  /* grid-auto-flow: dense; */
  margin: 5% 10% 10%;
  grid-gap: 8%;
  min-width: 350px;
  border: 1px red dotted;
  /* background-color: #041927; */

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: auto;
    grid-gap: 1%;
    transition: 1s all ease;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    transition: 1s all ease;
    /* grid-gap: 2%; */
  }
  @media screen and (max-width: 975px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    transition: 1s all ease;
    /* grid-gap: 2%; */
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 2%;
    max-width: 100%;
    /* margin: 10%; */
    transition: 1s all ease;
  }
`;

export const GridContainer = styled.div`
  border: 1px red dotted;
  background-color: #041927;
  text-align: center;
  /* height: 100%; */
  /* margin: 5%; */
`;

export const ProjectPic = styled.img`
  width: 350px;
  max-height: 200px;
  margin: 10px auto;
`;
