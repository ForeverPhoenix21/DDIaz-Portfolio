import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  height: 600px;
  width: auto;
  z-index: 1;
  position: relative;
`;

export const ContainerBG = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.9);
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

  opacity: 0.09;
`;

export const TextContainer = styled.div`
  z-index: 2;
  position: absolute;
  width: auto;
  color: whitesmoke;
  max-width: 850px;
  margin: auto 10%;
  /* margin-left: 10%; */
  padding-top: 20px;
  border: 1px red dotted;
`;

export const H2Text = styled.h2`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3.75rem;
  line-height: 90px;
  font-weight: 100;
  padding-bottom: 1rem;
  transition: 0.8ms all ease;
  /* margin: 5%; */

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
  font-size: 16px;
  line-height: 28px;
`;
