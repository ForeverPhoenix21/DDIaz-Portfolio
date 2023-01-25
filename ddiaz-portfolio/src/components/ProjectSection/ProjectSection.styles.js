import styled from "styled-components";

export const ProjectHeader = styled.h1`
  /* color: whitesmoke; */
  font-size: 2rem;
  display: flex;
  margin-left: 10%;
  margin-top: 5%;
  @media screen and (max-width: 480px) {
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
  margin-bottom: 5%;
  
  /* color: whitesmoke; */
`;

export const H2Text = styled.h2`
  /* color: whitesmoke; */
  margin: 20px;
`;

export const ProjectContainer = styled.div`
  /* padding: 5%; */
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(400px, auto);
  margin: 5% 8.5%;
  min-width: 350px;
  border: 1px red dotted;
  @media screen and (max-width: 480px) {
    margin: auto;
    transition: 1s all ease;
  }
`;

export const GridContainer = styled.div`
  /* border: 1px red dotted; */
  margin: 5%;
  text-align: center;
  border-radius: 5%;
  box-shadow: 0.2em 0 1em rgba(4, 25, 39, 0.9);
`;

export const ProjectPic = styled.img`
  width: 350px;
  max-width: 100%;
  max-height: 200px;
  min-height: 200px;
  margin: 10px auto;
  border-radius: 5%;
  box-shadow: 0.5em 0 1em rgba(4, 25, 39, 0.5);
`;

export const Button = styled.button`
  margin: 5%;
  display: inline-block;
  padding: 10px 25px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;//Font Color
  background-color: #4caf50;//Green
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #999;

  :hover {
    background-color: red;
  }

  :active {
    background-color: #3e8e41;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }
`;
