import styled from "styled-components";

export const ContactContainer = styled.div``;

export const BGImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  -o-object-fit: cover;
  object-fit: cover;
  min-height: 800px;
  max-height: 800px;
  opacity: .6;
  animation: fade 6s;

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.6;
    }
  }
`;

export const GridContainer = styled.div`
  /* display: box; */
  margin: 0% 10%;
  min-height: 800px;
  max-width: 40%;
  border: 1px red dotted;
`;

export const H1Text = styled.h1`
  /* color: white; */
  /* margin: 5% 10%; */
  font-size: 50px;
  line-height: 1.3;
  position: relative;
  animation: slide-in-top, fade-in;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  text-align: center;
  margin: 5%;

  @keyframes slide-in-top {
    0% {
      top: -50px;
    }
    100% {
      top: 150px;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const PText = styled.p`
  padding-top: 250px;
  text-align: center;
  position: relative;
  animation-name: slide-in-left, fade-in;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  @keyframes slide-in-left {
    0% {
      left: -200px;
    }
    100% {
      left: 0px;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
