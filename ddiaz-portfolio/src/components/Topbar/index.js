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
          <TopbarLink to="about" onClick={toggle}>
            About
          </TopbarLink>
          <TopbarLink to="projects" onClick={toggle}>
            Projects
          </TopbarLink>
          <TopbarLink to="contact" onClick={toggle}>
            Contact
          </TopbarLink>
        </TopbarMenu>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
