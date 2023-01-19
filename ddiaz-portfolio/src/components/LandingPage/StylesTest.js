import styled from "styled-components";

export const LandingH1 = styled.h1`
  /* color: whitesmoke; */
  background: none;
`;

export const LandingText = styled.p`
  /* color: whitesmoke; */
  background: none;
`;

export const ContainerBG = styled.div`
  /* grid-row: 1/fit;
  grid-column: 1/fit;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #041927;
  /* opacity: 0.99; */
  background-color: rgba(4, 25, 39, 0.6);
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #041927;

  opacity: 0.6; */
`;

export const LandingContainer = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 100px);
  height: auto;
  margin: auto auto 20px;
  column-gap: 2%;

  /* background-color:#11aac13e; */

  @media screen and (max-width: 960px) {
    height: 400px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    height: 400px;

    transition: 0.8s all ease;
  }

  @media screen and (max-width: 600px) {
    height: auto;
    display: block;
    /* margin: auto auto 20px; */
    transition: 0.8s all ease;
  }
`;

// The left Landing page container
export const AsideLeft = styled.div`
  /* border: 1px dotted red; */
  grid-column: 2;
  grid-row: 2 /4;
  justify-self: center;
  height: 400px;
  max-width: 450px;
  min-width: 450px;
  text-align: center;
  transition-duration: 1s;
  background: none;
  /* background-color: white; */

  @media screen and (max-width: 960px) {
    width: 100%;
    min-width: 350px;
    height: 350px;
    align-self: center;
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
  }
`;

// The Right Landing Page container

export const AsideRight = styled.div`
  /* border: 1px solid red; */
  grid-column: 3;
  grid-row: 2 /4;
  justify-self: center;
  height: 400px;
  max-width: 400px;
  min-width: 400px;
  text-align: center;
  transition-duration: 1s;
  background: none;
  /* background-color: white; */
  /* margin-left: 5%; */

  @media screen and (max-width: 960px) {
    width: auto;
    min-width: 350px;
    height: 350px;
    align-self: center;
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
    width: 250px;
    height: 250px;
    margin: auto;
    transition: 0.8s all ease;
    margin-bottom: 2%;
  }
`;

export const ProfilePic = styled.img`
  /* border: 1px dotted blue; */
  width: 100%;
  height: 100%;
  align-self: center;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
    /* transition: 0.8s all ease; */
  }
`;
