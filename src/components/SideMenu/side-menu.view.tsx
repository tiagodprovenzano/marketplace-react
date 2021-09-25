import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import SideMenuWrapper from "./side-menu.styled";
const  SideMenuView = () => {
  return (
    <SideMenuWrapper>
      <div>SIDE MENUUUU</div>
      <Link to='/content'>
        Content
      </Link>
    </SideMenuWrapper>
  );
};

export default SideMenuView