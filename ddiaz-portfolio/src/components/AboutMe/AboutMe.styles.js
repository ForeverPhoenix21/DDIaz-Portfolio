import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  max-height: 800px;

  width: auto;
  z-index: 1;
  padding-top: 5%;
  padding-bottom: 5%;
  /* position: relative; */
`;

export const GridContainer = styled.div``;

export const TextContainer = styled.div`
  z-index: 4;
  position: flex;
  width: auto;
  /* max-width: 80%; */
  margin-left: 10%;
  margin-right: 10%;
`;

export const H2Text = styled.h2`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3.75rem;
  line-height: 90px;
  font-weight: 100;
  padding-bottom: 1rem;
  transition: 0.8ms all ease;

  @media screen and (min-width: 1440px) {
    height: auto;
    font-size: 4.5rem;
    line-height: 90px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 1280px) {
    /* height: 80px; */
    font-size: 3.75rem;
    line-height: 90px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 991px) {
    height: auto;
    font-size: 3rem;
    line-height: 75px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 767px) {
    height: auto;
    font-size: 2rem;
    line-height: 47px;
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 479px) {
    height: auto;
    font-size: 1.5rem;
    line-height: 1.5;
    transition: 0.8s all ease;
  }
`;

export const AboutMeText = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  line-height: 28px;
  padding-bottom: 1rem;
  /* background-color: rgba(4, 25, 39, 0.05); */
`;
