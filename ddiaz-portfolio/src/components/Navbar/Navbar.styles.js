import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: black;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  /* opacity: .9; */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-between;
  /* height: 80px; */
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled(LinkS)`
background-color: black;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-self: flex-start;
  align-items: center;

  margin-left: 10%;
  font-weight: bold;
  text-decoration: none;

  /* @media screen and (max-width: 480px) {
    margin: 20%;
    transition: 1s all ease;

  } */
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    margin-right: 10%;
    right: 0;
    transform: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  background-color: black;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-right: 5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
background-color: black;
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
background-color: black;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-right: 50px;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
