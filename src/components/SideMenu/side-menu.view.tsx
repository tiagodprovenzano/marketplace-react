import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import SideMenuWrapper from "./side-menu.styled";

type Props = {
  onLogout: () => void;
};

const SideMenuView: React.FC<Props> = (props) => (
  <SideMenuWrapper>
    <div className={'side-menu-links'}>
      <Link to="/stores">Stores</Link>
      <Link to="/content">Content</Link>
    </div>
    <Button label={"Logout"} onClick={props.onLogout} />
  </SideMenuWrapper>
);

export default SideMenuView;
