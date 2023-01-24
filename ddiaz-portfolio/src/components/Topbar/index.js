import React from "react";
import {
  TopbarContainer,
  TopbarIcon,
  CloseIcon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
} from "./Topbar.styles";
const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <TopbarIcon onClick={toggle}>
        <CloseIcon />
      </TopbarIcon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            About
          </TopbarLink>
          <TopbarLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Projects
          </TopbarLink>
          <TopbarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Contact
          </TopbarLink>
        </TopbarMenu>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
