import styled from "styled-components";


export const PText = styled.p`
margin: auto 10px;
line-height: 1.5rem;
`


export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: minmax(400px, auto);
  /* grid-auto-flow: dense; */
  margin: 10%;
  grid-gap: 8%;
  min-width: 350px;

  border: 1px red dotted;

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

export const Container1 = styled.div`
  border: 1px red dotted;
  background-color: skyblue;
  text-align: center;
`;

export const Container2 = styled.div`
  border: 1px red dotted;
  background-color: skyblue;
  text-align: center;
`;

export const Container3 = styled.div`
  border: 1px red dotted;
  background-color: skyblue;
  text-align: center;
`;

export const Container4 = styled.div`
  border: 1px red dotted;
  background-color: skyblue;
  text-align: center;
`;
export const Container5 = styled.div`
  border: 1px red dotted;
  background-color: skyblue;
  text-align: center;
`;

export const Container6 = styled.div`
  border: 1px red dotted;
  background-color: skyblue;
  text-align: center;
`;


export const ProjectPic = styled.img`
width: 350px;
max-height: 200px;
margin: 2% auto ;
`